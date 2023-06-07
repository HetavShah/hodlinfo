import './css/custom.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Switch } from '@mui/material';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import React,{useContext} from 'react';
import axios from 'axios';
import { DataContext } from './App';


const items=['BTC','ETH','TRX','XRP','EOS','ZIL','BAT','REQ','IOST','WIN','BTT','WRX']
 function TimerFun(){
  React.useEffect(() => {
    try{
      axios.post('/api/v1/crypto/data').then((response) => {
      });
    }catch(err)
    {
      
    }
    
  }, []);

}
const renderTime=({ remainingTime })=>{
  if(remainingTime<=0)
  {
    if(remainingTime==0)
    return <TimerFun></TimerFun>
    else
     return <div></div>
  }
  return (
    <div className="timer">
      <div className="value" style={{color:'#3dc6c1', fontWeight:'bold' ,fontFamily:'Oswald,sans-serif'}}>{remainingTime}</div>
    </div>
  );
}
export default function Header() {
  const {data,setData}=useContext(DataContext);
  const [selectedItem,setSelectedItem]=React.useState('BTC');

  // axios.get('/api/v1/crypto/data?unit=btc').then((value)=>{
  //   setData(value.data);
  // });

  const handleClick=async (unit)=>{
    try{
      let newData;
      if(!unit)  newData= await axios.get(`/api/v1/crypto/data?unit=btc`);
      else
      {
         newData= await axios.get(`/api/v1/crypto/data?unit=${unit}`);
      }
      
     setData(newData.data);
     setSelectedItem(unit);

    }catch(err){
    console.log(err);
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center align-content-center m1">
      <div className="d-flex justify-content-left align-items-center align-content-center m2">
        <p className="m3">HODLINFO</p>
      </div>
      <div className="d-flex justify-content-center align-items-center align-content-center m4">
        <div className="dropdown m5">
          <button
            className="btn btn-primary dropdown-toggle border rounded m6"
            data-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            INR&nbsp;
          </button>
          <div className="dropdown-menu" role="menu">
            <a className="dropdown-item" role="presentation" href="#">
              INR
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle border rounded m6"
            data-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            {selectedItem}&nbsp;
          </button>
          <div className="dropdown-menu" role="menu">
           {
            items.map((item,index)=>(
              <a className="dropdown-item" role="presentation" href="#" onClick={()=>handleClick(item)}>
                {item}
              </a>

            ))
           } 
          </div>
        </div>
        <button
          className="btn btn-outline-primary border rounded m7"
          type="button"
        >
          BUY BTC
        </button>
      </div>
      <div className="d-flex justify-content-end align-items-center align-content-center m8">
      <div>
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={['#3dc6c1']}
          colorsTime={[0]}
          onComplete={() => ({ shouldRepeat: true, delay: 0.5 })}
          size={50}
          strokeWidth={4}
          trailStrokeWidth={4}
        >
          {renderTime}
        </CountdownCircleTimer>
        </div>
        <button className="btn btn-primary m9" type="button">
            <TelegramIcon />
            Connect to Telegram
        </button>
        <Switch/>
      </div>
    </div>
  );
}
