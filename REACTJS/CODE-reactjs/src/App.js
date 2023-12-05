import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Button from './components/buttonGroup/button';
import Block from './components/blockGroup/block';

function App() {
  const data = [
    {
      number: 1,
      description:'Thien 1111',
      isInside: true,
      style: {
        color : 'black',
        backgroundColor: 'blue',
        borderRadius: 20,
      }
    },
    {
      number: 2,
      description:'Thien2222',
      isInside: false,
      style: {
        color : 'black',
        backgroundColor: 'yellow',
        borderRadius: 20,
      }
    },
    {
      number:3,
      description:'Thien3333',
      isInside: false,
      style: {
        color : 'black',
        backgroundColor: 'red',
        borderRadius: 20,
      }
    },
    {
      number: 4,
      description:'Thien4444',
      isInside: true,
      style: {
        color : 'black',
        backgroundColor: 'gray',
        borderRadius: 20,
      }
    },
  ]
  const looping = (n) => {
    let jsx = [];
    for ( let i = 1 ; i <= n ; ++i ){
      jsx.push(<Profile key={i}/>)
    }
    return jsx;
  }
  return (
    <div className="App">
      {/* {looping(10)} 
      <Profile/> */}
      <Button/>
{/* 
      <Block title="Đây là Block 1" number={1}
      description="Thiện Đẹp Trai" isInside={false} />
      <Block title="Đây là Block 2" number={2} isInside/>
      <Block title="Đây là Block 3" number={3} isInside/> */}
      {
        data.map((item,index)=> {
          return (
            <Block key={index} no={index + 1}
            number={item.number} description={item.description}
            isInside={item.isInside} style={item.style} />
          )
        })
      }

    </div>
  );
}

export default App;


