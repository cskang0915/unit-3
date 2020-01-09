import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Characters extends Component {
	state = {
		data: []
	}

	componentDidMount(){
		this.searchAll()
	}

	searchAll = () =>{
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
			// // console.log(url)
			// let searchOne = () =>{
			// 	return fetch(url)
			// 		.then(response => response.json())
			// 		.then(data => this.setStatus({
			// 			characterData: data
			// 		}))
			// }
			return <li className = "character-list-one"><Link to={url}>{character.character_name}</Link></li>
			// return <CharacterList name={character.character_name} class={character.class_name} />
		})

		return(
			<div className="class-container">
				<h1>this is the character container</h1>
				<nav className="character-all-nav-bar">
					<Link to='/character/new'><button>New Character</button></Link>
					<ul className="character-list-all">{characterLink}</ul>
				</nav>
			</div>
		)
	}
}

export default Characters