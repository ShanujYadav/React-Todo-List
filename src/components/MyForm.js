import { useState } from "react"

function MyForm(){
    const submitHandler=(e)=>{
        e.preventDefault()
    console.log(name,email,password)
    }
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
return <>
<form onSubmit={submitHandler}>
<input type="text" placeholder="Enter your Name" onChange={e=>setName(e.target.value)} value={name}/>
<br/>
<input type="text" placeholder="Enter your Email" onChange={e=>setEmail(e.target.value)} />
<br/>
<input type="text" placeholder="Enter your Password" onChange={e=>setPassword(e.target.value)}/>
<br/>
<input type="submit"/>
</form>
</>
}
export default MyForm