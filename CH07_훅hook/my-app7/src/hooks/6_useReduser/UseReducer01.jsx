/**
 * useReducer
 * 
 * :state 생성 및 관리 도구
 * 
 * 언제 사용하는가 ?
 * : 여러개의 하위값을 가지는 복잡한 state를 다뤄야 할 때
 * {
 *    teacher : 'hoew',
 *    students : ['','',''],
 *    count: 3,
 *    location : [{country : 'korea',
 *                 name : 'goodman'}]
 * }
 * 3가지 기본 개념 요소
 * 
 * [Reducer] 
 * : 컴포넌트 state 값을 변경 ex) 은행
 * 
 * [Dispatch]
 * : 컴포넌트의 state 변경 요청 ex) 고객
 * 
 * [Action]
 * : 컴포넌트의 state 변경 내용 ex) '출금' 
 *                                        (필요한정보,실행 내용)
 * Dispatch(Action) -----------------> Reducer(State,Action) -------------> State가 업데이트 된다
 */