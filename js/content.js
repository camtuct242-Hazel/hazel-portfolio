/**
 * HAZEL'S PERSONAL PORTFOLIO — CENTRALIZED CONTENT
 * Shared profile data, experiences, education, and skill items
 */

const portfolioData = {
  profile: {
    fullName: "Nguyễn Đăng Cẩm Tú",
    preferredName: "Hazel",
    roleTitle: "Business Analyst",
    email: "camtuct242@gmail.com",
    phone: "0915 998 517",
    location: "Ho Chi Minh City, Vietnam",
    linkedinUrl: "http://www.linkedin.com/in/hazelndct",
    githubUrl: "https://github.com/camtuct242-Hazel",
    cvPath: "assets/cv/Nguyen Dang Cam Tu - Business Analyst.pdf",
    avatarPath: "assets/images/Profile_Avatar.jpg"
  },

  experienceEducation: [
    {
      id: "mindx",
      type: "education",
      periodEn: "Jan 2026 – Aug 2026",
      periodVi: "01/2026 – 08/2026",
      orgEn: "MindX Technology School",
      orgVi: "Trường Công nghệ MindX",
      roleEn: "IT Business Analyst Intensive Program",
      roleVi: "Chương trình Đào tạo Chuyên sâu IT Business Analyst",
      highlightsEn: [
        "Completed an intensive 8-month training program simulating the end-to-end Software Development Life Cycle (SDLC) in Agile environments.",
        "Mastered requirements elicitation, business process modeling (BPMN 2.0, UML), database querying, and IEEE 830 SRS documentation.",
        "Delivered two full-scale capstone projects (PartnerWise B2B platform & Smart Parking Management System)."
      ],
      highlightsVi: [
        "Hoàn thành khóa đào tạo chuyên sâu 8 tháng mô phỏng toàn diện Vòng đời Phát triển Phần mềm (SDLC) trong môi trường Agile.",
        "Thực hành thu thập yêu cầu, mô hình hóa quy trình (BPMN 2.0, UML), truy vấn cơ sở dữ liệu và soạn thảo đặc tả SRS chuẩn IEEE 830.",
        "Hoàn thiện 2 đồ án lớn với đầy đủ bộ sản phẩm BA (PartnerWise B2B SaaS/Web3 và Smart Parking Management System)."
      ]
    },
    {
      id: "ssid",
      type: "experience",
      periodEn: "July 2025 – October 2025",
      periodVi: "07/2025 – 10/2025",
      orgEn: "SSI Digital Technology Joint Stock Company (SSID)",
      orgVi: "Công ty Cổ phần Công nghệ SSI Digital (SSID)",
      roleEn: "Human Resources Intern",
      roleVi: "Thực tập sinh Nhân sự (HR Intern)",
      highlightsEn: [
        "Clarified role specifications and requirements directly with hiring managers and recruiters to align screening criteria with organizational needs.",
        "Screened 50+ candidate profiles per week against structured criteria, maintaining recruitment tracking data for operational reporting.",
        "Documented recruitment workflows and communication procedures to improve information consistency across teams.",
        "Coordinated with diverse stakeholders throughout candidate pipelines, resolving information bottlenecks."
      ],
      highlightsVi: [
        "Làm việc trực tiếp với Hiring Managers và bộ phận tuyển dụng để làm rõ bản mô tả công việc, chuẩn hóa tiêu chí sàng lọc hồ sơ.",
        "Đánh giá và sàng lọc hơn 50 hồ sơ ứng viên mỗi tuần theo tiêu chí đã thiết lập, cập nhật dữ liệu quản lý vận hành tuyển dụng.",
        "Tài liệu hóa quy trình tuyển dụng và luồng thông tin nội bộ nhằm nâng cao tính đồng bộ giữa các phòng ban.",
        "Điều phối và theo dõi tiến độ luồng xử lý với các bên liên quan, giải quyết các khoảng trống thông tin."
      ]
    },
    {
      id: "ueh",
      type: "education",
      periodEn: "Oct 2022 – Mar 2026",
      periodVi: "10/2022 – 03/2026",
      orgEn: "University of Economics Ho Chi Minh City (UEH)",
      orgVi: "Đại học Kinh tế TP. Hồ Chí Minh (UEH)",
      roleEn: "Bachelor of Commerce | GPA: 3.75 / 4.0",
      roleVi: "Cử nhân Kinh Doanh Thương mại | GPA: 3.75 / 4.0",
      highlightsEn: [
        "Strong academic standing (GPA 3.75/4.0), building robust foundations in commerce, organizational dynamics, and trade operations.",
        "Relevant completed coursework: Management Information Systems (MIS), Enterprise Resource Planning (ERP), and Customer Relationship Management (CRM).",
        "Trained to view digital systems not in isolation, but as enablers of operational efficiency and commercial value."
      ],
      highlightsVi: [
        "Tốt nghiệp loại Xuất sắc (GPA 3.75/4.0), tích lũy nền tảng vững chắc về kinh tế thương mại, vận hành doanh nghiệp và hành vi thị trường.",
        "Các môn học chuyên sâu liên quan: Hệ thống Thông tin Quản lý (MIS), Hoạch định Nguồn lực Doanh nghiệp (ERP), Quản trị Quan hệ Khách hàng (CRM).",
        "Tiếp cận các hệ thống công nghệ dưới góc nhìn tạo ra giá trị kinh doanh và tối ưu hóa hiệu quả vận hành tổ chức."
      ]
    }
  ],

  skills: {
    baEn: [
      { name: "Requirements Elicitation", desc: "Stakeholder interviews, scoping, and business problem breakdown" },
      { name: "Documentation & Specifications", desc: "BRD v2.0 authoring, IEEE Std 830-1998 SRS, FRD, and NFR catalogs" },
      { name: "Process Modeling", desc: "BPMN 2.0 (As-Is & To-Be), Flowcharts, and Swimlane diagrams" },
      { name: "Agile Requirements & Use Cases", desc: "User Stories with Gherkin BDD scenarios (Given-When-Then), Use Case Specs" },
      { name: "System Modeling", desc: "UML Activity, Use Case, and Functional Decomposition (FDD)" },
      { name: "Acceptance Testing & Verification", desc: "UAT checklists, traceability matrix (BO ↔ BR ↔ FR ↔ UAT)" }
    ],
    baVi: [
      { name: "Thu thập & Khảo sát Yêu cầu", desc: "Phỏng vấn bên liên quan, xác định phạm vi và bóc tách bài toán nghiệp vụ" },
      { name: "Soạn thảo Tài liệu Đặc tả", desc: "Chủ trì soạn thảo BRD v2.0, SRS chuẩn IEEE 830-1998, danh mục FRD và NFR" },
      { name: "Mô hình hóa Quy trình", desc: "Sơ đồ BPMN 2.0 (Hiện trạng & Đề xuất), Flowchart phân làn tác nhân (Swimlanes)" },
      { name: "Yêu cầu Agile & Use Case", desc: "User Stories kèm kịch bản Gherkin BDD (Given-When-Then), Đặc tả Use Case chi tiết" },
      { name: "Mô hình hóa Hệ thống (UML)", desc: "Activity Diagrams, Use Case Diagrams và Sơ đồ phân rã chức năng (FDD)" },
      { name: "Kiểm thử Nghiệm thu & Truy vết", desc: "Kịch bản kiểm thử UAT, Ma trận truy vết yêu cầu (BO ↔ BR ↔ FR ↔ UAT)" }
    ],

    techEn: [
      { name: "Relational Database & SQL", desc: "SQL querying fundamentals via DBeaver, ERD relationship comprehension" },
      { name: "APIs & Integration Architecture", desc: "REST API concepts, Webhook flows, Postman API testing fundamentals" },
      { name: "Hardware-Software IoT Logic", desc: "Camera AI (LPR/ANPR), QR scanners, barrier relays, offline buffering" },
      { name: "Web3 & Blockchain Concepts", desc: "Soulbound Tokens (SBT), custodial vs. non-custodial wallets, transaction life cycle" }
    ],
    techVi: [
      { name: "Cơ sở Dữ liệu & Truy vấn SQL", desc: "Thao tác truy vấn cơ bản với DBeaver, đọc hiểu mô hình thực thể ERD" },
      { name: "Kiến trúc API & Tích hợp", desc: "Hiểu bản chất RESTful APIs, cơ chế Webhook, kiểm thử API cơ bản qua Postman" },
      { name: "Tư duy Tích hợp IoT Phần cứng - Phần mềm", desc: "Camera AI nhận diện biển số (LPR), máy quét QR, thanh chắn Barrier, Offline Buffering" },
      { name: "Nghiệp vụ Web3 & Blockchain", desc: "Soulbound Tokens (SBT), cơ chế ví lưu ký (Custodial/Non-custodial), vòng đời giao dịch on-chain" }
    ],

    toolsEn: [
      { name: "Process & Diagramming", desc: "Draw.io (diagrams.net), PlantUML" },
      { name: "Prototyping & Design", desc: "Figma (Wireframing, High-fidelity layouts)" },
      { name: "Data & API Tools", desc: "DBeaver, Postman" },
      { name: "Productivity & Code", desc: "GitHub, Google AI Studio, ChatGPT/Gemini/Antigravity prompt engineering" },
      { name: "Documentation", desc: "Microsoft Word, Excel, PowerPoint, Google Workspace" }
    ],
    toolsVi: [
      { name: "Mô hình hóa & Quy trình", desc: "Draw.io (diagrams.net), PlantUML" },
      { name: "Thiết kế Giao diện", desc: "Figma (Wireframe, Prototype bố cục chức năng)" },
      { name: "Dữ liệu & Kiểm thử API", desc: "DBeaver, Postman" },
      { name: "Quản lý & Hỗ trợ AI", desc: "GitHub, Google AI Studio, Prompt Engineering (ChatGPT/Gemini/Antigravity)" },
      { name: "Soạn thảo & Thuyết trình", desc: "Microsoft Word, Excel, PowerPoint, Google Workspace" }
    ]
  },

  certifications: [
    {
      titleEn: "Business Analyst Intensive Program",
      titleVi: "Chương trình Đào tạo Chuyên sâu IT Business Analyst",
      issuerEn: "MindX Technology School (8-Month Program)",
      issuerVi: "Trường Công nghệ MindX (Khóa đào tạo 8 tháng)",
      link: "https://drive.google.com/drive/folders/1RkOoU-Nkd0258rT7pbBB0IreB7geeYVq?usp=drive_link"
    },
    {
      titleEn: "Introduction to SQL Querying with AI",
      titleVi: "Truy vấn Dữ liệu SQL với Hỗ trợ AI (Cơ bản)",
      issuerEn: "DataCamp",
      issuerVi: "DataCamp",
      link: "https://drive.google.com/file/d/1Ljr1u0XM_8XEuPEZ2etp2v3Tnih31VsT/view?usp=drive_link"
    },
    {
      titleEn: "Intermediate SQL Querying with AI",
      titleVi: "Truy vấn Dữ liệu SQL với Hỗ trợ AI (Trung cấp)",
      issuerEn: "DataCamp",
      issuerVi: "DataCamp",
      link: "https://drive.google.com/file/d/1FM4Knre3d42LkcsvANLWQWI2K3vdpIhm/view?usp=drive_link"
    },
    {
      titleEn: "IC3 Digital Literacy Global Standard (GS5)",
      titleVi: "Chứng chỉ Kỹ năng Số Chuẩn Quốc tế IC3 (GS5)",
      issuerEn: "Certiport",
      issuerVi: "Certiport",
      link: "https://drive.google.com/file/d/1nEBdpT_aOqSLGxRDZPEc7ByrhdgoX2l7/view?usp=drive_link"
    },
    {
      titleEn: "IELTS Academic — Overall 6.0",
      titleVi: "Chứng chỉ Tiếng Anh Quốc tế IELTS 6.0",
      issuerEn: "IDP / Cambridge Assessment (No band below 6.0)",
      issuerVi: "IDP / Cambridge Assessment (Không kỹ năng nào dưới 6.0)",
      link: "https://drive.google.com/file/d/1P04kVf8yKe-slrCt2wfwsqu9MXv4nHJ6/view?usp=drive_link"
    }
  ]
};
