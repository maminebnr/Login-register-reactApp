import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        // this.setState({password: event.target.password});
        console.log(this.state);

    }

    onSubmit(event) {
        //alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        //this.props.loginUser(userData);
        alert('email:' + userData.email + ' pwd :' + userData.password);

        axios({
            method: 'POST',
            url: 'http://192.168.8.110:4000/auth/signin',
            headers: {
                'Content-type': 'application/json',
            },
            data: {

                email: this.state.email,
                password: this.state.password
            }
        }).then(response => {
            console.log("succes login", response)
        });

    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    <Link to={"/signup"}>register</Link>
                </p>
            </form>
        );
    }
}
