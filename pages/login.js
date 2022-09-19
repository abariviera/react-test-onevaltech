import React from "react";
import Header from "../components/organisms/header/header"
import LoginRoute from "./loginRoute"

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        console.log(event.target[0].value);        
        event.preventDefault();
    }

    render() {
        return  (<div>
            <Header/>
            <section className="login">
                <h2 className="help__heading">Where teams design together</h2>
                <div id="contact">
                    <form id="contact-form" onSubmit={this.handleSubmit}>
                        <input type="email" name="email" placeholder="Email" id="email" value={this.state.value} onChange={this.handleChange}></input>
                        <button type="submit" className="btn btn--primary" onClick={LoginRoute}>Login</button>
                    </form>
                </div>               
            </section>
        </div>);        
    }
    
}

