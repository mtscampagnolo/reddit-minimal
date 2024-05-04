import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectPosts, postsIsLoading, postsHasError, loadPosts} from './postListSlice';
import Post from '../post/Post';

const PostList = (props) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(postsIsLoading);
  const hasError = useSelector(postsHasError);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if(isLoading) {
    return 'Loading...'
  }

  if(hasError) {
    return 'fail to load posts'
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
