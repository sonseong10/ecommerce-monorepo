import {Suspense, lazy, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider, type DefaultTheme} from 'styled-components';
import {lightTheme} from './styles/theme';
import {GlobalStyle} from './styles/globalStyle';
import {Popup} from '@ecommerce/commons';
import LoadingView from '../../../libs/commons/src/loading/LoadingView';
import {LayerController} from '@ecommerce/commons';
import Spinner from './components/ui/Spinner';
import {SMBridgeCallBack} from './utils/SMBridge';
import {checkFakePcAgent} from './store/modules/init/initVo';
import {useDevice} from './store/modules/init/initHook';
import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/header/Header';

const MainPage = lazy(() => import('./pages/main/mainPage'));
const MarketPage = lazy(() => import('./pages/market/marketPage'));
const ProductDetail = lazy(() => import('./pages/market/product/detail'));

function App() {
  const {isDeviceType} = useDevice();

  const [theme] = useState<DefaultTheme>(lightTheme);
  if (window.SMBridgeCallBack === undefined) {
    window.SMBridgeCallBack = SMBridgeCallBack;
  }

  // 세션이 모바일일때
  if (!isDeviceType) {
    // 현재 기기가 pc이면
    if (!checkFakePcAgent()) {
      document.body.classList.add('device-pc');
    }
  }
  // 세션이 pc일때
  else {
    // 현재 기기가 pc이면
    if (!checkFakePcAgent()) {
      document.body.classList.remove('device-pc');
    }
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Popup />
        <LoadingView />
        <LayerController />
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route
              index
              element={
                <Suspense fallback={<Spinner text="로딩중입니다." />}>
                  <MainPage />
                </Suspense>
              }
            />

            <Route
              path="experts"
              element={
                <Suspense fallback={<Spinner text="로딩중입니다." />}>
                  <></>
                </Suspense>
              }
            />
          </Route>
          <Route
            path="store/*"
            element={
              <Suspense fallback={<Spinner text="로딩중입니다." />}>
                <Header />
                <MarketPage />
              </Suspense>
            }
          />
          <Route
            path="productions/*"
            element={
              <Suspense fallback={<Spinner text="로딩중입니다." />}>
                <Header />
                <ProductDetail />
              </Suspense>
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
