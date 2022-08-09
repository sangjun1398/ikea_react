import React from 'react'
import '../../css/Detail/size.css'

export default function Size() {
  return (
    <div className='size_wrap'>
        <p className="size_title">
            치수
        </p>
        <div className="size">
            <div className="size_img">
                <img src="/img/detail/size.png" alt="size" />
            </div>
            <ul className="size_info">
                <li>길이 : 86cm</li>
                <li>폭 : 61cm</li>
                <li>높이 : 114cm</li>
                <li>선반당 최대 하중 : 50kg</li>
            </ul>
        </div>
    </div>
  )
}
