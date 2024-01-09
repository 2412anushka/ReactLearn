import {useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title,setTitle]=useState('')
    const [des,setDes]=useState('')
    const [author,setAuthor]=useState('Mario')
    const [isPending,setIsPending]=useState(false)
    const history=useHistory();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog={title:title,des:des,author:author};
        // console.log(blog);
        setIsPending(true)
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs", {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setIsPending(false)
            history.push("/")
        })
        },(1000))
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
                value={des}
                onChange={(e)=> setDes(e.target.value)}>
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
                
                {!isPending && <button>Add a blog</button>}
                {isPending && <button>Adding blog..</button>}
            </form>
        </div>
     );
}
 
export default Create;