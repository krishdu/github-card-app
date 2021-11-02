import React from 'react';
import './App.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "Facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


//function component
const CardList = (props) => (
  <div>
    {testData.map(profile => <Card {...profile}/>)}
  </div>
);

//class component
class Card extends React.Component {
	render() {
    const profile =this.props;
  	return (
      <div className="container border border-warning">
        <div className="row">
          <div className="col-4">
              <img src={profile.avatar_url} className="img-fluid rounded-pill" alt="profile"/>
          </div>
          <div className="col-8 mt-5">
               <h5> {profile.name} </h5>
               <h6> {profile.company} </h6>
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
        <CardList />
    	</div>
    );
  }	
}


export default App;
