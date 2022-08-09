/* eslint-disable */
import React from 'react'
import furnitureData from '../../components/Data/furnitureData'
import '../../css/SubTab/furniture.css'

import { Link } from 'react-router-dom';


export default function Furniture() {
  return (
    <div className='furniture_container'>
        <ul className="sub_tab_container">
          <li>
              <Link to='/sub'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/bath_tab.png" alt="bath_tab" />
                    </div>
                    <p className="sub_tab_title">욕실</p>
                </div>
              </Link>
          </li>
          <li>
              <Link to='../bed'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/bed_tab.png" alt="bed_tab" />
                    </div>
                    <p className="sub_tab_title">침대/매트리스</p>
                </div>
              </Link>
              </li>
          <li className='on'>
              <Link to='../furniture'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/furniture_tab.png" alt="furniture_tab" />
                    </div>
                    <p className="sub_tab_title">가구</p>
                </div>
              </Link>
              </li>
          <li>
              <Link to='../kitchen'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/kitchen_tab.png" alt="kitchen_tab" />
                    </div>
                    <p className="sub_tab_title">주방</p>
                </div>
              </Link>
          </li>
          <li>
              <Link to='../light'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/light_tab.png" alt="light_tab" />
                    </div>
                    <p className="sub_tab_title">조명</p>
                </div>
              </Link>
          </li>
          <li>
              <Link to='../office'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/office_tab.png" alt="office_tab" />
                    </div>
                    <p className="sub_tab_title">홈오피스</p>
                </div>
              </Link>
          </li>
          <li>
              <Link to='../outdoor'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/outdoor_tab.png" alt="outdoor_tab" />
                    </div>
                    <p className="sub_tab_title">야외용품</p>
                </div>
              </Link>
          </li>
          <li>
              <Link to='../smart'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/smart_tab.png" alt="smart_tab" />
                    </div>
                    <p className="sub_tab_title">홈스마트</p>
                </div>
              </Link>
          </li>
          <li>
              <Link to='../storage'>
                <div className="sub_tab">
                    <div className="sub_tab_img">
                        <img src="/img/sub/storage_tab.png" alt="storage_tab" />
                    </div>
                    <p className="sub_tab_title">수납/정리</p>
                </div>
              </Link>
          </li>
        </ul>
        {
        furnitureData.map((value, i) => {
            return(
            <div className='furniture' key={value.id}>
                <Link to='/detail'>
                    <div className="furniture_img">
                        <img src={`/img/sub/furniture${i+1}.png`} alt={`furniture${i+1}`} />
                    </div>
                    <div className="furniture_text">
                        <div className="product_icon">
                            <div className="product_cart">
                                <img src="/img/bag_icon.png" alt="bag_icon"/>
                            </div>
                            <div className="product_heart">
                                <img src="/img/heart_icon.png" alt="heart_icon"/>
                            </div>
                        </div>
                        <p className="furniture_name">{value.name}</p>
                        <p className="furniture_desc">{value.desc}</p>
                        <p className="furniture_price">{value.price}</p>
                    </div>
                </Link>
            </div>
            )
        })
        }
    </div>
  )
}
