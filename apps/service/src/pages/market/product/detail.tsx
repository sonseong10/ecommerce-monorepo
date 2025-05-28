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
import {commonSVG} from '@ecommerce/commons';
import {UiSelectBox} from '../../../components/ui/atom/SelectBox';
import Button from '../../../components/ui/atom/Button';
import {Link} from 'react-router-dom';
import {ElementGroup} from 'src/styles/components';
import TabMenu from 'src/components/ui/atom/TabMenu';
import ReviewSummary from '../components/review/ReviewSummary';
import ReviewList from '../components/review/ReviewList';
import SectionTitle from 'src/components/ui/organism/SectionTitle';
import Inquiry from '../components/inquiry/Inquiry';
import Exchage from '../components/exchange/Exchange';

SwiperCore.use([FreeMode, Thumbs, Pagination]);

const ParentContainer = styled.div`
  background-color: #ededed;
`;

const Container = styled.div`
  overflow: auto;
  width: 100%;
  max-width: 1156px;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  margin-bottom: 10px;
`;

const ProductCategoryInfo = styled.nav`
  padding: 12px 15px;
  border: none;
  overflow-y: hidden;
  background-color: #fff;

  ol {
    display: flex;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      font-size: 15px;
      color: var(--font-disabled);

      &:not(:last-child)::after {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin: 0 5px;
        background: url(${commonSVG.NextArrow('#a8a9aa')}) no-repeat center center;
        background-size: 16px;
        content: '';
      }
    }
  }
`;

const ProductionSellingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProductionSellingCover = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
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
  }
`;

// const ProductionSellingCoverImageList = styled.div`
//   .mySwiper {
//     height: 558px;
//     margin-right: 10px;
//     div.swiper-slide {
//       position: relative;
//       width: 53px;
//       border-radius: 4px;
//       overflow: hidden;
//       cursor: pointer;

//       &.swiper-slide-thumb-active::after {
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         border-radius: 4px;
//         border: 2px solid var(--primary);
//         content: '';
//       }

//       background-color: #0066ff;

//       &:nth-child(even) {
//         background-color: #ffc92c;
//       }
//     }
//   }
// `;

const ProductProviderInfo = styled.div`
  margin: 0 auto;
`;

const ProductInfo = styled.div`
  .product-header {
    .brand-name {
      display: block;
      margin: 19px 0 4px;
      font-size: 14px;
      line-height: 19px;

      a {
        color: #828c94;
        font-weight: 700;
        transition: opacity 0.1s;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .product-wrap {
      display: flex;
      justify-content: space-between;

      .product-name {
        display: block;
        font-size: 17px;
        font-weight: 400;
        line-height: 20px;
        color: #000;
        word-wrap: break-word;
        margin-right: 36px;
      }
    }
  }

  .product-content {
    margin-top: 8px;

    .review-text {
      color: #0aa5ff;
      font-size: 13px;
      vertical-align: 2px;
    }

    .product-price-wrap {
      margin-top: 12px;

      .price-discount {
        display: inline-block;
        color: #757575;
        font-size: 14px;
        line-height: 17px;
        padding-right: 2px;
      }

      .price-origin {
        font-size: 14px;
        line-height: 17px;
        color: #bdbdbd;
      }

      > div {
        margin-top: 5px;
        .product-price {
          color: #424242;
          font-size: 20px;
          font-weight: 700;
        }
      }
    }
  }

  .product-delivery-wrap {
    padding: 16px 0;
    border-bottom: 1px solid #ededed;

    table {
      width: 100%;
      td {
        &.key {
          font-size: 14px;
          line-height: 21px;
          color: #828c94;
        }

        &.value {
          font-size: 14px;
          line-height: 21px;
          color: #292929;

          strong {
            font-weight: 700;
          }

          span.disclaimer {
            color: #757575;
            font-size: 13px;
            line-height: 18px;
          }

          span.point {
            color: #0aa5ff;
            font-weight: 700;
          }
        }
      }
    }
  }

  .provider-info {
    padding: 16px 16px 16px 0px;
    a {
      flex: 1;
      strong {
        display: block;
        color: #292929;
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
      }
    }
  }
`;

const ProductDetailContainer = styled.section`
  max-height: 470px;
  overflow-y: hidden;
  img {
    width: 100%;
  }
`;

const DescriptionMoreWrap = styled.div`
  position: relative;
  padding: 10px 0;
  width: 100%;

  button {
    width: 100%;
    border-radius: 4px;

    &::after {
      background-size: 18px;
    }
  }

  &::after {
    position: absolute;
    top: -70px;
    left: 0;
    display: block;
    padding-top: 80px;
    width: 100%;
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), #fff 80%);
    content: '';
  }
`;

const ProdcutTabNavigation = styled.div`
  position: sticky;
  top: 96px;
  z-index: 1;

  .tabmenu {
    width: 100%;
    border-bottom: 0;

    li {
      margin: 0;
      width: calc(100% / 5);

      button {
        width: 100%;
        min-height: 46px;
        padding: 0;
        border: none;
        border-radius: 0;
        font-weight: 700;
        background-color: #fff;

        &.is-active::before {
          bottom: 0;
          background: var(--primary);
        }
        span {
          display: block;
          font-weight: 400;
          font-size: 12px;
          color: #00000066;
        }
      }
    }
  }
`;

function ProductCategory() {
  return (
    <ProductCategoryInfo>
      <ol>
        <li>생활용품</li>
        <li>수건·타월</li>
        <li>세면타월</li>
      </ol>
    </ProductCategoryInfo>
  );
}

function ProductDetail() {
  const [thumbsSwiper] = useState<SwiperCore | null>(null);

  const initControl: SwiperProps = {
    loop: true,
    spaceBetween: 0,
    thumbs: {swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null},
    className: 'mySwiper2',
    pagination: true,
  };

  return (
    <ParentContainer>
      <ProductCategory />

      <ProductionSellingContainer>
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
          {/* <ProductionSellingCoverImageList>
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
            </ProductionSellingCoverImageList> */}
        </ProductionSellingCover>

        <Container>
          <ProductProviderInfo>
            <ProductInfo>
              <div className="product-header">
                <span className="brand-name">
                  <a href="#">아에홈</a>
                </span>
                <div className="product-wrap">
                  <strong className="product-name">
                    크롬출시! 키노 LED 미니 머쉬룸 무선 조명 인테리어 2sizes(밝기/빛색 변경)
                  </strong>

                  <Button $iconname="Shere" $iconposition="center" $btnType="ghost" />
                </div>
              </div>
              <div className="product-content">
                <p className="review-text">675개의 리뷰</p>
                <div className="product-price-wrap">
                  <p>
                    <span className="price-discount">54%</span>
                    <del className="price-origin">60,000원</del>
                  </p>
                  <div>
                    <strong className="product-price">27,400원</strong>
                  </div>
                </div>
              </div>
              <div className="product-delivery-wrap">
                <table>
                  <thead></thead>
                  <tbody>
                    <tr>
                      <td className="key">혜택</td>
                      <td className="value">
                        <strong>28P</strong> 적립 (WELCOME 0.1% 적립)
                      </td>
                    </tr>
                    <tr>
                      <td className="key">배송</td>
                      <td className="value">
                        <span>2,500원</span>
                        <p>
                          17:00 까지 결제 시 <span className="point">오늘 출발</span>
                        </p>

                        <div>
                          <p>일반택배</p>
                          <span className="disclaimer">제주도/도서산간 지역 3,000원</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ElementGroup.Row flexcontent="between" className="provider-info">
                <Link to={'#'}>
                  <strong>레나에너지</strong>
                  <span>브랜드홈</span>
                </Link>

                <Button $iconname="BookMark" $iconposition="center" $btnType="ghost" />
              </ElementGroup.Row>
            </ProductInfo>
            <div className="product-option-form" style={{display: 'none'}}>
              <section>
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
              </section>

              <div>
                <span>주문금액</span>
                <strong>0원</strong>
              </div>

              <div>
                <Button text="장바구니" $btnType="border" $btnSize="lg" thin color="primary" />
                <Button text="바로구매" $btnSize="lg" thin color="primary" />
              </div>
            </div>
          </ProductProviderInfo>
        </Container>
      </ProductionSellingContainer>

      <ProdcutTabNavigation>
        <TabMenu
          list={[
            {id: '1', text: '상품정보'},
            {id: '2', text: '리뷰', subText: '49'},
            {id: '3', text: '문의', subText: '86'},
            {id: '4', text: '배송/환불'},
            {id: '5', text: '추천'},
          ]}
          active="1"
          kinds="Button"
          className="tabmenu"
        ></TabMenu>
      </ProdcutTabNavigation>
      <Container>
        <div style={{display: 'flex', width: '100%', flexDirection: 'column'}}>
          <ProductDetailContainer>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
              <img
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/productions/notice/170778069306610551.jpg?gif=1&amp;w=720"
                srcSet="https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/productions/notice/170778069306610551.jpg?gif=1&amp;w=1080 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/productions/notice/170778069306610551.jpg?gif=1&amp;w=1440 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/admins/productions/notice/170778069306610551.jpg?gif=1&amp;w=2560 3x"
                alt="판매자 공지 이미지"
              />
              <img
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/expert_users/notice_images/172362252135613721.gif?gif=1&amp;w=720"
                srcSet="https://image.ohou.se/i/bucketplace-v2-development/uploads/expert_users/notice_images/172362252135613721.gif?gif=1&amp;w=1080 1.5x,https://image.ohou.se/i/bucketplace-v2-development/uploads/expert_users/notice_images/172362252135613721.gif?gif=1&amp;w=1440 2x,https://image.ohou.se/i/bucketplace-v2-development/uploads/expert_users/notice_images/172362252135613721.gif?gif=1&amp;w=2560 3x"
                alt="판매자 공지 이미지"
              />
              <div>
                <p style={{textAlign: 'center'}}>&nbsp;</p>
                <p style={{textAlign: 'center'}}>
                  <strong>
                    <span style={{backgroundColor: '#fbeeb8'}}>&nbsp;주문 폭주로 크림버터 - 미니 주문시&nbsp;</span>
                  </strong>
                </p>
                <p style={{textAlign: 'center'}}>&nbsp;</p>
                <p style={{textAlign: 'center'}}>
                  <strong>
                    <span style={{backgroundColor: '#fbeeb8'}}>&nbsp;08/23~ 순차 출고됩니다.&nbsp;</span>
                  </strong>
                </p>
                <p style={{textAlign: 'center'}}>&nbsp;</p>
                <p style={{textAlign: 'center'}}>
                  <strong>
                    <span style={{backgroundColor: '#fbeeb8'}}>&nbsp;이용에 불편을 드려 죄송합니다.&nbsp;</span>
                  </strong>
                </p>
                <p style={{textAlign: 'center'}}>&nbsp;</p>
                <p style={{textAlign: 'center'}}>
                  <strong>
                    <span style={{backgroundColor: '#fbeeb8'}}>그 외 주문건 17:00 이전 당일 출고됩니다.</span>
                  </strong>
                </p>
                <p style={{textAlign: 'center'}}>&nbsp;</p>
                <p style={{textAlign: 'center'}}>&nbsp;</p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-262842629914688.jpg"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012574852291082.gif"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-262842845990976.jpg"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-262842926235648.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-262843146948608.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012577658198599.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012579378208588.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012581158220247.gif"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012582393495978.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012583137245967.gif"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-262843342553152.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012584992530169.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012585996794090.gif"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-262843444740160.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012587918704789.gif"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-197703056953472.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012589049948196.png"
                    alt=""
                  />
                </p>
                <p style={{textAlign: 'center'}}>
                  <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170012589742653044.png"
                    alt=""
                  />
                </p>
                <p>
                  <img
                    style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/170064069122766481.jpg"
                    alt=""
                  />
                </p>
              </div>
            </div>
          </ProductDetailContainer>
          <DescriptionMoreWrap>
            <Button
              $iconname="DownArrow"
              $iconposition="after"
              text="펼치기"
              type="button"
              color="primary"
              $btnSize="lg"
            />
          </DescriptionMoreWrap>
        </div>
      </Container>

      <Container>
        <SectionTitle text="리뷰" subText="49" button={<Button color="primary" $btnType="ghost" text="리뷰남기기" />} />

        <ReviewSummary />

        <ElementGroup.Row>
          <Button text="베스트순" $btnType="ghost" $btnSize="xs" />
          <Button text="최신순" $btnType="ghost" $btnSize="xs" />
          <Button text="사진리뷰" $btnType="ghost" $btnSize="xs" />
        </ElementGroup.Row>

        <ReviewList />
      </Container>

      <Container>
        <Inquiry />
      </Container>

      <Exchage />

      {/* <aside style={{display: 'inline-block'}}>
            <div>
              <section>
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
                <UiSelectBox id="1" data={['dsadsadsa', 'dsadsa']} />
              </section>

              <div>
                <span>주문금액</span>
                <strong>0원</strong>
              </div>

              <div>
                <Button
                  text=""
                  $btnSize="lg"
                  thin={true}
                  $btnType="border"
                  $iconname="BookMark"
                  $iconposition="center"
                />
                <Button text="장바구니" $btnType="border" $btnSize="lg" thin={true} color="primary" />
                <Button text="바로구매" $btnSize="lg" thin={true} color="primary" />
              </div>
            </div>
          </aside> */}
    </ParentContainer>
  );
}

export default ProductDetail;
