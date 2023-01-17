import React from 'react';
import './assets/css/form.css';
class Form extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
//   this.state = { title: 'Best App' };
}
	
  render() {
    const fullname = (<><label for="fname">Full Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/></>);
    return (
        <div>
            <h1 className='head_text'> {this.props.login == "1" ? "Login" : "Registration"} </h1>
        <form>
        {this.props.login == "1" ? "" : fullname}
         
          <label for="lname">Username</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      
          <label for="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Your Password"/>
         
        
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default Form;
