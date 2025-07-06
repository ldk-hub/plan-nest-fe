import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 🎯 예제 1: Props 이해하기 - 부모에서 자식으로 데이터 전달
interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age = 29 }) => {
  return (
    <ExampleBox>
      <h3>📝 Props 예제 - 데이터 전달</h3>
      <Explanation>
        Props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 방법입니다.
        <br />
        • name: 필수 값 (string)
        <br />
        • age: 선택적 값 (number, 기본값: 20)
      </Explanation>
      <ResultBox>
        <p>안녕하세요, <strong>{name}</strong>님!</p>
        <p>나이: <strong>{age}</strong>세</p>
      </ResultBox>
    </ExampleBox>
  );
};

// 🎯 예제 2: State와 이벤트 핸들링 - 컴포넌트 내부 상태 관리
const Counter: React.FC = () => {
  // useState: 컴포넌트의 상태를 관리하는 React 훅
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 이벤트 핸들러 함수들
  const handleIncrement = () => {
    setCount(count + 1); // count 값을 1 증가
  };

  const handleDecrement = () => {
    setCount(count - 1); // count 값을 1 감소
  };

  const handleReset = () => {
    setCount(0); // count 값을 0으로 초기화
  };

  return (
    <ExampleBox>
      <h3>🔢 State와 이벤트 예제 - 상태 관리</h3>
      <Explanation>
        useState 훅을 사용해서 컴포넌트 내부의 상태를 관리합니다.
        <br />
        • count: 숫자 상태 (초기값: 0)
        <br />
        • name: 문자열 상태 (초기값: 빈 문자열)
        <br />
        • setCount, setName: 상태를 변경하는 함수
      </Explanation>
      
      <ResultBox>
        <h4>카운터</h4>
        <p>현재 값: <strong>{count}</strong></p>
        <ButtonGroup>
          <Button onClick={handleIncrement}>증가 (+)</Button>
          <Button onClick={handleDecrement}>감소 (-)</Button>
          <Button onClick={handleReset}>초기화</Button>
        </ButtonGroup>
        
        <h4>이름 입력</h4>
        <Input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        <p>입력한 이름: <strong>{name || '입력 없음'}</strong></p>
      </ResultBox>
    </ExampleBox>
  );
};

// 🎯 예제 3: useEffect 이해하기 - 부수 효과 처리
const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // useEffect: 컴포넌트가 렌더링된 후 실행되는 부수 효과
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    // isRunning이 true일 때만 타이머 실행
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1); // 이전 값에 1을 더함
      }, 1000); // 1초마다 실행
    }

    // cleanup 함수: 컴포넌트가 언마운트되거나 의존성이 변경될 때 실행
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]); // isRunning이 변경될 때마다 useEffect 재실행

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <ExampleBox>
      <h3>⏰ useEffect 예제 - 부수 효과 처리</h3>
      <Explanation>
        useEffect는 컴포넌트가 렌더링된 후 실행되는 부수 효과를 처리합니다.
        <br />
        • 타이머 시작/정지 시 setInterval 설정/해제
        <br />
        • 컴포넌트 언마운트 시 타이머 정리
        <br />
        • 의존성 배열 [isRunning]에 따라 재실행
      </Explanation>
      
      <ResultBox>
        <h4>타이머</h4>
        <p>경과 시간: <strong>{seconds}</strong>초</p>
        <p>상태: <strong>{isRunning ? '실행 중' : '정지'}</strong></p>
        <ButtonGroup>
          <Button onClick={toggleTimer}>
            {isRunning ? '정지' : '시작'}
          </Button>
          <Button onClick={resetTimer}>리셋</Button>
        </ButtonGroup>
      </ResultBox>
    </ExampleBox>
  );
};

// 🎯 예제 4: 조건부 렌더링 - 조건에 따른 UI 변경
const ConditionalRendering: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <ExampleBox>
      <h3>🔄 조건부 렌더링 예제 - 조건에 따른 UI 변경</h3>
      <Explanation>
        조건에 따라 다른 UI를 보여주는 방법입니다.
        <br />
        • 삼항 연산자 사용: {`{조건 ? 참일때 : 거짓일때}`}
        <br />
        • && 연산자 사용: {`{조건 && 컴포넌트}`}
        <br />
        • 현재 상태: <strong>{isLoggedIn ? '로그인됨' : '로그아웃됨'}</strong>
      </Explanation>
      
      <ResultBox>
        {!isLoggedIn ? (
          <div>
            <h4>로그인 화면</h4>
            <p>로그인이 필요합니다.</p>
            <Input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              placeholder="사용자명을 입력하세요"
            />
            <Button onClick={handleLogin}>로그인</Button>
          </div>
        ) : (
          <div>
            <h4>환영 화면</h4>
            <p>환영합니다, <strong>{username}</strong>님!</p>
            <Button onClick={handleLogout}>로그아웃</Button>
          </div>
        )}
      </ResultBox>
    </ExampleBox>
  );
};

// 🎯 예제 5: 리스트 렌더링 - 배열 데이터 표시
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]); // 기존 배열에 새 항목 추가
      setInputValue(''); // 입력 필드 초기화
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index)); // 해당 인덱스 제외한 새 배열 생성
  };

  return (
    <ExampleBox>
      <h3>📋 리스트 렌더링 예제 - 배열 데이터 표시</h3>
      <Explanation>
        배열 데이터를 화면에 표시하는 방법입니다.
        <br />
        • map() 함수로 배열의 각 항목을 컴포넌트로 변환
        <br />
        • key prop으로 React가 각 항목을 구분할 수 있게 함
        <br />
        • 현재 할 일 개수: <strong>{todos.length}</strong>개
      </Explanation>
      
      <ResultBox>
        <h4>할 일 목록</h4>
        
        <div>
          <Input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="할 일을 입력하세요"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <Button onClick={addTodo}>추가</Button>
        </div>

        {todos.length === 0 ? (
          <p>할 일이 없습니다. 새로운 할 일을 추가해보세요!</p>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <TodoItem key={index}>
                <span>{todo}</span>
                <Button onClick={() => removeTodo(index)}>삭제</Button>
              </TodoItem>
            ))}
          </ul>
        )}
      </ResultBox>
    </ExampleBox>
  );
};

// 스타일링 컴포넌트들
const ExampleBox = styled.div`
  padding: 20px;
  margin: 20px 0;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Explanation = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #007bff;
  font-size: 14px;
  line-height: 1.6;
  color: #495057;
`;

const ResultBox = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #007bff;
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 8px;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  list-style: none;
`;

// 메인 학습 컴포넌트
const LearningExamples: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>🎓 React 기초 개념 학습</h1>
        <p>각 예제를 클릭하고 수정해보면서 React의 동작 방식을 이해해보세요!</p>
      </Header>
      
      <Greeting name="김철수" age={25} />
      <Greeting name="이영희" />
      
      <Counter />
      <Timer />
      <ConditionalRendering />
      <TodoList />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  background: #f8f9fa;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  h1 {
    color: #2c3e50;
    margin-bottom: 10px;
  }

  p {
    color: #7f8c8d;
    font-size: 16px;
  }
`;

export default LearningExamples; 