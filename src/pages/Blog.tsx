import { useParams } from "react-router-dom";

const Blog = () => {
  const {id} = useParams<{id: string}>();

  return ( 
    <div className="blog-details">
      <h2>Blog Details - {id}</h2>
    </div>
   );
}
 
export default Blog;