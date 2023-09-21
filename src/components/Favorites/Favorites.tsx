import { useAppSelector } from '../../features/hooks'
import Card from '../Card/Card'
import Nav from '../Nav/Nav'


const Favorites = () => {

  const { favorites } = useAppSelector((state) => state.stateCaharacters)

  return (
    <div className="container"
      style={{
        padding: "25px",
      }}>
      <Nav />
      {
        favorites?.map((value, index) => {
          return <Card
            key={index}
            id={value.id}
            name={value.name}
            species={value.species}
            gender={value.gender}
            image={value.image}
          //  onClose={onClose}
          />

        })
      }

    </div>

  )
}

export default Favorites