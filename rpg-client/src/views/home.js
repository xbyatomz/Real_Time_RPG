import React from 'react'
import openSocket from 'socket.io-client'

class Home extends React.Component {

    constructor (props) {
        super(props)
        document.title = "Game"

        this.state = {
            username: JSON.parse(localStorage.getItem('user')).username,
            activePlayers: []
        }

        this.socket = openSocket('http://localhost:4200')
    }

    registerHandlers() {
        this.socket.on('joined', (data) => {
            let players = this.state.activePlayers
            players.push(data)
            this.setState({
                activePlayers: players
            })
        })
    }

    componentDidMount() {
        this.registerHandlers()
        this.socket.emit('joined', this.state.username)
    }

    render() {
        const {username, activePlayers} = this.state
        return (
            <div className="container">
                <div className="game-container">
                    <h2>Currently Playing As: {username}</h2>
                    <div>
                        Active players
                        <ul>
                            {
                                activePlayers.map(player => {
                                    return (<li>{[player]}</li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home