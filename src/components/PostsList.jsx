import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ modalIsVisible, hideModalHandler }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author="Edin" body="Mobile repair shop owner" />
      </ul>
    </>
  );
}

export default PostsList;
