/* eslint-disable */
import React from 'react'
import '../css/main.css'

import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

const visuals = [
    {id: 'visual1'},
    {id: 'visual2'},
    {id: 'visual3'},
    {id: 'visual4'}
]

const ideas = [
    {
        id: 'idea1',
        title: '센스있는 선물 아이디어',
        desc: '설레는 집들이, 특별한 생일파티 등 어떤 상황에도 어울리는 센스있는 선물과 기프트카드가 준비되어 있어요',
        color: '#5d392b'
    },
    {
        id: 'idea2',
        title: '집 이야기',
        desc: '다양한 스타일과 크기의 생활 공간, 그리고 이곳을 보금자리로 삼고 있는 이들의 스토리 속에서 아이디어를 얻어보세요.',
        color: '#606a69'
    },
    {
        id: 'idea3',
        title: '공간마다 다른 아이디어와 팁',
        desc: '오늘은 주방, 내일은 거실, 다음주는 침실...　다양한 홈퍼니싱 아이디어를 만나보세요.',
        color: '#fda389'
    }
]

const events = [
    {
        id: 'event1',
        title: '바이백 프라이데이',
        subtitle: '건강한 지구와 자원 순환을 위해 !',
        desc1: '바이백 서비스를 이용하시는 IKEA Family멤버에게',
        desc2: '매입가의 두배를 드립니다 !',
        color: '#a7d4bf'
    },
    {
        id: 'event1',
        title: '배송비가 걱정이라면 ?',
        subtitle: '딱 2주 동안만 50% 더 저렴한 배송 !',
        desc1: '지금 IKEA 온라인 몰에서 50만원 이상 구매 시',
        desc2: '배송비를 50% 할인해드려요 !',
        color: '#fee002'
    }
]



export default function Main() {
  return (
    <>
        <div className='visual_main'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                {
                visuals.map((visual, i) => {
                    return (
                        <SwiperSlide>
                            <img src={`/img/main_visual${i+1}.png`} alt={`main_visual${i+1}`}/>
                        </SwiperSlide>
                    )
                })
                }
            </Swiper>
        </div>

    <div className='product'>
        <div className="product_img">
            <img src="/img/product.png" alt="" />
        </div>
        <div className="product_text">
            <div className="product_title">
                IKEA의 제품을 만나보세요
            </div>
            <div className="product_sub_title">
                즐거움이 가득한 곳, IKEA
            </div>
            <div className="product_desc">
            매장으로 직접 나서지 않고,<br/>가정에서 편하게 오프라인 매장을 둘러보세요 !
            </div>
            <Link to='/sub'>
                <div className="product_btn">
                    모든 제품 보기
                </div>
            </Link>
        </div>
    </div>

    <div className='event_container'>
    {
        events.map((event, i) => {
            return (
                <div className="event" key={event.id} style={{backgroundColor: event.color}}>
                    <div className="event_img">
                        <img src={`/img/event${i+1}.png`} alt={`event${i+1}`} />
                    </div>
                    <div className="event_text">
                        <div className="event_title">
                            {event.title}
                        </div>
                        <div className="event_sub_title">
                            {event.subtitle}
                        </div>
                        <div className="event_desc">
                            {event.desc1}
                        </div>
                        <div className="event_desc">
                            {event.desc2}
                        </div>
                    </div>
                </div>
            )
        })
    }

    </div>

    <div className='home_container'>
        <h3 className='home_title'>홈퍼니싱 아이디어</h3>
        <div className="furnishing">
            <div className="furnishing_text">
                <div className="furnishing_title">
                    한 곳에서 만나요,<br/>
                    홈퍼니싱 아이디어의 모든 것
                </div>
                <div className="furnishing_desc">
                    홈퍼니싱을 위한 아이디어가 필요하신가요?<br/>
                    이곳에서 다양한 상황의 홈퍼니싱 아이디어와<br/>
                    솔루션, 제품 활용 예를 확인해 보세요
                </div>
                <Link to='/sub'>
                    <div className="furnishing_btn">
                        자세히 보기
                    </div>
                </Link>
            </div>
            <div className="furnishing_img">
                <img src="/img/furnishing.png" alt="" />
            </div>
        </div>
        <h3 className="home_sub_title">아이디어 둘러보기</h3>
        <div className="idea_container">
        {
            ideas.map((idea, i) => {
                return (
                    <div className="idea" key={idea.id} style={{backgroundColor: idea.color}}>
                        <div className="idea_img">
                            <img src={`/img/idea${i+1}.png`} alt={`idea${i+1}`}/>
                        </div>
                        <p className="idea_title">{idea.title}</p>
                        <p className="idea_desc">{idea.desc}</p>
                    </div>
                )
            })
        }
        </div>
    </div>

    </>
  )
}
