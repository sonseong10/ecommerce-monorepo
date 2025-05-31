import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

import {useState} from 'react';
import {Swiper, SwiperSlide, type SwiperProps} from 'swiper/react';
import SwiperCore from 'swiper';
import {FreeMode, Thumbs, Pagination} from 'swiper/modules';
import styled from 'styled-components';

SwiperCore.use([FreeMode, Thumbs, Pagination]);

const ProductionSellingCover = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 50%;
    margin-right: 12px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    width: 50%;
    margin-right: 44px;
  }
`;

const ProductionSellingCoverImage = styled.div`
  width: 100%;
  height: 358px;
  overflow: hidden;

  .swiper-slide {
    div.item {
      width: 100%;
      height: 358px;
    }

    background-color: #0066ff;

    &:nth-child(even) {
      background-color: #ffc92c;
    }
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    .swiper-pagination-bullet {
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: #ededed;
      opacity: 0.7;
      transform: translateY(-50%);
      transition: background-color 0.15s, width 0.15s, height 0.15s;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    }

    .swiper-pagination-bullet-active {
      width: 8px;
      height: 8px;
      opacity: 1;
      background-color: #fff;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    height: 344px;
    border-radius: 8px;

    .swiper-slide {
      div.item {
        height: 344px;
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 496px;
    height: 496px;
    border-radius: 8px;

    .swiper-slide {
      div.item {
        width: 496px;
        height: 496px;
      }
    }
  }
`;

const ProductionSellingCoverImageList = styled.div`
  display: none;

  .mySwiper {
    div.swiper-slide {
      &.swiper-slide-thumb-active::after {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 4px;
        border: 2px solid var(--primary);
        content: '';
      }

      background-color: #0066ff;

      &:nth-child(even) {
        background-color: #ffc92c;
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: block;

    .mySwiper {
      height: fit-content;

      .swiper-wrapper {
        flex-wrap: wrap;
        flex-direction: row;
        margin-top: 8px;
        height: auto;
        gap: 10px;

        div.swiper-slide {
          width: calc((100% / 5) - 8px);
          margin-bottom: 0 !important;
          height: 60px !important;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;

          div.item {
            position: relative;
            width: 60px;
            height: 60px;
          }

          &.swiper-slide-thumb-active::after {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 4px;
            border: 2px solid var(--primary);
            content: '';
          }

          background-color: #0066ff;

          &:nth-child(even) {
            background-color: #ffc92c;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    width: 60px;
    margin-right: 10px;
    .mySwiper {
      .swiper-wrapper {
        flex-direction: column;

        div.swiper-slide {
          width: 60px;
        }
      }
    }
  }
`;

function ProductSellingCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  const initControl: SwiperProps = {
    loop: true,
    spaceBetween: 0,
    thumbs: {swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null},
    className: 'mySwiper2',
    pagination: true,
  };
  return (
    <ProductionSellingCover>
      <ProductionSellingCoverImage>
        <Swiper {...initControl}>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
        </Swiper>
      </ProductionSellingCoverImage>
      <ProductionSellingCoverImageList>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={9}
          freeMode={true}
          direction="vertical"
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
          allowTouchMove={false}
        >
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="item" />
          </SwiperSlide>
        </Swiper>
      </ProductionSellingCoverImageList>
    </ProductionSellingCover>
  );
}

export default ProductSellingCarousel;
