import React from 'react';
const styles = {
  card: {
    width: '18rem',
    textAlign : `center`
  },
  card_body: {
    fontSize : `30px`,
    fontFamily: `'Nanum Myeongjo', serif`,
    fontFamily: `'Nanum Pen Script', cursive`,
    fontFamily: `'Noto Sans KR', sans - serif`,
    fontFamily: `'Square Peg', cursive`
  }
}
function Card(props) {

  const title = props.title;
  const content = props.content;
  const img = props.img;
  

  return (
    <div className="card" style={styles.card}>
      <img src={`${img}`} className="card-img-top" alt="" />
      <div className="card-body" style={styles.card_body}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">go details</a>
      </div>
    </div>
  );
}

export default Card;