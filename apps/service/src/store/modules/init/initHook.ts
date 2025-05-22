import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import type {IState} from '..';
import {useSelectorEq} from '@ecommerce/commons';
import {DeviceType} from './initVo';
import {getSession, setSession} from '../../../commons/storage/storageHook';
import {SessionName} from '../../storageVo';
import {rdxPopupReset} from '@ecommerce/commons';

export function useSetDevice() {
  const setDevice = (type: DeviceType) => {
    setSession(SessionName.DEVICE, type);
  };
  return {setDevice};
}

/**
 * `isDeviceType`
 * @return false => mobile
 * @return true => pc
 */
export function useDevice() {
  const {deviceType} = useSelectorEq((state: IState) => ({
    deviceType: state.init?.deviceType,
  }));
  const getDeviceType = () => {
    if (deviceType === undefined) {
      return getSession(SessionName.DEVICE);
    } else {
      return deviceType;
    }
  };

  return {
    getDeviceType,
    get isDeviceType() {
      switch (getDeviceType()) {
        case DeviceType.MOBILE:
          return false;
        default:
          return true;
      }
    },
  };
}

function useInit() {
  const [isInit] = useState(false);
  const init = async () => {
    return {code: 200};
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const rePage = (e: PageTransitionEvent) => {
      if (e.persisted) {
        dispatch(rdxPopupReset());
      }
    };
    window.addEventListener('pageshow', rePage);
    return () => {
      window.removeEventListener('pageshow', rePage);
    };
  }, [dispatch]);
  return {init, isInit};
}

export default useInit;
