import React, { useState } from 'react';

import './components/tab/style.css';

const imageList = [
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/376057530_1321643228487965_5697935550381196022_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGbgEi527oT5CKMF2ZulbEfrjeAXsg9OsiuN4BeyD06yOfsXT2vztT-GTHn-AM4EoGfuXFGMCZi0KdHG6mcI_p1&_nc_ohc=7eONwz_B1lAAX-o35A0&_nc_ht=scontent.fdad4-1.fna&oh=00_AfC3urDB71UvAmIm50mhb5l7qVTXXmWrVPZRs8qZ7coXcQ&oe=658680F7"  ,
 "https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/327963300_601884211725371_9079321559634246665_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHA0aHEZ5BqYwWgxZTUN0gkfZLGzKIl_1p9ksbMoiX_Wt2BhkcFgZvPgHV2DQwllY6bVY2npXE8qeM4viEJVYZN&_nc_ohc=K49aNEYyeccAX85jrJ5&_nc_ht=scontent.fdad4-1.fna&oh=00_AfA2gY6vRA9j_mQQ5a5zQ3ytlaUg8WYq29U8vfxg69AjBw&oe=65868D5B" ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/288776814_1056234828362141_129191005627668675_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFvqGzQLZY-RfZuk5MED5IdlnDPNVdD9N2WcM81V0P03bRthg3GVQom8awdf1uqVY4UBDNzmNSCguyo9GqwZZyK&_nc_ohc=FTNvsRmEcVIAX_4Yt_R&_nc_ht=scontent.fdad4-1.fna&oh=00_AfA70gCNbON4Gf5v9bK4-7p5jI6eNW-Kia6gkcZgAJcssQ&oe=65863C6A"   ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/239901130_881073259211633_5771029367030504943_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeGc3fLMJruNjUFoR0bUytqVTh1WzoyGvbxOHVbOjIa9vNcq-9XmmV5t_0Ra5UdnDaXbhk_lNkB5g7GXGtEUOPuD&_nc_ohc=5nEnuhvWXHQAX_tcE_8&_nc_ht=scontent.fdad4-1.fna&oh=00_AfAs4YP12KxuK-72WbWALA5dQWisMIo_L9wucyc3vYe2rQ&oe=65873585" ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/77262394_500770177241945_8824370296610881536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeE7m2ZcCy7rS4Jm1wXYGnRmllttjhUWaQqWW22OFRZpCpD5gB1xRmcLR3-Nc4KfAE-3ypvfA8vpwfGt-l2vr53Q&_nc_ohc=iqy9P-au7ysAX8DWRLs&_nc_ht=scontent.fdad4-1.fna&oh=00_AfAky53fOnuXR_MxvBhU2QVtj2nwPltIekCDpO3LrP_jCA&oe=65A8D039" ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/75339459_493033144682315_4041194136794038272_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHJBZtYsnB8YcayuvVgQ5KCpUyBmGXtojClTIGYZe2iMMe5gELUMiUYd7Xn4NOROHRMeJC7CqrpwHtP___kjQ0k&_nc_ohc=Wst0-TksvgAAX_Ti5YZ&_nc_ht=scontent.fdad4-1.fna&oh=00_AfDSTEcqP82ArxJEC-mFaClLeDxsuu6SxDT-4DNuhN-QOQ&oe=65A8CA81" ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t1.6435-9/127871168_734490930536534_4786935877049153840_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeFbfyH4PV1ww0_M1-8R7OuhMnbo1lhIlxsydujWWEiXG9UuuuhK2X-siNMiESQ4sXl65taWLa64t7xFV_q3ePkV&_nc_ohc=ctNR8DH4bykAX-N9SlU&_nc_ht=scontent.fdad4-1.fna&oh=00_AfAOMjm3pltBdnPBhu8yby9Xr0B6nKTfpmMTCEmSVyZfrw&oe=65A8D1DD" ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t1.18169-9/22046025_129680901017543_1306271832377006906_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7f8c78&_nc_eui2=AeFMBcLUutoVl7URfZ5kBEG9Hb8ZA-mgieIdvxkD6aCJ4uzzBM0iM2a3RGB4vu7LOnaqHvO-vikhRYk_FPtv5Iq2&_nc_ohc=Hp6uvzEuppAAX_L8DCU&_nc_oc=AQmvLRNku4-BBq9Q56Z15zbodXLU_Rpl2OonS9nYItYCcXVjQN_Ah8lwkkINgvKnef0&_nc_ht=scontent.fdad4-1.fna&oh=00_AfAvsUUH8W1c_KkzGN_VXqXvDFH-Ekt9eBp0bh0K9zXZkA&oe=65A8B0C0" ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/354216230_698651098984466_4595494019462248183_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGK_DltPNSuErC4wEfH1KXkjJO-Msj8WAuMk74yyPxYC78AMoII0wuee_fSH60tkxgF1FXWbGbKy7NPAiMWd_eX&_nc_ohc=3MD_0R5aZFAAX_1WK8Q&_nc_ht=scontent.fdad4-1.fna&oh=00_AfCjVfcd8ar82sqcAVj-GYqPnNcJ0HS7ndGNqOJwVZU8-g&oe=65859C8D" ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/348813126_936260257589659_2070862975736012428_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeEn-KoAyx-5vr0s2JT6y4ZyUdzsLufT8SFR3Owu59PxIQfq3XwqD7vBDEDmnUno_UD0XrGtz11WcA-yEETNZ5o8&_nc_ohc=zwTYYrLrdvkAX__Txag&_nc_ht=scontent.fdad4-1.fna&oh=00_AfD1I6fDUZYUi_vG4dd9KyAPkg9iy2IkGTwWWsmj761R-A&oe=6586BC2B" ,
  "https://scontent.fdad4-1.fna.fbcdn.net/v/t39.30808-6/330598557_975140080123786_5148698678120396713_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeF1pqSf0cjRWZGcBDHEkxoggXiWAirvBgiBeJYCKu8GCBSxPoALxyWSc3DHjN0bTH3mEVanlkcuk8mktuqWyeOf&_nc_ohc=LbCSd3B4fVIAX9twVbp&_nc_ht=scontent.fdad4-1.fna&oh=00_AfAtZQ3qa3W9CNW0Lq8CJVr4XxHbQTtYY8YeoK9AEZ20cA&oe=65861171" ,

  ]

function imageList(props) {
  const [state, setState] = useState({
    index: 0,
    isRandom: true,
    isLooping: false,
  });
  const [index, setIndex] = useState(0);

  const onRandom = () => {
    setState((prev) => ({
      ...prev,
      index: Math.floor(Math.random() * 10),
    }))
  }

  const onNextImage = () => {
    if (state.index + 1 < imageList.length) {
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

export default App;