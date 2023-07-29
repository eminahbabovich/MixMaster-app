import axios from 'axios'
import { Link, Navigate, useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'
import { useQuery } from '@tanstack/react-query'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    },
  }
}
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const id = params.id
    await queryClient.ensureQueryData(singleCocktailQuery(params.id))
    return { id }
  }

const Cocktail = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(singleCocktailQuery(id))
  if (!data) return <Navigate to="/" />
  const drink = data.drinks[0]
  const keys = Object.keys(drink)
  let drinkIngredients = []
  keys.map((key) => {
    if (key.startsWith('strIngredient') && drink[key] !== null) {
      drinkIngredients = [...drinkIngredients, drink[key]]
    }
  })
  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strDrinkThumb: img,
    strInstructions: instructions,
  } = drink

  return (
    <Wrapper>
      <header>
        <Link to={'/'} className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={img} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span>Name: </span>
            {name}
          </p>
          <p>
            <span>Category: </span>
            {category}
          </p>
          <p>
            <span>Info: </span>
            {info}
          </p>
          <p>
            <span>Glass: </span>
            {glass}
          </p>
          <p>
            <span>Ingredients: </span>
            {drinkIngredients.map((ingredient, index) => {
              return (
                <span className="ingredients" key={index}>
                  {ingredient}
                  {index < drinkIngredients.length - 1 ? ',  ' : ''}
                </span>
              )
            })}
          </p>
          <p>
            <span>Instructions: </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Cocktail
