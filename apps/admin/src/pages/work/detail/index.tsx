import { useInitDetail } from './store/detailHook'
import OptionGrid from '../../../components/ui/OptionGrid'
import { ElementGroup, Text, Title } from '../../../styles/components'
import moment from 'moment'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../components/ui/Button'

const ReferrerBadge = styled.div`
  a {
    display: inline-block;
    padding: 4px 10px;
    border: 1px solid var(--border-grey);
    border-radius: 12px;
    font-size: 12px;
  }

  span:first-of-type::after {
    display: inline-block;
    width: 1px;
    height: 10px;
    background-color: var(--border-dark);
    margin: 0 4px;
    content: '';
  }
`

const WorkContents = styled.pre`
  font-size: 14px;
  text-align: left;
  height: 300px;
  white-space: break-spaces;
  word-break: break-all;
  overflow-y: auto;
`

function WorkDetail() {
  const work = useInitDetail()
  const nav = useNavigate()
  return (
    <>
      <ElementGroup.Row $flexContent="between">
        <Title size="md" $fontWeight="medium">
          업무상세정보
        </Title>

        <Button text="목록" thin={true} $btnSize="xsm" onClick={() => nav('/admin/work/manage')} />
      </ElementGroup.Row>
      <OptionGrid
        data={[
          { title: '제목', element: <Text>{work?.title}</Text> },
          {
            title: '업무기간',
            element: (
              <Text>
                {work?.startAt} - {work?.endAt}
              </Text>
            ),
          },
          {
            title: '우선순위',
            element: <Text>{work ? (work.priority >= 2 ? '높음' : work.priority >= 1 ? '보통' : '낮음') : '-'}</Text>,
          },
          {
            title: '업무상태',
            element: (
              <Text>
                {work ? (work.workState >= 2 ? '진행완료' : work.workState >= 1 ? '진행중' : '진행예정') : '-'}
              </Text>
            ),
          },
          {
            title: '참여자',
            element: (
              <ElementGroup.Row flexWrap>
                {work?.referrer.map(i => (
                  <ReferrerBadge key={i.code}>
                    <Link to={`/admin/member/detail/${i.code}`}>
                      <span>{i.team}팀</span>
                      <span> {i.name}</span>
                    </Link>
                  </ReferrerBadge>
                ))}
              </ElementGroup.Row>
            ),
          },
          {
            title: '최초 작성자/작성일',
            element: (
              <Text>
                {work?.writer}/{moment(work?.createdAt).format('yyyy-MM-DD')}
              </Text>
            ),
          },
          {
            title: '내용',
            element: <WorkContents>{work?.contents}</WorkContents>,
          },
        ]}
      />
    </>
  )
}

export default WorkDetail
