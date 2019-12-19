import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
	render(){
		return(
			<div>
				<h1>Project Three</h1>
				<nav className="header-nav-bar">
					<Link to='/'>Home</Link>
					<Link to='/character'>Character</Link>
					<Link to='/class'>Class</Link>
					<Link to='/weapon'>Weapon</Link>
				</nav>
			</div>
		)
	}
}

export default Header