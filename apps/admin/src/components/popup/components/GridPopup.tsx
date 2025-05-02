import { AbsPopup } from '@ecommerce/commons'
import { usePopupData } from '@ecommerce/commons'
import { Grid } from '@ecommerce/commons'
import { Text } from '../../../styles/components'
import type { Color } from '../../../styles/stylesVo'
import { PopupType } from '../PopupType'
import { memo } from 'react'

const MemoAbsPopup = memo(AbsPopup)

const GridPopup = (): JSX.Element => {
  const { popupDo } = usePopupData<{
    setting: []
    data: unknown[]
    footerMsg?: { text: string; color?: Color }
  }>(PopupType.GRID)

  return (
    <MemoAbsPopup type={PopupType.GRID}>
      {popupDo?.data &&
        popupDo.data?.data.length > 0 &&
        Grid({
          setting: popupDo.data.setting,
          data: popupDo.data.data,
          headerInfo: { fixed: 300 },
        })}
      {popupDo.data?.footerMsg && <Text color={popupDo.data?.footerMsg.color}>{popupDo.data?.footerMsg.text}</Text>}
    </MemoAbsPopup>
  )
}

export default GridPopup
