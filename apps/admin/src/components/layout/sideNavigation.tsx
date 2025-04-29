import { memo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BiHomeAlt, BiGroup, BiFile, BiCart, BiCar, BiSitemap } from 'react-icons/bi'

const SideNavigation = () => {
  const location = useLocation()
  const position = location.pathname.split('/')
  // const [setMenuActive] = useState('main')
  useEffect(() => {
    if (position.length >= 4) {
      // setMenuActive(position[position.length - 2]!)
    } else {
      // setMenuActive(position.pop()!)
    }
  }, [position])

  return (
    <div>
      <article>
        <div>
          <nav className="snb">
            <h3 className="visually-hidden">Side Navigation Bar</h3>
            <ul className="snb-list">
              <li className="snb-item">
                <Link to={'/admin/main'}>
                  <BiHomeAlt />
                  메인
                </Link>
              </li>
              <li className="snb-item">
                <Link to="/admin/member/manage">
                  <BiGroup />
                  인사관리
                </Link>
              </li>
              <li className="snb-item">
                <Link to="/admin/work/manage">
                  <BiFile />
                  업무일지
                </Link>
              </li>
              <li className="snb-item">
                <Link to="/admin/product/list">
                  <BiCart />
                  상품관리
                </Link>
              </li>
              <li className="snb-item">
                <Link to="/admin/delivery">
                  <BiCar />
                  배송관리
                </Link>
              </li>

              <li className="snb-item">
                <Link to="/admin/display">
                  <BiSitemap />
                  진열관리
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <footer>
          <dl>
            <div>
              <dt className="visually-hidden">made</dt>
              <dd>ⓒJuly 2021</dd>
            </div>
            <div>
              <dt className="visually-hidden">github link</dt>
              <dd>
                <address>
                  <button
                    onClick={() => {
                      window.open('https://github.com/sonseong10', '_blank')
                    }}
                  >
                    sonseong10
                  </button>
                </address>
              </dd>
            </div>
          </dl>
        </footer>
      </article>
    </div>
  )
}

export default memo(SideNavigation)
