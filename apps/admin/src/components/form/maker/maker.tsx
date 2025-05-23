import { memo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddCardForm from './add-card-form'
import type ImageUploader from '../../../service/image-uploader'
import type DropDown from '../../../utils/dropdown'
import type { ICardVo } from '../../../types/grobal-type'

interface IMakerProps {
  FileInput: React.MemoExoticComponent<
    (props: {
      imageUploader?: ImageUploader
      name: string
      onFileChange?: (obj: { name?: string; url?: string }) => void
    }) => React.JSX.Element
  >
  dropDown: DropDown
  isCard?: ICardVo
  createCard: (card: ICardVo) => void
  dark: boolean
}
const Maker = ({ FileInput, dropDown, isCard, createCard, dark }: IMakerProps) => {
  const navigate = useNavigate()

  useEffect(() => {
    isCard && navigate('/main')
  }, [isCard, navigate])

  return (
    <div className="col-sm-4 col-md-10 col-lg-9">
      <AddCardForm FileInput={FileInput} createCard={createCard} dropDown={dropDown} dark={dark} />
    </div>
  )
}

export default memo(Maker)
