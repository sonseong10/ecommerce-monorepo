import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useSelectorEq } from '@ecommerce/commons'
import type { IState } from '../../store/modules'
import Button from '../../components/ui/Button'
import { useAuth } from '../../pages/auth/authHook'
import Logo from '../../assets/images/dark-logo.svg'
import { memo } from 'react'

const HeaderWrapper = styled.header`
  position: relative;
  background-color: #2b2e32;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1450px;
    margin: 0 auto;
    height: 60px;

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

const LogoURL = `"${Logo}"`
const BrandLogoImage = styled(Link)`
  width: 100px;
  height: 40px;
  background: url(${LogoURL}) no-repeat center center;
  display: inline-block;
  background-size: 84px;
`

function BrandLogo() {
  return (
    <h1>
      <BrandLogoImage to={'/admin/main'}>
        <span className="visually-hidden">내일의집</span>
      </BrandLogoImage>
    </h1>
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
      <Button text="로그아웃" $btnSize="xsm" $btnType="ghost" color="lightGray" onClick={onLogout} />
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

export default memo(Header)
