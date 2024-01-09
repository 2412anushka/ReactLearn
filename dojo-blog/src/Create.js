import {useState} from "react";

const Create = () => {
    const [title,setTitle]=useState('')
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('Mario')
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog={title,body,author}
        fetch("https://my-json-server.typicode.com/2412anushka/ReactLearn/blogs", {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log("new blog added");
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Description:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}>
                </textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Tom">Tom</option>
                    <option value="Michelle">Michelle</option>
                </select>
                <button>Add a blog</button>
            </form>
        </div>
     );
}
 
export default Create;