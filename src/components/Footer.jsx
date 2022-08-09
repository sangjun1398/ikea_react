import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer_wrap'>
        <div className='footer_top'>
            <ul>
                <li>개인정보처리방침</li>
                <li>쿠키 정책</li>
                <li>쿠키 설정</li>
                <li>Responsible disclosure</li>
            </ul>
        </div>
        <footer className='footer_inner'>
            <div className='footer_middle'>
                <div className='footer_logo'>
                    
                <Link to='/'>
                    <img src="img/footer_logo.png" alt="" />
                </Link>
                </div>
                <ul>
                    <li>고객문의</li>
                    <li>고객지원</li>
                    <li>자주 묻는 질문</li>
                    <li>문의하기</li>
                    <li>배송조회</li>
                    <li>교환환불</li>
                    <li>품질보증</li>
                    <li>제품리콜</li>
                    <li>피드백</li>
                    <li>부품 신청</li>
                </ul>
                <ul>
                    <li>쇼핑하기</li>
                    <li>쇼핑하기</li>
                    <li>전화 주문</li>
                    <li>IKEA for Business</li>
                    <li>셀프 플래닝</li>
                    <li>IKEA 모바일 앱</li>
                    <li>제품 사용 팁/가이드</li>
                    <li>제품 구매 가이드</li>
                    <li>결제 옵션</li>
                    <li>기프트 카드</li>
                </ul>
                <ul>
                    <li>서비스</li>
                    <li>IKEA 서비스</li>
                    <li>배송 서비스</li>
                    <li>조립 서비스</li>
                    <li>설치 서비스</li>
                    <li>주방 서비스</li>
                    <li>플래닝 서비스</li>
                    <li>인테리어 디자인 서비스</li>
                    <li>바이백 서비스</li>
                </ul>
                <ul>
                    <li>IKEA 이야기</li>
                    <li>브랜드 소개</li>
                    <li>집에서의 삶</li>
                    <li>지속가능한 생활</li>
                    <li>내가 아끼는 집, 나를 아끼는 집</li>
                    <li>뉴스룸</li>
                    <li>채용정보</li>
                </ul>
                <ul>
                    <li>IKEA Family</li>
                    <li>지금 IKEA Family에 무료로 가입하고<br/>다양한 멤버 전용 혜택을 누리세요.</li>
                    <li className='footer_btn'>IKEA Family 가입하기</li>
                </ul>
            </div>
            <div class="footer_bottom">
                <div class="sns_img">
                    <div onClick={() => window.open('https://ko-kr.facebook.com/IKEA.kr/', '_blank')}>
                        <img src="img/sns_facebook.png" alt="" />
                    </div>
                    <div onClick={() => window.open('https://www.instagram.com/ikeakr/', '_blank')}>
                        <img src="img/sns_instagram.png" alt="" />
                    </div>
                    <div onClick={() => window.open('https://www.youtube.com/channel/UCvt32qJUh606U-W_hr-EF7A', '_blank')}>
                        <img src="img/sns_youtube.png" alt="" />
                    </div>
                </div>
                <ul>
                    <li>IKEA 코리아</li>
                    <li>주소 : (우)14352 경기도 광명시 일직로 17 IKEA광명점</li>
                    <li>사업자 등록번호 : 106-86-82871 사업자정보확인</li>
                </ul>
                <ul>
                    <li>대표자 : 프레드릭 요한손</li>
                    <li>통신판매업 신고 : 2018-경기광명-0209</li>
                    <li>TEL : 1670-4532</li>
                </ul>
            </div>
        </footer>
    </div>
  )
}
