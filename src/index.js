import React, {Component} from 'react'
import ReactDOM           from 'react-dom'
import Board              from './components/Board'

class Index extends Component {

	render(){
		return (
			<div>
				<Board />
			</div>
		)
	}
}

ReactDOM.render(<Index/>, document.querySelector("#app"));