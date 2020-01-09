import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'

class CharacterForm extends Component{
	state = {
		character_name: '',
		class_name_id: null,
		class_name: '',
		redirect: false
	}

	componentDidMount(){
		if(this.props.id){
			this.getOneCharacter()
			this.getAllClasses()
		}else{
			this.getAllClasses()	
		}
	}

	handleSubmit = (event) => {
		// event.preventDefault()
		if(this.props.id){
			this.update()
		}else{
			this.create()
		}
	}

	handleChange = (event) => {
		if(event.target.name === "class_name_id"){
			this.setState({
				[event.target.name]: parseInt(event.target.value, 10)
			})
		}else{
			this.setState({
				[event.target.name]: event.target.value
			})
		}
	}

	create = () => {
		let url = `http://localhost:9000/api/character/create/new`
		let method = {
			method: "POST",
			body: JSON.stringify({
				character_name: this.state.character_name,
				class_name_id: this.state.class_name_id
			}),
			headers: {
				"Content-Type": "application/json"
			}
		}

		fetch(url, method)
			.catch(error => console.log(error))

		// alert("created new character")
		console.log('before redirect setstate')
		this.setState({
			redirect: true
		})
		console.log('after redirect setstate')

	}

	update = () => {
		let url = `http://localhost:9000/api/character/update/${this.props.id}`
		let method = {
			method: "PUT",
			body: JSON.stringify({
				character_name: this.state.character_name,
				class_name_id: this.state.class_name_id
			}),
			headers: {
				"Content-Type": "application/json"
			}
		}

		fetch(url, method)
			.then(()=>console.log('we are here'))
			.catch(error => console.log(error))

		// alert("updated character")
	}

	getAllClasses = () => {
		let url = `http://localhost:9000/api/class/get/all`

		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({
				class_name: data,
				// class_name_id: data[0].rowid
			}))
			// .then(data => console.log(data))
			.catch(error => console.log(error))
	}

	getOneCharacter = () => {
		let url = `http://localhost:9000/api/character/get/${this.props.id}`

		fetch(url)
			.then(response => response.json())
			// .then(data => console.log(data))
			.then(data => this.setState({
				character_name: data[0].character_name,
				class_name_id: data[0].class_name_id
			}))

	}

	render(){
		let options
		let buttonText
		let redirect
		if(this.state.class_name.length > 0){
			options = this.state.class_name.map(name => {
				return <option value={name.rowid}>{name.class_name}</option>
			})
		}
		if(this.props.id){
			buttonText = 'Update Character'
		}else{
			buttonText = 'Create New Character'
		}
		// if(this.state.redirect === true){
		// 	redirect= <Redirect to='/character'/>
		// }
		return(
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="character_name" onChange={this.handleChange} value={this.state.character_name}/>
				<select name="class_name_id" onChange={this.handleChange}>
					{options}
				</select>
				<input type="submit" value={buttonText}/>
				<br />
				<br />
				<Link to="/character"><button>Back to Character</button></Link>
			</form>
		)
	}
}

export default CharacterForm