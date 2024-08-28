# 🗒 Portfolio

<br/>

[![license](https://img.shields.io/badge/License-GPL-red)](https://en.wikipedia.org/wiki/GNU_General_Public_License)
[![code](https://img.shields.io/badge/Code-Typescript-blue)](https://www.typescriptlang.org/)
[![Framework](https://img.shields.io/badge/Framework-React-orange)](https://react.dev/)
[![member](https://img.shields.io/badge/Project-Personal-brightgreen)](https://github.com/qkrwlgh123)

<br/>

<img src="https://github.com/user-attachments/assets/c2100b00-046a-458a-beae-19f5be7c6bc6" alt="Image Description" width="800"/>

<br/>

## 📖 Description

개인 이력 및 프로젝트 경험을 정리하여 웹으로 구현한 프로젝트입니다.

<br/>

## 💻 Getting Started

### Installation

```
npm install
```

### Develop Mode

```
npm start
```

### Production

```
npm run build
```

<br/>

## 🔧 Stack

- **Language**: TypeScript
- **Library & Framework** : React.js, Styled-component, framer-motion
- **Deploy**: AWS S3, Cloudfront, Github-actions

<br/>

## :open_file_folder: Project Structure

```markdown
.github
├── workflows
public
src
├── asset
│   ├── image
├── components
├── data
├── styles
│   ├── layout
│   ├── fonts
├── types
├── App.tsx
├── index.tsx
package.json
```

<br/>

## 🔨 Architecture

<img src="https://github.com/user-attachments/assets/22e0b225-5a10-4c0b-8998-d551bdb7fb9c" alt="Image Description" width="1000"/>

<br/>

## ⚒ CI/CD

- github actions를 활용해서 지속적 통합 및 배포
- `main`로 변경 사항 커밋이 push되면, CI / CD trigger
- package.json의 의존성 리스트에 기반하여 npm 모듈 설치
- 프로젝트 빌드
- 빌드 완료 후, AWS내 S3 버킷에 빌드된 프로젝트 업로드
- Cloudfront에 변경사항을 반영하기 위해, Invalidation을 통해 캐시 무효화 요청

<br/>

## 👨‍👩‍👧‍👦 Developer

- **박지호** ([qkrwlgh123](https://github.com/qkrwlgh123))
