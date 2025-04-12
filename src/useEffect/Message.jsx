import { useEffect, useState } from "react"


export const Message = () => {

    const [coords, serCoords]  = useState({x:0, y :0})

    useEffect(() => {
        const mouseOnMove = ({x,y}) => {
            serCoords({x,y})
        }
        window.addEventListener("mousemove", mouseOnMove);
        //para desmontar el useEffect
        return () => {
            window.removeEventListener("mousemove", mouseOnMove)
        }

    },[]);


  return (
    <>
    
    <h4>Usuario ya existe</h4>
    {JSON.stringify(coords)}
    
    </>
  )
}
