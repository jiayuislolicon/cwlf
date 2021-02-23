/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState, lazy, Suspense } from "react";
import { useSpring, animated } from "react-spring";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import isMobile from "ismobilejs";
import Scrollbar from "smooth-scrollbar";
import * as easings from "d3-ease";

import Loading from "components/organisms/Loading";
// import Cover from "components/organisms/Cover";
// import EventsWrapper from "components/organisms/EventsWrapper";
// import Intro from "components/organisms/Intro";
// import IpIntro from "components/organisms/IpIntro";
// import LogoIntro from "components/organisms/LogoIntro";
// import Service from "components/organisms/Service";
// import ArticlePopup from "components/organisms/ArticlePopup";
import Footer from "components/molecules/Footer";

import { setMovingPos } from "actions/global";

import "./index.scss";

const Cover = lazy(() => import("components/organisms/Cover"));
const EventsWrapper = lazy(() => import("components/organisms/EventsWrapper"));
const Intro = lazy(() => import("components/organisms/Intro"));
const IpIntro = lazy(() => import("components/organisms/IpIntro"));
const LogoIntro = lazy(() => import("components/organisms/LogoIntro"));
const Service = lazy(() => import("components/organisms/Service"));
const ArticlePopup = lazy(() => import("components/organisms/ArticlePopup"));

const trans = (x, y, s, padding) => `circle(${s}px at ${x}px ${y - padding}px)`;

const Section = ({
  sectionRef,
  xys,
  nowScroll,
  originChildren,
  maskChildren,
  className,
  num,
  clipPath,
}) => {
  return (
    <section className={classNames("container", className)}>
      <div className="container-content">{originChildren}</div>
      {clipPath && (
        <animated.div
          className="container-mask"
          style={{
            clipPath:
              sectionRef.current !== null &&
              xys.interpolate((x, y, s) =>
                trans(
                  x,
                  y,
                  s,
                  sectionRef.current[num].getBoundingClientRect().top +
                    nowScroll
                )
              ),
            WebkitClipPath:
              sectionRef.current !== null &&
              xys.interpolate((x, y, s) =>
                trans(
                  x,
                  y,
                  s,
                  sectionRef.current[num].getBoundingClientRect().top +
                    nowScroll
                )
              ),
          }}
        >
          {maskChildren}
        </animated.div>
      )}
    </section>
  );
};

const Home = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const scrollBarRef = useRef(null);

  const [nowPageNum, setNowPageNum] = useState(null);
  const [nowScroll, setNowScroll] = useState(0);
  const [scrollValue, setScrollValue] = useState(0);

  const { nowPos, loadingFinish } = useSelector((state) => state.global);

  const [, setY] = useSpring(() => ({
    immediate: false,
    config: { duration: 500, easing: easings.easeCubic },
    y: 0,
    onFrame: (props) => {
      if (isMobile(window.navigator).any) {
        window.scroll(0, props.y);
      } else if (scrollBarRef.current !== null) {
        scrollBarRef.current.scrollTop = props.y;
      }
    },
  }));

  const scrollToSection = (num) => {
    const sections = document.querySelectorAll(".container");
    setY({
      y: isMobile(window.navigator).any
        ? sections[num].getBoundingClientRect().top + window.pageYOffset - 60
        : sections[num].getBoundingClientRect().top +
          scrollBarRef.current.scrollTop -
          80,
      reset: true,
      from: {
        y: isMobile(window.navigator).any
          ? window.pageYOffset
          : scrollBarRef.current.scrollTop,
      },
    });
  };

  useEffect(() => {
    if (nowPos === "top") {
      scrollToSection(0);
      dispatch(setMovingPos(""));
    } else if (nowPos === "events") {
      scrollToSection(1);
      dispatch(setMovingPos(""));
    } else if (nowPos === "intro") {
      scrollToSection(2);
      dispatch(setMovingPos(""));
    }
  }, [nowPos]);

  const [{ xys }, set] = useSpring(() => ({
    xys: !isMobile(window.navigator).any ? [0, 0, 100] : [0, 0, 0],
    config: { mass: 5, tension: 200, friction: 40 },
  }));

  const cleanString = () => {
    // clean params when closing innerPage
    const params = new URLSearchParams();
    history.push({ search: params.toString() });
    setNowPageNum(null);
    document.documentElement.style.overflow = "hidden auto";
  };

  const detectPos = (x, y, target, biggerScale, normalScale) => {
    const mouseStatus = target.getAttribute("data-mouse");
    setNowScroll(window.pageYOffset);

    if (mouseStatus === "bigger") {
      set({ xys: [x, y, biggerScale] });
    } else {
      set({ xys: [x, y, normalScale] });
    }
  };

  const handleScroll = () => {
    setScrollValue(scrollBarRef.current.scrollTop);
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".container");
    sectionRef.current = sections;

    if (!isMobile(window.navigator).any) {
      scrollBarRef.current = Scrollbar.init(wrapperRef.current);
      scrollBarRef.current.track.xAxis.element.remove();
      scrollBarRef.current.addListener(handleScroll);
    }
    return () => {
      if (!isMobile(window.navigator).any) scrollBarRef.current.destroy();
    };
  }, []);

  useEffect(() => {
    // if query params change...
    const { search } = location;

    if (search !== "") {
      const pageNum = new URLSearchParams(search).get("pageNum");
      setNowPageNum(pageNum);
      document.documentElement.style.overflow = "hidden";
    }
  }, [location]);

  return (
    <div
      className="home"
      onMouseMove={({ pageX: x, pageY: y, target }) => {
        if (!isMobile(window.navigator).any) detectPos(x, y, target, 150, 100);
      }}
      onTouchStart={({ touches, target }) => {
        const { pageX: x, pageY: y } = touches[0];
        detectPos(x, y, target, 150, 100);
      }}
      onTouchMove={({ touches, target }) => {
        const { pageX: x, pageY: y } = touches[0];
        detectPos(x, y, target, 150, 100);
      }}
      onTouchEnd={({ changedTouches, target }) => {
        const { pageX: x, pageY: y } = changedTouches[0];
        detectPos(x, y, target, 0, 0);
      }}
    >
      <ArticlePopup
        shareUrl="https://google.com.tw"
        onClick={() => cleanString()}
        open={nowPageNum !== null}
      />

      <Loading />
      <Suspense fallback={<div> </div>}>
        <div
          className="scroll-content-wrapper"
          ref={wrapperRef}
          style={{
            width: !isMobile(window.navigator).any ? "100%" : "auto",
            height: !isMobile(window.navigator).any ? "100vh" : "auto",
            // overflow: !isMobile(window.navigator).any ? "hidden" : "unset",
          }}
        >
          {/* 封面圖 */}
          <Section
            sectionRef={sectionRef}
            xys={xys}
            nowScroll={nowScroll}
            originChildren={<Cover loading={loadingFinish} />}
            maskChildren={<Cover loading={loadingFinish} mask />}
            className="cover-container"
            num="0"
            clipPath
          />

          {/* 展演活動 */}
          <Section
            sectionRef={sectionRef}
            xys={xys}
            nowScroll={nowScroll}
            originChildren={<EventsWrapper offset={scrollValue} />}
            maskChildren={<EventsWrapper mask offset={scrollValue} />}
            className="events-container"
            num="1"
            clipPath={!isMobile(window.navigator).any}
          />

          {/* 兒盟介紹 */}
          <Section
            sectionRef={sectionRef}
            xys={xys}
            nowScroll={nowScroll}
            originChildren={<Intro offset={scrollValue} />}
            maskChildren={<Intro mask offset={scrollValue} />}
            className="intro-container"
            num="2"
            clipPath
          />

          {/* LOGO介紹 */}
          <Section
            sectionRef={sectionRef}
            xys={xys}
            nowScroll={nowScroll}
            originChildren={<LogoIntro offset={scrollValue} />}
            maskChildren={<LogoIntro mask offset={scrollValue} />}
            className="logo-intro-container"
            num="3"
            clipPath
          />

          {/* 服務說明 */}
          <Section
            sectionRef={sectionRef}
            xys={xys}
            nowScroll={nowScroll}
            originChildren={<Service offset={scrollValue} />}
            maskChildren={<Service mask offset={scrollValue} />}
            className="service-container"
            num="4"
            clipPath
          />

          {/* 介紹ＩＰ */}
          <Section
            sectionRef={sectionRef}
            xys={xys}
            nowScroll={nowScroll}
            originChildren={<IpIntro offset={scrollValue} />}
            maskChildren={<IpIntro mask offset={scrollValue} />}
            className="ip-intro-container"
            num="5"
            clipPath
          />
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
