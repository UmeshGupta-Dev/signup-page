import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(){
    // hooks which needed for further code
    const nameRef = useRef(null)
    const passRef = useRef(null)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    // show and hide button toggle function
    function passToggle(){
        setShow(prev => !prev)
    }

    // form handling function 
    function formHandling(e){
    e.preventDefault()
       
    const pass = passRef.current.value
    const name = nameRef.current.value
    const userInfo = {
        userName : name,
        password : pass
    } 
    if (pass.length > 12) {
        alert('Password max limit is 12 characters')
    }else{
        const localStr = localStorage.setItem('userInfo', JSON.stringify(userInfo))
        navigate('/login')
    }
    
    }
    return (
        <>
        <form onSubmit={formHandling}>
            <input type="text" pattern="^\S+$" required title="Username cannot contain spaces" placeholder="Username" ref={nameRef} />
            <input type={show ? 'text': 'password'} pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$" required title="Password must be contain atleast one letter and one number" minLength={8} placeholder="Password" ref={passRef} />
            <button type="button" onClick={passToggle}>{show ? 'hide' : 'show'}</button>
            <button type="submit">Signup</button> 
        </form>
        </>
    )
}

export default Signup