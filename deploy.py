#!/usr/bin/env python3
"""Deploy LHT website to VPS: build → tar → rsync → restart."""

import subprocess, os, sys, time

VPS_HOST = "180.93.137.62"
VPS_USER = "root"
VPS_PASS = "RCw*v4Ub-4KB6?#t"
VPS_PATH = "/var/www/lht-website"
BUILD_DIR = ".next"
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
ASKPASS = "/Users/thuongvanhoai/.gemini/antigravity/brain/bf65f457-36d1-4d30-92ca-5568fd4d76fa/scratch/askpass.sh"

# SSH/SCP env with password
ssh_env = {
    **os.environ,
    "SSH_ASKPASS": ASKPASS,
    "SSH_ASKPASS_REQUIRE": "force",
    "DISPLAY": "fake",
}

SSH_OPTS = ["-o", "StrictHostKeyChecking=no",
            "-o", "PubkeyAuthentication=no",
            "-o", "PreferredAuthentications=password",
            "-o", "IdentitiesOnly=yes",
            "-o", "ConnectTimeout=30"]

def run(cmd, cwd=None, env=None):
    print(f"  $ {' '.join(cmd)}")
    r = subprocess.run(cmd, cwd=cwd or PROJECT_DIR, capture_output=True, text=True, env=env)
    if r.stdout.strip(): print("   ", r.stdout.strip()[:200])
    if r.stderr.strip(): print("   STDERR:", r.stderr.strip()[:200])
    if r.returncode != 0:
        print(f"  FAILED (exit {r.returncode})")
        sys.exit(1)
    return r

def ssh(cmd_str):
    return run(["ssh"] + SSH_OPTS + [f"{VPS_USER}@{VPS_HOST}", cmd_str], env=ssh_env)

print("=" * 60)
print("  LHT Website Deploy")
print("=" * 60)

# Step 0: Pull latest configuration and uploads from VPS to remain in sync
print("\n[0/4] Pulling latest uploaded files and configs from VPS...")
try:
    run(["rsync", "-avz", "--delete", "-e", f"ssh {' '.join(SSH_OPTS)}", f"{VPS_USER}@{VPS_HOST}:{VPS_PATH}/src/data/", f"{PROJECT_DIR}/src/data/"], env=ssh_env)
    run(["rsync", "-avz", "-e", f"ssh {' '.join(SSH_OPTS)}", f"{VPS_USER}@{VPS_HOST}:{VPS_PATH}/public/uploads/", f"{PROJECT_DIR}/public/uploads/"], env=ssh_env)
except Exception as e:
    print(f"  Warning: Could not pull from VPS (it might be the first deploy): {e}")

# Step 1: Package .next and public
print("\n[1/4] Packaging build artifacts (using Python tarfile)...")
tar_path = "/tmp/lht-deploy.tar.gz"

import tarfile
def filter_cache(tarinfo):
    if ".next/cache" in tarinfo.name:
        return None
    return tarinfo

with tarfile.open(tar_path, "w:gz") as tar:
    for path in [".next", "public", "src/data", "package.json", "next.config.mjs"]:
        if os.path.exists(path):
            tar.add(path, filter=filter_cache)

print(f"  Package: {os.path.getsize(tar_path):,} bytes")

# Step 2: Upload to VPS
print("\n[2/4] Uploading to VPS...")
run(["scp"] + SSH_OPTS + [tar_path, f"{VPS_USER}@{VPS_HOST}:/tmp/lht-deploy.tar.gz"], env=ssh_env)

# Step 3: Extract and set up on VPS
print("\n[3/4] Extracting on VPS...")
ssh(f"""
  set -e
  mkdir -p {VPS_PATH}
  cd {VPS_PATH}
  rm -rf .next
  tar -xzf /tmp/lht-deploy.tar.gz
  npm install --production --silent 2>&1 | tail -3
  rm -f /tmp/lht-deploy.tar.gz
  echo 'Extraction done'
""")

# Step 4: Restart PM2
print("\n[4/4] Restarting PM2...")
ssh(f"""
  cd {VPS_PATH}
  pm2 describe lht-website > /dev/null 2>&1 && pm2 restart lht-website || pm2 start npm --name lht-website -- start
  pm2 save
  sleep 2
  pm2 show lht-website | grep -E 'status|restarts|uptime'
""")

print("\n" + "=" * 60)
print("  ✅ Deploy complete! Site: https://lht.agentic.io.vn")
print("=" * 60)
