import { memo } from 'react'

const NotPage = () => {
  return (
    <div className="col-sm-4 col-md-12">
      <div>
        <section>
          <h2>페이지를 찾지 못 했습니다.</h2>
          <p>정확한 주소가 맞는지 확인 부탁 드립니다.</p>
        </section>
      </div>
    </div>
  )
}

export default memo(NotPage)
