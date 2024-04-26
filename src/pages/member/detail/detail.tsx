import React from 'react'
import styles from 'styles/modules/detail.module.css'
import { useInitMemberDetail } from './store/detailHook'
import Button from 'components/ui/Button'
import DEFAULT_USER from 'assets/images/img-user-default.png'

const Detail = () => {
  const card = useInitMemberDetail()
  return (
    <div className={`${styles.detailGroup} `}>
      <header className={styles.header}>
        <h2 className={styles.pageTitle}>사용자 정보</h2>
      </header>
      <div>
        <div className={styles.infoGroup}>
          <figure className={styles.imgWrapper}>
            <img src={card?.fileURL || DEFAULT_USER} alt="" />
            <figcaption className="visually-hidden">profile</figcaption>
          </figure>

          <dl className={styles.userInfoList}>
            <div className={styles.userInfoItem}>
              <dt>이름</dt>
              <dd>{card?.name}</dd>
            </div>
            <div className={styles.userInfoItem}>
              <dt>이메일</dt>
              <dd>
                <a href={`mailto:${card?.email}`}>{card?.email}</a>
              </dd>
            </div>
            <div className={styles.userInfoItem}>
              <dt>부서</dt>
              <dd>{card?.team}</dd>
            </div>
            <div className={styles.userInfoItem}>
              <dt>직급</dt>
              <dd>{card?.rank}</dd>
            </div>
            <div className={styles.userInfoItem}>
              <dt>휴대전화</dt>
              <dd>
                <a href={`tel:+${card?.phone}`}>{card?.phone}</a>
              </dd>
            </div>
          </dl>
        </div>
        <div className={styles.contentsGroup}>
          <dl className={styles.infoContents}>
            <div className={styles.userInfoItem}>
              <dt>상태</dt>
              <dd>
                <strong className={`${styles.loginState} ${card?.login ? styles.isLogin : styles.isOffline}`}>
                  {card?.login ? '근무중' : '오프라인'}
                </strong>
              </dd>
            </div>
            <div className={`${styles.userInfoItem} ${styles.msg}`}>
              <dt>남긴말</dt>
              <dd className={styles.msgBox}>{card?.msg ? card.msg : '없음'}</dd>
            </div>
          </dl>
        </div>
      </div>
      <footer className={styles.footer}>
        <Button text="목록"></Button>
      </footer>
    </div>
  )
}

export default Detail
