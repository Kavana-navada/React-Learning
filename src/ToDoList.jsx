import React,{useState} from "react";
function ToDoList(){
    const [tasks,setTasks]=useState(["breakfast","homework","exam study"]);
    const [newtask,setNewTask]=useState("");

    function handleChangeTask(event){
        setNewTask(event.target.value);   
    }
    function addTask(){

        if(newtask.trim()!==""){
            setTasks(s=>[...s,newtask])
            setNewTask("");
        }      
    }

    function removeTask(Index){
        const updatedTask=tasks.filter((e,i)=>i!==Index);
        setTasks(updatedTask);

    }

    function moveUp(Index){
        if(Index>0)
        {
             const updatedTask=[...tasks];
            [updatedTask[Index],updatedTask[Index-1]]=[updatedTask[Index-1],updatedTask[Index]]
            setTasks(updatedTask)
        }

    }

    function moveDown(Index){
        if(Index<tasks.length-1)
        {
            const updatedTask=[...tasks];
            [updatedTask[Index],updatedTask[Index+1]]=[updatedTask[Index+1],updatedTask[Index]];
            setTasks(updatedTask);
        }

    }
    return(
        <div className="todolist">
            <h1 className="todoheading">To Do List</h1>
            <div className="input-add">
                <input 
                    type="text" 
                    className="taskInput" 
                    placeholder="Enter a Task" 
                    value={newtask} 
                    onChange={handleChangeTask}
                />

                <button 
                    onClick={addTask}
                    className="add-btn">
                        Add
                </button>
            </div>
            <ol>
                {
                    tasks.map((e,Index) => 
                        <li key={Index}>
                        <span className="text">{e}</span>
                        <button 
                            className="del-btn"
                            onClick={()=>removeTask(Index)}>
                                Delete
                        </button>

                        <button 
                            className="up-btn"
                            onClick={()=>moveUp(Index)}>
                            ☝
                        </button>

                        <button 
                            className="down-btn"
                            onClick={()=>moveDown(Index)}>
                            👇
                        </button>

                        </li>)
                }
            
            </ol>
            

        </div>  

    );
}
export default ToDoList;