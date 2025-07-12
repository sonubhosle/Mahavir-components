const React = require('react');

const Swiper = ({ children }) => <div data-testid="swiper">{children}</div>;
const SwiperSlide = ({ children }) => <div data-testid="swiper-slide">{children}</div>;

module.exports = {
  Swiper,
  SwiperSlide,
};
