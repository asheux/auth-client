import { connect } from 'react-redux';
import usersActions from '../../redux/getusersAction.js';
import React, { Component } from 'react';
import Navbar from '../Navbar';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const { usersActions } = this.props;
        usersActions().then(data => {
            if (data.data) {
                this.setState({data: data.data});
            }
        });
    }

    renderData = (user) => (
        <div key={user.id} className="col-sm-3">
            <div className="box">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    );

    render() {
        const { data } = this.state;

        return (
            <React.Fragment>
                <Navbar/>
                <div className="jumbotron bg-warning text-center">
                    <h1>The Authentication API</h1>
                    <p>This is a test for the authentication API!</p>
                </div>

                <div className="container">
                    <h1>Users</h1>
                    <div className="row">
                        {data.map(user => this.renderData(user))} 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({users}) => ({
    users: users.data
});

export default connect(
    mapStateToProps, {
    usersActions
})(Home);

