import React from 'react'

import styles from '../../styles/modules/search.module.css'
import MemberList from './member-card/member-list'
import type DropDown from 'utils/dropdown'
import type { ICardVo } from 'types/grobal-type'
import { UiInputText } from 'components/ui/InputText'
import Button from 'components/ui/Button'
import { ElementGroup, Title } from 'styles/components'

interface ISearchProps {
  cards?: {
    [key: string]: ICardVo
  }

  dark: boolean
  dropDown?: DropDown
}

const Search = ({ cards, dark }: ISearchProps) => {
  // const searchRef = useRef<HTMLInputElement>(null)
  // const [searchValue, setSerchValue] = useState<string | undefined>(undefined)

  // const onSearchValue = () => {
  //   setSerchValue(searchRef.current?.value)
  // }

  return (
    <div>
      <div className={`${styles.memberGroup} ${dark && styles.isDark}`}>
        <ElementGroup.Row flexContent="between">
          <Title size="md" weight="medium">
            직원검색
          </Title>
          <ElementGroup.Row flexContent="end">
            <UiInputText id="keyword" placeholder="직원이름 검색" />
            <Button text="검색" btnSize="xsm" />
          </ElementGroup.Row>
        </ElementGroup.Row>
        <MemberList cards={cards} searchValue={''} dark={dark}></MemberList>
      </div>
    </div>
  )
}

export default Search
