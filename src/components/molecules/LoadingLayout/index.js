import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useSpring, animated } from "react-spring";

import bg from "static/svg/loading-bg.svg";
import hoverBg from "static/svg/loading-bg-hover.svg";
import character from "static/svg/loading-characters.svg";
import characterHover from "static/svg/loading-characters-hover.svg";
import heart from "static/svg/loading-heart.svg";
import heartHover from "static/svg/loading-heart-hover.svg";

import "./index.scss";

const LoadingLayout = ({ mask, number }) => {
  const [animateStart, setAnimateStart] = useState(false);
  const [num, setNum] = useSpring(() => ({
    immediate: false,
    number: 0,
    from: { number: 0 },
    onFrame: (props) => {
      if (props.number === 100) setAnimateStart(true);
    },
  }));

  const heartSpring = useSpring({
    transform: animateStart
      ? `translate(-50%, -50%) scale(5)`
      : `translate(-50%, -50%) scale(1)`,
    config: { delay: 1000 },
  });

  const characterSpring = useSpring({
    transform: animateStart
      ? `translate(-50%, -50%) scale(0.8)`
      : `translate(-50%, -50%) scale(1)`,
    opacity: animateStart ? 0 : 1,
    config: { delay: 1000 },
  });

  const pageSpring = useSpring({
    opacity: animateStart ? `0` : `1`,
    pointerEvents: animateStart ? "none" : "auto",
    config: { delay: 1000 },
  });

  useEffect(() => {
    setNum({ number });
  }, [number]);

  return (
    <animated.div
      className={classNames("page-loading-layout", mask ? "mask" : "")}
      style={{ backgroundImage: `url(${mask ? hoverBg : bg})`, ...pageSpring }}
    >
      <animated.img
        src={character}
        alt="角色"
        className="loading-characters ab-center"
        style={characterSpring}
      />
      {mask && (
        <animated.img
          src={characterHover}
          alt="角色"
          className="loading-characters ab-center"
          style={characterSpring}
        />
      )}
      <animated.img
        src={heart}
        alt="愛心"
        className="loading-heart ab-center"
        style={heartSpring}
      />
      {mask && (
        <animated.img
          src={heartHover}
          alt="愛心"
          className="loading-heart ab-center"
          style={heartSpring}
        />
      )}
      <div className="loading-num ab-center">
        <animated.span>
          {num.number.interpolate((value) => Math.floor(value))}
        </animated.span>
        <span>%</span>
      </div>
    </animated.div>
  );
};

export default LoadingLayout;
