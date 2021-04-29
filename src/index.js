import './index.css';

import React from 'react';
import ReactDom from 'react-dom';

class Square extends React.Component {
    render() {
        return <button className="square"></button>
    }
}

class Board extends React.Component {
    render() {
        const status = 'Next Player X';
        return <div>
            <div className={"status"}>{status}</div>
            <div className="board-row">
                <Square/>
                <Square></Square>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square></Square>
                <Square/>
            </div>
            <div className="board-row">
                <Square/>
                <Square></Square>
                <Square/>
            </div>
        </div>
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}


ReactDom.render(<Game />, document.getElementById('root'));