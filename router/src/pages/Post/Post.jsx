import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

function Post() {
   let { id } = useParams();
   const [post, setPost] = useState(null);
   const navigate = useNavigate();
   console.log(navigate)
   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
         .then(res => res.json())
         .then(data => setPost(data))
   }, [id]);
   return (
      <div>
         {
            post ? <div><div>{post.title}</div><button onClick={() => { navigate("/", { replace: true }) }}>to home page</button></div> : "Loading..."
         }
      </div>
   );
}

export default Post;