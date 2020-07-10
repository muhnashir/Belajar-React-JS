
import React, {Component} from 'react';
// import YouTubeComp from '../component/YouTubeComp/YouTubeComp';
// import Product from './Product/Product';
import BlogPost from './BlogPost/BlogPost';

class Home extends Component{
    render(){
        return(
            <div>
                {/* <p>Youtube component</p>
                <hr/>
                <YouTubeComp time="7.10" title="Cara membuat thumbnail part 1" desc="hello wordl" />
                <YouTubeComp time="1.20" title="Cara membuat thumbnail part 2" />
                <YouTubeComp/> */}
                {/* <p>Counter</p>
                <hr/> */}
                {/* <Product/> */}
                <BlogPost/>
            </div>
            
        )
    }
}

export default Home;