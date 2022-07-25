// const element = <h1> 태그 추가 </h1>

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.nickname}</h1>
  }
}
ReactDOM.render(
  //컴포넌트 사용
  <Hello nickname="펭수"/>,
  document.getElementById('root'),
  
);