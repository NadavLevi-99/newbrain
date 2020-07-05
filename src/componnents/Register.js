import React from 'react';

class Register extends React.Component  {
  constructor(){
    super(); 
    this.state = {
        RegisterName:"",
        RegisterEmail:"",
        RegisterPassword:"",
    }
  }
  onNameChange = (event) => {
    this.setState({RegisterName: event.target.value});
  }
  onEmailChange = (event) => {
    this.setState({RegisterEmail: event.target.value});
  }
  onPasswordChange = (event) => {
    this.setState({RegisterPassword: event.target.value});
  }
  onSubmitRegister = () => {
    fetch("http://localhost:3000/register", {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.RegisterName,
        email: this.state.RegisterEmail,
        password: this.state.RegisterPassword
      })
    })
    .then(responce => responce.json())
    .then(data => {
      console.log(data);
     this.props.loaduser(data);
    })
    this.props.onRouteChange("home");

  }
 
  render(){
    const { onRouteChange } = this.props;
  return(
    <div>
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
    <main className="tc pa4 black-80" >
    <form className="measure" >
      <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="tc f2 fw6 ph0 mh0">Register</legend>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
          <input className="pa2 input-reset ba bg-transparent hover-white w-100" type="text" name="Name"  id="Name" onChange={this.onNameChange}/>
        </div>
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input className="pa2 input-reset ba bg-transparent  hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
          <input className="b pa2 input-reset ba bg-transparent  hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
        </div>
      </fieldset>
      <div className="">
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"
         onClick={this.onSubmitRegister}/>
      </div>
      <div className="lh-copy mt3">
        <p onClick={() => onRouteChange("signin")} className="tc f6 link dim black db">Sign in</p>
      </div>
    </form>
  </main>
  </article>
  </div>
  );
  }
  }

export default Register;