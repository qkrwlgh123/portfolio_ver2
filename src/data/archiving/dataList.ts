import GithubImage from "../../asset/image/archiving/github.png";
import VelogImage from "../../asset/image//archiving/velog.svg";
import DocumentsImage from "../../asset/image/archiving/documents.png";

export const dataList = [
  {
    image: GithubImage,
    link: "https://github.com/qkrwlgh123",
    subtitle: "개인 소스코드를 관리하는 형상관리 저장소",
    description: [
      "<b>프로젝트 및 학습 결과물</b>에 대한 소스 코드",
      "프로젝트 완료 후, <b>프로젝트 설명과 디렉터리 구조 및 아키텍처</b> 기록",
    ],
  },
  {
    image: VelogImage,
    link: "https://velog.io/@jiho1024",
    subtitle: "지식 공유 및 문제 해결 과정 기록 블로그",
    description: [
      "<b>문제 해결 및 사고했던 과정</b> 기록",
      "학습한 내용 정리 및 기록",
      "지식 습득을 원하거나 비슷한 문제를 겪는 <b>개발자들과의 공유</b>를 위한 공간",
    ],
  },
];

export const longDataList = [
  {
    image: DocumentsImage,
    link: [
      {
        link: "https://therapeutic-iridium-a60.notion.site/PPT-cdb764426ef84c51b2f8af1512a3c6fb?pvs=74",
        text: "(주) 웅진씽크빅 인턴 사원 재직 당시, 교육 컨텐츠 통합 웹 뷰어 및 중학 교육 플랫폼 업무 진행 발표 자료",
      },
      {
        link: "https://therapeutic-iridium-a60.notion.site/Zip-viewer-25af5a692c9c48a59e8f3ac5f988749a",
        text: "(주) 북틀 재직 당시, 도서 컨텐츠 웹 뷰어 내 기능 모듈 분리를 통한 추상화 진행 발표 자료",
      },
      {
        link: "https://therapeutic-iridium-a60.notion.site/ZIP-NPM-be6c88d82f9e42cc99deb5177589e92e",
        text: "(주) 북틀 재직 당시, 도서 컨텐츠 웹 뷰어 내 기능 모듈 NPM 라이브러리화 진행 발표 자료",
      },
    ],
    subtitle:
      "기업에서 다양한 프로젝트 및 기술발표를 준비하며 작성했던 자료 모음",
  },
];
