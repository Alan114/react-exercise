import Post from "./Post";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body} key={Math.random()} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding them!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
