export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string; // Markdown formatted content
  date: string;
  category: string;
  imageUrl: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "khai-mo-noi-luc",
    title: "Khai mở nội lực: Chìa khóa vàng giúp bạn tự tin vượt qua mọi giới hạn",
    summary: "Khám phá cách thức thiết lập nội lực vững chắc từ bên trong thông qua các phương pháp Khai vấn và Trí tuệ cảm xúc.",
    date: "15/10/2026",
    category: "Góc Chia Sẻ",
    imageUrl: "/herobanner/487810895_632714732968418_1323220081853138133_n.jpg",
    content: `
# Khái niệm Nội lực là gì?

Nội lực không phải là một sức mạnh siêu nhiên bẩm sinh, mà là một thói quen tư duy được xây dựng thông qua quá trình thấu hiểu bản thân. Trong một thế giới luôn biến động, nội lực chính là chiếc mỏ neo giữ cho chúng ta không bị cuốn đi bởi những cơn bão cảm xúc.

## Tại sao cần Khai mở Nội lực?

Bất cứ ai cũng có những hạt giống tiềm năng bên trong mình, nhưng không phải ai cũng biết cách tưới tẩm đúng cách. Việc bị phân mảnh bởi áp lực công việc, khao khát khẳng định bản thân và nỗi sợ thất bại khiến chúng ta quên đi việc nuôi dưỡng "đất tâm".

### Các bước phát triển từ bên trong:

1. **Nhận thức cảm xúc (Self-Awareness)**: Bạn không thể sửa điều bạn không thấy. Gọi tên chính xác cảm xúc của mình là bước đầu tiên để giành lại quyền kiểm soát.
2. **Khai vấn (Coaching)**: Không phải là đưa ra lời khuyên bề nổi, mà là nghệ thuật đặt những câu hỏi sắc bén để bạn tự nhận ra vấn đề thực sự của mình.
3. **Thực hành Chánh niệm (Mindfulness)**: Đưa tâm trí về hiện tại, quan sát mà không phán xét.

*Linh Hoa Tâm tin rằng mỗi cá nhân khi được trang bị đúng hệ thống hỗ trợ sẽ tự tạo ra phép màu cho cuộc đời họ.*

> "Phát triển bền vững bắt đầu từ sự thông suốt bên trong. Khi bên trong tĩnh lặng, bên ngoài êm ả." - Linh Hoa Tâm

Bạn đã sẵn sàng để bắt đầu hành trình quay về bên trong? Hãy liên hệ với chúng tôi để nhận những tư vấn phù hợp nhất.
    `
  },
  {
    id: "2",
    slug: "hieu-minh-lam-chu",
    title: "Hiểu mình để làm chủ cuộc đời: Bài học từ Thuật Số Học",
    summary: "Một cái nhìn khoa học, khách quan về Thuật Số Học và cách nó hỗ trợ con người thấu hiểu điểm mạnh, điểm yếu cốt lõi.",
    date: "10/10/2026",
    category: "Thuật Số Học",
    imageUrl: "/herobanner/489916213_638224145750810_7430750482301268316_n.jpg",
    content: `
# Thuật Số Học dưới góc nhìn hiện đại

Thường xuyên bị hiểu lầm là một bộ môn huyền bí, **Thuật Số Học (Numerology)** thực chất là một hệ thống thống kê dựa trên nguyên lý sóng rung của các con số được khám phá bởi Pythagoras. Ở mức độ nguyên bản, nó giúp lý giải các khuôn mẫu tính cách và diễn biến tâm lý cơ bản của một người.

## Tấm bản đồ cá nhân

Tưởng tượng bạn đang phải di chuyển trong một khu rừng rậm rạp mà không có bản đồ. Đó là tình trạng của rất nhiều người trong giai đoạn "khủng hoảng tuổi 30". Họ có tài năng, có kỹ năng mềm, nhưng vẫn luôn có cảm giác chông chênh, sai hướng.

Thuật Số Học đóng vai trò như một **Tấm Bản Đồ**:
- Không quyết định đường đi cho bạn (bởi bạn có ý chí tự do).
- Chỉ ra các "dốc đá" (thử thách).
- Chỉ ra các "kho báu" (tài năng ưu việt).

### Sự kết hợp hoàn hảo

Tại **Linh Hoa Tâm**, chúng tôi không chỉ dừng lại ở việc đọc bản đồ cho bạn. Chúng tôi kết hợp Thuật Số Học với *Khai vấn (Coaching)*. 

Mục tiêu không phải là "xem bói", mà là dùng số liệu như một điểm kích neo (anchor point) để bắt đầu một cuộc hội thoại sâu sắc. Từ đó, người thực hành dễ dàng nhận diện ra các điểm mù (blind spots) của mình.

**Bạn ứng dụng Thuật Số Học như thế nào?**
Hãy thử quan sát lại quỹ đạo 9 năm gần nhất của mình, liệu bạn có nhận thấy được tính chu kỳ đằng sau những quyết định lớn?
    `
  },
  {
    id: "3",
    slug: "eq-lanh-dao",
    title: "Chỉ số Trí tuệ Cảm xúc (EQ): Vũ khí sắc bén của Lãnh đạo",
    summary: "Người lãnh đạo xuất sắc không chỉ giỏi chuyên môn mà còn phải là bậc thầy trong việc quản trị cảm xúc của chính mình và tập thể.",
    date: "05/10/2026",
    category: "Lãnh Đạo",
    imageUrl: "/herobanner/501385981_671344565772101_7822343603965720762_n.jpg",
    content: `
# Lãnh đạo bằng Trí Tuệ Cảm Xúc (EQ)

Trong kỷ nguyên AI và máy móc đang dần thay thế các kỹ năng chuyên môn cứng, **EQ** trở thành yếu tố sống còn quyết định sự thành bại của môi trường doanh nghiệp. Các nhà quản lý xuất sắc (Great Leaders) luôn sở hữu những chỉ số cảm xúc vượt trội.

## 4 Trụ cột của EQ trong lãnh đạo

Theo nhà tâm lý học Daniel Goleman, EQ trong môi trường công sở bao gồm 4 khía cạnh:

1. **Nhận thức bản thân (Self-Awareness)**
   - Biết rõ lúc nào mình đang nóng giận, sợ hãi hay thiên vị. 
   - Lãnh đạo càng hiểu mình, càng khó bị thao túng bởi hoàn cảnh.
2. **Quản trị bản thân (Self-Management)**
   - Khả năng "ngừng lại một nhịp" trước khi phản ứng. Thay vì *react*, một lãnh đạo có EQ sẽ *respond* một cách tỉnh táo.
3. **Nhận thức xã hội (Social Awareness/Empathy)**
   - Năng lực đọc hiểu cảm xúc của nhân viên. Không phải ai im lặng cũng là đồng ý, đôi khi đó là sự thất vọng âm thầm.
4. **Quản trị mối quan hệ (Relationship Management)**
   - Khả năng truyền cảm hứng, hóa giải xung đột và xây dựng mạng lưới đồng minh.

### Linh Hoa Tâm giúp gì cho Doanh Nghiệp?

Chương trình **EQ Masterclass** tại Linh Hoa Tâm được thiết kế chuyên sâu dành cho đội ngũ quản lý cấp trung và cao cấp. Qua các phiên thực hành tình huống thật, học viên sẽ bẻ gãy các rào cản giao tiếp ngầm, xây dựng một văn hóa doanh nghiệp minh bạch và đầy sự thấu cảm.
    `
  },
  {
    id: "4",
    slug: "quan-tri-thoi-gian-nang-luong",
    title: "Quản trị Thời gian hay Quản trị Năng lượng?",
    summary: "Bí quyết để làm việc hiệu quả không nằm ở việc nhồi nhét thời gian, mà là biết cách phân bổ và phục hồi năng lượng.",
    date: "01/10/2026",
    category: "Góc Chia Sẻ",
    imageUrl: "/herobanner/487810895_632714732968418_1323220081853138133_n.jpg",
    content: "Nội dung bài viết Quản trị Năng lượng đang được cập nhật..."
  },
  {
    id: "5",
    slug: "y-nghia-con-so-chu-dao-7",
    title: "Giải mã Con số Chủ đạo 7: Hành trình đi tìm triết lý",
    summary: "Người mang số 7 thường đi tìm chiều sâu của kiến thức và chân lý vũ trụ. Khám phá sức mạnh và góc khuất của họ.",
    date: "28/09/2026",
    category: "Thuật Số Học",
    imageUrl: "/herobanner/489916213_638224145750810_7430750482301268316_n.jpg",
    content: "Nội dung bài viết Con số chủ đạo 7 đang được cập nhật..."
  },
  {
    id: "6",
    slug: "vuot-qua-hoi-chung-ke-mao-danh",
    title: "Làm sao để vượt qua Hội chứng Kẻ Mạo Danh (Imposter Syndrome)?",
    summary: "Nhiều người tài năng luôn cảm thấy mình không xứng đáng và chỉ gặp may. Làm sao để nhận diện và tháo gỡ tư duy này?",
    date: "25/09/2026",
    category: "Khai Vấn",
    imageUrl: "/herobanner/500658755_673862725520285_446945340546018026_n.jpg",
    content: "Nội dung Khai vấn trị liệu Hội chứng kẻ mạo danh đang được cập nhật..."
  },
  {
    id: "7",
    slug: "gia-tri-cot-loi-gia-dinh",
    title: "Ứng dụng EQ để xây dựng Giá trị Cốt lõi cho gia đình",
    summary: "Không chỉ doanh nghiệp, mỗi gia đình cũng cần một hệ giá trị cốt lõi để duy trì sự gắn kết và tôn trọng lẫn nhau.",
    date: "20/09/2026",
    category: "Góc Chia Sẻ",
    imageUrl: "/herobanner/501385981_671344565772101_7822343603965720762_n.jpg",
    content: "Nội dung xây dựng EQ gia đình đang được cập nhật..."
  },
  {
    id: "8",
    slug: "lanh-dao-tinh-thuc",
    title: "Lãnh đạo Tỉnh thức: Xu hướng quản trị nhân sự mới",
    summary: "Các nhà quản lý hiện đại đang chuyển dịch từ phong cách 'Chỉ huy & Kiểm soát' sang 'Lắng nghe & Khơi gợi'.",
    date: "15/09/2026",
    category: "Lãnh Đạo",
    imageUrl: "/herobanner/487810895_632714732968418_1323220081853138133_n.jpg",
    content: "Nội dung Lãnh đạo Tỉnh thức đang được cập nhật..."
  },
  {
    id: "9",
    slug: "chu-ky-ca-nhan-nam-1",
    title: "Năm cá nhân số 1: Hạt giống mới, Cơ hội mới",
    summary: "Năm cá nhân đầu tiên trong chu kỳ 9 năm là thời điểm tuyệt vời nhất để bắt đầu một dự án mới hoặc thay đổi bản thân.",
    date: "10/09/2026",
    category: "Thuật Số Học",
    imageUrl: "/herobanner/489916213_638224145750810_7430750482301268316_n.jpg",
    content: "Nội dung Năm cá nhân số 1 đang được cập nhật..."
  }
];

export function getNewsBySlug(slug: string) {
  return newsArticles.find(article => article.slug === slug);
}

// Helper to extract unique categories
export const getNewsCategories = () => {
  const categories = newsArticles.map(a => a.category);
  return Array.from(new Set(categories));
};
