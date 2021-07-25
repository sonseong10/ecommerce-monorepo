# Whomember

## Intro

**회사 내부 업무 지원 서비스**

- [x] 직원의 정보를 쉽고 빠르게 확인 가능
- [x] Markdoun을 지원하며 업무관리 용이
- [x] PWA로 홈화면 설치 가능

## 제작기간

2021.05 - Project Planning

2021.06 - Implementing

2021.07 - 🚀 First Deployment

## Tool Stack

<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img alt="PostCSS" src ="https://img.shields.io/badge/postcss-DD3A0A.svg?&style=for-the-badge&logo=postcss&logoColor=white"/> <img alt="Yarn" src ="https://img.shields.io/badge/Yarn-2c8ebb.svg?&style=for-the-badge&logo=yarn&logoColor=white"/> <img alt="Firebase" src ="https://img.shields.io/badge/Firebase-ffca28.svg?&style=for-the-badge&logo=firebase&logoColor=white"/>

- [x] PWA

## Live Demo

[Whomember](https://whomember-7d831.web.app/)

## Preview

**Search**

![search](https://user-images.githubusercontent.com/68719427/126887758-52486dfb-06ef-461d-9ed8-eddcfe8c88ca.gif)

**Post**

![post](https://user-images.githubusercontent.com/68719427/126887761-da7c8ef7-872f-4103-923f-93033f563668.gif)

**PWA**

![pwa](https://user-images.githubusercontent.com/68719427/126887885-fd8041e0-bf63-491c-a901-4a8620caeeee.png)

## Etc

- `<meta>` 태그 작성

```html
<meta property="og:url" content="/" />
<meta property="og:type" content="website" />
<meta property="og:image" content="./meta-image.jpg" />
<meta property="og:title" content="후멤버(Whomember)" />
<meta
  property="og:description"
  content="직장내 업무도우미, Who member입니다."
/>
```

![kakao](https://user-images.githubusercontent.com/68719427/126889602-e51e15f8-7e3f-40e8-b2aa-6ed92039491a.png)

### Notice (느낀점)

- None scrollbar style

> Native app 처럼 보이기 위해 scroll bar를 숨겼지만 UX적으로 좋지 못한거 같아 고민중 입니다.

```css
::-webkit-scrollbar {
  display: none;
}
```

- 커밋·배포 전 세밀한 체크 필요성.

> 😢 커밋·배포를 해야 보이는 버그를 줄일 필요가 있습니다.

- Clean code의 지름길 체계적인 컴포넌트 구조 설정 필요성

> 😢 기획 디자인 개발을 동시에 진행하다 보니 재사용성이 떨어지는 컴포넌트들이 많아졌습니다.

- 웹 접근성을 위한 aria attributes 사용

> 😢 좀 더 [aria attributes](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)를 공부하여 웹 접근성을 높일 필요성이 있습니다.
