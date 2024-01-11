import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { LOCATION } from 'constants/index';

import NotFound from 'Page/notFound/index.jsx';
import ButtonAccordions from 'Page/ButtonAccordions/index.jsx';
import Music from 'Page/Music/index.jsx';
import ImagePage from 'Page/Images/image.jsx';
import Tabs from 'Page/Tabs/index.jsx';
import FormBasic from 'Page/Form/FormBasic.jsx';
import FormLogin from 'Page/Form/FormLogin.jsx';
import UseCallback from 'Page/Hook/UseCallback.jsx';
import UseMemo from 'Page/Hook/UseMemo.jsx';
import UseRef from 'Page/Hook/UseRef.jsx';


import './App.css';
import './style.css';
import Header from 'components/Header';

const routes = [
  { path: LOCATION.TAB, element: <Tabs /> },
  { path: LOCATION.BUTTON_ACCORDIONS, element: <ButtonAccordions /> },
  { path: LOCATION.IMAGES, element: <ImagePage /> },
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
      {/* <Tabs /> */}

      {/* <ButtonAccordions /> */}

      {/* <ImagePage /> */}

      {/* <FormBasic /> */}

      {/* <FormLogin /> */}

      {/* < UseCallback />  */}

      {/* < UseMemo /> */}

      {/* <UseRef /> */}

      {/* <Music /> */}

      <Header/>
      
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
