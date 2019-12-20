import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
	render(){
		return(
			<div>
				<h1>Project Three</h1>
				<nav className="header-nav-bar">
					<div className="header-link"><Link to='/'>Home</Link></div>
					<div className="header-link"><Link to='/character'>Character</Link></div>
					<div className="header-link"><Link to='/class'>Class</Link></div>
					<div className="header-link"><Link to='/weapon'>Weapon</Link></div>
				</nav>
			</div>
		)
	}
}

export default Header