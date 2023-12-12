import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Button from "./components/buttonGroup/button";
import Block from "./components/blockGroup/block";

function App() {
  const data = [
    {
      number: 1,
      description: "Thien 1111",
      isInside: true,
      style: {
        color: "black",
        backgroundColor: "blue",
        borderRadius: 20,
      },
    },
    {
      number: 2,
      description: "Thien2222",
      isInside: false,
      style: {
        color: "black",
        backgroundColor: "yellow",
        borderRadius: 20,
      },
    },
    {
      number: 3,
      description: "Thien3333",
      isInside: false,
      style: {
        color: "black",
        backgroundColor: "red",
        borderRadius: 20,
      },
    },
    {
      number: 4,
      description: "Thien4444",
      isInside: true,
      style: {
        color: "black",
        backgroundColor: "gray",
        borderRadius: 20,
      },
    },
  ];
  const looping = (n) => {
    let jsx = [];
    for (let i = 1; i <= n; ++i) {
      jsx.push(<Profile key={i} />);
    }
    return jsx;
  };
  const btnLight = [
    {
      title: "Get started",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 8C0 7.76429 0.094421 7.53823 0.262491 7.37155C0.430562 7.20487 0.658514 7.11124 0.896201 7.11124H13.9388L8.29808 1.51913C8.12979 1.35225 8.03525 1.1259 8.03525 0.889887C8.03525 0.653874 8.12979 0.427528 8.29808 0.260642C8.46636 0.0937555 8.6946 5.56065e-09 8.93259 0C9.17057 -5.56065e-09 9.39882 0.0937555 9.5671 0.260642L16.7367 7.37076C16.8202 7.45331 16.8864 7.55139 16.9316 7.65937C16.9767 7.76734 17 7.8831 17 8C17 8.1169 16.9767 8.23266 16.9316 8.34063C16.8864 8.44861 16.8202 8.54669 16.7367 8.62924L9.5671 15.7394C9.39882 15.9062 9.17057 16 8.93259 16C8.6946 16 8.46636 15.9062 8.29808 15.7394C8.12979 15.5725 8.03525 15.3461 8.03525 15.1101C8.03525 14.8741 8.12979 14.6478 8.29808 14.4809L13.9388 8.88876H0.896201C0.658514 8.88876 0.430562 8.79513 0.262491 8.62845C0.094421 8.46178 0 8.23571 0 8Z"
            fill="white"
          />
        </svg>
      ),
      IsLightMode: false,
    },
    {
      title: "Continue with Apple",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
        >
          <path
            d="M16.721 11.912C16.7096 10.1087 17.5937 8.74962 19.3791 7.7475C18.3805 6.42543 16.8698 5.6983 14.8784 5.55816C12.9928 5.42066 10.9299 6.5735 10.1745 6.5735C9.37625 6.5735 7.55079 5.60575 6.11445 5.60575C3.15021 5.64806 0 7.7898 0 12.1473C0 13.435 0.254649 14.765 0.763948 16.1347C1.44492 17.938 3.89986 22.3563 6.46066 22.2849C7.79971 22.2558 8.74678 21.4071 10.4893 21.4071C12.1803 21.4071 13.0558 22.2849 14.5494 22.2849C17.133 22.2505 19.3534 18.2341 20 16.4255C16.535 14.9157 16.721 12.0045 16.721 11.912ZM13.7139 3.84741C15.1645 2.25564 15.0329 0.80666 14.99 0.285767C13.7082 0.354514 12.226 1.09223 11.382 1.99916C10.4521 2.9722 9.90558 4.17528 10.0229 5.53172C11.4077 5.62955 12.6724 4.97116 13.7139 3.84741Z"
            fill="white"
          />
        </svg>
      ),
      IsLightMode: false,
    },
    {
      title: "Continue with Google",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
        >
          <path
            d="M20.7932 8.81675C20.9271 9.51967 21 10.2546 21 11.0215C21 17.0203 16.903 21.2858 10.715 21.2858C9.30774 21.2862 7.91422 21.0149 6.61402 20.4874C5.31383 19.9598 4.13245 19.1864 3.13739 18.2113C2.14232 17.2362 1.35308 16.0785 0.814755 14.8044C0.27643 13.5303 -0.000428558 12.1648 4.97926e-07 10.7858C-0.000428558 9.40677 0.27643 8.0412 0.814755 6.76709C1.35308 5.49298 2.14232 4.33531 3.13739 3.36021C4.13245 2.38511 5.31383 1.6117 6.61402 1.08418C7.91422 0.55665 9.30774 0.285347 10.715 0.285767C13.6081 0.285767 16.0257 1.32894 17.8804 3.02276L14.8599 5.98269V5.97522C13.7355 4.92565 12.3085 4.387 10.715 4.387C7.1796 4.387 4.30602 7.31386 4.30602 10.7794C4.30602 14.2438 7.1796 17.1771 10.715 17.1771C13.9227 17.1771 16.1062 15.3798 16.5547 12.9116H10.715V8.81675H20.7943H20.7932Z"
            fill="black"
          />
        </svg>
      ),
      IsLightMode: true,
    },
    {
      title: "Continue with Facebook",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
        >
          <path
            d="M21 10.8501C21 5.01543 16.2992 0.285767 10.5013 0.285767C4.70079 0.287079 0 5.01543 0 10.8514C0 16.123 3.83989 20.4931 8.85827 21.2858V13.9039H6.19422V10.8514H8.86089V8.52199C8.86089 5.87501 10.4291 4.41306 12.8268 4.41306C13.9764 4.41306 15.1772 4.6191 15.1772 4.6191V7.21753H13.853C12.5499 7.21753 12.143 8.03249 12.143 8.86844V10.8501H15.0538L14.5892 13.9026H12.1417V21.2845C17.1601 20.4918 21 16.1217 21 10.8501Z"
            fill="black"
          />
        </svg>
      ),
      IsLightMode: true,
    },
  ];
  const showMessage = (mes)=>{
    console.log('kết quả là' ,mes );
  }
  
  const sum = ( a , b , c , d , e , callback1, callback2) => {
    callback1(a+b+c+d+e, callback2)
  }
  const divide = (num, callback2 ) => {
    callback2(num / 5);
  }

  sum(1, 2, 3, 4, 5, divide, showMessage);

  const [count, setCount] = useState(5);
  const [tab, setTab] = useState(1);
  // count: tên state
  // setCount: callback func ghi mới giá trị cho state count
  // 5: giá trị khởi tạo cho count

  const onPlusCount = () => {
    setCount((preState) => preState + 1); // Chính thống
    setCount((preState) => preState + 1); // Chính thống
    // setCount(count + 1)
    // setCount(count + 1)
  }

  const onMinusCount = () => {
    // setCount(count - 1);
    setCount((preState) => preState - 1); // Chính thống
  }

  // const onChangeTab = () => {
  // setTab(tab + 1)
  // };




  const onChangeTab = (currentTab) => () => {
    setTab(currentTab);
  };

  const content = () => {
    let content =  '';
    switch (tab) {
      case 1:
        content = 'Tab 1 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
        break;
      case 2:
        content = 'Tab 2 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
        break;
      case 3:
        content = 'Tab 3 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
        break;
      case 4:
        content = 'Tab 4 ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores'
        break;
    
      default:
        content = '';
        break;
    }

    return content;
  }








  return (
    <>




<div className='container'>
        <div className='wrapper d-flex justify-content-center'>
          {/* <button className={`btn-tab ${tab === 1 ? 'active' : ''}`} onClick={onChangeTab}>History</button> */}
          <button className={`btn-tab ${tab === 1 ? 'active' : ''}`} onClick={onChangeTab(1)}>History</button>
          <button className={`btn-tab ${tab === 2 ? 'active' : ''}`} onClick={onChangeTab(2)}>Method</button>
          <button className={`btn-tab ${tab === 3 ? 'active' : ''}`} onClick={onChangeTab(3)}>Class</button>
          <button className={`btn-tab ${tab === 4 ? 'active' : ''}`} onClick={onChangeTab(4)}>Student</button>
        </div>

        <div className='wrapper'>
          <p>{content()}</p>
        </div>
      </div>






    {/* <div className="App">
      <h1 >Tuổi: {count}</h1>
      <button onClick={onChangeCount}>Tăng</button>
    </div> */}






      <div className="App">
        {/* {looping(10)} 
      <Profile/> */}
        {btnLight.map((btn) => (
          <Button
            title={btn.title}
            icon={btn.icon}
            IsLightMode={btn.IsLightMode}
          />
        ))}
        {/* 
      <Block title="Đây là Block 1" number={1}
      description="Thiện Đẹp Trai" isInside={false} />
      <Block title="Đây là Block 2" number={2} isInside/>
      <Block title="Đây là Block 3" number={3} isInside/> */}
        {data.map((item, index) => {
          return (
            <Block
              key={index}
              no={index + 1}
              number={item.number}
              description={item.description}
              isInside={item.isInside}
              style={item.style}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
