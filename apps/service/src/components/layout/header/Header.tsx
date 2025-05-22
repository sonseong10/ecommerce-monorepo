import styled from "styled-components";
import Logo from "../../../assets/images/logo.svg"
import {Link} from 'react-router-dom';
import Button from '../../ui/atom/Button';
import {commonSVG} from '@ecommerce/commons/styles/svgIcon';
import {UiInputText} from '@ecommerce/commons';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  border-bottom: 1px solid #eaedef;
  background-color: #fff;
  z-index: 7;

  > div {
    .tap-icon {
      margin-left: 8px;
      width: 32px;
      height: 32px;
      border: none;
      background: url(${commonSVG.NextArrow('#1d1d1d')}) no-repeat center center;
      background-size: 20px;

      @media screen and (min-width: 768px) {
        display: none;
      }
    }

    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    max-width: 1256px;
    margin: 0 auto;

    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      margin-right: 0;

      > a {
        > img {
          display: block;
          height: 24px;
          box-sizing: border-box;
        }

        &:not(:active):focus > img {
          display: block;
          box-shadow: #00b7ff42 0px 0px 0px 3px;
          border-radius: 2px;
        }
      }

      @media screen and (min-width: 768px) {
        position: relative;
        top: auto;
        left: auto;
        transform: none;
        margin-right: 8px;
      }

      @media screen and (min-width: 1024px) {
        margin-right: 35px;
      }
    }

    .gnb-left {
      display: none;
      flex: 1 1 0;
      flex-wrap: nowrap;
      a {
        margin: 0 10px;
        padding: 21px 5px 15px;
        font-size: 18px;
        line-height: 1;
        font-weight: 500;

        > span {
          padding: 4px;
        }

        &:hover,
        &.isActive {
          color: var(--primary);
        }

        &:active > span {
          box-shadow: none;
          color: var(--primary);
        }

        &:not(:active):focus > span {
          box-shadow: #00b7ff42 0px 0px 0px 3px;
          border-radius: 2px;
          padding: 4px;
          color: var(--primary);
        }
      }

      @media screen and (min-width: 768px) {
        display: block;
        white-space: nowrap;
      }
    }

    .gnb-right {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .search-wrapper {
        position: relative;
        display: none;
        &::after {
          position: absolute;
          top: 50%;
          left: 6px;
          display: block;
          width: 24px;
          height: 24px;
          background: url(${commonSVG.Search('#999')}) no-repeat center center;
          transform: translateY(-50%);
          content: '';
        }

        #search {
          padding: 0;
          padding-left: 34px;
          height: 40px;
          font-size: 16px;

          @media screen and (min-width: 1024px) {
            width: 180px;
            margin-right: 8px;
          }

          @media screen and (min-width: 1256px) {
            width: 290px;
            margin-right: 12px;
          }
        }

        @media screen and (min-width: 1024px) {
          display: inline-block;
        }
      }

      .auth-group {
        display: flex;
        align-items: center;
        margin-right: 8px;
        font-size: 14px;

        .search-icon {
          margin-right: 10px;
          transform: translateY(2px);
          &::after {
            display: inline-block;
            width: 24px;
            height: 24px;
            background: url(${commonSVG.Search('#1d1d1d')}) no-repeat center center;
            content: '';
          }

          &:not(:active):focus::after {
            background: url(${commonSVG.Search('#35C5F0')}) no-repeat center center;
          }

          @media screen and (min-width: 1024px) {
            display: none;
          }
        }

        .cart-icon {
          margin-right: 10px;
          transform: translateY(2px);
          &::after {
            display: inline-block;
            width: 24px;
            height: 24px;
            background: url(${commonSVG.Cart('#1d1d1d')}) no-repeat center center;
            content: '';
          }

          &:not(:active):focus::after {
            background: url(${commonSVG.Cart('#35C5F0')}) no-repeat center center;
          }
        }

        a:not(.cart-icon):not(.search-icon) {
          display: none;
          padding: 0 10px;
          &:not(:last-child) {
            border-right: 1px solid #eaedef;
          }

          @media screen and (min-width: 768px) {
            display: inline-block;
          }

          &:last-child {
            display: none;
            @media screen and (min-width: 1256px) {
              display: inline-block;
            }
          }
        }
      }

      button {
        display: none;
        padding: 0 12px;
        &#wright-btn::after {
          display: none;
        }

        @media screen and (min-width: 768px) {
          display: flex;
        }

        @media screen and (min-width: 1024px) {
          &#wright-btn::after {
            display: block;
          }
        }
      }

      @media screen and (min-width: 768px) {
        flex: 0 1 320px;
      }

      @media screen and (min-width: 1024px) {
        flex: 0 1 480px;
      }

      @media screen and (min-width: 1256px) {
        flex: 0 1 680px;
      }
    }

    @media screen and (min-width: 768px) {
      height: 80px;
      padding: 10px 40px;
    }

    @media screen and (min-width: 1024px) {
      padding: 0px 60px;
    }

    @media screen and (min-width: 1256px) {
      max-width: 1256px;
      margin: 0px auto;
    }
  }
`;

const SubCategoryWrapper = styled.nav`
  border-bottom: 1px solid #eaedef;
  background-color: #fff;
  nav {
    padding: 0 60px;
    max-width: 1256px;
    margin: 0 auto;
    ul {
      display: flex;
      li {
        position: relative;
        margin: 0 5px;
        padding: 12px 6px;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: var(--font-primary);
        cursor: pointer;

        &:hover {
          color: var(--primary);
        }

        &:first-child {
          color: var(--primary);
          &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary);
            content: '';
          }
        }
      }
    }
  }
`;

function SubCategory(): JSX.Element {
  const data: {name: string; loaction?: string}[] = [
    {name: '쇼핑홈', loaction: undefined},
    {name: '카테고리', loaction: undefined},
    {name: '베스트', loaction: undefined},
    {name: '오늘의딜', loaction: undefined},
  ];
  return (
    <SubCategoryWrapper>
      <nav>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.loaction ? <Link to={item.loaction}>{item.name}</Link> : item.name}</li>
          ))}
        </ul>
      </nav>
    </SubCategoryWrapper>
  );
}

function Header() {
  return (
    <>
      <HeaderContainer>
        <div>
          <button className="tap-icon"></button>

          <h1 className="logo">
            <Link to="/">
              <img src={Logo} alt="내일의 집" />
            </Link>
          </h1>

          <div className="gnb-left">
            <Link to={'/'}>
              <span>커뮤니티</span>
            </Link>
            <Link to={'/store'} className="isActive">
              <span>쇼핑</span>
            </Link>
            <Link to={'/experts'}>
              <span>인테리어/생활</span>
            </Link>
          </div>

          <div className="gnb-right">
            <div className="search-wrapper">
              <UiInputText id="search" type="text" placeholder="상품 검색" />
            </div>
            <div className="auth-group">
              <Link to="/search" className="search-icon"></Link>
              <Link to="/cart" className="cart-icon"></Link>
              <Link to="/">로그인</Link>
              <Link to="/">회원가입</Link>
              <Link to="/">고객센터</Link>
            </div>
            <Button id="wright-btn" text="글쓰기" color="primary" iconname="DownArrow" iconposition="after" />
          </div>
        </div>
      </HeaderContainer>
      <SubCategory />
    </>
  );
}

export default Header;
