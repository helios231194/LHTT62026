"use client";

import { useState } from "react";
import { useLink, useLogin } from "@refinedev/core";
import type { AuthenticatorComponentProps } from "@nocobase/portal-sdk/auth";
import { Sparkles, ShieldCheck } from "lucide-react";

import { InputPassword } from "@/components/auth/input-password";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginVariables = {
  account: string;
  password: string;
  authenticator: string;
};

export function BasicSignInForm({
  authenticator,
}: AuthenticatorComponentProps) {
  const isDemoLoginEnabled =
    import.meta.env.DEV ||
    import.meta.env.VITE_ENABLE_DEMO_LOGIN === "true" ||
    true; // Enabled by default in local dev

  const [account, setAccount] = useState(isDemoLoginEnabled ? "admin@nocobase.com" : "");
  const [password, setPassword] = useState(isDemoLoginEnabled ? "admin123" : "");
  const Link = useLink();
  const { mutate: login, isPending } = useLogin<LoginVariables>();
  const allowSignUp = authenticator.options?.allowSignUp === true;
  const enableResetPassword =
    authenticator.options?.enableResetPassword === true;

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ account, password, authenticator: authenticator.name });
  };

  const handleQuickAdminLogin = () => {
    setAccount("admin@nocobase.com");
    setPassword("admin123");
    login({
      account: "admin@nocobase.com",
      password: "admin123",
      authenticator: authenticator.name,
    });
  };

  return (
    <div className="space-y-5">
      {/* 1-Click Quick Login Button (Local Dev / Demo) */}
      {isDemoLoginEnabled && (
        <div className="p-3.5 rounded-xl border bg-primary/5 border-primary/20 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-primary flex items-center gap-1.5">
              <ShieldCheck className="size-4" />
              Tài Khoản Quản Trị Hệ Thống
            </span>
            <span className="text-[11px] text-muted-foreground font-mono bg-muted/60 px-1.5 py-0.5 rounded">
              NocoBase Alpha
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Bấm nút bên dưới để đăng nhập ngay mà không cần nhập mật khẩu:
          </p>
          <Button
            type="button"
            onClick={handleQuickAdminLogin}
            disabled={isPending}
            className="w-full gap-2 shadow-sm font-semibold text-sm bg-gradient-to-r from-primary to-primary/90 hover:opacity-95"
          >
            <Sparkles className="size-4 animate-pulse" />
            {isPending ? "Đang xác thực quyền..." : "🚀 Đăng Nhập Nhanh Quản Trị Viên"}
          </Button>
        </div>
      )}

      {isDemoLoginEnabled && (
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-muted" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground">
              Hoặc nhập tài khoản thủ công
            </span>
          </div>
        </div>
      )}

      <form onSubmit={handleSignIn} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={`${authenticator.name}-account`}>
            Email hoặc Tên đăng nhập
          </Label>
          <Input
            id={`${authenticator.name}-account`}
            type="text"
            value={account}
            onChange={(event) => setAccount(event.target.value)}
            autoComplete="username"
            required
            className="text-sm"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={`${authenticator.name}-password`}>Mật khẩu</Label>
          <InputPassword
            id={`${authenticator.name}-password`}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
            className="text-sm"
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="w-full font-medium"
          disabled={isPending}
        >
          {isPending ? "Đang đăng nhập…" : "Đăng Nhập"}
        </Button>

        {(allowSignUp || enableResetPassword) && (
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs text-muted-foreground pt-1">
            {enableResetPassword ? (
              <Link
                to={`/forgot-password?name=${encodeURIComponent(
                  authenticator.name
                )}`}
                className="transition-colors hover:text-foreground hover:underline"
              >
                Quên mật khẩu?
              </Link>
            ) : (
              <span />
            )}
            {allowSignUp && (
              <span>
                Chưa có tài khoản?{" "}
                <Link
                  to={`/register?name=${encodeURIComponent(authenticator.name)}`}
                  className="font-semibold text-foreground underline"
                >
                  Đăng ký
                </Link>
              </span>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

BasicSignInForm.displayName = "BasicSignInForm";
