import { useState, useEffect } from "react";
import { BlogList } from "../components";
import { useFetch } from "../utils";

const Home = () => {
  console.log('hey');
  
  const {data: blogs, isPending, error, setData: setBlogs} = useFetch('http://localhost:8000/blogs')

  const [name, setName] = useState('Mario')
  const [age, setAge] = useState(25)
  
  const handleClick = (name: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('hello ' + name, event);
    setName('Luigi')
    setAge(30)
  }

  // Runs everytime the component renders, so for example when useState is called
  // When empty array passed, only runs on first render
  useEffect(()=>{
    console.log('use effect ran');
    

  }, [])

  return ( 
    <div className="home">
      <h2>Home Page</h2>
      {/* An event object is always passed on events */}
      <p>{name}</p>
      <p>{age}</p>
      <button onClick={(event)=>handleClick('wassup', event)}>Click Me</button>

      {
        blogs && blogs.length>0 && <BlogList blogs={blogs} title="All blogs" setBlogs={setBlogs}/>
        // (
        //   <>
        //     {/* <BlogList blogs={blogs.filter(blog=>blog.author === 'mario')} title="Mario's blogs" setBlogs={setBlogs}/>     */}
        //   </>
        // )
      }
      { isPending && <div>Loading...</div>}
      { error && <div className="error"><strong>{error}</strong></div>}

    </div>
   );
}
 
export default Home;