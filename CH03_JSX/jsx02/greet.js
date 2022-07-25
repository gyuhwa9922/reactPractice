//jsx
/**
 * tag는 무조건 닫혀있어야 한다.
 * 
 * 2개 이상의 element는 무조건 하나의 element로 감싸져야한다.
 */

class app2 extends React.Compoment {
  render() {
    return (
      <div>
        <div>dsdsdsd</div>
        <button>button</button>
        <h3>h3</h3>
      </div>
    );
  }
}
/**
 * jsx 내부에서 변수를 사용하려면 코드를 {}로 감싸줘야한다.
 */

class App3 extends React.Compoment {
  render() {
    const title = "100분 토론";

    return (
      <>
        <h1>이어서 {title}이 시작합니다. </h1>
      </>
    );
  }
}

/**
 * {} 자바스크립트 if문이 사용 불가 할때
 * 삼항 연산자를 사용
 */

class App4 extends React.Compoment {
  render() {
    let flag = true;
    return (
      <div>
        {
          flag ? <p>안녕</p> : <p> 안녕 못 하겠는 걸</p>
        }
      </div>
    );
  }
}
/**
 * 카멜케이스 표기법
 */

class App5 extends React.Compoment {
  render() {
    return (
      <div classname="app5">
        <h1>contents</h1>
      </div>
    );

  }
}