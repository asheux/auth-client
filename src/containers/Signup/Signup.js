import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          payload: {
            name: '',
            email: '',
            password: ''
          }
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        const { payload } = this.state;
        payload[name] = value;
        this.setState({payload});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { payload } = this.state;
        const { registerActions, history } = this.props;
        registerActions(payload).then(data => {
            if(!data.data.error && data.data) {
                history.push('/');
            } else {
                this.setState({errorMessage: data.data.error});
            } 
        });
    }

    render() {
        return (
            <SignupForm message={this.state.errorMessage ? this.state.errorMessage : ''} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}

export default Signup;
