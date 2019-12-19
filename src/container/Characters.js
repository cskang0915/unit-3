import React, {Component} from 'react'
import Character from '../component/Character'

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
		let characters = this.state.data.map((character)=>{
			return <Character name={character.character_name} class={character.class_name} />
		})
		return(
			<div>
				<h1>this is the character container</h1>
				{characters}
			</div>
		)
	}
}

export default Characters