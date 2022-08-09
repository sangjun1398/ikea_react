import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
    <div className="header_container">
      <div className='header_top_wrap'>
        <div className="header_top_inner">
          <ul className="header_top">
            <li className='search_icon'>
              <img src="/img/search_icon.png" alt="search" />
            </li>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
      </div> {/* header_top */}

      <div className="header_wrap">
        <header className="header">
          <div className="header_logo">
            <Link to='/'>
              <img src="/img/logo.png" alt="logo" />
            </Link>
          </div>
          <ul className="gnb">
            <li>
              <Link to='/sub'>
                모든 제품
              </Link>
            </li>
            <li>
              <Link to='/sub'>
                이벤트
              </Link>
            </li>
            <li>
              <Link to='/sub'>
                홈퍼니싱
              </Link>
            </li>
            <li>
              <Link to='/sub'>
                온라인 쇼룸
              </Link>
            </li>
          </ul>
        </header>
      </div>
    </div>
    </>
  )
}
