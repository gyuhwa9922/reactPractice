/**
 * 컴포넌트
 * 
 * 
 * 함수 컴포넌트
 */

function Welcome(props){
  return <h1>hello, {props.name}</h1>
}

/**
 * 클래스 컴포넌트
 */
class Welcome2 extends React.Component{
  render(){
    return <h1>hello, {this.props.name}</h1>
  }
}
<Welcome name = "안철수"></Welcome>