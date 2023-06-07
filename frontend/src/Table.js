import './css/table.css';
import axios from 'axios';
import React from 'react';
import { DataContext } from './App';
export default function Table() {
  const {data}= React.useContext(DataContext);
  let randNum=Math.random()*(6)-3;

  if (!data)
    return (
      <div className="t1">
        <div class="table-responsive table-borderless border-primary t2">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th class="text-center t3">#</th>
                <th class="text-center t3">Platform</th>
                <th class="text-center t3">Last Traded Price</th>
                <th class="text-center t3">Buy / Sell Price</th>
                <th class="text-center t3">Difference</th>
                <th class="text-center t3">Savings</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  else
    return (
      <div>
        <div className="t1">
          <div class="table-responsive table-borderless border-primary t2">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th class="text-center t3">#</th>
                  <th class="text-center t3">Platform</th>
                  <th class="text-center t3">Last Traded Price</th>
                  <th class="text-center t3">Buy / Sell Price</th>
                  <th class="text-center t3">Difference</th>
                  <th class="text-center t3">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-center t4">1</td>
                  <td class="text-center t5">WazirX</td>
                  <td class="text-center t6">₹ {Number.parseInt(data.last)}</td>
                  <td class="text-center t7">₹ {Number.parseInt(data.buy)} / ₹ {Number.parseInt(data.sell)}</td>
                  {randNum>0?(<td class="text-center t7" style={{ color: 'green' }}>
                    {randNum.toFixed(2)}
                  </td>):(<td class="text-center t7" style={{ color: 'red' }}>
                    {randNum.toFixed(2)}
                  </td>)}
                  <td class="text-center t8" style={{ color: 'red' }}>
                  ₹1,18,016
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
