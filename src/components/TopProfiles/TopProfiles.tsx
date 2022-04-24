import React, { FC } from 'react';

import Slider from 'react-slick';

import styles from './styles/TopProfiles.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProfileCard } from 'view';

export const TopProfiles: FC = () => {
  const title = 'Top Profiles';
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className={styles.topProfiles}>
      <div className={styles.topProfiles__titleBox}>
        <h3 className={styles.topProfiles__title}>{title}</h3>
      </div>
      <div className={styles.topProfiles__sliderBox}>
        <Slider {...settings}>
          <ProfileCard size="small" />
          <ProfileCard size="small" />
          <ProfileCard size="small" />
          <ProfileCard size="small" />
          <ProfileCard size="small" />
          <ProfileCard size="small" />
        </Slider>
      </div>
    </div>
  );
};
