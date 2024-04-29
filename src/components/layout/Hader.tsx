import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'assets/images/dark-logo.svg'
import styled from 'styled-components'
import { useSelectorEq } from 'commons/store/common'
import type { IState } from 'store/modules'
import Button from 'components/ui/Button'
import { useAuth } from 'pages/auth/authHook'

const HeaderWrapper = styled.header`
  background-color: #2b2e32;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1240px;
    margin: 0 auto;
    padding: 8px 10px;
    height: 60px;

    .logo-img {
      img {
        width: 100px;
        display: block;
      }
    }

    .userInfo {
      display: flex;
      align-items: center;
      .user-name,
      span {
        font-size: 1.4rem;
        color: #fff;
      }

      .user-name {
        font-weight: 700;
        margin-right: 2px;
      }

      span {
        display: flex;
        align-items: center;
        ::after {
          display: block;
          width: 1px;
          height: 14px;
          background-color: #d6d6d6;
          margin-left: 10px;
          content: '';
        }
      }
    }
  }
`

function BrandLogo() {
  return (
    <strong className="logo-img">
      <Link to={'/admin/main'}>
        <img src={Logo} alt="내일의집" />
      </Link>
    </strong>
  )
}

function UserInfo() {
  const { userName } = useSelectorEq((state: IState) => ({
    userName: state.auth.user?.displayName,
  }))
  const { onLogout } = useAuth()
  return (
    <div className="userInfo">
      <strong className="user-name">{userName ? userName : '사용자'}님</strong>
      <span>환영합니다.</span>
      <Button text="로그아웃" btnSize="xsm" btnType="ghost" color="lightGray" onClick={onLogout} />
    </div>
  )
}

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <BrandLogo />

        <UserInfo />
      </div>
    </HeaderWrapper>
  )
}

export default React.memo(Header)
