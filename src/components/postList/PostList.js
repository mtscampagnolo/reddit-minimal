import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPosts, postsIsLoading, postsHasError, loadPosts, selectPostsByTerm} from './postListSlice';
import {selectTerm} from '../search/searchSlice';
import Post from '../post/Post';

const PostList = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(postsIsLoading);
  const hasError = useSelector(postsHasError);
  const term = useSelector(selectTerm);
  const posts = useSelector(selectPosts);


  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if(isLoading) {
    return 'Loading...'
  }

  if(hasError) {
    return 'fail to load posts'
  }

  if(!posts) {
    return `No posts find for ${term} search`;
  }

  return (
    <div>
      {posts.map(post => {
        return <Post 
        subreddit={post.subreddit}
        title={post.title}
        thumbnail={post.thumbnail}
        created={post.created}
        author={post.author}
        ups={post.ups}
        />
      })}
    </div>
  )
}

export default PostList;
