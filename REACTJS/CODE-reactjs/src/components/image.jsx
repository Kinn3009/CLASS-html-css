import React, { useState } from 'react';
import ButtonGroup from './buttonGroup/button';

const imageList2 = [
  {
    src: 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/376057530_1321643228487965_5697935550381196022_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&cb=99be929b-b574a898&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGbgEi527oT5CKMF2ZulbEfrjeAXsg9OsiuN4BeyD06yOfsXT2vztT-GTHn-AM4EoGfuXFGMCZi0KdHG6mcI_p1&_nc_ohc=7eONwz_B1lAAX9pB4vc&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCV7vxKg9FerG9kxH4r4kjI6oMxhTdBcNOEL7r344nX3g&oe=65887B37',
    alt: 'anh Thien',
  },
];

const imageList = [
  "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/376057530_1321643228487965_5697935550381196022_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&cb=99be929b-b574a898&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGbgEi527oT5CKMF2ZulbEfrjeAXsg9OsiuN4BeyD06yOfsXT2vztT-GTHn-AM4EoGfuXFGMCZi0KdHG6mcI_p1&_nc_ohc=7eONwz_B1lAAX9pB4vc&_nc_ht=scontent.fdad2-1.fna&oh=00_AfCV7vxKg9FerG9kxH4r4kjI6oMxhTdBcNOEL7r344nX3g&oe=65887B37"  ,
  "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/327963300_601884211725371_9079321559634246665_n.jpg?_nc_cat=106&cb=99be929b-b574a898&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHA0aHEZ5BqYwWgxZTUN0gkfZLGzKIl_1p9ksbMoiX_Wt2BhkcFgZvPgHV2DQwllY6bVY2npXE8qeM4viEJVYZN&_nc_ohc=K49aNEYyeccAX_S4eOy&_nc_ht=scontent.fdad1-2.fna&oh=00_AfC0lmTB-ic23kDVzDW9GTpDVxguoGei37JC4Ohdhjjc3A&oe=6588879B" ,
   "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/288776814_1056234828362141_129191005627668675_n.jpg?_nc_cat=101&cb=99be929b-b574a898&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFvqGzQLZY-RfZuk5MED5IdlnDPNVdD9N2WcM81V0P03bRthg3GVQom8awdf1uqVY4UBDNzmNSCguyo9GqwZZyK&_nc_ohc=FTNvsRmEcVIAX9z6onH&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAfz-eFLONG9wnPEL67XpX976r9dWIncAS9Fgd7b04vlA&oe=658836AA"   ,
   "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/239901130_881073259211633_5771029367030504943_n.jpg?_nc_cat=106&cb=99be929b-b574a898&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGc3fLMJruNjUFoR0bUytqVTh1WzoyGvbxOHVbOjIa9vNcq-9XmmV5t_0Ra5UdnDaXbhk_lNkB5g7GXGtEUOPuD&_nc_ohc=KJOrMPix1m8AX8IoC0o&_nc_ht=scontent.fdad1-2.fna&oh=00_AfA6Ws34HoDsMlawFAFJLvHUQ8_NqTiwbhSa2ZZYZtFjlA&oe=65892FC5" ,
   "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/354216230_698651098984466_4595494019462248183_n.jpg?_nc_cat=100&cb=99be929b-b574a898&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGK_DltPNSuErC4wEfH1KXkjJO-Msj8WAuMk74yyPxYC78AMoII0wuee_fSH60tkxgF1FXWbGbKy7NPAiMWd_eX&_nc_ohc=3MD_0R5aZFAAX8f1v2s&_nc_ht=scontent.fdad1-4.fna&oh=00_AfCBfcHv8OR9-mpQ4bq1CBlFQle5MIs0uXIk7wnwErmgvQ&oe=6589910D" ,
   "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/348813126_936260257589659_2070862975736012428_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&cb=99be929b-b574a898&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEn-KoAyx-5vr0s2JT6y4ZyUdzsLufT8SFR3Owu59PxIQfq3XwqD7vBDEDmnUno_UD0XrGtz11WcA-yEETNZ5o8&_nc_ohc=zwTYYrLrdvkAX_EPFxJ&_nc_ht=scontent.fdad1-3.fna&oh=00_AfBEeqRinxwZGU2EuXrb_fTgPFYFGUA8hplUG2aryPTQXA&oe=6588B66B" ,
   "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/343419085_1653318588517536_4247720812501712124_n.jpg?_nc_cat=107&cb=99be929b-b574a898&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeFNVPaSZDfrCfkgXbVkfXmww2Jkpn0UZDfDYmSmfRRkN1ovcPB-xKf2qO8DtOCubPQ3hgnsfGCaYvnjNRQbVpjT&_nc_ohc=8ZNTbttTpcAAX9LyLWj&_nc_ht=scontent.fdad2-1.fna&oh=00_AfAl36roQVSrk27ZT7GsnMJt6VPK1TGAt_Hn4VzHs6xwSQ&oe=65891217" ,
   "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/330598557_975140080123786_5148698678120396713_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&cb=99be929b-b574a898&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF1pqSf0cjRWZGcBDHEkxoggXiWAirvBgiBeJYCKu8GCBSxPoALxyWSc3DHjN0bTH3mEVanlkcuk8mktuqWyeOf&_nc_ohc=LbCSd3B4fVIAX9q2y2N&_nc_ht=scontent.fdad1-3.fna&oh=00_AfDb3T14bXt9qdq7C4JsaPogTozIU7rm8olmXwkgq088Fw&oe=658A05F1" ,
   "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/329109564_567571318620563_2556272121741072002_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&cb=99be929b-b574a898&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGcde5tyPYtygJ-JGgPoZ6-dXR7-RtY_Xh1dHv5G1j9eKvEqT76gjeTXjaQIriF3hnsdWepWJZGZ2urxyNyvLdn&_nc_ohc=kzEMuf7PRbwAX_uHdj_&_nc_oc=AQlfRT-tY7lQC3QuGyqVEfnmYmXYpZV2xq4EXHo3ImNd0qdzjjBaOWLxZpvxOhTzIKPrEfkgGNI3rK7ZON3kao1W&_nc_ht=scontent.fdad1-3.fna&oh=00_AfAAE6oWMC1U7Ur7e5OQh375Oqyz-FNe4hDMtOByj1rLfA&oe=6588361A" ,
   "https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/307314424_536498075199770_5266622236748332474_n.jpg?_nc_cat=106&cb=99be929b-b574a898&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHuc1N68R0Ugoi-3pHkP-IXwz_2gHrwAWfDP_aAevABZ6cvKTRdUPvjJ859aCbjtbRpWs9ijHPhhOR0PgxrIlNp&_nc_ohc=-zXSvkYYH9MAX85oyfp&_nc_ht=scontent.fdad1-2.fna&oh=00_AfCOwjQU6fYqxiqDIKMzNzCsfVHcyS5hyr_XGXN_5I-PZw&oe=6589809B" ,
];

function ImagePage(props) {
  const [state, setState] = useState({
    index: 0,
    isRandom: true,
    isLooping: false,
  });

  // state.index

  const [index, setIndex] = useState(0);

  // index

  const onRandom = () => {
    setState((prev) => ({
      ...prev,
      index: Math.floor(Math.random() * 10),
    }))
  }

  const onNextImage = () => {
    // setIndex(prevState => prevState + 1);
    if (state.index + 1 < imageList.length) {
      // setIndex(index + 1);
      // setState({
      //   index: state.index + 1,
      //   isLooping: state.isLooping,
      //   isRandom: state.isRandom,
      // })

      // setIndex(prevState => prevState + 1);
      setState((prev) => ({
        ...prev,
        index: prev.index + 1,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        index: 0,
      }));
    }
  };

  const onPreviousImage = () => {
    if (state.index - 1 >= 0) {
      setState((prev) => ({
        ...prev,
        index: prev.index - 1,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        index: imageList.length - 1,
      }));
    }
  };

  const onChangeLoop = () => {
    setState((prev) => ({
      ...prev,
      isLooping: !prev.isLooping,
      isRandom: !prev.isLooping ? false : prev.isRandom,
    }))

    // setState((prev) => {
    //   const newLoop = !prev.isLooping;
    //   return {
    //     ...prev,
    //     isLooping: newLoop,
    //   }
    // })
  }

  const onChangeRandom = () => {
    setState((prev) => {
      return {
        ...prev,
        isRandom: !prev.isRandom,
        isLooping: prev.isRandom ? prev.isLooping : false,
      }
    })
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <img
        style={{
          width: '600px',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '5px',
          marginBottom: '20px',
        }}
        src={imageList[state.index]}
        alt="anh xem cho vui"
      />

      <h5>
        {state.index + 1}/{imageList.length}
      </h5>

      <div
        style={{
          display: 'flex',
        }}
      >
        <ButtonGroup
          style={{
            marginRight: '20px',
          }}
          icon={<i className="fa-solid fa-chevron-left fa-xl" />}
          title="Previous"
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onPreviousImage}
          // disabled={!state.index}
          disabled={state.isLooping ? false : !state.index}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title="Next"
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={state.isRandom ? onRandom : onNextImage}
          // disabled={state.index === imageList.length - 1}
          disabled={state.isLooping ? false : state.index === imageList.length - 1}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title={`Looping ${state.isLooping ? 'on' : 'off'}`}
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onChangeLoop}
        />

        <ButtonGroup
          icon={<i className="fa-solid fa-chevron-right fa-xl" />}
          title={`Random ${state.isRandom ? 'on' : 'off'}`}
          isRevert
          buttonClass="button_secondary"
          iconClass="icon_secondary"
          titleClass="title_secondary"
          onClick={onChangeRandom}
        />
      </div>
    </div>
  );
}

export default ImagePage;
