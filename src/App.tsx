import React, { useCallback, useEffect, useState, type MemoExoticComponent, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/main.css'
import type WorkRepository from 'service/work-repository'
import type CardRepository from 'service/card_repository'
import type DropDown from 'utils/dropdown'
import type AuthService from 'service/auth_service'
import type ImageUploader from 'service/image-uploader'
import type { ICardVo, IWorkVo } from 'types/grobal-type'
import { useAuth, useUserId } from 'pages/auth/authHook'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import { lightTheme } from 'styles/theme'
import { GlobalStyle } from 'styles/globalStyle'
import Popup from 'commons/popup/PopupController'
import LoadingView from 'commons/loading/LoadingView'
import Spinner from 'components/ui/Spinner'
import LayerController from 'commons/layers/LayerController'

const HomePage = lazy(() => import('pages/home/home-page'))
const Maker = lazy(() => import('components/form/maker/maker'))
const Search = lazy(() => import('pages/search/search'))
const WorkRoutes = lazy(() => import('pages/work'))
const Update = lazy(() => import('components/form/update/update'))
const Detail = lazy(() => import('pages/search/detail/detail'))
const ProductList = lazy(() => import('pages/product/list'))
const NotPage = lazy(() => import('pages/errors/not-page'))
const Login = lazy(() => import('pages/auth/login'))
const MainContent = lazy(() => import('components/layout/mainContent'))
const ProductDetail = lazy(() => import('pages/product/detail'))

interface IAppProps {
  FileInput: MemoExoticComponent<
    (props: {
      imageUploader?: ImageUploader
      name: string
      onFileChange?: (obj: { name?: string; url?: string }) => void
    }) => React.JSX.Element
  >
  dropDown: DropDown
  authService: AuthService
  cardRepository: CardRepository
  workRepository: WorkRepository
}

function App({ FileInput, dropDown, cardRepository, workRepository }: IAppProps) {
  const [cards, setCards] = useState<{ [key: string]: ICardVo } | undefined>(undefined)
  const [works, setWorks] = useState<{ [key: string]: IWorkVo } | undefined>(undefined)

  const { deleteAccount, onLogin, onLogout } = useAuth()
  const { userId } = useUserId()

  const [userCard, setUserCard] = useState<ICardVo | undefined>(undefined)

  const [menuActive, setMenuActive] = useState<string>('main')
  const [authPopup, setAuthPopup] = useState(false)

  const [dark, setDark] = useState(localStorage.getItem('darkMode') === 'true')

  useEffect(() => {
    cardRepository.syncCards((cards: { [key: string]: ICardVo }) => {
      setCards(cards)
    })
    return () => {}
  }, [cardRepository])

  useEffect(() => {
    if (userId) {
      if (cards && Object.keys(cards).find(item => item === userId)) {
        setUserCard({ ...cards![userId] })
      } else {
        setUserCard(undefined)
      }
    }
  }, [cards, userId])

  const createOrUpdateCard = (card: ICardVo) => {
    setCards(cards => {
      const updated: {
        [key: string]: ICardVo
      } = { ...cards }
      updated[userId!] = card
      return updated
    })
    cardRepository.saveCard(userId!, card)
  }

  // const deleteCard = () => {
  //   setCards(cards => {
  //     const updated = { ...cards }
  //     delete updated[userId]
  //     return updated
  //   })
  //   cardRepository.removeCard(userId)
  // }

  useEffect(() => {
    if (!userId) {
      return
    }
    const stopSync = workRepository.syncWorks(userId, (works: { [key: string]: IWorkVo }) => {
      setWorks(works)
    })

    return () => {
      stopSync()
    }
  }, [userId, workRepository])

  const createOrUpdateWork = (work: IWorkVo) => {
    setWorks(works => {
      const updated = { ...works }
      updated[userId] = work
      return updated
    })
    workRepository.saveWork(userId, work)
  }

  const deleteWork = (work: IWorkVo) => {
    setWorks(works => {
      const updated = { ...works }
      delete updated[work.time]
      return updated
    })
    workRepository.removeWork(userId, work)
  }

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(dark))
  }, [dark])

  const handleModeChange = useCallback(() => {
    document.body.classList.toggle('isDark')
    setDark(!dark)
  }, [dark])

  const toggleOverlay = useCallback(() => {
    setAuthPopup(!authPopup)
  }, [authPopup])

  const onMenuChange = (value: string) => {
    setMenuActive(value)
  }

  const [theme] = useState<DefaultTheme>(lightTheme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Popup />
      <LoadingView />
      <LayerController />
      <div>
        <Routes>
          <Route index element={<Login onLogin={onLogin} />} />
          <Route
            path="/admin"
            element={
              <Suspense fallback={<Spinner />}>
                <MainContent
                  ToggleOverlay={toggleOverlay}
                  dark={dark}
                  onMenuChange={onMenuChange}
                  handleModeChange={handleModeChange}
                  loding={false}
                  menuActive={menuActive}
                  onLogout={onLogout}
                  userId={userId}
                  userCard={userCard}
                />
              </Suspense>
            }
          >
            <Route
              path="main/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <HomePage isCard={userCard} cards={cards} works={works} userCard={userCard} dark={dark} />
                </Suspense>
              }
            />
            <Route
              path="maker/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <Maker
                    FileInput={FileInput}
                    dropDown={dropDown}
                    isCard={userCard}
                    createCard={createOrUpdateCard}
                    dark={dark}
                  ></Maker>
                </Suspense>
              }
            />
            <Route
              path="member/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <Search dropDown={dropDown} cards={cards} dark={dark}></Search>
                </Suspense>
              }
            />
            <Route
              path="work/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <WorkRoutes
                    createWork={createOrUpdateWork}
                    dark={dark}
                    deleteWork={deleteWork}
                    userId={userId}
                    updateWork={createOrUpdateWork}
                    works={works}
                  />
                </Suspense>
              }
            />
            <Route
              path="update"
              element={
                <Suspense fallback={<Spinner />}>
                  <Update
                    FileInput={FileInput}
                    userCard={userCard}
                    dropDown={dropDown}
                    updateCard={createOrUpdateCard}
                    deleteCard={deleteAccount}
                    dark={dark}
                  ></Update>
                </Suspense>
              }
            ></Route>
            <Route
              path="detail/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <Detail cards={cards} dark={dark}></Detail>
                </Suspense>
              }
            ></Route>
            <Route path="product/*">
              <Route
                path="list/*"
                element={
                  <Suspense fallback={<Spinner />}>
                    <ProductList />
                  </Suspense>
                }
              ></Route>
              <Route
                path="info/*"
                element={
                  <Suspense fallback={<Spinner />}>
                    <ProductDetail />
                  </Suspense>
                }
              ></Route>
              <Route
                path="*"
                element={
                  <Suspense fallback={<Spinner />}>
                    <NotPage dark={dark}></NotPage>
                  </Suspense>
                }
              ></Route>
            </Route>
            <Route
              path="*"
              element={
                <Suspense fallback={<Spinner />}>
                  <NotPage dark={dark}></NotPage>
                </Suspense>
              }
            ></Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
