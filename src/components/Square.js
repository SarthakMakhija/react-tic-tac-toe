import React, {Component} from 'react'
import PropTypes          from 'prop-types'

import './Board.css'

class Square extends Component {

	constructor(){
		super();
		this.setSymbolAt = this.setSymbolAt.bind(this);
	}

	setSymbolAt(){
		this.props.clickCallBack(this.props.symbol.index)
	}

	render(){
		return (
			<div className='btn' style={this.props.style} onClick={this.setSymbolAt}>
				<strong>{this.props.symbol.value}</strong>
			</div>
		)
	}
}

Square.propTypes = {
	style         : PropTypes.object,
	symbol        : PropTypes.object,
	clickCallBack : PropTypes.func
};

export default Square