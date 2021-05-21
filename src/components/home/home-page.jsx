import { useEffect } from 'react'

const HomePage = ({ handleHomeActive }) => {
  useEffect(() => {
    handleHomeActive()
  })
  return (
    <div className="col-sm-4 col-md-9">
      <div className="wrapper">
        <article>orenge</article>
        <article>blue</article>
        <article>green</article>
      </div>
    </div>
  )
}

export default HomePage
