import OpenSourceImage_1 from "../../asset/image/project/openSource/openSource_image1.png";
import OpenSourceImage_2 from "../../asset/image/project/openSource/openSource_image2.png";
import OpenSourceImage_3 from "../../asset/image/project/openSource/openSource_image3.png";

import PortfolioImage_1 from "../../asset/image/project/portfolio/portFolioImage_1.png";
import PortfolioImage_2 from "../../asset/image/project/portfolio/portFolioImage_2.png";
import PortfolioImage_3 from "../../asset/image/project/portfolio/portFolioImage_3.png";
import PortfolioImage_4 from "../../asset/image/project/portfolio/portFolioImage_4.png";

import KindDariyImage_1 from "../../asset/image/project/kindDiary/kindDairyImage_1.png";
import KindDariyImage_2 from "../../asset/image/project/kindDiary/kindDairyImage_2.png";
import KindDariyImage_3 from "../../asset/image/project/kindDiary/kindDairyImage_3.png";
import KindDariyImage_4 from "../../asset/image/project/kindDiary/kindDairyImage_4.png";
import KindDariyImage_5 from "../../asset/image/project/kindDiary/kindDairyImage_5.png";

import RoastingLandmarkImage_1 from "../../asset/image/project/roastingLandmark/roastingLandmark_1.png";
import RoastingLandmarkImage_2 from "../../asset/image/project/roastingLandmark/roastingLandmark_2.png";
import RoastingLandmarkImage_3 from "../../asset/image/project/roastingLandmark/roastingLandmark_3.png";
import RoastingLandmarkImage_4 from "../../asset/image/project/roastingLandmark/roastingLandmark_4.png";
import RoastingLandmarkImage_5 from "../../asset/image/project/roastingLandmark/roastingLandmark_5.png";
import RoastingLandmarkImage_6 from "../../asset/image/project/roastingLandmark/roastingLandmark_6.png";

import StarterValleyImage_1 from "../../asset/image/project/starterValley/StarterValleyImage_1.png";
import StarterValleyImage_2 from "../../asset/image/project/starterValley/StarterValleyImage_2.png";
import StarterValleyImage_3 from "../../asset/image/project/starterValley/StarterValleyImage_3.png";
import StarterValleyImage_4 from "../../asset/image/project/starterValley/StarterValleyImage_4.png";
import StarterValleyImage_5 from "../../asset/image/project/starterValley/StarterValleyImage_5.png";
import StarterValleyImage_6 from "../../asset/image/project/starterValley/StarterValleyImage_6.png";
import StarterValleyImage_7 from "../../asset/image/project/starterValley/StarterValleyImage_7.png";
import StarterValleyImage_8 from "../../asset/image/project/starterValley/StarterValleyImage_8.png";

export const dataList = [
  {
    title: "NPM 오픈소스 라이브러리 개발",
    date: "2024.09",
    imageList: [OpenSourceImage_1, OpenSourceImage_2, OpenSourceImage_3],
    descriptions: [
      "React 기반 스크롤 위치에 따른 애니메이션을 구현하기 위한 <b>React-animation-on-scrolling 라이브러리를 개발</b>하였습니다.",
      "소규모 번들 사이즈의 라이브러리를 사용하여 스크롤 애니메이션을 간편하게 구현할 수 있도록 하기 위해 개발하게 되었습니다.",
      "번들 사이즈 최적화를 위한 Tree shaking이 탑재된 Rollup을 활용하여 번들링하였으며, Terser를 도입하여 <b>번들 사이즈를 기존 2.76KB -> 1.11KB로 감소</b>하였습니다.",
      "현재까지 <b>NPM 다운로드 수 총 591회를 기록</b>하였으며, 라이브러리를 지속적으로 홍보하고 개선해나가는 중입니다.",
      "",
    ],
    stackInfos: {
      mainFeature: ["스크롤 애니메이션"],
      URLs: [
        {
          text: "Github",
          link: "https://github.com/qkrwlgh123/react-animation-on-scrolling",
        },
        {
          text: "NPM",
          link: "https://www.npmjs.com/package/react-animation-on-scrolling",
        },
        {
          text: "NPM Stat",
          link: "https://npm-stat.com/charts.html?package=react-animation-on-scrolling",
        },
      ],
      stacksList: ["React", "TypeScript", "Rollup", "NPM"],
    },
  },
  {
    title: "포트폴리오",
    date: "2024.07 ~ 2024.08",
    imageList: [
      PortfolioImage_1,
      PortfolioImage_2,
      PortfolioImage_3,
      PortfolioImage_4,
    ],
    descriptions: [
      "<b>개인 이력 및 프로젝트 경험을 정리</b>하여 웹으로 구현한 프로젝트입니다.\n지금 보고 계시는 이 웹사이트에 해당합니다.",
      "GitHub Actions와 CloudFront Invalidation을 활용한 <b>CI/CD 파이프라인을 구축하여 개발 생산성을 향상</b>했습니다.",
      "렌더링된 컴포넌트에 Framer-motion을 활용하여 애니메이션을 적용하였고, 이를 통해 <b>높은 퀄리티의 사용자 인터렉션을 제공</b>할 수 있는 좋은 경험이였습니다.",
    ],
    stackInfos: {
      mainFeature: ["포트폴리오"],
      URLs: [
        {
          text: "Github",
          link: "https://github.com/qkrwlgh123/portfolio_ver2",
        },
      ],
      stacksList: [
        "React",
        "TypeScript",
        "Styled-component",
        "Framer motion",
        "S3",
        "Cloudfront",
        "Github actions",
      ],
    },
  },
  {
    title: "캘린더 기반 일정 관리 서비스",
    date: "2024.07 ~ 2024.08 (개인 프로젝트)",
    imageList: [
      KindDariyImage_1,
      KindDariyImage_2,
      KindDariyImage_3,
      KindDariyImage_4,
      KindDariyImage_5,
    ],
    descriptions: [
      "<b>개인 일정과 수행해야할 작업들을 기록하고 월 별로 조회</b>하기 위한 일정 관리 서비스를 개발하였습니다.",
      "<b>수립한 목표들과 진행한 작업들을 일자 별로 한눈에 확인 및 수립했던 목표들에 대해 주 단위로 달성률을 확인</b>하고, 달성률에 따른 피드백에 기반하여 추후 <b>일정을 더 체계적으로 관리</b>하기 위해 기획한 프로젝트입니다.",
      "목표 및 해야할 일의 데이터 구조를 Key, Value 쌍 형태로 구성하여 API 호출 최소화를 통해 <b>서버의 부하를 감소</b>했습니다.",
      "변하지 않는 지난 월 별 데이터를 Tanstack-query를 도입하여 Cache로 관리하고, 이를 통해 <b>API 중복 호출을 방지</b> 및 기존 React hook 기반 코드 대비 <b>코드 가독성을 증진</b>하였습니다.",
      "Theme provider를 활용하여 다크모드 기능 구현을 통해 <b>다양한 사용 환경에 대응</b>하였습니다.",
    ],
    stackInfos: {
      mainFeature: [
        "월별 목표 리스트 조회",
        "일자 별 목표 설정",
        "해야할 작업 기록 및 체크",
        "주 별 목표 진행도 및 피드백 조회",
      ],
      URLs: [
        {
          text: "Github(Frontend)",
          link: "https://github.com/qkrwlgh123/kind_diary",
        },
        {
          text: "Github(Backend)",
          link: "https://github.com/qkrwlgh123/kind_diary_server",
        },
      ],
      stacksList: [
        "React",
        "TypeScript",
        "Styled-component",
        "Zustand",
        "Node.js",
        "EC2",
        "Nginx",
      ],
    },
  },
  {
    title: "키워드 기반 카페 조회 플랫폼",
    date: "2023.08 ~ 2023.10 (개인 프로젝트)",
    imageList: [
      RoastingLandmarkImage_1,
      RoastingLandmarkImage_2,
      RoastingLandmarkImage_3,
      RoastingLandmarkImage_4,
      RoastingLandmarkImage_5,
      RoastingLandmarkImage_6,
    ],
    descriptions: [
      "위치 기반 <b>키워드 기반 카페 홍보 플랫폼을 개발</b>하였습니다.\n\n카페의 특징이 <b>키워드에 담겨 홍보</b>된다면, 소비자는 <b>키워드를 통해 카페의 특징을 직관적으로 파악</b>할 수 있게 되고, 점주도 <b>카페의 특장점을 어필하며 홍보</b>하는 것이 가능할 것이라는 생각이 들었습니다. 이에 따라 <b>카페 점주 및 소비자 모두에게 이점</b>을 가져다줄 수 있을 것이라는 생각이 들어 해당 프로젝트를 기획하고 개발하게 되었습니다.",
      "위치 기반 조회 기능 개발을 위해 장소 간 거리 계산 기능을 개발하며, 거리 값에 대한 오차를 최소화하기 위해 지구의 곡률을 고려한 <b>하버사인(Haversine)</b>을 도입하였으며, 이를 통해 기존 선형 거리 계산 대비 <b>오차율을 35%에서 10% 이내로 개선</b>하였습니다.",
      "React와 TypeScript를 활용하여 기능 및 UI 모듈을 컴포넌트 단위로 개발하며 재사용성을 적극 활용하였고, 뷰와 기능 로직을 구분하여 유지보수성을 증진했습니다.",
    ],
    stackInfos: {
      mainFeature: [
        "키워드 기반 카페 등록 및 조회",
        "위치 기반 카페 목록 조회",
        "평점 및 리뷰 작성",
      ],
      URLs: [
        {
          text: "Github(Frontend)",
          link: "https://github.com/qkrwlgh123/roasting-landmark-front",
        },
        {
          text: "Github(Backend)",
          link: "https://github.com/qkrwlgh123/roasting-backend",
        },
      ],
      stacksList: [
        "React",
        "TypeScript",
        "Recoil",
        "Styled-component",
        "Node.js",
        "EC2",
        "Nginx",
      ],
    },
  },
  {
    title: "부트캠프 출결 관리 및 소통 플랫폼",
    date: "2022.11 ~ 2023.01 (팀 프로젝트)",
    imageList: [
      StarterValleyImage_1,
      StarterValleyImage_2,
      StarterValleyImage_3,
      StarterValleyImage_4,
      StarterValleyImage_5,
      StarterValleyImage_6,
      StarterValleyImage_7,
      StarterValleyImage_8,
    ],
    descriptions: [
      "부트캠프 교육생들을 위한 <b>출결 관리 및 소통 플랫폼</b> 개발에 참여하였습니다.",
      "QR 코드를 촬영한 뒤 출결 정보를 입력 및 제출해야 하는 기존 출결 방식의 불편 사항을 개선하기 위해 기획된 프로젝트입니다.",
      "Geolocation API를 활용하여 현재 위치와 교육장 간 거리를 비교하고, 일정 반경 내 위치 시 출결 처리가 되도록 구현하여 <b>교육 편의성에 대한 만족도를 20명 중 7명에서 19명으로 향상</b>시켰습니다.",
      "점심 식사 메이트 모집 기능을 구현하여 <b>친밀한 관계 형성</b>을 도모하고, 게시판 및 운영진 건의 기능을 구현하여 <b>수강생 간 소통과 교육 만족도를 향상</b>시켰습니다.",
      "프로젝트 초기 MVP를 빠르게 개발하여 수강생들로부터 서비스 피드백을 빠른 시일 내 확보하였고, 이를 통해 수강생들에게 필요한 기능을 추가 개발하고 이슈 사항을 신속히 해결하여 <b>서비스의 완성도를 단기간 내에 향상</b>시킬 수 있었습니다.",
      "SSR에 기반한 <b>Next.js의 구조 및 동작방식에 대해 이해</b>하고, 기능 개발을 진행하며 Next.js에 익숙해질 수 있었던 프로젝트였습니다.",
      "유데미 스타터스 부트캠프 교육 과정 중 진행한 팀 프로젝트이며, <b>출결 기능, 추천 맛집, 백오피스 내 팀 관리 기능 및 교육진행률 조회 기능</b>을 구현하였습니다.",
    ],
    stackInfos: {
      mainFeature: [
        "위치 기반 출결 및 일정 별 출결 관리",
        "점심 식사 메이트 모집",
        "근처 맛집 추천",
        "정보 공유 게시판",
        "운영진 건의",
      ],
      URLs: [
        {
          text: "시연 영상",
          link: "https://therapeutic-iridium-a60.notion.site/Attendance-Manager-b16424caf0bf433f99a6041679e5d7b7?pvs=74",
        },
      ],
      stacksList: [
        "Next.js",
        "TypeScript",
        "Recoil",
        "Styled-component",
        "EC2",
        "Nginx",
      ],
    },
  },
];
