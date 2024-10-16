// method 1
import React, { useState } from 'react';

const TodoInput = ({ taskList, setTaskList }) => {

  const [inputText, setInputText] = useState("");

  function add_item_to_list(inputText) {
    if (inputText.length > 0) {
      console.log("add_item_to_list function called...");
      setTaskList([...taskList, inputText])
    }
  }


  return (
    <div className='input-container'>
      <input type="text"
        placeholder='Enter your task Here'
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        value={inputText}
        className='input-box-todo' />
      <button

        onClick={() => {
          console.log("button clicked...");
          add_item_to_list(inputText);
          setInputText("");
        }
        }

        className='add-btn'>+</button>
    </div>
  )
}

export default TodoInput;






// method 2
// import React, { useState } from 'react';

// const TodoInput = ({addItem})=> {

//   const [inputText, setInputText] = useState("");


//   return (
//     <div className='input-container'>
//       <input type="text"
//       placeholder='Enter your task'
//       onChange={(e)=>{
//         setInputText(e.target.value);
//       }}
//       value={inputText}
//       className='input-box-todo' />
//       <button

//       onClick={()=>{
//         console.log("button clicked...");
//         addItem(inputText);
//         setInputText("");
//       }
//       }

//       className='add-btn'>+</button>
//     </div>
//   )
// }

// export default TodoInput