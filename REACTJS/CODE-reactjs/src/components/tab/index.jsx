import React, { useState } from 'react';

import './components/tab/style.css';

const contentDefault = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function App(props) {
  return (
    <div className='tab'>
      <TabItem
        title="Simple 1"
        content={contentDefault}
      />

      <TabItem
        title="Simple 2"
        content={contentDefault}
      />

      <TabItem
        title="Simple 3"
        content={contentDefault}
      />
    </div>
  );
}

export default App;