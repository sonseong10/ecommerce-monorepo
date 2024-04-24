import { addPopup } from 'commons/popup/AbsPopupType'
import { lazy } from 'react'

// NOTE: 팝업타입
export enum PopupType {
  ALERT = 'alert',
  INPUT = 'input',
  CONFIRM = 'confirm',
  WARNING = 'warning',
  IMAGE = 'image',
  GRID = 'Grid',
  ICON = 'Icon',
}

const Image = lazy(() => import('./components/ImagePopup'))
const Grid = lazy(() => import('./components/GridPopup'))
const ICon = lazy(() => import('./components/IconPopup'))

addPopup(PopupType.IMAGE, Image)
addPopup(PopupType.GRID, Grid)
addPopup(PopupType.ICON, ICon)
