import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import type { ICommonsStore } from '../..'
import { useAbsApi, useSelectorEq } from '../../store/common'
import { LayerType } from '../AbsLayerType'
import { rdxLayerClose, rdxLayers, rdxLayerSelected, rdxContentHeignt } from './layerR'
import type { ILayerDo } from './layerVo'

export function useCalender<T>(buttonComponent?: React.FC) {
  const dispatch = useDispatch()
  const { apiResult } = useAbsApi(buttonComponent)
  const open = async (data: T, position?: React.MouseEvent<HTMLElement>) => {
    const res = await apiResult(rdxLayers, {
      type: LayerType.CALENDER,
      data: data,
      rect: position?.currentTarget.getBoundingClientRect(),
    } as ILayerDo<T>)
    if (res) {
      return res.content
    } else {
      return undefined
    }
  }

  const close = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    await dispatch(rdxLayerClose())
  }
  return { open, close }
}

export function useContentHeight(): {
  set: (getHeight: () => DOMRect) => Promise<void>
} {
  const dispatch = useDispatch()
  const set = useCallback(async (getHeight: () => DOMRect) => {
    dispatch(rdxContentHeignt(getHeight))
  }, [])
  return { set }
}

function useLayer<T>() {
  const { contentHeight, isLayer, data } = useSelectorEq((state: ICommonsStore) => ({
    contentHeight: state.layers?.contentHeight,
    isLayer: state.layers?.isLayer,
    data: state.layers?.data,
  }))
  const dispatch = useDispatch()

  const selected = async (data: T) => {
    await dispatch(rdxLayerSelected(data))
  }

  const close = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    await dispatch(rdxLayerClose())
  }
  return { contentHeight, isLayer, data, close, selected }
}

export default useLayer
