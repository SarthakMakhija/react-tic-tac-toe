import React, {Component} from 'react'
import Square             from './Square'
import './Board.css'

class Board extends Component {

	constructor(){
		super();

		this.setSymbolAt           = this.setSymbolAt.bind(this);
		this.updateStateIfGameOver = this.updateStateIfGameOver.bind(this);
		this.areSymbolsSame        = this.areSymbolsSame.bind(this);

		this.state       = {
			"squares"       : Array(9).fill(null),
			"currentSymbol" : "X",
			"gameOver"      : false
		};
	}

	setSymbolAt(index){
		let currentSymbol = this.state.squares[index];
		let gameOver      = this.state.gameOver;

		if ( currentSymbol == null && gameOver === false ){
			let updatedSymbols = Object.assign([], this.state.squares, {[index]: this.state.currentSymbol});
			let updatedSymbol  = this.state.currentSymbol == 'X' ? '0' : 'X';

			this.setState({
				"squares"      : updatedSymbols,
				"currentSymbol": updatedSymbol
			}, this.updateStateIfGameOver);
		}
	}

	updateStateIfGameOver(){
		if ( this.areSymbolsSame(0, 2, 1) || this.areSymbolsSame(3, 5, 1) || this.areSymbolsSame(6, 8, 1) ||
			   this.areSymbolsSame(0, 6, 3) || this.areSymbolsSame(1, 7, 3) || this.areSymbolsSame(2, 8, 3) ||
			   this.areSymbolsSame(0, 8, 4) || this.areSymbolsSame(2, 6, 2)
			 ) {
			this.setState({"gameOver": true});
		}
	}

	areSymbolsSame(start, end, step){
		let squares     = this.state.squares;
		let checkSymbol = squares[start];

		for ( let index = start; index <= end; index = index + step ){
			if ( checkSymbol == null || squares[index] == null ) return false;
			if ( squares[index] != checkSymbol )                 return false;
		}
		return true;
	}

	render(){
		const leftBorderStyle = {
			"borderLeft": "1px solid"
		};
		const topBorderStyle = {
			"borderTop": "1px solid"
		};
		const borderStyle = Object.assign({}, leftBorderStyle, topBorderStyle);

		return (
			<div className='container'>
				<div className='banner'>
					{this.state.gameOver === true ? <strong>Game Over !!</strong> : <i>Current Symbol <strong>{this.state.currentSymbol}</strong></i>}
				</div>
				<div className='row'>
					<Square style={borderStyle}     symbol={{index: 0, value: this.state.squares[0]}} clickCallBack={this.setSymbolAt} />
					<Square style={topBorderStyle}  symbol={{index: 1, value: this.state.squares[1]}} clickCallBack={this.setSymbolAt} />
					<Square style={topBorderStyle}  symbol={{index: 2, value: this.state.squares[2]}} clickCallBack={this.setSymbolAt} />
				</div>
				<div className='row'>
					<Square style={leftBorderStyle} symbol={{index: 3, value: this.state.squares[3]}} clickCallBack={this.setSymbolAt} />
					<Square                         symbol={{index: 4, value: this.state.squares[4]}} clickCallBack={this.setSymbolAt} />
					<Square                         symbol={{index: 5, value: this.state.squares[5]}} clickCallBack={this.setSymbolAt} />
				</div>
				<div className='row'>
					<Square style={leftBorderStyle} symbol={{index: 6, value: this.state.squares[6]}} clickCallBack={this.setSymbolAt} />
					<Square                         symbol={{index: 7, value: this.state.squares[7]}} clickCallBack={this.setSymbolAt} />
					<Square                         symbol={{index: 8, value: this.state.squares[8]}} clickCallBack={this.setSymbolAt} />
				</div>
			</div>
		)
	}
}

export default Board