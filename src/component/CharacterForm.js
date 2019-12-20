import React, {Component} from 'react'

class Form extends Component{
	state = {
		character_name: '',
		class_name_id: null
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	handleChange = () => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	create = () => {
		let url = `http://localhost:9000/api/character/create/new`

	}

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="character_name" onChange={this.handleChange}/>
			</form>
		)
	}
}

export default Form