import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../components';

export const PostsWithTag = () => {
  const { tag } = useParams();
  let isPostsLoading = true;
  let userData = 0;
  let posts = [];
  return (
    <>
      <Typography align='center' variant='h3' mb={8}>
        {'# ' + tag}
      </Typography>
      <Grid container spacing={4}>
        <Grid xs={2}></Grid>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                id={obj._id}
                title={obj.title}
                imageUrl={
                  obj.imageUrl ? `${process.env.REACT_APP_API_URL}${obj.imageUrl}` : ''
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
        </Grid>
        {/* <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Это тестовый комментарий',
              },
              {
                user: {
                  fullName: 'Иван Иванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}
          />
        </Grid> */}
        <Grid xs={2}></Grid>
      </Grid>
    </>
  );
};
