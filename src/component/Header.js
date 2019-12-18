import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
	render(){
		return(
			<div>
				<h1>test</h1>
				<nav className="nav-bar">
					<Link to='/character'>Character</Link>
					<Link to='/class'>Class</Link>
					<Link to='/weapon'>Weapon</Link>
				</nav>
			</div>
		)
	}
}

export default Header