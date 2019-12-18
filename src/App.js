import React, {Component} from 'react'
import Header from './component/Header'
import Character from './container/Character'
import Class from './container/Class'
import Weapon from './container/Weapon'
import {Switch, Route} from 'react-router-dom'
import Marker from './greenmarker.png'

class App extends Component {
	render(){
		return(
			<div>
				<Header />
				<Switch>
					<Route path='/character' component={Character}/>
					<Route path='/class' component={Class}/>
					<Route path='/weapon' component={Weapon}/>
				</Switch>
			</div>

		)
	}
}

export default App