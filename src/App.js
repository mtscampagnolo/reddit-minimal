import React from 'react';
import Subreddits from './components/subreddits/Subreddits';
import PostList from './components/postList/PostList';
import styles from './app.module.css';


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.postList}>
        <PostList/>
      </div>
      <div className={styles.subreddits}>
        <Subreddits />
      </div>
    </div>
  );
}

export default App;
