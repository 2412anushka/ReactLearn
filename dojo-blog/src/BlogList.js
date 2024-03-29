import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const BlogList = ({blogs, title}) => {
    // const blogs=props.blogs
    // const title=props.title
    return ( 
        <div className="blog-list">
            <div className="blog-title">
            <h2>{title}</h2>
            </div>
            <p>{blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                </Link>
                {/* <button onClick={() => {handleDelete(blog.id)}}>delete blog</button> */}
            </div>
        ))}</p>
        </div>
        
     );
}
 
export default BlogList;