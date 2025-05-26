import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import {useEffect, useState} from 'react';
import SwiperCore from 'swiper';
import {Autoplay, Navigation, Pagination, Thumbs} from 'swiper/modules';
import {type SwiperProps, Swiper, SwiperSlide} from 'swiper/react';
import {styled} from 'styled-components';
import {ProductList} from './product/list';
import { Title} from '../../styles/components';

SwiperCore.use([Navigation, Thumbs, Pagination, Autoplay]);

const BannerWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 320px;
  display: block;
  object-fit: fill;

  @media screen and (min-width: 1024px) {
    height: 380px;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1256px) {
    max-width: 1156px;
  }
`;

const CategoryListStyle = styled.nav`
  padding: 16px;

  > .mb-hidden {
    display: none;

    @media screen and (min-width: 768px) {
      margin: 20px 0;
      line-height: normal;
      display: flex;
    }
  }

  ul {
    display: flex;
    max-width: 100dvw;
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin: 0 4px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      text-align: center;
      color: #2f3438;
      scroll-snap-align: start;
      cursor: pointer;

      @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 20px;
      }
      &:first-child {
        margin-left: 0;
      }

      div {
        background-color: #f4f6f8;
        width: 64px;
        height: 64px;
        border-radius: 12px;
        margin-bottom: 8px;

        @media screen and (min-width: 768px) {
          margin-bottom: 20px;
          width: 90px;
          height: 90px;
        }
      }

      @media screen and (min-width: 768px) {
        margin: 0px 22px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
    margin: 0 auto 30px;
  }

  @media screen and (min-width: 1256px) {
    padding: 0;
  }
`;

function ResponsiveBannerImage({baseSrc, alt}: {baseSrc: string; alt: string}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getSrcByWidth = () => {
    if (windowWidth < 768) return `${baseSrc}?w=520`;
    if (windowWidth < 1024) return `${baseSrc}?w=1280`;
    if (windowWidth < 1256) return `${baseSrc}?w=1920`;
    return `${baseSrc}?w=3840`;
  };

  return <BannerImage src={getSrcByWidth()} alt={alt} />;
}

const list = [
  '주방특가',
  'BEST',
  '오늘의딜',
  '오픈런딜',
  '행운출첵',
  '프리미엄',
  '초특가견적',
  '득템찬스',
  '오!쇼룸',
  '특가/혜택',
];

function CategoryList() {
  return (
    <CategoryListStyle>
      <Title size="md" className="mb-hidden">
        카테고리
      </Title>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <div></div>
            {item}
          </li>
        ))}
      </ul>
    </CategoryListStyle>
  );
}

function Banner() {
  const initControl: SwiperProps = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    watchSlidesProgress: true,
    watchOverflow: true,
    slideToClickedSlide: true,
    className: 'slide-control',
  };
  return (
    <BannerWrapper>
      <Swiper {...initControl}>
        {[
          'https://prs.ohousecdn.com/apne2/commerce/uploads/store/banners/store_home_banners/v1-371849026216000.png',
          'https://image.ohousecdn.com/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/172742509423309284.png',
          'https://prs.ohousecdn.com/apne2/commerce/uploads/store/banners/store_home_banners/v1-371856314773568.png',
        ].map((src, index) => {
          return (
            <SwiperSlide key={index}>
              <ResponsiveBannerImage baseSrc={src} alt={`배너 ${index + 1}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BannerWrapper>
  );
}

function MarketPage() {
  return (
    <>
      <Container>
        <Banner />
      </Container>

      <Container>
        <CategoryList />
      </Container>

      <Container>
        {/* TODO: radio filter 추가 */}
        <ProductList
          products={[
            {
              code: '3h2ds92s1',
              name: '논슬립 어깨뿔방지 옷걸이 30개 5colors 외 옷걸이/바지걸이 모음',
              price: 18900,
              discount: 62,
              supplierName: '진심감성 (리빙)',
              imageURL:
                'https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/167772098062783381.png?gif=1&w=1280&h=1280&c=c&webp=1',
              grade: 4.8,
              reviewCount: 25498,
            },
            {
              code: '32ds92sd',
              name: '1+1 독일토분 공기정화식물 마오리소포라 율마 몬스테라 유칼립투스',
              price: 18000,
              discount: 30,
              supplierName: '필플랜드',
              imageURL:
                'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165786292549269852.jpg?gif=1&w=1280&h=1280&c=c&webp=1',
              grade: 4.8,
              reviewCount: 2409,
            },
            {
              code: '32ds92s1',
              name: '키노 LED 미니 머쉬룸 무선 무드등 조명 인테리어 2sizes(밝기/빛색상 변경)',
              price: 27400,
              discount: 54,
              supplierName: '레이라이저',
              imageURL:
                'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170064077510598885.png?gif=1&w=1280&h=1280&c=c&webp=1',
              grade: 4.8,
              reviewCount: 25498,
            },
            {
              code: '32ds92s13',
              name: '쿠폰가 101,370/편안한 제주 25cm 필로우탑 본넬스프링 침대 매트리스S/SS/Q/K',
              price: 109000,
              discount: 45,
              supplierName: '휴도',
              imageURL:
                'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165580847056056090.jpg?gif=1&w=1280&h=1280&c=c&webp=1',
              grade: 4.8,
              reviewCount: 18951,
            },
            {
              code: '32ds92s21',
              name: '[예약판매]페블 체어 미드센추리 패브릭 디자인 인테리어 철제 의자',
              price: 54900,
              discount: 39,
              supplierName: '우드띠어리',
              imageURL:
                'https://prs.ohou.se/apne2/any/uploads/productions/v1-194793978269824.jpg?gif=1&w=1280&h=1280&c=c&webp=1',
              grade: 4.8,
              reviewCount: 411,
            },
            {
              code: '32ds923s1',
              name: '논슬립 어깨뿔방지 옷걸이 30개 5colors 외 옷걸이/바지걸이 모음',
              price: 18900,
              discount: 62,
              supplierName: '진심감성 (리빙)',
              imageURL:
                'https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/167772098062783381.png?gif=1&w=1280&h=1280&c=c&webp=1',
              grade: 4.8,
              reviewCount: 25498,
            },
            {
              code: '32ds912s1',
              name: '1+1 독일토분 공기정화식물 마오리소포라 율마 몬스테라 유칼립투스',
              price: 18000,
              discount: 30,
              supplierName: '필플랜드',
              imageURL:
                'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165786292549269852.jpg?gif=1&w=1280&h=1280&c=c&webp=1',
              grade: 4.8,
              reviewCount: 2409,
            },
            {
              code: '32ds942s1',
              name: '키노 LED 미니 머쉬룸 무선 무드등 조명 인테리어 2sizes(밝기/빛색상 변경)',
              price: 27400,
              discount: 54,
              supplierName: '레이라이저',
              imageURL:
                'https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/170064077510598885.png?gif=1&w=1280&h=1280&c=c&webp=1',
              grade: 4.8,
              reviewCount: 25498,
            },
          ]}
        />
      </Container>
    </>
  );
}
export default MarketPage