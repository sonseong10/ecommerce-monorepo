import { lazy, memo, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/main.css'
import { ThemeProvider, type DefaultTheme } from 'styled-components'
import { GlobalStyle } from './styles/globalStyle'

import LoadingView from '../../../libs/commons/src/loading/LoadingView'
import { LayerController } from '@ecommerce/commons'
import { lightTheme } from './styles/theme'
import Spinner from './components/ui/Spinner'
import { Popup } from '@ecommerce/commons'

const HomePage = lazy(() => import('./pages/main'))
const MemberRoute = lazy(() => import('./pages/member'))
const WorkRoutes = lazy(() => import('./pages/work'))
const ProductList = lazy(() => import('./pages/product/list'))
const NotPage = lazy(() => import('./pages/errors/not-page'))
const Login = lazy(() => import('./pages/auth/login'))
const MainContent = lazy(() => import('./components/layout/mainContent'))
const ProductDetail = lazy(() => import('./pages/product/detail'))
const DisplayPage = lazy(() => import('./pages/display'))

function App() {
  const [theme] = useState<DefaultTheme>(lightTheme)

  const Layer = memo(LayerController)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Popup />
        <LoadingView />
        <Layer />

        <Routes>
          <Route index element={<Login />} />
          <Route
            path="/admin"
            element={
              <Suspense fallback={<Spinner />}>
                <MainContent />
              </Suspense>
            }
          >
            <Route
              path="main/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="member/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <MemberRoute />
                </Suspense>
              }
            />
            <Route
              path="work/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <WorkRoutes />
                </Suspense>
              }
            />
            <Route
              path="display/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <DisplayPage />
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
                    <NotPage></NotPage>
                  </Suspense>
                }
              ></Route>
            </Route>
            <Route
              path="*"
              element={
                <Suspense fallback={<Spinner />}>
                  <NotPage></NotPage>
                </Suspense>
              }
            ></Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
