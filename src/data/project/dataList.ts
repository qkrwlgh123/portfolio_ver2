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
      "Github actions와 Cloudfront의 Invalidation을 활용하여 <b>CI CD를 구축</b>하였습니다.",
      "CSS의 Position과 Transform 속성을 활용하여 스크롤 애니메이션을 구현하였습니다.",
      "뷰포트 내 렌더링된 컴포넌트에 Framer-motion을 활용하여 애니메이션을 적용하였고, 이를 통해 <b>높은 퀄리티의 사용자 인터렉션을 제공</b>할 수 있는 좋은 경험이였습니다.",
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
    title: "일정 및 Task 관리, 아카이빙 서비스",
    date: "2024.07 ~ 2024.08 (개인 프로젝트)",
    imageList: [
      KindDariyImage_1,
      KindDariyImage_2,
      KindDariyImage_3,
      KindDariyImage_4,
      KindDariyImage_5,
    ],
    descriptions: [
      "<b>개인 일정과 수행해야할 작업들을 기록하고 아카이빙</b>하기 위한 일정 관리 서비스를 개발하였습니다.",
      "<b>수립한 목표들과 진행한 작업들을 일자 별로 한눈에 확인 및 수립했던 목표들에 대해 주 단위로 달성률을 확인</b>하고, 달성률에 따른 피드백에 기반하여 추후 일정을 더 체계적으로 관리하기 위해 기획한 프로젝트입니다.",
      "API 호출을 최소화하여 서버의 부하를 줄이기 위해 목표와 수행해야할 작업들 간 데이터 구조를 Key, Value 쌍의 형태로 설계하였습니다.",
      "React-query를 사용하여 <b>Caching 기법 활용을 통해 일자별 데이터들을 관리</b>하여 <b>API를 중복으로 호출하는 현상을 방지</b>하고, 기존 React hook 기반 코드 대비 가독성을 증진하였습니다.",
      "<b>사용자의 다양한 사용 환경에 대응</b>하기 위해, Styled-Component의 Theme provider를 활용하여 <b>다크모드 기능을 구현</b>하였습니다.",
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
          text: "배포 링크",
          link: "https://diary.kindparks.com",
        },
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
    title: "위치 기반 카페 탐색 & 홍보 플랫폼",
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
      "소상공인을 위한 <b>위치에 따른 키워드 기반 카페 홍보 플랫폼을 개발</b>하였습니다.\n\n카페의 특징이 <b>키워드에 담겨 홍보</b>된다면, 소비자는 <b>키워드를 통해 카페의 특징을 직관적으로 파악</b>할 수 있게 되고, 점주도 <b>카페의 특장점을 어필하며 홍보</b>하는 것이 가능할 것이라는 생각이 들었습니다. 이에 따라 <b>카페 점주 및 소비자 모두에게 이점</b>을 가져다줄 수 있을 것이라는 생각이 들어 해당 프로젝트를 기획하고 개발하게 되었습니다.",
      "<b>위치 기반 조회 기능 개발을 위해 반경 거리를 계산</b>하는 로직을 작성 중, 오차를 최소화하기 위해 구의 형태를 띈 지구의 모양을 고려한 <b>하버사인(Haversine)</b> 공식을 도입하였으며, 이를 통해 <b>정확한 거리값을 산출</b>해낼 수 있었습니다.",
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
          text: "배포 링크",
          link: "https://roasting.kindparks.com",
        },
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
    title: "부트캠프 출결 관리 및 정보 공유 플랫폼",
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
      "부트캠프 교육생들을 위한 <b>출결 관리 및 정보 공유 플랫폼</b> 서비스 개발에 참여하였습니다.",
      "QR 코드를 촬영한 뒤 출결 정보를 입력 및 제출해야 하는 기존 출결 방식의 불편 사항을 개선하기 위해 기획된 프로젝트입니다.",
      "교육 프로그램의 특성상 <b>교육생들 간 협업이 중요</b>했기 때문에, <b>친밀한 관계가 원활하게 형성될 수 있도록 점심 식사 메이트 모집 기능</b>을 기획안에 추가 및 개발하였으며, <b>정보 공유 및 교육 만족도 개선을 위해 게시판, 운영진 건의 기능</b>을 개발하였습니다.",
      "프로젝트 초기 <b>MVP를 빠르게 개발하여 수강생들로부터 서비스 피드백을 빠른 시일 내 확보</b>하였고, 이를 통해 <b>수강생들에게 필요한 기능을 추가 개발</b>하고 <b>이슈 사항을 신속히 해결</b>하여 서비스의 완성도를 단기간 내에 높일 수 있었습니다.",
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
