# React 학습 가이드 📚

## 🎯 학습 목표
React를 처음부터 차근차근 배우면서 Plan Nest 프로젝트를 완성하기

## 📖 1단계: React 기초 개념 (1-2주)

### 핵심 개념들
- **JSX**: HTML과 JavaScript를 함께 사용하는 문법
- **컴포넌트**: 재사용 가능한 UI 조각
- **Props**: 부모에서 자식으로 데이터 전달
- **State**: 컴포넌트 내부 상태 관리
- **Event Handling**: 사용자 상호작용 처리

### 실습 예제
```jsx
// 간단한 카운터 컴포넌트
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>카운터: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        증가
      </button>
      <button onClick={() => setCount(count - 1)}>
        감소
      </button>
    </div>
  );
}
```

## 🚀 2단계: 실전 프로젝트 단계별 구현

### Step 1: 간단한 컴포넌트 만들기
- 버튼 컴포넌트
- 카드 컴포넌트
- 입력 폼 컴포넌트

### Step 2: 상태 관리 배우기
- useState 훅
- useEffect 훅
- 이벤트 핸들링

### Step 3: 라우팅 구현
- React Router 사용법
- 페이지 간 이동

### Step 4: API 연동
- fetch API 사용
- 데이터 로딩 상태 관리

## 📚 추천 학습 자료

### 무료 자료
1. **React 공식 문서**: https://react.dev/
2. **한국어 React 튜토리얼**: https://ko.react.dev/
3. **YouTube 채널**: 코딩애플, 드림코딩

### 실습 프로젝트
1. 할 일 목록 (Todo List)
2. 간단한 블로그
3. 쇼핑몰 상품 목록

## 🎯 현재 프로젝트에서 배울 수 있는 것들

### 이미 구현된 것들
- ✅ 컴포넌트 구조
- ✅ Styled Components
- ✅ 라우팅 설정

### 다음에 배울 것들
- 🔄 상태 관리
- 🔄 폼 처리
- 🔄 API 연동
- 🔄 에러 처리 