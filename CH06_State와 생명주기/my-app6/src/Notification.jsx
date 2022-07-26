import React, { Component } from 'react';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.id, 'componentDidMount');
  }
  componentDidUpdate() {
    console.log(this.props.id, 'componentDidUpdate');
  }
  componentWillUnmount() {
    console.log(this.props.id, 'componentWillUnmount');
  }

  render() {
    return (
      <>
        <div className="container" id="root">
          <div className="alert alert-success" role="alert">
            <i className='fa-solid fa-bell'></i>
            <span>{this.props.id}</span>
            <h4 className="alert-heading">{this.props.header}</h4>
            <p>{this.props.message}</p>
            <hr />
            <p className="mb-0">
              <i className='fa-solid fa-clock-rotate-left'></i>
              <span>
                {
                  new Date().toLocaleDateString() +""+new Date().toLocaleTimeString()
                }
            </span>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Notification;