import { memo, useEffect, useState } from 'react'
import { BiChevronUp } from 'react-icons/bi'

import DropDownProps from '../../../../utils/dropdown'
import type { ICardVo } from '../../../../types/grobal-type'
import DropDown from '../../../../components/common/dropdown/dropdown'

interface ITeamsDropdownProps {
  dropDown: DropDownProps
  teamRef?: React.LegacyRef<HTMLButtonElement>
  userCard?: ICardVo
  updateCard?: (obj: ICardVo) => void
  dark: boolean
}

const TeamsDropdown = ({ dropDown, teamRef, userCard, updateCard, dark }: ITeamsDropdownProps) => {
  const items = dropDown.getTeams()

  const [teamsType, setTeamsType] = useState('')
  const [teamsIsOpen, setTeamsIsOpen] = useState(false)

  const handleTeamsValue = (value: string) => {
    userCard ? update(value) : add(value)
    onTeamsOpen()
  }

  const add = (value: string) => {
    setTeamsType(value)
  }

  const update = (value: string) => {
    setTeamsType(value)
    if (updateCard) {
      updateCard({
        ...userCard!,
        [`team`]: value,
      })
    }
  }

  const onTeamsOpen = () => {
    setTeamsIsOpen(!teamsIsOpen)
  }

  useEffect(() => {
    userCard ? setTeamsType(userCard.team) : setTeamsType(items[0].value)
  }, [items, userCard])
  return (
    <div>
      <p>부서명</p>
      <button onClick={onTeamsOpen} type="button" ref={teamRef}>
        {teamsType} <BiChevronUp aria-hidden />
      </button>
      <div>
        <DropDown listItems={items} handleEvent={handleTeamsValue} dark={dark} />
      </div>
    </div>
  )
}

export default memo(TeamsDropdown)
