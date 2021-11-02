import React from 'react';
import axios from 'axios';
import './App.css';


//function component
const CardList = (props) => (
  <div>
    {props.profile.map(profile => <Card key={profile.id} {...profile}/>)}
  </div>
);

//class component
class Form extends React.Component{
  state = {userName : ''};

  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(resp.data);
    this.setState({userName : ''});
  };

  render(){
    return(
      <div className="container mb-3">
        <form  className="form-inline" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-8">
                <input type="text"
                  className = "form-control"
                  onChange = { event => this.setState({userName : event.target.value})} 
                  value = {this.state.userName}
                  placeholder="GitHub username"
                  required/>
            </div>
            <div className="col-4">
                <button type="submit" className="btn btn-success">Add card</button>
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}

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
               <h6> {profile.location} </h6>
          </div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    profiles : [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles : [...prevState.profiles, profileData],
    }));
  }

	render() {
  	return (
    	<div className="container">
    	  <div className="text-center h3">{ this.props.title }</div>
        <Form onSubmit = {this.addNewProfile}/>
        <CardList profile = {this.state.profiles} />
    	</div>
    );
  }	
}


export default App;
