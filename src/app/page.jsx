"use client";
import { useRef, useEffect, useState } from "react";
import module from '@/app/page.module.css'

// layout Components
import Header from "@/layout/Header"
import Footer from "@/layout/Footer"
import TitleSection from "@/layout/TitleSection"
import ProfileSection from "@/layout/profileSection";


export default function Home() {
  const DIVIDER_HEIGHT = 5;
  const mainRef = useRef(null);
  const [ pageNum, setPageNum  ] = useState(1)
  const maxPage = 2

  // [ fullPage 이벤트 핸들러 ]
  const wheelHandler = (e) => {
    e.preventDefault();
    const { deltaY } = e;
    const { scrollTop } = mainRef.current; // 스크롤 위쪽 끝부분
    const pageHeight = window.innerHeight; // 화면길이 === 100vh
    const mainRefCurrent = mainRef.current;

    // 스크롤 내릴 때
    if (deltaY > 0) {
      // 1페이지 이상일때만
      if(pageNum < maxPage) setPageNum(pageNum + 1)

      // 1페이지
      if (scrollTop >= 0 && scrollTop < pageHeight) {
        mainRefCurrent.scrollTo({
          top: pageHeight + DIVIDER_HEIGHT,
          left: 0,
          behavior: "smooth",
        });
      }

      // 2페이지
      if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        mainRefCurrent.scrollTo({
          top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
          left: 0,
          behavior: "smooth",
        });
      }

    }

    // 스크롤 올릴 때
    else if(deltaY <= 0){
      // 1페이지가 아닐때만
      if(pageNum > 1) setPageNum(pageNum - 1)

      // 2페이지
      if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
        mainRefCurrent.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }

    }
  };

  useEffect(() => {
    const mainRefCurrent = mainRef.current;
    mainRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      mainRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, [pageNum]);

  return (
      <>
        <Header pageNum={pageNum}/>
        <main ref={mainRef} className={module.mainContainer}>
          <TitleSection />
          <div className={module.divider}></div>
          <ProfileSection />
        </main>
        <Footer />
      </>
  );
}
