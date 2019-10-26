import React, {Component} from 'react';
import InstaService from '../services/InstaService';
import User from './User';
import ErrorMessage from './Error';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers() {
        this.InstaService.getProfileUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError);
    }

    onUsersLoaded = (users) => {
        this.setState({
            users,
            error: false
        })
        console.log(this.state.users);
    }

    onError = () => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map(item => {
            const {name, src, min} = item;

            return (
                <div className="right">
                    <User
                        name={name}
                        src={src}
                        min={min}/>
                </div>    
            )
        })
    }

    render() {
        const {error, users} = this.state;

        if (error) {
            return <ErrorMessage/>
        }
        const items = this.renderItems(users);

        return (
            <div className="right">
                {items}
            </div>
        )
    }
}