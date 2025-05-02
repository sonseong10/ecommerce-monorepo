// import styles from "styles/modules/detail.module.css";
import { useInitMemberDetail } from './store/detailHook'
import Button from '../../../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { ElementGroup, Title } from '../../../styles/components'
import { useSelectorEq } from '@ecommerce/commons'
import type { IState } from '../../../store/modules'

const Detail = () => {
  const card = useInitMemberDetail()
  const nav = useNavigate()
  const { userCode } = useSelectorEq((state: IState) => ({
    userCode: state.auth.user?.uid,
  }))

  return (
    <>
      <ElementGroup.Row flexContent="between">
        <Title size="md" weight="medium">
          {card?.name ? card?.name : '이름없음'}님 정보
        </Title>

        <ElementGroup.Row>
          <Button text="목록" onClick={() => nav('/admin/member/manage')} thin btnSize="xsm" btntype="border" />
          {userCode === window.location?.href.split('/').pop() ? (
            <Button text="정보수정" onClick={() => nav(`/admin/member/register/${userCode}`)} thin btnSize="xsm" />
          ) : (
            <></>
          )}
        </ElementGroup.Row>
      </ElementGroup.Row>
      <div>
        <div>
          <figure>
            <img src={card?.fileURL || ''} alt="" />
            <figcaption className="visually-hidden">profile</figcaption>
          </figure>

          <dl>
            <div>
              <dt>이름</dt>
              <dd>{card?.name}</dd>
            </div>
            <div>
              <dt>이메일</dt>
              <dd>
                <a href={`mailto:${card?.email}`}>{card?.email}</a>
              </dd>
            </div>
            <div>
              <dt>부서</dt>
              <dd>{card?.team}팀</dd>
            </div>
            <div>
              <dt>직급</dt>
              <dd>{card?.rank}</dd>
            </div>
            <div>
              <dt>휴대전화</dt>
              <dd>
                <a href={`tel:+${card?.phone}`}>{card?.phone}</a>
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <dl>
            <div>
              <dt>남긴말</dt>
              <dd>{card?.msg ? card.msg : '내용없음'}</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}

export default Detail
