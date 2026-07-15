'use client';
import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/ui/AnimationWrapper';
import { Button } from '@/components/ui/Button';
import { Star, X, Check, Clock, Coins, Sparkles, BookOpen, Users, Briefcase, FileText, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { createLead, resolveAttachmentUrl, type Profile } from '@/lib/nocobase';

const PLACEHOLDER = '/images/placeholder-800x800.svg';

interface LeaderConsultingProps {
  initialProfile?: Profile | null;
}

interface PackageSection {
  title: string;
  items: string[];
}

interface PackageDetail {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  duration: string;
  objective: string;
  sections: PackageSection[];
}

const packageDetails: Record<string, PackageDetail> = {
  'goi-ban-do': {
    id: 'goi-ban-do',
    name: 'BẢN ĐỒ QUYẾT ĐỊNH CHIẾN LƯỢC 2026',
    subtitle: 'Tài sản chiến lược cá nhân hóa 100+ trang chi tiết cho người đứng đầu',
    price: '3.800.000 VNĐ',
    duration: 'Bàn giao bản cứng & bản mềm PDF',
    objective: 'Giúp người đứng đầu hiểu rõ cấu trúc ra quyết định cá nhân, lập bản đồ dự báo chu kỳ chi tiết năm 2026 và phân bổ nguồn lực dựa trên 4 trụ cột chính.',
    sections: [
      {
        title: 'Tài sản nhận được',
        items: [
          'PDF cá nhân hóa 100+ trang luận giải chi tiết.',
          'Phân tích sâu 7 chỉ số vận mệnh của người đứng đầu.',
          'Bản đồ dự báo chu kỳ cá nhân chi tiết năm 2026.',
          'Lộ trình phân bổ nguồn lực dựa trên 4 trụ cột.'
        ]
      }
    ]
  },
  'goi-nen-tang': {
    id: 'goi-nen-tang',
    name: 'PHIÊN PHỎNG VẤN CHIẾN LƯỢC & GIẢI MÃ ĐIỂM MÙ ĐỘC BẢN',
    subtitle: 'Luận Giải Cấu Trúc Lãnh Đạo Cá Nhân và Định Vị Chu Kỳ 9 Năm',
    price: '6.800.000 VNĐ',
    duration: '90 phút làm việc 1:1 chuyên sâu',
    objective: 'Giúp người đứng đầu hiểu rõ cấu trúc ra quyết định cá nhân, tránh đầu tư, tuyển dụng hoặc mở rộng sai thời điểm trong năm mở chu kỳ mới.',
    sections: [
      {
        title: 'Phân tích 7 chỉ số chuyên sâu',
        items: [
          'Đường Đời (mô hình tư duy quyết định)',
          'Sứ Mệnh (trách nhiệm dài hạn)',
          'Động Lực (nguồn năng lượng hành động)',
          'Nhân Cách (cách thể hiện ra tổ chức)',
          'Thái Độ (cách phản ứng khi khủng hoảng)',
          'Trung Niên (bài học giai đoạn giữa sự nghiệp)',
          'Chu Kỳ 9 Năm cá nhân lãnh đạo'
        ]
      },
      {
        title: 'Phân tích Năm Cá Nhân 2026',
        items: [
          'Xác định bạn đang ở pha khởi tạo, tích lũy hay tái cấu trúc',
          'Phân tích mức độ rủi ro khi mở rộng',
          'Xác định phạm vi nên ủy quyền và phạm vi phải trực tiếp kiểm soát'
        ]
      },
      {
        title: 'Lộ trình 4 Trụ cột hành động',
        items: [
          'Sự nghiệp và đội ngũ',
          'Tài chính và đầu tư',
          'Quan hệ và đối tác',
          'Phát triển bản thân và năng lượng lãnh đạo'
        ]
      },
      {
        title: 'Phân tích hành vi lãnh đạo',
        items: [
          'Nhận diện xu hướng ra quyết định cảm tính, xu hướng ôm việc hoặc buông kiểm soát',
          'Nhận diện điểm dễ gây xung đột với cấp dưới'
        ]
      },
      {
        title: 'Kết quả buổi làm việc',
        items: [
          '3 mục tiêu trọng tâm 2026',
          '3 hành động 90 ngày',
          '1 giới hạn cần thiết lập ngay',
          'Cấu trúc ra quyết định mới'
        ]
      },
      {
        title: 'Tài liệu chiến lược nhận được',
        items: [
          'Hồ sơ PDF cá nhân 100+ trang',
          'Email tóm tắt tổng hợp chiến lược',
          'Checklist 12 tháng',
          'Bộ câu hỏi tự rà soát hàng tuần',
          'Mẫu template đánh giá quyết định lớn'
        ]
      },
      {
        title: 'Ứng dụng thực tế',
        items: [
          'Dùng làm tài liệu tham chiếu trong họp chiến lược, tuyển dụng cấp quản lý, đầu tư hoặc mở chi nhánh.'
        ]
      }
    ]
  },
  'goi-co-van': {
    id: 'goi-co-van',
    name: 'CHƯƠNG TRÌNH COACHING 90 NGÀY',
    subtitle: 'Đồng Hành Tái Cấu Trúc và Kiểm Soát Chiến Lược Trong 90 Ngày',
    price: '19.800.000 VNĐ',
    duration: '90 phút buổi chính + 3 phiên cố vấn chiến lược (30 phút mỗi buổi) trong 3 tuần kế tiếp',
    objective: 'Giúp CEO hiểu cấu trúc vận mệnh cá nhân với hệ thống hỗ trợ thực thi và bám sát tiến độ giúp điều hướng quỹ đạo cả năm.',
    sections: [
      {
        title: 'Bao gồm nền tảng',
        items: [
          'Toàn bộ quyền lợi Gói Nền Tảng 2026 (Luận giải 7 chỉ số, Định vị Năm cá nhân, Lộ trình 4 trụ cột hành động, 3 mục tiêu trọng tâm, 3 hành động cấp thiết trong 90 ngày).'
        ]
      },
      {
        title: 'Hệ thống cố vấn 4 tuần',
        items: [
          '1 buổi luận giải chính 90 phút + 3 phiên cố vấn check-in (30 phút mỗi buổi) trong 3 tuần kế tiếp để rà tiến độ thực tế, phân tích quyết định vừa đưa ra, đánh giá độ phù hợp với chu kỳ cá nhân, điều chỉnh hành động nếu lệch hướng.'
        ]
      },
      {
        title: 'Phân tích quyết định quan trọng',
        items: [
          'Trong 30 ngày đầu, CEO có thể tham vấn các tình huống thực tế dưới góc độ chu kỳ và cấu trúc lãnh đạo như: Tuyển hoặc thay quản lý các cấp, mở chi nhánh mới, đầu tư marketing, ký hợp đồng đối tác chiến lược.'
        ]
      },
      {
        title: 'Bản Đồ Hành Động 90 Ngày',
        items: [
          'Mẫu template chi tiết gồm: mục tiêu theo quý, phân bổ nguồn lực, người chịu trách nhiệm, chỉ số kiểm tra và thời điểm đánh giá lại.'
        ]
      },
      {
        title: 'Hệ thống kiểm soát cá nhân',
        items: [
          'Bộ công cụ gồm: Mẫu đánh giá quyết định lớn, Email "Hướng dẫn tự thực hiện trong 6 tháng", Checklist 12 tháng chi tiết, 5 câu hỏi tự rà soát lãnh đạo mỗi tuần.'
        ]
      },
      {
        title: 'Giảm rủi ro chiến lược',
        items: [
          'Phân tích hành vi lãnh đạo trong áp lực: xu hướng ôm việc, né xung đột, phân quyền sai, phản ứng cảm tính khi doanh số biến động.',
          'Giảm nguy cơ thay đổi hướng đi giữa năm do áp lực ngắn hạn; tránh mở rộng khi chưa đủ cấu trúc; tránh thu hẹp khi chưa đến chu kỳ.'
        ]
      },
      {
        title: 'Hỗ trợ trực tiếp',
        items: [
          'Hỗ trợ trực tuyến trong 30 ngày khi cần xác nhận trước quyết định quan trọng.'
        ]
      },
      {
        title: 'Tài liệu chiến lược nhận được',
        items: [
          'Hồ sơ PDF cá nhân 100+ trang, Email tóm tắt tổng hợp chiến lược, Mẫu template 90 ngày, Bộ công cụ giám sát, Báo cáo điều chỉnh sau mỗi phiên cố vấn.'
        ]
      }
    ]
  },
  'goi-doi-ngu-3': {
    id: 'goi-doi-ngu-3',
    name: 'BẢN ĐỒ ĐỘI NGŨ LÃNH ĐẠO & QUẢN LÝ CHỦ CHỐT',
    subtitle: 'Đồng bộ cấu trúc lãnh đạo nhóm cốt lõi trong năm mở chu kỳ mới (3 người)',
    price: '35.000.000 VNĐ',
    duration: '5 giờ workshop chuyên sâu',
    objective: 'Giúp 3 thành viên chủ chốt hiểu rõ vai trò thật sự của mình trong cấu trúc vận hành 2026, tránh trùng vai, thiếu vai hoặc xung đột quyền hạn.',
    sections: [
      {
        title: 'Đối tượng phù hợp',
        items: [
          'Founder + 2 quản lý chiến lược',
          '3 cổ đông điều hành',
          'Ban điều hành nhỏ đang mở rộng quy mô'
        ]
      },
      {
        title: 'Giai đoạn chuẩn bị (trước workshop 5-7 ngày)',
        items: [
          'Gửi Questionnaire chiến lược cho từng thành viên',
          'Thu thập thông tin vai trò hiện tại, trách nhiệm thực tế, thách thức đang gặp',
          'Phân tích hồ sơ 7 chỉ số từng thành viên trước buổi làm việc'
        ]
      },
      {
        title: 'Phân tích cá nhân chuyên sâu',
        items: [
          'Mỗi thành viên được luận giải riêng 30 phút gồm: Cấu trúc ra quyết định tự nhiên, điểm mạnh chiến lược nổi trội, xu hướng hành vi khi áp lực, điểm dễ gây xung đột với 2 thành viên còn lại, giới hạn cần thiết lập để tránh xung đột vai trò.'
        ]
      },
      {
        title: 'Phân tích Năm Cá Nhân 2026 từng thành viên',
        items: [
          'Xác định ai nên mở rộng vai trò, ai nên giữ vai trò kiểm soát, ai nên tập trung xây nền tảng hệ thống, ai nên hạn chế quyết định rủi ro cao.'
        ]
      },
      {
        title: 'Vẽ Bản Đồ Năng Lượng Đội Ngũ',
        items: [
          'Phân bổ 5 vai trò cốt lõi: chiến lược tăng trưởng, kiểm soát rủi ro, vận hành hệ thống, phát triển đội ngũ và quan hệ & đối tác.',
          'Phát hiện xung đột trong vai trò.'
        ]
      },
      {
        title: 'Phân tích quyền lực thực tế',
        items: [
          'So sánh giữa chức danh chính thức và ảnh hưởng thực tế; phát hiện quyền lực ngầm; xác định khu vực mâu thuẫn tiềm ẩn.'
        ]
      },
      {
        title: 'Kiến trúc lại cấu trúc ra quyết định',
        items: [
          'Xác định rõ ai có quyền quyết định cuối cùng trong từng nhóm vấn đề; Thiết lập giới hạn thẩm quyền; Rút ngắn vòng phê duyệt; Điều chỉnh vai trò nếu không phù hợp cấu trúc vận mệnh.'
        ]
      },
      {
        title: 'Thiết lập Thỏa Thuận Làm Việc Chung 2026',
        items: [
          'Văn bản thống nhất gồm: nguyên tắc họp chiến lược, nguyên tắc xử lý bất đồng, nguyên tắc truyền thông nội bộ và cơ chế đánh giá lẫn nhau.'
        ]
      },
      {
        title: 'Tài sản chiến lược nhận được',
        items: [
          'PDF cá nhân từng thành viên, Báo cáo tổng hợp chiến lược nhóm, Sơ đồ trách nhiệm đề xuất 2026, Email định hướng 90 ngày đầu, Mẫu template rà soát quyết định nhóm.'
        ]
      },
      {
        title: 'Ứng dụng thực tế',
        items: [
          'Dùng ngay trong họp điều hành, khi tuyển thêm quản lý, khi tái phân quyền.',
          'Giảm quyết định sai về nhân sự cấp cao, có thể tốn 200-500 triệu chi phí cơ hội.'
        ]
      }
    ]
  },
  'goi-doi-ngu-5': {
    id: 'goi-doi-ngu-5',
    name: 'BẢN ĐỒ ĐIỂM MÙ QUẢN TRỊ THEO THUẬT SỐ HỌC ỨNG DỤNG',
    subtitle: 'Kiến trúc lại cấu trúc quản trị và quyền hạn trong năm chuyển pha tổ chức (5 người)',
    price: '55.000.000 VNĐ',
    duration: '6-7 giờ chuyên sâu',
    objective: 'Giúp Ban điều hành 5 người tái định vị vai trò, làm rõ quyền hạn và trách nhiệm thực tế để tổ chức vận hành nhanh hơn, rõ hơn và giảm xung đột nội bộ.',
    sections: [
      {
        title: 'Đối tượng phù hợp',
        items: [
          'Doanh nghiệp đang mở rộng quy mô',
          'Có 5 thành viên quản lý cấp cao trực tiếp chịu trách nhiệm tăng trưởng - vận hành - tài chính - nhân sự - chiến lược.'
        ]
      },
      {
        title: 'Giai đoạn chuẩn bị (trước workshop 5-7 ngày)',
        items: [
          'Gửi bộ Questionnaire chiến lược cho từng thành viên',
          'Thu thập sơ đồ tổ chức hiện tại',
          'Phân tích vai trò thực tế từng thành viên',
          'Luận giải trước 7 chỉ số lãnh đạo từng thành viên.'
        ]
      },
      {
        title: 'Phân tích cá nhân chuyên sâu',
        items: [
          'Mỗi thành viên được luận giải riêng 30 phút gồm: Cấu trúc ra quyết định tự nhiên, điểm mạnh chiến lược nổi trội, xu hướng hành vi khi áp lực, điểm dễ gây xung đột với các thành viên còn lại, giới hạn cần thiết lập để tránh xung đột vai trò.'
        ]
      },
      {
        title: 'Phân tích Năm Cá Nhân 2026 từng thành viên',
        items: [
          'Xác định ai nên mở rộng vai trò, ai nên giữ vai trò kiểm soát, ai nên tập trung xây nền tảng hệ thống, ai nên hạn chế quyết định rủi ro cao.'
        ]
      },
      {
        title: 'Vẽ Bản Đồ Năng Lượng Đội Ngũ',
        items: [
          'Phân bổ 5 vai trò cốt lõi: chiến lược tăng trưởng, kiểm soát rủi ro, vận hành hệ thống, phát triển đội ngũ và quan hệ & đối tác.',
          'Phát hiện xung đột trong vai trò.'
        ]
      },
      {
        title: 'Phân tích quyền lực thực tế',
        items: [
          'So sánh giữa chức danh chính thức và ảnh hưởng thực tế; phát hiện quyền lực ngầm; xác định khu vực mâu thuẫn tiềm ẩn.'
        ]
      },
      {
        title: 'Kiến trúc lại cấu trúc ra quyết định',
        items: [
          'Xác định rõ ai có quyền quyết định cuối cùng trong từng nhóm vấn đề; Thiết lập giới hạn thẩm quyền và rút ngắn vòng phê duyệt; Điều chỉnh vai trò nếu không phù hợp cấu trúc vận mệnh.'
        ]
      },
      {
        title: 'Thiết lập Nguyên Tắc Quản Trị',
        items: [
          'Nguyên tắc về họp chiến lược, phản biện, xử lý bất đồng và giao tiếp giữa các cấp.'
        ]
      },
      {
        title: 'Thiết lập Thỏa Thuận Làm Việc Chung 2026',
        items: [
          'Văn bản thống nhất gồm: nguyên tắc họp chiến lược, nguyên tắc xử lý bất đồng, nguyên tắc truyền thông nội bộ và cơ chế đánh giá lẫn nhau.'
        ]
      },
      {
        title: 'Tài sản chiến lược nhận được',
        items: [
          'PDF cá nhân từng thành viên, Báo cáo tổng hợp chiến lược nhóm 2026, Sơ đồ phân quyền đề xuất, Bản Đồ Năng Lượng Đội Ngũ, Email hướng dẫn triển khai 90 ngày đầu.'
        ]
      },
      {
        title: 'Ứng dụng thực tế',
        items: [
          'Áp dụng ngay vào họp Ban điều hành; khi tuyển quản lý cấp trung; khi tái cấu trúc phòng ban.',
          'Giảm chi phí cơ hội từ quyết định sai về nhân sự cấp cao.'
        ]
      }
    ]
  },
  'goi-doi-ngu-7': {
    id: 'goi-doi-ngu-7',
    name: 'WORKSHOP THẤU HIỂU ĐỘI NGŨ & TỐI ƯU PHỐI HỢP',
    subtitle: 'Định hình cấu trúc lãnh đạo cấp cao và đồng bộ tầm nhìn dài hạn (7 người)',
    price: '75.000.000 VNĐ',
    duration: '1 ngày chuyên sâu (8 giờ)',
    objective: 'Đồng bộ Ban Lãnh Đạo cấp cao trong năm mở chu kỳ mới, làm rõ cấu trúc quyền lực, trách nhiệm và định hướng tăng trưởng 3 năm.',
    sections: [
      {
        title: 'Đối tượng phù hợp',
        items: [
          'Hội đồng quản trị, Ban điều hành 7 người, nhóm cổ đông doanh nghiệp quy mô lớn.'
        ]
      },
      {
        title: 'Giai đoạn chuẩn bị (trước workshop 5-7 ngày)',
        items: [
          'Gửi bộ Questionnaire chiến lược chuyên sâu cho từng thành viên; Thu thập sơ đồ tổ chức hiện tại và chiến lược 3 năm; Phân tích trước 7 chỉ số lãnh đạo của từng người; Rà soát vai trò thực tế và ảnh hưởng nội bộ.'
        ]
      },
      {
        title: 'Phân tích cá nhân chuyên sâu',
        items: [
          'Mỗi thành viên được luận giải riêng 30 phút gồm: Cấu trúc tư duy lãnh đạo, phong cách ra quyết định khi áp lực cao, điểm mạnh chiến lược dài hạn và rủi ro quyền lực ngầm, khả năng kế thừa hoặc đào tạo thế hệ sau.'
        ]
      },
      {
        title: 'Phân tích Năm Cá Nhân 2026 từng thành viên',
        items: [
          'Xác định ai nên dẫn dắt tăng trưởng, ai nên giữ ổn định, ai nên tập trung chuẩn hóa hệ thống trong năm 2026.'
        ]
      },
      {
        title: 'Vẽ Bản Đồ Năng Lượng Lãnh Đạo',
        items: [
          'Phân bổ 7 vai trò chiến lược: tăng trưởng; quản trị tài chính; vận hành hệ thống; nhân sự và văn hóa; đối ngoại và quan hệ; kiểm soát rủi ro; đổi mới và sáng tạo.'
        ]
      },
      {
        title: 'Phân tích quyền lực thực tế',
        items: [
          'So sánh chức danh chính thức và ảnh hưởng thực tế; xác định trung tâm quyền lực; phát hiện vùng xung đột tiềm ẩn giữa các nhóm lợi ích.'
        ]
      },
      {
        title: 'Đồng bộ tầm nhìn 3 năm',
        items: [
          'Thống nhất mục tiêu chiến lược dài hạn; xác định ưu tiên 2026; phân bổ trách nhiệm theo chu kỳ cá nhân từng người.'
        ]
      },
      {
        title: 'Kiến trúc lại cơ chế ra quyết định cấp cao',
        items: [
          'Thiết lập quy tắc biểu quyết; xác định quyền quyết định cuối cùng trong từng lĩnh vực; thiết lập cơ chế phản biện chiến lược.'
        ]
      },
      {
        title: 'Xác định người kế thừa tiềm năng',
        items: [
          'Phân tích khả năng chuyển giao vai trò; nhận diện khoảng trống kế thừa; đề xuất hướng phát triển nhân sự cấp kế tiếp.'
        ]
      },
      {
        title: 'Thiết lập Hiến Pháp Làm Việc Chung 2026',
        items: [
          'Văn bản nguyên tắc vận hành Ban Lãnh Đạo gồm: nguyên tắc ra quyết định, chuẩn giao tiếp nội bộ, cách xử lý khủng hoảng và cơ chế bảo vệ uy tín tổ chức.'
        ]
      },
      {
        title: 'Tài sản chiến lược nhận được',
        items: [
          'Hồ sơ PDF cá nhân từng thành viên, Báo cáo tổng hợp chiến lược Ban Lãnh Đạo, Sơ đồ cấu trúc quyền lực đề xuất, Bản Đồ Năng Lượng Nhóm, Email định hướng triển khai 90 ngày đầu.'
        ]
      },
      {
        title: 'Ứng dụng thực tế',
        items: [
          'Dùng trong họp Hội đồng quản trị; tái cấu trúc tổ chức; xây kế hoạch kế thừa.'
        ]
      }
    ]
  }
};

export function LeaderConsulting({ initialProfile }: LeaderConsultingProps) {
  const tier1ImgUrl = resolveAttachmentUrl(initialProfile?.consulting_tier1_img?.[0]?.url) || PLACEHOLDER;
  const tier2ImgUrl = resolveAttachmentUrl(initialProfile?.consulting_tier2_img?.[0]?.url) || PLACEHOLDER;
  const tier3ImgUrl = resolveAttachmentUrl(initialProfile?.consulting_tier3_img?.[0]?.url) || PLACEHOLDER;

  const pricingTiers = [
    {
      id: 'goi-nen-tang',
      name: 'PHIÊN PHỎNG VẤN CHIẾN LƯỢC & GIẢI MÃ ĐIỂM MÙ ĐỘC BẢN',
      image: tier1ImgUrl,
      popular: false,
      ctaTextPrimary: 'ĐẶT LỊCH PHỎNG VẤN CHUYÊN SÂU',
      ctaTextSecondary: 'Xem chi tiết →',
    },
    {
      id: 'goi-co-van',
      name: 'CHƯƠNG TRÌNH COACHING 90 NGÀY',
      image: tier2ImgUrl,
      popular: true,
      ctaTextPrimary: 'ĐẶT LỊCH COACHING 90 NGÀY',
      ctaTextSecondary: 'Xem chi tiết →',
    },
    {
      id: 'goi-doi-ngu',
      name: 'BẢN ĐỒ ĐỘI NGŨ LÃNH ĐẠO & QUẢN LÝ CHỦ CHỐT',
      image: tier3ImgUrl,
      popular: false,
      ctaTextPrimary: 'ĐẶT LỊCH WORKSHOP ĐỘI NGŨ',
      ctaTextSecondary: 'Xem chi tiết →',
    }
  ];

  const [activePackageId, setActivePackageId] = useState<string | null>(null);
  const [modalView, setModalView] = useState<'details' | 'register'>('details');
  const [teamSize, setTeamSize] = useState<3 | 5 | 7>(3);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    birthday: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (activePackageId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activePackageId]);

  useEffect(() => {
    const handleOpenRegisterEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ packageId: string }>;
      const packageId = customEvent.detail?.packageId;
      if (packageId) {
        handleOpenRegister(packageId);
      }
    };

    window.addEventListener('open-register-modal', handleOpenRegisterEvent);
    return () => {
      window.removeEventListener('open-register-modal', handleOpenRegisterEvent);
    };
  }, []);

  const activeDetailKey = activePackageId === 'goi-doi-ngu' ? `goi-doi-ngu-${teamSize}` : activePackageId || '';
  const currentDetail = packageDetails[activeDetailKey];

  const handleOpenDetails = (id: string) => {
    setActivePackageId(id);
    setModalView('details');
    setIsSubmitted(false);
  };

  const handleOpenRegister = (id: string) => {
    setActivePackageId(id);
    setModalView('register');
    setIsSubmitted(false);
  };

  const handleClose = () => {
    setActivePackageId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentDetail) return;
    setIsSubmitting(true);
    
    const leadData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      source: 'coaching_doanh_nghiep',
      package: currentDetail.name,
      message: formData.message
    };

    const extraDetails = {
      'Gói tham vấn': currentDetail.name,
      'Quy mô đội ngũ': `Đội ngũ ${teamSize} người`,
      'Ngày sinh (dương lịch)': formData.birthday,
      'Mục tiêu chiến lược': currentDetail.objective,
      'Lời nhắn bổ sung': formData.message
    };

    const success = await createLead(leadData, extraDetails);
    setIsSubmitting(false);
    if (success) {
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', birthday: '', message: '' });
    } else {
      alert('Gửi thông tin thất bại. Vui lòng liên hệ trực tiếp qua số hotline.');
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#F8FAFC] relative" id="consulting">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-oxford-blue mb-6 leading-[1.2]">
              Chương trình Tham vấn Chiến lược 1:1 <br className="hidden md:block"/> 
              Mỗi cấp độ đồng hành cho <span className="text-blaze-orange">một giai đoạn khác nhau</span>
            </h2>
            <p className="text-left md:text-center text-cyan-azure text-lg md:text-xl font-medium leading-relaxed">
              Mỗi chương trình tham vấn được thiết kế riêng theo vai trò, theo giai đoạn doanh nghiệp, theo chu kỳ cá nhân. 
              Master Hoàng Mai Linh đồng hành trực tiếp để xây bản đồ vận hành riêng cho từng lãnh đạo và tổ chức.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {pricingTiers.map((tier, idx) => (
            <FadeIn key={idx} direction="up" delay={idx * 0.15}>
              <div className={`relative flex flex-col h-full bg-white rounded-3xl overflow-hidden transition-all duration-300 group ${
                tier.popular 
                  ? 'border-2 border-blaze-orange shadow-2xl shadow-blaze-orange/10 transform lg:-translate-y-4' 
                  : 'border border-gray-200 shadow-xl shadow-cyan-azure/5 mt-4'
              }`}>
                {tier.popular && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-blaze-orange text-white px-3 md:px-4 py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-bold tracking-wider flex items-center gap-1 shadow-lg whitespace-nowrap">
                    <Star className="w-3 h-3 md:w-4 md:h-4 fill-white text-white" />
                    ĐƯỢC CHỌN NHIỀU NHẤT
                  </div>
                )}

                {/* Package Image */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={tier.image}
                    alt={tier.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* CTA Buttons */}
                <div className="p-6 flex flex-col gap-3">
                  <Button 
                    onClick={() => handleOpenRegister(tier.id)}
                    variant={tier.popular ? 'primary' : 'outline'} 
                    size="lg" 
                    className={`w-full h-14 font-bold ${!tier.popular && 'border-gray-200 text-oxford-blue hover:text-white hover:bg-oxford-blue hover:border-oxford-blue'}`}
                  >
                    {tier.ctaTextPrimary}
                  </Button>
                  <button 
                    onClick={() => handleOpenDetails(tier.id)}
                    className="text-center py-2"
                  >
                    <span className="text-sm font-bold text-cyan-azure hover:text-blaze-orange transition-colors">
                      {tier.ctaTextSecondary}
                    </span>
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* POPUP MODAL */}
      {activePackageId && currentDetail && (
        <div className="fixed inset-0 z-[1000] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-hidden">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] md:max-h-[80vh] overflow-hidden relative shadow-2xl flex flex-col border border-slate-100 animate-in fade-in duration-200">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-100 px-6 sm:px-8 py-5 flex items-start justify-between z-10 shrink-0">
              <div className="pr-4">
                <span className="inline-block py-0.5 px-2.5 bg-[#ff6801]/10 border border-[#ff6801]/25 text-[10px] sm:text-xs font-bold tracking-widest text-[#ff6801] uppercase rounded-full mb-1.5">
                  CHƯƠNG TRÌNH THAM VẤN
                </span>
                <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight text-slate-800">
                  {currentDetail.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium leading-normal">
                  {currentDetail.subtitle}
                </p>
              </div>
              <button 
                onClick={handleClose} 
                className="text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 p-2 rounded-full transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-8 flex-grow space-y-6">
              {modalView === 'details' ? (
                <>
                  {/* Highlight Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#F8FAFC] border border-slate-100 p-4 rounded-2xl flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#ff6801]/10 rounded-xl flex items-center justify-center text-[#ff6801] shrink-0">
                        <Coins className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Chi phí đầu tư</div>
                        <div className="text-lg font-black text-slate-800">{currentDetail.price}</div>
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] border border-slate-100 p-4 rounded-2xl flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#4991ba]/10 rounded-xl flex items-center justify-center text-[#4991ba] shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Thời lượng làm việc</div>
                        <div className="text-sm font-bold text-slate-800 leading-tight">{currentDetail.duration}</div>
                      </div>
                    </div>
                  </div>

                  {/* Team Size Selector (only for goi-doi-ngu) */}
                  {activePackageId === 'goi-doi-ngu' && (
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-[#4991ba]" />
                        Chọn quy mô đội ngũ
                      </div>
                      <div className="flex gap-2">
                        {([3, 5, 7] as const).map(size => (
                          <button
                            key={size}
                            onClick={() => setTeamSize(size)}
                            className={`flex-1 py-2.5 px-3 rounded-xl text-[10px] sm:text-xs font-bold border transition-all ${
                              teamSize === size
                                ? 'bg-[#ff6801] border-[#ff6801] text-white shadow-md shadow-[#ff6801]/20'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                            }`}
                          >
                            {size === 3 && 'Bản Đồ Đội Ngũ (3 người)'}
                            {size === 5 && 'Bản Đồ Điểm Mù (5 người)'}
                            {size === 7 && 'Workshop Đội Ngũ (7 người)'}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Strategic Goal */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#ff6801]" />
                      Mục tiêu chiến lược
                    </h4>
                    <p className="text-slate-700 font-semibold bg-[#ff6801]/5 border border-[#ff6801]/10 p-4 rounded-xl leading-relaxed text-sm">
                      {currentDetail.objective}
                    </p>
                  </div>

                  {/* Details Sections */}
                  <div className="space-y-6 pt-2">
                    {currentDetail.sections.map((section, idx) => (
                      <div key={idx} className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800 border-l-2 border-[#4991ba] pl-2.5">
                          {section.title}
                        </h4>
                        <ul className="grid grid-cols-1 gap-2.5 pl-1">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 className="w-4.5 h-4.5 text-[#ff6801] shrink-0 mt-0.5" />
                              <span className="text-slate-600 font-medium leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                /* Registration Form View */
                <div className="py-2">
                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500 animate-bounce">
                        <Check className="w-10 h-10" />
                      </div>
                      <h4 className="text-2xl font-black text-slate-800">Đăng ký thành công!</h4>
                      <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                        Cảm ơn bạn đã quan tâm đến <span className="font-bold text-[#ff6801]">{currentDetail.name}</span>. Đội ngũ Linh Hoa Tâm sẽ liên hệ với bạn qua Số điện thoại/Zalo trong vòng 24 giờ tới.
                      </p>
                      <div className="pt-4">
                        <Button onClick={handleClose} variant="primary" size="lg" className="px-8 font-bold">
                          Đóng cửa sổ
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center justify-between gap-3 mb-6">
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-[#4991ba] shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-600 font-medium leading-tight">
                            Đăng ký: <strong className="text-slate-800">{currentDetail.name}</strong> ({currentDetail.price})
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setModalView('details')}
                          className="text-xs font-bold text-[#ff6801] hover:underline shrink-0 pl-2 border-l border-slate-200"
                        >
                          Xem chi tiết
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Họ và tên *</label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff6801] focus:ring-1 focus:ring-[#ff6801] outline-none transition-all text-slate-800"
                            placeholder="Nguyễn Văn A"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Số điện thoại *</label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff6801] focus:ring-1 focus:ring-[#ff6801] outline-none transition-all text-slate-800"
                            placeholder="09xx xxx xxx"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Email *</label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff6801] focus:ring-1 focus:ring-[#ff6801] outline-none transition-all text-slate-800"
                            placeholder="email@example.com"
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Ngày sinh *</label>
                          <input
                            type="text"
                            name="birthday"
                            required
                            value={formData.birthday}
                            onChange={handleInputChange}
                            className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff6801] focus:ring-1 focus:ring-[#ff6801] outline-none transition-all text-slate-800"
                            placeholder="DD/MM/YYYY"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">Lời nhắn / Yêu cầu thêm (nếu có)</label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-[#ff6801] focus:ring-1 focus:ring-[#ff6801] outline-none transition-all text-slate-800 resize-none"
                          placeholder="Nhập thông điệp hoặc câu hỏi của bạn..."
                        />
                      </div>

                      <div className="pt-4 flex gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setModalView('details')}
                          className="flex-1 h-14 font-bold border-slate-200 text-slate-700 text-xs sm:text-sm"
                        >
                          Xem chi tiết gói
                        </Button>
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                          className="flex-1 h-14 font-bold text-white shadow-lg shadow-[#ff6801]/20 text-xs sm:text-sm"
                        >
                          {isSubmitting ? 'ĐANG GỬI...' : 'GỬI ĐĂNG KÝ'}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer (only visible when viewing details) */}
            {modalView === 'details' && (
              <div className="sticky bottom-0 bg-white border-t border-slate-100 p-4 sm:p-6 flex gap-3 w-full shrink-0 z-10 sm:justify-end">
                <Button 
                  onClick={handleClose} 
                  variant="outline" 
                  className="flex-1 sm:flex-initial h-12 px-6 border-slate-200 text-slate-600 hover:bg-slate-50 font-bold"
                >
                  Đóng
                </Button>
                <Button 
                  onClick={() => setModalView('register')} 
                  variant="primary" 
                  className="flex-1 sm:flex-initial h-12 px-8 font-bold shadow-lg shadow-blaze-orange/10 text-white bg-[#ff6801] hover:bg-[#e05a00]"
                >
                  Đăng ký tư vấn ngay
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
