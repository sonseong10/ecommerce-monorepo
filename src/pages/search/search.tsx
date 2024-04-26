import React from 'react'

import styles from '../../styles/modules/search.module.css'
import MemberList from './member-card/member-list'
import { UiInputText } from 'components/ui/InputText'
import Button from 'components/ui/Button'
import { ElementGroup, Title } from 'styles/components'

const Search = () => {
  return (
    <div>
      <div className={`${styles.memberGroup} `}>
        <ElementGroup.Row flexContent="between">
          <Title size="md" weight="medium">
            직원검색
          </Title>
          <ElementGroup.Row flexContent="end">
            <UiInputText id="keyword" placeholder="직원이름 검색" />
            <Button text="검색" btnSize="xsm" />
          </ElementGroup.Row>
        </ElementGroup.Row>
        <MemberList />
      </div>
    </div>
  )
}

export default Search
