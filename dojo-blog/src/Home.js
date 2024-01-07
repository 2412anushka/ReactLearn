import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data:blogs,error,isPending}=useFetch("http://localhost:8000/blogs")
    // let name=mario;
    // const [name,setName]=useState('Mario')
    // const [age,setAge]=useState(18)
    // const handleClick = () =>{
    //     setName('Manvi')
    //     setAge(22)
    // }
    // const handleClickAgain = (name) =>{
    //     console.log("Hello "+name)
    // }
    
    // const handleDelete = (id) => {
    //     const newBlogs=blogs.filter((blog) => blog.id!==id)
    //     setBlogs(newBlogs)
    // }
    // const [name,setName] = useState('mario')

    // Triggers the useEffect hook to run only when the components are loaded not after that

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button> */}
            {/* <button onClick={() => handleClickAgain('mario')}>Click Me Again</button> */}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author=="Anushka")} title="Anushka's Blogs"/> */}
           {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>} */}
           {error && <p>{error}</p>}
           {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
           {/* <button onClick={() => setName('luigi')}>Click me</button> */}
           {/* <p>{name}</p> */}
        </div>
        
     );
}
 
export default Home;