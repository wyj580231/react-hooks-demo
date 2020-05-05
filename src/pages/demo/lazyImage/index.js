import React, { useEffect } from "react";
import "./index.css";
import images from "./images.json";

export default () => {
  useEffect(() => {
    const observerImages = Array.from(
      document.getElementsByClassName("lazy-img-observer")
    );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          var img = entry.target;
          const { src } = img.dataset;
          img.src = src;
          img.style.height = "auto";
          observer.unobserve(img);
        }
      });
    });
    observerImages.forEach((v) => observer.observe(v));
    return () => {
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    function throttle(fn, delay, limit) {
      let time = new Date().getTime();
      let timer = null;
      return function () {
        clearTimeout(timer);
        const now = new Date().getTime();
        if (now - time > delay) {
          time = now;
          fn.apply(this, arguments);
        } else {
          timer = setTimeout(() => {
            fn.apply(this, arguments);
          }, delay);
        }
      };
    }
    const scrollImages = Array.from(
      document.getElementsByClassName("lazy-img-scroll")
    );
    const lazyload = () => {
      const winHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const winWidth =
        window.innerWidth || document.documentElement.clientWidth;
      if (scrollImages.length === 0) {
        window.removeEventListener("scroll", throttledFn);
      } else {
        for (let i = 0; i < scrollImages.length; ) {
          const img = scrollImages[i];
          const { height, top, left, width } = img.getBoundingClientRect();
          if (
            top <= winHeight &&
            top + height >= 0 &&
            left <= winWidth &&
            left + width >= 0
          ) {
            const { src } = img.dataset;
            img.src = src;
            scrollImages.splice(i, 1);
            img.onload = () => {
              img.style.height = "auto";
              lazyload();
            };
          } else {
            i++;
          }
        }
      }
    };
    lazyload();
    const throttledFn = throttle(lazyload, 500, 600);
    window.addEventListener("scroll", throttledFn);
    return () => {
      window.removeEventListener("scroll", throttledFn);
    };
  }, []);
  return (
    <div id="lazyImageDemo">
      <div className="left">
        使用IntersectionObserver
        {images.map((v) => (
          <img
            key={v.id}
            alt=""
            className="lazy-img-observer"
            style={{ width: 200, height: 240 }}
            data-src={v.src}
          />
        ))}
      </div>
      <div className="right">
        监听scroll事件
        {images.map((v) => (
          <img
            key={v.id}
            alt=""
            className="lazy-img-scroll"
            style={{ width: 200, height: 240 }}
            data-src={v.src}
          />
        ))}
      </div>
    </div>
  );
};
