import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadSubreddits, selectSubreddits, subredditsIsLoading, subredditsHasError} from './subredditsSlice';
import {getPostBySubreddit} from '../postList/postListSlice';
import styles from './subreddits.module.css';

const Subreddits = () => {
  const dispatch = useDispatch();
  const subredditList = useSelector(selectSubreddits);
  const isLoading = useSelector(subredditsIsLoading);
  const hasError = useSelector(subredditsHasError)

  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(hasError) {
    return <h2>Fail To Load</h2>
  }

  return(
    <div>
      <h2>Subreddits</h2>
      <ul>
        {subredditList.map((item, key) => {
          return <li className={styles.subreddit} key={key} onClick={() => dispatch(getPostBySubreddit(item))} >{item}</li>
        })}
      </ul>
    </div>
  );
}

export default Subreddits;
