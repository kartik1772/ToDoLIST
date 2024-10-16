// method 1
import React from 'react'
const TodoList = ({ current_index, list_item, taskList, setTaskList }) => {

    function delete_item_from_list(index) {

        let temp_list = [...taskList];
        console.log('temp_list :>> ', temp_list);
        console.log('index is :>> ', index);
        temp_list.splice(index, 1);

        console.log('temp_list after delete is   :>> ', temp_list);
        setTaskList(temp_list);
    }

    return (
        <div className='list-item' style={{display:"flex",justifyContent:"space-between"}}>
            {list_item}
            <button onClick={() => {
                delete_item_from_list(current_index);
            }}>
            Delete
            </button>
        </div>
    )
}

export default TodoList








// method 2
// import React from 'react'

// const TodoList = ({ current_index, list_item, delete_item }) => {
//     return (
//         <div className='list-item' style={{display:"flex",justifyContent:"space-between"}}>
//             {list_item}
//             <button onClick={() => {
//                 delete_item(current_index);
//             }}>
//             Delete
//             </button>
//         </div>
//     )
// }

// export default TodoList