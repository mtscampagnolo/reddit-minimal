import React from 'react';
import styles from './post.module.css';

const Post = (props) => {
  const date = new Date(props.created * 1000).toLocaleString();

  return (
    <div className={styles.body}>
      <div className={styles.header}>
        <h2>{props.title}</h2>
        <p>{props.subreddit}</p>
      </div>
      <img 
        src={props.thumbnail}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src='https://variety.com/wp-content/uploads/2020/06/reddit-logo-1.png';
          }}
      />
      <div className={styles.footer}>
        <p>{props.author}</p>
        <p>{date.slice(0,10)}</p>
        <p>{props.ups}</p>
      </div>
    </div>
  )
}

export default Post;