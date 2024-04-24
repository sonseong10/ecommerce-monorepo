import React from 'react'
import { useNavigate } from 'react-router-dom'
import renderMarkdown from 'utils/render-markdown'

import WorkList from '../work-list'

import styles from 'styles/modules/work.module.css'
import Button from 'components/ui/Button'
import { ElementGroup, Title } from 'styles/components'

interface IWorkProps {
  userId: string
  works?: {
    [key: string]: {
      contents: string
      time: number
      title: string
    }
  }
  createWork: (work: { contents: string; time: number; title: string }) => void
  updateWork: (work: { contents: string; time: number; title: string }) => void
  deleteWork: (work: { contents: string; time: number; title: string }) => void
  dark: boolean
}

function WorkManage({ works, updateWork, deleteWork, dark }: IWorkProps) {
  const navigate = useNavigate()
  const onOpenAddForm = () => {
    navigate('/admin/work/register')
  }

  return (
    <>
      <div className={`${styles.workGroup} ${dark && styles.isDark}`}>
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
        <WorkList
          works={works}
          renderMarkdown={renderMarkdown}
          updateWork={updateWork}
          deleteWork={deleteWork}
          dark={dark}
        />
      </div>
    </>
  )
}

export default WorkManage
