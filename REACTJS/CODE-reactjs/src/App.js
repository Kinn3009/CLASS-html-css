import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";

import { LOCATION } from 'constants/index';

import NotFound from 'Page/notFound/index.jsx';
import ButtonAccordions from 'Page/ButtonAccordions/index.jsx';
import Music from 'Page/Music/index.jsx';
import ImagePage from 'Page/Images/image.jsx';
import Tabs from 'Page/Tabs/index.jsx';
import Post from 'Page/Post/index.jsx';
import PostDetail from 'Page/Post/PostDetail';
import UserDetail from 'Page/Post/UserDetail';
import FormBasic from 'Page/Form/FormBasic.jsx';
import FormLogin from 'Page/Form/FormLogin.jsx';
import UseCallback from 'Page/Hook/UseCallback.jsx';
import UseMemo from 'Page/Hook/UseMemo.jsx';
import UseRef from 'Page/Hook/UseRef.jsx';
import Header from 'components/Layout/Header';

import './App.css';
import './style.css';

const routes = [
  { path: LOCATION.TAB, element: <Tabs /> },
  { path: LOCATION.BUTTON_ACCORDIONS, element: <ButtonAccordions /> },
  { path: LOCATION.IMAGES, element: <ImagePage /> },
  { path: LOCATION.POSTS, element: <Post /> }, 
  { path: LOCATION.POST_DETAIL, element: <PostDetail /> },
  { path: LOCATION.USER_DETAIL, element: <UserDetail /> },
  { path: LOCATION.FORM_BASIC, element: <FormBasic /> },
  { path: LOCATION.FORM_LOGIN, element: <FormLogin /> },
  { path: LOCATION.USE_CALLBACK, element: <UseCallback /> },
  { path: LOCATION.USE_REF, element: <UseRef /> },
  { path: LOCATION.USE_MEMO, element: <UseMemo /> },
  { path: LOCATION.MUSIC, element: <Music /> },
  { path: LOCATION.NOT_FOUND, element: <NotFound /> },
]


function App() {
  return (
    <>
    <div className='container'>

      <Header/>

      {/* {
        !isLogin && <Navigate to={LOCATION.FORM_LOGIN} replace={true} />
      } */}

      <Routes>
        {
          routes.map((r, index) => <Route key={index} path={r.path} element={r.element} />)
        }
      </Routes>
    {/* </BrowserRouter> */}
        </div>
    </>
  );
}

export default App;
