import { memo, useEffect, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'
import DropDown from '../../../common/dropdown/dropdown'
import DropDownProps from 'utils/dropdown'
import type { ICardVo } from 'types/grobal-type'

interface IRanksDropdownProps {
  dropDown: DropDownProps
  rankRef?: React.LegacyRef<HTMLButtonElement>
  userCard?: ICardVo
  updateCard?: (obj: ICardVo) => void
  dark: boolean
}

const RanksDropdown = ({ dropDown, rankRef, userCard, updateCard, dark }: IRanksDropdownProps) => {
  const items = dropDown.getRanks()

  const [ranksType, setRanksType] = useState('')
  const [ranksIsOpen, setRanksIsOpen] = useState(false)

  const handleRanksValue = (value: string) => {
    userCard ? update(value) : add(value)
    onRanksOpen()
  }

  const add = (value: string) => {
    setRanksType(value)
  }

  const update = (value: string) => {
    setRanksType(value)
    if (updateCard) {
      updateCard({
        ...userCard!,
        [`rank`]: value,
      })
    }
  }

  const onRanksOpen = () => {
    setRanksIsOpen(!ranksIsOpen)
  }

  useEffect(() => {
    userCard ? setRanksType(userCard.rank) : setRanksType(items[0].value)
  }, [items, userCard])

  return (
    <div>
      <p>직급명</p>

      <button onClick={onRanksOpen} type="button" ref={rankRef}>
        {ranksType} <BiChevronUp aria-hidden />
      </button>

      <div>
        <DropDown listItems={items} handleEvent={handleRanksValue} dark={dark} />
      </div>
    </div>
  )
}

export default memo(RanksDropdown)
