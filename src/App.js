import React, {Component} from 'react'
import Header from './component/Header'
import Character from './container/Character'
import Class from './container/Class'
import Weapon from './container/Weapon'
import {Switch, Route} from 'react-router-dom'

class App extends Component {
	render(){
		return(
			<div>
				<Header />
			</div>

		)
	}
}

export default App