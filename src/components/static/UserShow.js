import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state = {
            user:{},
            post:[]
        }
    }

    componentDidMount(){

        const id = this.props.match.params.id
        
        //user's posts
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) =>{
            const post = response.data
            this.setState({post})
        })
        .catch((err) =>{
            console.log(err)
        })

         //user
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) =>{
        const user = response.data
        this.setState({user})
    })
    .catch((err) =>{
        console.log(err)
    })
    }

   

    render(){
        console.log('UserShow', this.props)
        return(
            <div>
                <h2>USER NAME - {this.state.user.name}</h2>
                <h2>POSTS WRITTEN BY USER</h2>
                <ul>
                    {
                        this.state.post.map((item) =>{
                            return(
                                <Link to = {`/posts/${item.id}`}><li key = {item.id}>{item.title}</li></Link>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default UserShow 