import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import CharacterList from '../component/CharacterList'

class Characters extends Component {
	state = {
		data: []
	}

	componentDidMount(){
		this.search()
	}

	search = () =>{
		let url = `http://localhost:9000/api/character/get/all`

		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({
				data: data
			}))
			.catch(error => console.log(error))
	}

	render(){
		let characterLink = this.state.data.map((character)=>{
			let url = '/character/' + character.rowid
			console.log(url)
			return <Link to={url}>{character.character_name}</Link>
			// return <CharacterList name={character.character_name} class={character.class_name} />
		})

		let characterInfo = this.state.data.map((character)=>{
			return <Route path="/character/:id" render={(props)=>{
				return <CharacterList name={character.character_name} class={character.class_name} id={props.match.params.id} />
			}} />
		})

		return(
			<div>
				<h1>this is the character container</h1>
					<nav className="character-all-nav-bar">
						<Link to='/character/new'>New Character</Link>
						{characterLink}
					</nav>
				<Switch>
					{characterInfo}
					<Route path='/character/new' />
				</Switch>
			</div>
		)
	}
}

export default Characters