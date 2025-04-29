import { memo } from 'react'

interface IOverlayProps {
  overlay: boolean
  ToggleOverlay: () => void
}
const Overlay = ({ ToggleOverlay }: IOverlayProps) => {
  return <div className={``} onClick={ToggleOverlay} onBlur={ToggleOverlay} aria-hidden></div>
}

export default memo(Overlay)
