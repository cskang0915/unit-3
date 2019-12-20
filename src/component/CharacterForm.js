import React, {Component} from 'react'

class CharacterForm extends Component{
	state = {
		character_name: '',
		class_name_id: null,
		class_name: []
	}

	componentDidMount(){
		this.getClass()
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	create = () => {
		let url = `http://localhost:9000/api/character/create/new`

	}

	getClass = () => {
		let url = `http://localhost:9000/api/class/get/all`

		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({
				class_name: data
			}))
			// .then(data => console.log(data))
			.catch(error => console.log(error))
	}

	render(){
		let options
		console.log('here')
		if(this.state.class_name.length > 0){
			options = this.state.class_name.map(name => {
				return <option value={name.class_name}>{name.class_name}</option>
			})
		}
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="character_name" onChange={this.handleChange}/>
				<select>
					{options}
				</select>
				<input type="submit" value="Create New Character"/>
			</form>
		)
	}
}

export default CharacterForm