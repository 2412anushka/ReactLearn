import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id}=useParams()
    const {data:blog,error,isPending} = useFetch("https://my-json-server.typicode.com/2412anushka/ReactLearn/blogs/"+id)
    return ( 
        <div className="blog-details">
            {error && <p>{error}</p>}
            {isPending && <div>Loading...</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>- {blog.author}</h4>
                    <div>{blog.des}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;