import React, {Component} from 'react'
import CharacterInfoOne from './CharacterInfoOne'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

class CharacterList extends Component{
	render(){
		return(
			<div>
				<CharacterInfoOne name={this.props.id}/>
				<nav className="character-one-nav-bar">
					<Link to="/character/update">Update</Link>
					<Link to="character/delete">Delete</Link>
				</nav>
			</div>
		)
	}
}

export default CharacterList