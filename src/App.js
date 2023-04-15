import { useDispatch, useSelector } from "react-redux";
import { deleteFromList, addToList } from "./Redux/slice";
import { useState } from "react";
import { Button } from "./Components/Button";
import { Input } from "./Components/Input";



function App() {
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()

  const [input, setInput] = useState('')
  
  return (
    <div>
      <div>
        <Input value={input} setValue={(el)=>{setInput(el.target.value)}}/>

        <Button id  event={()=>dispatch(addToList(input))} text='send'/>
        <div>
          {count.map((el)=>(
            <>
              <div>
                <span>{el.text}</span>
                <Button id={el.id} event={(_button)=>dispatch(deleteFromList(_button.target.id))} text='delete'/>
              </div>
            </>
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
