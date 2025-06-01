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
import SellingBox from '../components/selling/SellingBox';
import ProductSellingCarousel from '../components/selling/Carousel';

const ParentContainer = styled.div`
  background-color: #ededed;

  @media screen and (min-width: 768px) {
    background-color: #fff;
  }
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

  @media screen and (min-width: 768px) {
    width: calc(100% - 80px);
    max-width: 100%;
    min-height: 1px;
  }
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

  @media screen and (min-width: 768px) {
    padding: 12px 40px;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    padding: 12px 0;
    max-width: 1136px;
  }
`;

const ProductionSellingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 40px;
    width: calc(100% - 80px);
    max-width: 100%;
    box-sizing: border-box;
    min-height: 1px;
  }

  @media screen and (min-width: 1024px) {
    width: 1136px;
    gap: 36px;
  }
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

    button {
      padding: 0;
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
    button {
      padding: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .product-header {
      .brand-name {
        margin: 0 0 4px;
      }

      .product-wrap {
        .product-name {
          font-size: 22px;
          line-height: 33px;
          min-height: 43px;
        }
      }
    }

    .product-content {
      margin-top: 12px;

      .review-text {
        color: #0aa5ff;
        font-weight: 700;
      }

      .product-price-wrap {
        margin-top: 8px;

        .price-discount {
          font-size: 16px;
          line-height: 19px;
          padding-right: 6px;
        }

        .price-origin {
          font-size: 16px;
          line-height: 19px;
        }

        > div {
          .product-price {
            font-size: 32px;
            font-weight: 700;
            line-height: normal;
            margin-right: 4px;
          }
        }
      }
    }

    .product-delivery-wrap {
      padding: 20px 0;
    }

    .provider-info {
      padding: 16px 0;
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
  background-color: #fff;

  nav {
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
          background-color: transparent;

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
  }

  @media screen and (min-width: 768px) {
    padding: 0 50px;
    background-color: #fafafa;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;

    nav {
      .tabmenu {
        li {
          button {
            min-height: 50px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    padding: 0 60px;
    top: 125px;

    nav {
      max-width: 1136px;
      margin: 0 auto;
      .tabmenu {
        width: 66.66%;
        li {
          button {
            min-height: 50px;
            span {
              display: inline;
              margin-left: 4px;
              font-size: 14px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
`;

const ProductOptionForm = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;

    .total-price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #2f3438;
      font-weight: 700;
      margin-top: 40px;

      > span {
        font-size: 14px;
        line-height: 20px;
      }

      > strong {
        font-size: 20px;
        line-height: 28px;
      }
    }

    .selling-btn-group {
      display: flex;
      margin-top: 20px;
      gap: 8px;

      button {
        flex: 1;
        border-radius: 4px;
      }
    }
  }
`;

const OptionGroup = styled.section`
  display: flex;
  flex-direction: column;

  div {
    width: 100% !important;
    margin-bottom: 10px;
  }
`;

const ProductSellingContents = styled(ElementGroup.Row)`
  .selling-contents {
    margin: 0;
  }

  .selling-form {
    display: none;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    margin-top: 60px;
    align-items: flex-start;
    max-width: 1136px;

    .selling-contents {
      flex: 7.2;
    }

    .selling-form {
      position: sticky;
      top: 200px;
      display: block;
      flex: 2.8;

      > div {
        width: 100%;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .bookmark-icon {
          padding: 0;
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
  return (
    <>
      <ParentContainer>
        <ProductCategory />
        <ProductionSellingContainer>
          <ProductSellingCarousel />

          <Container>
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
              <ElementGroup.Row $flexContent="between" className="provider-info">
                <Link to={'#'}>
                  <strong>레나에너지</strong>
                  <span>브랜드홈</span>
                </Link>

                <Button $iconname="BookMark" $iconposition="center" $btnType="ghost" />
              </ElementGroup.Row>
            </ProductInfo>
            <ProductOptionForm>
              <OptionGroup>
                <UiSelectBox id="option1" data={['오렌지', '엘로우', '네이비', '블랙']} placeholder="색상" />
                <UiSelectBox id="option2" data={['백색등', '주황등']} placeholder="조명" />
              </OptionGroup>

              <div className="total-price">
                <span>주문금액</span>
                <strong>0원</strong>
              </div>

              <div className="selling-btn-group">
                <Button text="장바구니" $btnType="border" $btnSize="lg" $thin={true} color="primary" />
                <Button text="바로구매" $btnSize="lg" $thin={true} color="primary" />
              </div>
            </ProductOptionForm>
          </Container>
        </ProductionSellingContainer>

        <ProdcutTabNavigation>
          <nav>
            <TabMenu
              list={[
                {id: '1', text: '상품정보'},
                {id: '2', text: '리뷰', subText: '49'},
                {id: '3', text: '문의', subText: '86'},
                {id: '4', text: '배송/환불'},
                {id: '5', text: '추천'},
              ]}
              $active="1"
              $kinds="Button"
              className="tabmenu"
            ></TabMenu>
          </nav>
        </ProdcutTabNavigation>
        <ProductSellingContents>
          <div className="selling-contents">
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
                      src="https://image.ohou.se/i/bucketplace-v2-development/uploads/expert_users/notice_images/172362252135613721.gif"
                      alt="판매자 공지 이미지"
                    />
                    <div>
                      <p style={{textAlign: 'center'}}>&nbsp;</p>
                      <p style={{textAlign: 'center'}}>
                        <strong>
                          <span style={{backgroundColor: '#fbeeb8'}}>
                            &nbsp;주문 폭주로 크림버터 - 미니 주문시&nbsp;
                          </span>
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
              <SectionTitle
                text="리뷰"
                subText="49"
                button={<Button color="primary" $btnType="ghost" text="리뷰남기기" />}
              />

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
          </div>
          <div className="selling-form">
            <ProductOptionForm>
              <OptionGroup>
                <UiSelectBox id="option1" data={['오렌지', '엘로우', '네이비', '블랙']} placeholder="색상" />
                <UiSelectBox id="option2" data={['백색등', '주황등']} placeholder="조명" />
              </OptionGroup>

              <div>
                <div className="total-price">
                  <span>주문금액</span>
                  <strong>0원</strong>
                </div>

                <div className="selling-btn-group">
                  <Button
                    aria-label="북마크"
                    $btnSize="normal"
                    $thin={true}
                    $iconname="BookMark"
                    $iconposition="center"
                    $btnType="border"
                    className="bookmark-icon"
                  />
                  <Button text="장바구니" $btnType="border" $btnSize="lg" $thin={true} color="primary" />
                  <Button text="바로구매" $btnSize="lg" $thin={true} color="primary" />
                </div>
              </div>
            </ProductOptionForm>
          </div>
        </ProductSellingContents>
      </ParentContainer>
      <SellingBox />
    </>
  );
}

export default ProductDetail;
