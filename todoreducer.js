const intialState={
    todos:[{
        text:"i woke up at 11",
        completed:false
    }]
}
export const todoReducer=(state=intialState,action)=>{
     switch(action.type){
        case "add":
        return{
            ...state,
            todos:[...state.todos,{text:action.text,completed:false}]
        }
        case "toggle":
            return{
                ...state,
                todos:state.todos.map((todo,i)=>{
                    if(i === action.index){
                       todo.completed=!todo.completed
                    }
                    return todo;
                })
            }
            default:
                return state;

     }
}