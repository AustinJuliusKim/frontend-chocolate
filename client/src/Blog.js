import React from 'react';

import './Main.css';

const Blog = (props) => {
  const posts = props.posts;
  console.log("====> these are blog prop posts",posts);

  return (
    <section className="Main-index">
      <h1 className="hdr-1">Random Babbles and Multimedia</h1>
      <ul className="Main-article-list">
        {
          posts.map(function(post, i){
            return <BlogPost {...post}/>
          })
        }
      </ul>
    </section>
  )
}

const BlogPost = (props) => {
  const { title, content, comment_count, like_count } = props;
  return (
    <li className="Main-article-item">
      <article className="article article-1">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{comment_count}</p>
        <p>{like_count}</p>
      </article>
    </li>
  )

}

export default Blog;
