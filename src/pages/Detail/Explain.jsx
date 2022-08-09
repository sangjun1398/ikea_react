import React from 'react'
import '../../css/Detail/explain.css'

export default function Explain() {
  return (
    <div className='explain'>
        <p className="explain_title">제품 설명</p>
        <p className="explain_desc">
            그릴에 숯불이나 연탄을 분배해서 직접 조리하는 뜨거운 구역과 열 유지를 위한 좀 더 시원한 구역으로 나눠보세요.<br/>
            조리 시간이 서로 다른 음식들을 굽기 좋습니다. 완전한 야외 주방을 만들고 싶다면 별도 판매되는 GRILLSKÄR 그릴셰르 싱크대 유닛과 주방 아일랜드로 완성할 수 있습니다.
        </p>
        <div className="explain_img">
            <img src="/img/detail/explain1.png" alt="explain1" />
        </div>
        <p className="explain_desc">
            그릴 아래 선반에는 공간이 있어서 액세서리, 주방도구, 서빙 접시, 그리고 김이 모락모락 나는 따뜻한 요리를<br/>
            그릴에서 테이블로 서빙하는 데 필요한 물건들을 놓아둘 수 있어요.<br/>
            맨 아래 선반은 뜨거운 바비큐 용품을 올려 놓을 수 있는 튼튼한 다용도 표면으로 사용할 수 있어요.
        </p>
        <div className="explain_img">
            <img src="/img/detail/explain2.png" alt="explain2" />
        </div>
        <p className="explain_desc">
            재받이를 빼서 쉽게 비울 수 있습니다. 스테인리스스틸 소재의 내열 손잡이입니다.
        </p>
        <div className="explain_img">
            <img src="/img/detail/explain3.png" alt="explain3" />
        </div>
        <p className="explain_desc">
            후드를 들어 올리지 않아도 내장 온도계를 통해서 그릴 온도를 확인할 수 있습니다.
        </p>
        <div className="caution">
            <p className="caution_title">
                주의사항
            </p>
            <div className="caution_desc">
                실외에서만 사용하세요.<br/>
                그릴 사용 시 매우 강한 열기가 발산되므로 선반 위 그릴 아래에 열에 민감한 물건을 보관하지 마세요.<br/>
                제품에 포함된 매뉴얼을 꼼꼼하게 읽은 후 사용하세요.
            </div>
        </div>
    </div>
  )
}
