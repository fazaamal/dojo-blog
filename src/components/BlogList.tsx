import { Blog } from "../types";

const BlogList = ({blogs, title, setBlogs} : {blogs: Array<Blog>, title: string, setBlogs?:(blogs: Array<Blog>)=> void }) => {
  // const blogs= props.blogs;
  // console.log(props);
  const handleDelete = (id: number) => {
    console.log(blogs);
    
    const newBlogs = blogs.filter(blog => blog.id !== id)
    console.log(newBlogs);
    
    if(setBlogs) setBlogs(newBlogs)
  }

  return ( 
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog:Blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button style={{
            display: setBlogs? 'block' : 'none',
          }} onClick={()=>handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
   );
}

// q: how to define function shape?


// q: what type is a function?
// a: function
// q: what typescript type is used for json objects?
// a: interface

// q: how to write typescript type for object with key of string and value of object?
// a: interface BlogList = { [key: string]: Blog }


export default BlogList;