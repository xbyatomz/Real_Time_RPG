import React from 'react'

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="game-container">
                    <h2>Welcome {JSON.parse(localStorage.getItem('user')).username}</h2>
                </div>
            </div>
        )
    }
}

export default Home