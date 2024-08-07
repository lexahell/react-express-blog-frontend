import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Post } from '../../components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsByTag } from '../../redux/slices/posts';

export const TagPage = () => {
  const { tag } = useParams();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const userData = useSelector((state) => state.auth.data);
  const isPostsLoading = posts.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPostsByTag(tag));
  }, [dispatch, tag]);

  return (
    <>
      <Typography variant='h3' align='center' marginBottom={5}>
        # {tag}
      </Typography>
      <Grid container spacing={4} justifyContent='center'>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={
                  obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ''
                }
                user={obj.user}
                createdAt={obj.createdAt}
                viewsCount={obj.viewsCount}
                commentsCount={3}
                tags={obj.tags}
                isEditable={userData?._id === obj.user._id}
              />
            )
          )}
          {!isPostsLoading && !posts.items.length && (
            <Typography align='center' variant='h4'>
              Посты с тегом "{tag}" не найдены ☹️
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};
