import React, {Component} from 'react'
import CharacterInfoOne from './CharacterInfoOne'
import {Link} from 'react-router-dom'

class CharacterList extends Component{
	state = {
		data: [],
		id: null
	}

	componentDidMount(){
		console.log('mounting')
		let id = this.props.id
		console.log(id)
		this.search(id)
	}

	// componentDidUpdate(){
	// 	console.log('updating')
	// 	let {id} = this.props.match.params
	// 	console.log(id)
	// 	this.search(id)
	// }

	search = (id)=>{
		let url = `http://localhost:9000/api/character/get/${id}`
		console.log('here')
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({
				data: data,
				id: id
			}))
			// .then(data => console.log(data))
			.catch(error => console.log(error))
	}

	render(){
		console.log('rendering')
		let updateURL = '/character/' + this.state.id + '/update'
		let deleteURL = '/character/' + this.state.id + '/delete'
		return(
			<div>
				{this.state.data.length ? <CharacterInfoOne name={this.state.data[0].character_name} class={this.state.data[0].class_name}/> : 'loading..'}
				<nav className="character-one-nav-bar">
					<Link to={updateURL}>Update</Link>
					<Link to={deleteURL}>Delete</Link>
					<Link to="/character">Back</Link>
				</nav>
			</div>
		)
	}
}

export default CharacterList