
import { useState } from 'react';
import './App.css'

function App(){
  let [todolist , settodolist] = useState([])
  let savetodo = (event)=>{

  let toname = event.target.toname.value;
  if(!todolist.includes(toname)){
    let finaldolist = [...todolist,toname]
    settodolist (finaldolist)

  }
  else{
    alert("this to name allready exit...")
  }
    event.preventDefault()

  }

  let list = todolist.map((value,index)=>{
    return(
      <Todolistitems value={value} key={index} indexnum={index} todolist={todolist} settodolist={settodolist}/>
    )
  })

  return(
    <div id="all">
      <div>
      <h1> ToDo List </h1>
      <form onSubmit={savetodo}>
        <input type='text' placeholder='add your todo ' name='toname'></input> <button> Save </button>
      </form>

      <div class='outerdiv'>
        <ul>
          {list}
        </ul>
      </div>
      </div>
    </div>

  )
  
}

function Todolistitems({value,indexnum,todolist,settodolist}){
  let deleteRow=()=>{
    let finalData = todolist.filter((v,i)=>i!=indexnum)
    settodolist(finalData)
  }
  return(
    <li> {value} <span onClick={deleteRow}>&times;</span></li>
  )
}

export default App