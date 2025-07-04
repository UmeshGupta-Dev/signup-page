import { useRef } from "react"

function Loginpage(){

  const nameRef = useRef(null)
  const passRef = useRef(null)

  const loginHandle = (e)=> {
    e.preventDefault()
     const gettingData = localStorage.getItem('userInfo')
     const gotData = JSON.parse(gettingData)
     console.log(gotData);
     if (gotData.userName === nameRef.current.value && gotData.password === passRef.current.value)  {
        alert('login successfully')
     } else{
        alert('please type correct username or password')
     }
  }

    return(
        <>
        <form onSubmit={loginHandle}>
            <input type="text" placeholder="Username" required ref={nameRef}  />
            <input type="" required placeholder="Password" ref={passRef} />
            <button type="submit">Log in</button>
        </form>
        </>
    )
}

export default Loginpage