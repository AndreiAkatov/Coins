import {useEffect,useState} from "react";
import {Link} from 'react-router-dom';


function Blog() {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);
    return (
      <div>
            { posts.map(post=>{
                    return (<div key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                    </div>)
                })

            }
      </div>
    );
  }
  
  export default Blog;