import './css/custom.css'
import './css/price.css'
import { DataContext } from './App';
import React from 'react';
export default function Price() {
  const {data}= React.useContext(DataContext);

  return (
    
    <div>
      <div className="d-flex flex-row justify-content-center align-items-center p1">
            <div className="d-flex flex-column justify-content-center align-items-center align-content-center p2">
                <p className='p3'>0.26 %</p>
                <p className='p4'>5 mins</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center align-content-center p2">
                <p className='p3'>0.52 %</p>
                <p className='p4'>1 Hour</p>
            </div>
            <div className="d-flex flex-column flex-shrink-1 justify-content-center align-items-center align-content-center p5">
                <p className="p6">Best Price to Trade</p>
                <p className='p7'>{data && data.sell?(
                  <div>₹{Number.parseInt(data.sell)}</div>
                  ):(<div>No Data Present</div>)}</p>
                <p className="p8"><br/>Average&nbsp;BTC/INR&nbsp;net price including commission<br/><br/><br/></p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center align-content-center p2">
                <p className='p3'>0.67 %</p>
                <p className='p4'>1 day</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center align-content-center p2">
                <p className='p3'>0.78 %</p>
                <p className='p4'>7 days</p>
            </div>
      </div>
    </div>
  );
}