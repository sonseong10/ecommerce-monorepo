import { addPopup } from "commons/popup/AbsPopupType";
import { lazy } from "react";

// NOTE: 팝업타입
export enum PopupType {
  // 어드민사이트 및 통합AD Popup
  ALERT = "alert",
  INPUT = "input",
  CONFIRM = "confirm",
  WARNING = "warning",
  IMAGE = "image",
  GRID = "Grid",
  ICON = "Icon",
  SCRIPT = "Script",
}

// 어드민사이트 및 전역통합AD Popup
const Image = lazy(() => import("./components/ImagePopup"));
const Grid = lazy(() => import("./components/GridPopup"));
const ICon = lazy(() => import("./components/IconPopup"));
const Script = lazy(() => import("./components/ScriptPopup"));

// 어드민사이트 및 통합AD Popup
addPopup(PopupType.IMAGE, Image);
addPopup(PopupType.GRID, Grid);
addPopup(PopupType.ICON, ICon);
addPopup(PopupType.SCRIPT, Script);
