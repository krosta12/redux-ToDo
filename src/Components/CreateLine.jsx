import Button from "./Button"

function CreateLine({name, setName, setPosts, posts}){
    return(
    <>
    <input value={name} onChange={(el)=>{setName(el.target.value)}}/>
    <Button text='Create' onClick={()=>{
        setPosts((el)=>[...el, {name, id:Math.random()}])
        }}/>
    </>)
}

export default CreateLine