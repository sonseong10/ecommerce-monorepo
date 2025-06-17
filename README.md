# 🛍️ Ecommerce domain Monorepo 적용기

## Nx를 활용한 모노레포를 사용하는 이유

[nx](https://nx.dev/)

- [x] 코드 재사용 및 공유 용이
여러 앱(admin, service 등)에서 공통 컴포넌트, 유틸리티, 타입 등을 libs/로 분리하여 쉽게 공유 가능
중복 코드를 줄이고, 수정 시 전체 앱에 일관되게 반영할 수 있음

- [x] 버전 관리 일원화
하나의 레포지토리에서 모든 앱과 라이브러리의 변경 이력을 함께 관리
의존성 충돌을 줄이고, 변경 사항의 추적이 쉬움

- [x] 개발 및 빌드 효율성
Nx 빌드 도구를 통해 의존성 그래프 기반 캐싱과 변경된 프로젝트만 빌드
전체 빌드 시간을 단축하고, 로컬 개발 속도 향상

- [x] 일관된 개발 환경
ESLint, Prettier, TypeScript 설정을 libs/config 등으로 공통화 가능
모든 앱에서 동일한 린팅/포맷팅/타입 체크 환경을 유지

- [x] 협업 및 유지보수 용이
팀 단위로 앱/라이브러리를 나눠도 같은 코드베이스에서 동시 개발 가능
공통 코드를 직접 참조하며 빠르게 문제 해결

- [x] 테스트와 문서화 통합
공통 라이브러리에 대한 테스트 및 Storybook 문서화가 하나의 레포 내에서 이루어짐
변경 사항에 따른 테스트/빌드/배포 자동화가 쉬움

## 폴더구조

ecommerce-monorepo
L apps
    L admin  // 어드민
    L service // 서비스
L libs
    L commons  // 공통UI 컴포넌트
    L storybook // 스토리북


## 앱 실행
```bash
# 관리자 앱 실행
yarn nx serve admin

# 사용자 서비스 앱 실행
yarn nx serve service

# Storybook 실행
yarn nx run storybook
```
    

## admin <-> 공용 ui컴포넌트 연결
[#1](https://github.com/sonseong10/ecommerce-monorepo/issues/1) 해당 이슈로 진행중에 있으며 점진적 모노레포 적용중
