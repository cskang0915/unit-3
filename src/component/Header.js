import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
	render(){
		return(
			<div>
				<h1>Project Three</h1>
				<nav className="header-nav-bar">
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/character'>Character</Link></li>
					<li><Link to='/class'>Class</Link></li>
					<li><Link to='/weapon'>Weapon</Link></li>
				</nav>
			</div>
		)
	}
}

export default Header