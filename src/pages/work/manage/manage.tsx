import React from 'react'
import { useNavigate } from 'react-router-dom'

import WorkList from '../work-list'

import styles from 'styles/modules/work.module.css'
import Button from 'components/ui/Button'
import { ElementGroup, Title } from 'styles/components'

function WorkManage() {
  const navigate = useNavigate()
  const onOpenAddForm = () => {
    navigate('/admin/work/register')
  }

  return (
    <>
      <div className={`${styles.workGroup}`}>
        <ElementGroup.Row flexContent="between">
          <Title size="md" weight="medium">
            업무목록
          </Title>
          <Button
            onClick={onOpenAddForm}
            type="button"
            iconName="Edit"
            iconPosition="before"
            color="primary"
            text="업무 작성"
          />
        </ElementGroup.Row>
        <WorkList />
      </div>
    </>
  )
}

export default WorkManage
