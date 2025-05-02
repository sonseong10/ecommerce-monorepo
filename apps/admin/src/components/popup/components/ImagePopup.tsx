import { AbsPopup } from '@ecommerce/commons'
import { usePopupData } from '@ecommerce/commons'
import styled from 'styled-components'
import { PopupType } from '../PopupType'
import { memo } from 'react'

const ImageWrap = styled.div`
  max-height: 600px;
  overflow-y: auto;
`

const ImageBox = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const MemoAbsPopup = memo(AbsPopup)

const ImagePopup = (): JSX.Element => {
  const { popupDo } = usePopupData<string>(PopupType.IMAGE)
  return (
    <MemoAbsPopup type={PopupType.IMAGE}>
      <ImageWrap>
        <ImageBox src={popupDo.data} alt="이미지" />
      </ImageWrap>
    </MemoAbsPopup>
  )
}

export default ImagePopup
