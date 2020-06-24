import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";


export default class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state)
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.fname,
            email: this.state.lname,
            password: this.state.email,
            password2: this.state.password
        };
        console.log("succes", newUser)
        //this.props.registerUser(newUser, this.props.history);


        axios({
            method: 'POST',
            url: 'http://192.168.8.110:4000/auth/signup',
            headers: {
                'Content-type': 'application/json',
            },
            data: {
                name: this.state.fname,
                email: this.state.lname,
                password: this.state.email,
                password2: this.state.password
            }
        }).then(response => {
            console.log("succes register", response)
        });

    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="fname" value={this.state.fname}
                        onChange={this.onChange} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="lname" value={this.state.lname}
                        onChange={this.onChange} className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" value={this.state.email}
                        onChange={this.onChange} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password}
                        onChange={this.onChange} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered   <Link to={"/signin"}>Login</Link>

                </p>
            </form>
        );
    }
}