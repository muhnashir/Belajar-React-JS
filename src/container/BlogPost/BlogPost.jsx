import React, {Component, Fragment} from 'react'
import './BlogPost.css'
import Post from '../../component/Post/Post'
import axios from 'axios';

class BlogPost extends Component{

    state = {
        post : []
    }

    getPostAPI = () =>{
        axios.get(`http://localhost:3004/posts`)
        .then((result)=>{
                this.setState({
                    post :result.data
                })
        })
    }

    handlerRemove = (data)=>{
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res)=>{
            this.getPostAPI()
        })
    }

    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post :json
        //         })
        //     })
        this.getPostAPI()
        
    }

    render(){
        return(
            <Fragment>
                <div className="section-title">BlogPost</div>
                    {
                        this.state.post.map(post=>{
                           return <Post key={post.id} data={post} remove={this.handlerRemove}/>
                        })
                    }
            </Fragment>
        )
    }
}

export default BlogPost;