import Container from '@mui/material/Container';

import { Header } from './components';
import { Home, FullPost, Registration, AddPost, Login } from './pages';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';
import { fetchAuthMe } from './redux/slices/auth';
import { PostsWithTag } from './pages/PostsWithTag';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<FullPost />} />
          <Route path='/posts/:id/edit' element={<AddPost />} />
          <Route path='/add-post' element={<AddPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/tags/:tag' element={<PostsWithTag />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
