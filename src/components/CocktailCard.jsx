import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailCard'

const CocktailCard = ({ id, name, img, info, glass }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} className="img" />
      <div className="info">
        <h4>{name}</h4>
        <p>{glass}</p>
        <p>{info}</p>
        <Link className="btn" to={`/cocktail/${id}`}>
          Details
        </Link>
      </div>
    </Wrapper>
  )
}
export default CocktailCard
