

export const PokemonCard = ({id,name, sprites = []}) => {

  return (
    <div>
    
    <h4 className="text-capitalize">#-{id}-{name}</h4>
      <div>
        {

          sprites.map((sprite) => {
            return (
              <img key={sprite} src={sprite} alt={name}/>
            )
          })
        }
      </div>


    </div>
  )
}
