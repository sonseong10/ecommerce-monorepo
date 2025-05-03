import { memo, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const SNB = styled.aside`
  position: fixed;
  width: 240px;
  height: calc(100vh - 60px);

  .snb-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 52px;
    padding: 0 10px;
    font-size: 18px;
    font-weight: bold;

    &.isActive {
      color: var(--primary);
    }

    &:hover {
      background-color: var(--border-grey);
    }
  }
`

function SideNavigation() {
  const location = useLocation()
  const position = location.pathname.split('/')
  const [active, setMenuActive] = useState('main')
  useEffect(() => {
    if (position.length >= 4) {
      setMenuActive(position[position.length - 2]!)
    } else {
      setMenuActive(position.pop()!)
    }
  }, [position])

  const menubar: { title: string; location: string }[] = [
    { title: '메인', location: '/admin/main' },
    { title: '인사관리', location: '/admin/member/manage' },
    { title: '업무일지', location: '/admin/work/manage' },
    { title: '상품관리', location: '/admin/product/list' },
    { title: '배송관리', location: '/admin/delivery' },
    { title: '진열관리', location: '/admin/display' },
  ]

  return (
    <SNB>
      <nav className="snb">
        <h3 className="visually-hidden">Side Navigation Bar</h3>
        <ul className="snb-list">
          {menubar.map(({ location, title }, index) => (
            <li key={index}>
              <Link to={location} className={`snb-item ${location.includes(active) ? 'isActive' : ''}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </SNB>
  )
}

export default memo(SideNavigation)
