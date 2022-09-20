import React from "react";
import Header from "../components/organisms/header/header"
import Link from "next/link";
import {appendScript} from '../utils/appendScript'

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount () {
        appendScript("../scripts/boxever.js");
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {    
        var email = this.state.value;
        console.log(email);  
        _boxeverq.push(function() {
            var identityEvent = {
              channel: "WEB",
              type: "IDENTITY",
              language: "EN",
              currency: "USD",
              page: "login",
              pos: "CapybaraHackathon",
              browser_id: Boxever.getID(),
              identifiers: [{
                provider: "Capybara",
                id: "123456"
              }],
              email: email
            };
            
            Boxever.eventCreate(identityEvent, function(data) {}, "json");
        });
        event.preventDefault();
    }

    render() {
        return  (<div>
            <Header/>
            <section className="login">
                <h2 className="form__heading">Where teams design together</h2>
                <div id="contact">
                    <form id="contact-form" onSubmit={this.handleSubmit} className="form__content">
                        <input type="email" name="email" placeholder="Email" id="email" value={this.state.value} onChange={this.handleChange}></input>
                        <button type="submit" className="btn btn--primary" onClick={this.handleSubmit}> 
                            <Link href="/profile">
                                Login
                            </Link>
                        </button>                                        
                    </form>
                </div>               
            </section>
        </div>);        
    }    
}

