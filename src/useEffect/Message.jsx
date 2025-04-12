import { useEffect } from "react"


export const Message = () => {

    useEffect(() => {
        console.log("message mounted")
        
        return() => {
        console.log("message unmounted")

        }
    },[]);


  return (
    <>
    
    <h4>Usuario ya existe</h4>
    
    </>
  )
}
