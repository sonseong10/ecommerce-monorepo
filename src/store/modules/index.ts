import type { AnyAction, ReducersMapObject } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { type ICommonsStore } from '../../commons'
import CommonsSlim from '../../commons/store/CommonsSlim'

export interface IInitStates {
  deviceType: boolean
}

/**
 * state interface 설정
 */
export interface IState extends ICommonsStore {
  //
  init: IInitStates
}

const defaultReducers = {
  ...CommonsSlim({}),
}

/**
 * 베이스 reducer 설정
 * @param state 상태를 담고있는 변수
 * @param action 행동에 의해 변화되는 값들
 * @returns
 */
// 리턴 타입이 무었인지 확인하여야 함
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (state: IState | undefined, action: AnyAction) => {
  const switchGradeReducers = () => {
    return { ...defaultReducers }
  }
  switch (action.type) {
    default:
      return combineReducers(switchGradeReducers() as ReducersMapObject<IState, AnyAction>)(state, action)
  }
}

export default rootReducer
