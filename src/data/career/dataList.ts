import WJTBLogo from "../../asset/image/career/logo_thinkbig.png";
import BookswageLogo from "../../asset/image/career/logo_bookswage.png";

export const dataList = [
  {
    image: WJTBLogo,
    title: "웅진씽크빅",
    date: "2023.02 ~ 2023.07",
    descriptions: [
      "유 초등 및 중등 학습 자료를 출판하고, 전자 교육 자료를 제작 및 서비스하는 교육 플랫폼입니다.",
      "<b>기존 안드로이드 기반 컨텐츠 뷰어 대비 성능 및 사용성이 개선</b>되고, <b>다양한 디바이스 해상도를 고려하여 반응형을 적용한 React 기반 컨텐츠 웹 통합 뷰어를 개발</b>하였으며, <b>중학 교육 플랫폼 기능 개발 및 유지보수</b>를 담당하였습니다. ",
    ],
    contributionList: [
      {
        name: "교육 컨텐츠 웹 통합 뷰어 개발",
        date: "2023.02 ~ 2023.05",
        descriptions: [
          "기존에 서비스되던 네이티브 컨텐츠 뷰어를 사용해보고 아쉬움이 있어, <b>성능 및 사용성과 디바이스 접근성을 개선</b>한 컨텐츠 웹 뷰어 개발",
          "<b>다양한 유형의 컨텐츠(PDF, 오디오북, EPUB, M3U8)를 웹 환경에서 재생하는 환경을 구축</b>하는 매커니즘 이해",
          "구간별 음원 재생 정보를 담고 있는 마크업 언어(XML)에 대해 이해하고, 이에 기반하여 웹 오디오북 구현",
          "Webview_flutter 패키지를 통해 <b>Flutter 디바이스에서의 webview를 통한 뷰어 재생</b> 구현",
          "<b>Web Crypto를 활용하여, 기업에서 서비스중인 컨텐츠가 뷰어 내에서만 한정적으로 재생</b>되도록 하는 DRM 복호화(Decrypt) 내재화",
          "DRM이 적용된 <b>사내 컨텐츠 복호화 과정에 Web worker를 도입하여, 컨텐츠 초기 로드 성능 개선</b>",
          "PDF 유형의 도서 뷰어에서 <b>현재 페이지 외 렌더링 될 페이지들을 Pre-load 하여 페이지 넘김 시 사용성 개선</b>",
          "Canvas 태그 위에 <b>그린 영역을 좌표를 이용하여 Clip하는 원리를 통해 선택 영역 캡쳐 기능</b> 구현",
          "<b>사내 CMS 메모리 비용 절감</b>을 위해, 영상 플레이어 내 <b>스트리밍 프로토콜인 HLS 대응</b>",
        ],
      },
      {
        name: "스마트올 중학 홈 배너 업데이트",
        date: "2023.05 ~ 2023.08",
        descriptions: [
          "일정에 맞춰 사용자에게 서비스 관련 정보를 제공하기 위한 <b>일정 별 배너 업데이트</b> 작업 진행",
          "기존에는 백엔드로부터 <b>오늘 날짜에 해당하는 배너 이미지만 받아올 수 있는 구조</b>였기 떄문에, 신규 배너가 <b>일정에 맞게 정상적으로 렌더링되는지 테스트가 불가능</b>했던 문제 존재",
          "따라서 API 내 <b>쿼리 파라미터로 테스트해야할 일자를 추가하는 것을 백엔드 팀에 제안</b>, 배너가 일정 별로 <b>정상적으로 렌더링되는지에 대한 테스트 환경 구축</b>",
        ],
      },
      {
        name: "스마트올 중학 화상 과외 일정 조회 기능 확장",
        date: "2023.06 ~ 2023.08",
        descriptions: [
          "기존에는 <b>단일 과목에 대한 과외 일정만 조회가 가능</b>하였기 때문에, <b>여러 과목에 대한 일정 조회가 불가능</b>하던 상황",
          "해당 문제를 해결하기 위해 <b>일정을 과목별로 세분화</b>하는 작업 진행",
          "과목별 세분화 작업을 위해, <b>백엔드 팀과의 협업을 거쳐 API 문서 추가 작성 및 기능 구현</b>",
          "과외 일정 캘린더 내 색상을 통해 과목이 구분되도록 UI 구현",
        ],
      },
    ],
  },
  {
    image: BookswageLogo,
    title: "(주) 북틀",
    date: "2023.12 ~ 2024.06",
    descriptions: [
      "국내 1위, 전자책 솔루션을 서비스하는 기업입니다.",
      "<b>풀스택 포지션</b>으로 <b>컨텐츠 웹 뷰어와 기업 내 클라우드 서비스의 기능 개발 및 유지보수</b> 업무를 담당했으며, 컨텐츠 웹 뷰어 및 클라우드 서비스 API의 <b>기술 스택 전환 마이그레이션</b>을 진행하였습니다.  ",
    ],
    contributionList: [
      {
        name: "텍스트 셀렉션 및 목차 리스트 성능 개선",
        date: "2023.12 ~ 2024.02",
        descriptions: [
          "브라우저 메모리 소요 효율을 위해, <b>EPUB 뷰어 내 텍스트 셀렉션 시</b> 각 텍스트의 Rect 값을 기준으로 Merge 작업을 추가하여 생성되는 <b>셀렉션 태그 절반 가량 감소</b>",
          "COMIC 뷰어의 <b>목차 리스트 내 Intersection observer를 활용</b>하여 <b>현재 뷰포트 내에 존재하는 컨텐츠만 조건부 API 호출 및 렌더링</b>하도록 변경하여 초기 로드 성능 개선",
          "이후, 브라우저 및 서버 부하 방지를 위해 <b>이미 응답받은 목차 데이터는 Map에 저장하도록 하여 중복 API 호출 방지</b>",
          "<b>Fetch abort controller를 활용</b>하여 목차 데이터에 대해 <b>불필요한 API 호출 방지</b> 처리 추가",
        ],
      },
      {
        name: "뷰어 프로젝트 React.js 마이그레이션",
        date: "2024.04 ~ 2024.06",
        descriptions: [
          "기존 ES5와 JQuery로 개발된 <b>웹 COMIC 뷰어 React.js로 마이그레이션</b> 진행",
          "한데 모두 모아져있던 뷰어 내 동작 모듈 역할별 분리",
          "프로젝트 경량화 및 재사용성 증진을 위해 <b>분리된 동작 모듈들을 Webpack을 활용하여 번들링 및 NPM 라이브러리화</b>",
          "뷰어의 현재 페이지, 목차 리스트와 같이 <b>동적으로 변하는 데이터를 React의 가상 DOM 활용을 위해 useState로 변경</b>",
          "React의 useEffect, useState와 같은 hooks을 적극 활용하여 웹 뷰어가 리엑트 라이프 사이클 내 동작하도록 변경",
        ],
      },
      {
        name: "클라우드 API 서버 공통화",
        date: "2024.03 ~ 2024.06",
        descriptions: [
          "사내 클라우드인 BOS 및 ITS 플랫폼의 API 서버 프로젝트는 <b>서로 중복된 코드가 많지만 분리된 두 서버로 운용</b>되던 상황",
          "서버 비용 절감을 위해 <b>두 API 서버를 통합 및 TypeORM으로 기술 스택 전환 마이그레이션</b> 진행",
          "<b>서버 부하 최소화 및 두 플랫폼에 대한 분기 처리</b>를 위해, <b>인증 방식을 세션에서 토큰 방식</b>으로 변경",
          "기존 로우 쿼리로 작성된 코드를 <b>TypeORM의 엔티티에 기반한 ORM 방식으로 변경</b>",
          "프로젝트 내 모든 레거시 코드 개선",
        ],
      },
      {
        name: "뷰어 내 원본 파일 다운로드 기능 개발",
        date: "2024.02",
        descriptions: [
          "웹 뷰어에서의 <b>부하 최소화 및 대용량 파일에 대한 안정적인 다운로드</b>를 위해 <b>Stream</b> 방식으로 다운로드 구현",
          "다운로드가 성공 및 실패 또는 중단되었을 경우, 추후 <b>원인 탐색을 위해 Stream 객체의 이벤트 리스너를 활용하여 로그 기록</b>",
          "안드로이드 디바이스 내 <b>카카오톡 인앱 브라우저에서 다운로드가 시작되지 않는 이슈</b> 발생",
          "안드로이드 및 카카오톡 인앱 브라우저일 경우, <b>외부 브라우저 앱으로 리다이렉트시키는 방식으로 해결</b>",
          "외부에서 다운로드 API를 호출할 수 없도록 <b>토큰 인증을 활용한 보안 적용</b>",
        ],
      },
      {
        name: "뷰어 열람 및 원본 파일 다운로드 현황 자료 작성 자동화",
        date: "2024.05",
        descriptions: [
          "한 달동안 진행된 학회 행사 기간 중, 학술 자료를 열람하는 <b>웹 뷰어의 열람 및 원본 파일 다운로드 현황 자료 작성 자동화</b>",
          "데이터베이스 및 로그 디렉터리를 통한 현황 수동 취합 시, 많은 시간이 소요되었던 상황",
          "<b>일자별 열람 현황 및 파일 다운로드 성공, 실패 및 중단 현황이 Excel 파일로 작성되도록 하는 작업 자동화 구축</b>",
        ],
      },
      {
        name: "컨텐츠 열람 현황 상세 조회 페이지 개발",
        date: "2024.05 ~ 2024.06",
        descriptions: [
          "뷰어 이용 계약을 맺은 기업 측에서, <b>컨텐츠 열람 횟수의 변동 현황을 한눈에 확인하고 싶다는 내용의 피드백</b>을 전달받은 상황",
          "설정한 기간 범위 내 총 열람 횟수만 나타내는 기존 방식에 더해, <b>기간 범위 내 일자별로 각각의 열람 횟수를 상세 조회할 수 있는 페이지</b> 추가 개발에 대한 아이디어 제안 및 개발",
        ],
      },
    ],
  },
];
