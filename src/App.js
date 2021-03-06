import React, {Component} from 'react'
import Header from './component/Header'
import Home from './container/Home'
import Characters from './container/Characters'
import CharacterList from './component/CharacterList'
import CharacterForm from './component/CharacterForm'
import CharacterDelete from './character/CharacterDelete'
import Class from './container/Class'
import Weapon from './container/Weapon'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
	render(){
		return(
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/character' component={Characters}/>
					<Route path='/class' component={Class}/>
					<Route path='/weapon' component={Weapon}/>
					<Route exact path='/character/new' component={CharacterForm}/>
					<Route exact path='/character/:id' render={(props) => {
						return <CharacterList id={props.match.params.id} />
					}} />
					<Route exact path='/character/:id/update' render={(props) => {
						return <CharacterForm id={props.match.params.id} />
					}}/>
					<Route exact path="/character/:id/delete" render={(props)=>{
						return <CharacterDelete id={props.match.params.id} />
					}} />
				</Switch>
			</div>

		)
	}
}

export default App