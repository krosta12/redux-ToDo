import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./da/slice";



function App() {
  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{dispatch(increment())}}>increment</button>
      {count}
      <button onClick={()=>{dispatch(decrement())}}>decriment</button>
    </div>
  );
}

export default App;
