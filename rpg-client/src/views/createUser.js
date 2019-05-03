import React from 'react'
import {Redirect} from 'react-router-dom'

class Create extends React.Component {
    constructor (props) {
        super(props)
        document.title = "Create User"

        this.state = {
            username: '',
            isSubmitted: false,
        }

        this.createUser = this.createUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    createUser(e) {
        e.preventDefault()
        const {username} = this.state
        this.setState({
            isSubmitted: true
        }, () => {
            if (username !== '') {
                localStorage.setItem('user', JSON.stringify({
                    username: username,
                    created: new Date().toISOString()
                }))
            }
        })
    }

    render() {
        const {isSubmitted, username} = this.state
        return (
            <div className="container">
                <form onSubmit={this.createUser}>
                    {
                        isSubmitted &&  username === '' ? 
                        (
                            <div className="error-message">
                                <p>Username cannot be blank!</p>
                            </div>
                        )
                        :
                        (
                            <div></div>
                        )
                    }
                    {
                        isSubmitted && username !== '' ?
                        (
                            <Redirect to={{pathname: '/'}} />
                        )
                        :
                        (
                            <div></div>
                        )
                    }
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <button className="submit">CREATE</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Create