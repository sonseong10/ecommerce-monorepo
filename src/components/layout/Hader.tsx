import React from 'react'
import { Link } from 'react-router-dom'
import Logo from 'assets/images/dark-logo.svg'
import styled from 'styled-components'
import { useSelectorEq } from 'commons/store/common'
import type { IState } from 'store'

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

    .user-name,
    span {
      font-size: 1.4rem;
      color: #fff;
    }

    .user-name {
      font-weight: 700;
      margin-right: 2px;
    }
  }
`

const Header = () => {
  const { userName } = useSelectorEq((state: IState) => ({
    userName: state.auth.user?.displayName,
  }))

  return (
    <HeaderWrapper>
      <div>
        <strong className="logo-img">
          <Link to={'/admin/main'}>
            <img src={Logo} alt="내일의집" />
          </Link>
        </strong>

        <div>
          <strong className="user-name">{userName ? userName : '사용자'}님</strong>
          <span>환영합니다.</span>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default React.memo(Header)
