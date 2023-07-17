import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState<String>('');
  const [body, setBody] = useState<String>('');
  const [author, setAuthor] = useState<String>('mario');
  const [isPending, setIsPending] = useState<Boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = {title, body, author};

    console.log(blog);
    setIsPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(()=>{
      console.log('new blog added');
      setIsPending(false);
    })
  }

  return ( 
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Blog title:</label>
        <input type="text"  required onChange={(e)=>setTitle(e.target.value
          )}/>
        <label>Blog body:</label>
        <textarea required onChange={(e)=>setBody(e.target.value)}></textarea>
        <label >Blog Author:</label>
        <select onChange={(e)=>setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding Blog...</button>}

        {/* <p>{[title, body, author]}</p> */}
      </form>
    </div>
   );
}
 
export default Create;