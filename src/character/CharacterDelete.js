import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class CharacterDelete extends Component {
	state ={
		response: ''
	}

	componentDidMount(){
		console.log('delete mounting')
		this.search()
	}

	search = ()=>{
		let url = `http://localhost:9000/api/character/delete/${this.props.id}`

		let method = {
			method: "DELETE"
		}

		fetch(url, method)
			.then(() => this.setState({
				response: 'Deleted'
			}))


	}

	render(){
		return(
			<div>
				<div>
					{this.state.response.length ? this.state.response : 'Deleting'}
				</div>
				<Link to="/character">Back to Character</Link>
			</div>
		)
	}
}

export default CharacterDelete