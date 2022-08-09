import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../css/sub.css'
import Bath from './SubTab/Bath';
import Bed from './SubTab/Bed';
import Furniture from './SubTab/Furniture';
import Kitchen from './SubTab/Kitchen';
import Light from './SubTab/Light';
import Office from './SubTab/Office';
import Outdoor from './SubTab/Outdoor';
import Smart from './SubTab/Smart';
import Storage from './SubTab/Storage';

export default function Sub() {

  return (
    <>
    <div className="sub_container">
      <ul className='breadcrumb'>
          <li>
            <Link to='/'>홈</Link>
          </li>
          <li>〉</li>
          <li>
            <Link to='/sub'>IKEA 모든 제품</Link>
          </li>
      </ul>

      <h3 className='sub_title'>모든 제품</h3>
      
      <Outlet>
        <Bath/>
        <Bed/>
        <Furniture/>
        <Kitchen/>
        <Light/>
        <Office/>
        <Outdoor/>
        <Smart/>
        <Storage/>
      </Outlet>

    </div>
    </>
  )
}
