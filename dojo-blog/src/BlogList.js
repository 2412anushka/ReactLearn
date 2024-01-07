import React from 'react';
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
                <h2>{blog.title}</h2>
                <p>written by {blog.author}</p>
                {/* <button onClick={() => {handleDelete(blog.id)}}>delete blog</button> */}
            </div>
        ))}</p>
        </div>
        
     );
}
 
export default BlogList;