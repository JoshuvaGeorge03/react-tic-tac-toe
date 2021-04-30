import './index.css';

import React from 'react';
import ReactDom from 'react-dom';

class Square extends React.Component {
    render() {
        return <button onClick={() => this.props.onClick()} className="square">
            {this.props.value}
        </button>
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null) /**To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component. */
        }
    }
    handleClick(i) {
        const squares = this.state.squares.slice(0);
        squares[i] = 'X';
        this.setState({ squares });
    }
    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
    }
    render() {
        const status = 'Next Player X';
        return <div>
            <div className={"status"}>{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
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