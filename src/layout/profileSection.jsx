import module from '@/layout/profilesection.module.css'
import Image from "next/image";


export default function ProfileSection() {
    return (
        <section className={module.profileSection} >
            <article className={module.infoBox}>
                <Image
                    src="/picture.jpeg"
                    alt="My picture"
                    width={300}
                    height={80}
                />
                <strong>
                    DongGyun<span>@서동균</span>
                </strong>
            </article>
            {/*<div className={module.bigIntroText}>*/}
            {/*    <p>안녕하세요!</p>*/}
            {/*    <p>저는 견고하고 재사용성 높은</p>*/}
            {/*    <p>컴포넌트 단위의 UI를 만드는</p>*/}
            {/*    <p>Front-end Developer 입니다.</p>*/}
            {/*</div>*/}
            <div className={module.smallIntroText}>
                <p>
                    저는 Front-end 개발자 서동균 입니다.<br/>
                    쉽고, 재밌고, 남다르게 표현하는걸 좋아합니다.<br/>
                    탄탄한 코드위에 감각적인 UI를 설계합니다. CSS와 JavaScript를 활용한 인터렉티브한 모션을 좋아하고,<br/>
                    컴포넌트 단위의 유지보수에 최적화된 구성에 관심이 많습니다.<br/>
                    반복적이고 지속적으로 사용되는 UI컴포넌트를 모듈화, 패키지화 하고<br/>
                    폭발적으로 확장 되어나가는 웹 어플리케이션에<br/>
                    효과적인 UI솔루션을 제공할수 있는 Front-end 개발자가 되고싶습니다.<br/>
                </p>
                <p>
                    저는 프론트엔드 개발을 단순히 직업 아닌 천직으로 여길 만큼 좋아하고 있습니다. <br/>
                    좋아하니까 즐기게 되고, 더 잘하고 싶다는 생각이 듭니다.<br/>
                    그리고 잘하고 싶은 욕심 때문에 이 직업에 저만의 특별한 무언가가 담기게 되는것 같습니다.<br/>
                    저는 앞으로도 계속해서 현재에 안주하지 않고, 좋은 웹 개발자가 되기 위해 노력하며 새로운 기술스택과 프레임워크, <br/>
                    그리고 웹 개발 중 직면할 여러 문제 상황들을 똑바로 마주할 수 있는 각오를 마친 상태입니다.<br/>
                    이러한 의지를 바탕으로 목표를 향해 한 발짝 한 발짝 서슴치 않고 나아가며<br/>
                    회사와 함께 성장할 수 있는 개발자가 되는 것이 저의 소망입니다<br/>
                </p>
            </div>
        </section>
    );
}