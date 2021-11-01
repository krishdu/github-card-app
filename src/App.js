import React from 'react';
import './App.css';

class Card extends React.Component {
	render() {
  	return (
      <div className="container border border-warning">
        <div className="row">
          <div className="col-4">
              <img src="https://avatars.githubusercontent.com/u/37765333?v=4" className="img-fluid rounded-pill" alt="profile"/>
          </div>
          <div className="col-8 mt-5">
               <h5>Card title</h5>
                <a href="/" className="btn btn-primary btn-sm">View Profile</a>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
	render() {
  	return (
    	<div className="container">
    	  <div className="text-center h3">{ this.props.title }</div>
        <Card />
    	</div>
    );
  }	
}


export default App;
