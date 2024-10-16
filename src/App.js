// method 1
import React, { useState } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = ()=>{
  const [taskList,setTaskList] = useState([]);

  return (
    <div className = 'main-container'>
      <div className = 'center-container'>
        <TodoInput taskList={taskList} setTaskList={setTaskList}  />
        {
          taskList.map((ele,index) =>{
            return <TodoList key={index} current_index={index} list_item={ele}  taskList={taskList} setTaskList={setTaskList} />
          })
        }
      
      </div>
    </div>
  )

}

export default App



// this is method 2
// import React, { useState } from 'react';
// import "./App.css";
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';

// const App = ()=>{
//   const [taskList,setTaskList] = useState([]);

//   function add_item_to_list(inputText){
//     if(inputText.length > 0){
//       console.log("add_item_to_list function called...");
//       setTaskList([...taskList, inputText ])
//     }
//   }

//   function delete_item_from_list(index){

//     let temp_list = [...taskList];
//     console.log('temp_list :>> ', temp_list);
//     console.log('index is :>> ', index);
//     temp_list.splice(index,1);

//     console.log('temp_list after delete is   :>> ', temp_list );
//     setTaskList(temp_list);
//   }

//   return (
//     <div className = 'main-container'>
//       <div className = 'center-container'>
//         <TodoInput addItem = {add_item_to_list}  />
//         {
//           taskList.map((ele,index) =>{
//             return <TodoList key={index} current_index={index} list_item={ele} delete_item={delete_item_from_list} />
//           })
//         }
      
//       </div>
//     </div>
//   )


// }

// export default App


