/* eslint-disable */
import React from 'react'
import '../css/detail.css'
import { Link, Outlet } from 'react-router-dom';
import Total from './Detail/Total'
import Explain from './Detail/Explain';
import Size from './Detail/Size';
import Steel from './Detail/Steel';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

const tabs = [
    {
        id: 'tab1',
    },
    {
        id: 'tab2',
    },
    {
        id: 'tab3',
    }
]

export default function Detail() {
  return (
    <div className='detail_container'>
        <ul className='breadcrumb'>
            <li>
                <Link to='/'>
                    홈
                </Link>
            </li>
            <li>〉</li>
            <li>
                <Link to='/sub'>
                    IKEA 모든 제품
                </Link>
            </li>
            <li>〉</li>
            <li>
                <Link to='/detail'>
                    GRILLSKÄR 그릴셰르
                </Link>
            </li>
        </ul>
        <div className="tab">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                loop={true}
                direction="vertical"
            >
                {
                tabs.map((visual, i) => {
                    return (
                        <SwiperSlide>
                            <img src={`/img/detail/tab${i+1}.png`} alt={`tab${i+1}`}/>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </div>

        <div className="main_img">
            <img src="/img/detail/detail_main.png" alt="datail_main" />
        </div>
        <div class="sticky">
            <h2 class="sticky_title">GRILLSKÄR 그릴셰르</h2>
            <p class="sticky_desc">숯불바비큐그릴, 블랙/스테인리스 실외용</p>
            <p class="sticky_price">￦ 849,000</p>
            <p class="sticky_rating">
                ⭐⭐⭐⭐⭐ <span>리뷰 1,034</span>
            </p>
            <p class="sticky_notice">
                ⓘ 매트리스와 침구는 별도구매입니다.
            </p>
            <div class="sticky_info">
                <ul class="sticky_info_left">
                    <li>배송비</li>
                    <li>제조국</li>
                    <li>제조사</li>
                    <li>디자이너</li>
                    <li>제품 번호</li>
                    <li>재질</li>
                </ul>
                <ul class="sticky_info_right">
                    <li>무료배송</li>
                    <li>중국(China)</li>
                    <li>IKEA of Sweden AB</li>
                    <li>IKEA of Sweden</li>
                    <li>704.889.12</li>
                    <li>스테인리스스틸, 페놀 플라스틱</li>
                </ul>
            </div>
            <div class="sticky_btn">
                <div class="sticky_cart">장바구니</div>
                <div class="sticky_buy">구매하기</div>
            </div>
        </div>
        <div className="info_container">
            <p className="main_desc">
                BBQ 파티로 친구와 가족을 초대하세요! 숯불 그릴이 있으면 완벽한 불꽃이 고기와 생선,<br/> 채소에 맛있는 훈제 맛을 입히는 동안 사람들과 어울리며 즐거운 시간을 보낼 수 있죠.
            </p>
            
            <ul className="info_tab">
                <li><Link to='/detail'>전체 설명 보기</Link></li>
                <li><Link to='/detail/explain'>제품 설명</Link></li>
                <li><Link to='/detail/size'>치수</Link></li>
                <li><Link to='/detail/steel'>소재 설명</Link></li>
            </ul>
            <Outlet>
                <Total/>
                <Explain/>
                <Size/>
                <Steel/>
            </Outlet>
        </div>
    </div>
  )
}
