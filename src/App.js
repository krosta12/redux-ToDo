import { useState } from "react";
import CreateLine from "./Components/CreateLine";
import Button from "./Components/Button";

function App() {
  const [name, setName] = useState('')
  const [posts, setPosts] = useState([])

  return (
    <div className="App">
      <CreateLine name={name} setName={setName} setPosts={setPosts} posts={posts}/>

      <br/><br/><br/>

      <div>
        {posts.map((el)=>(<div id={el.id}>{el.name} 
        <Button 
          text='delete' 
          onClick={(el)=>{setPosts((posts)=>[...posts.filter((filte)=>filte.id != el.target.parentNode.id)])}}
          /></div>))}
      </div>
    </div>
  );
}

export default App;
