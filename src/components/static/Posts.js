import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Posts extends React.Component{
    constructor(){
        super()
        this.state = {
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            const posts = response.data
            this.setState({posts})
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h1>Posts List - {this.state.posts.length}</h1>
                <ul>
                    {
                        this.state.posts.map((post) =>{
                            return(
                                <Link to = {`/posts/${post.id}`}><li key = {post.id}>{post.title}</li></Link>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Posts