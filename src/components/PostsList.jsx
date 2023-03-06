import Post from "./Post";
import styles from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={styles.posts}>
      <Post author="Alan" body="Web developer" />
      <Post author="Edin" body="Mobile repair shop owner" />
    </ul>
  );
}

export default PostsList;