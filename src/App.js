import { useDispatch, useSelector } from "react-redux";
import { deleteFromList, addToList } from "./da/slice";
import { useState } from "react";



function App() {
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()

  const [input, setInput] = useState('')
  
  return (
    <div>
      <div>
        <input value={input} onChange={(el)=>{setInput(el.target.value)}}/>
        <button onClick={()=>dispatch(addToList(input))}>send</button>
        <div>
          {count.map((el)=>(
            <>
              <div>
                <span>{el.text}</span>
                <button id={el.id} onClick={(_button)=>dispatch(deleteFromList(_button.target.id))}>delete</button>
              </div>
            </>
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
