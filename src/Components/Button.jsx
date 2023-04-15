export function Button({id,event, text}){
    return(
        <button id={id} onClick={event}>{text}</button>
    )
}