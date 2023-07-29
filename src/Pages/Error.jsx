import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/not-found.svg'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <div className="container">
          <img src={img} alt="not-found-image" />
          <h3>Ohh!</h3>
          <p>We can't seem to find page you are looking for</p>
          <Link to="/" className="link">
            Back Home
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <h3>Something Went Wrong</h3>
      </div>
    </Wrapper>
  )
}
export default Error
