import React, {Component} from 'react'

class CharacterInfoOne extends Component{
	render(){
		return(
			<div>
			<p>Character name: {this.props.name}</p>
			<p>Class name: {this.props.class}</p>
			</div>
		)
	}
}

export default CharacterInfoOne