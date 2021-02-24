import React,{useState,useRef,useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInser';
import TodoList from './components/TodoList';
function createBulkTodos(){
  const array=[];
  for(let i=1; i<=10;i++){
    array.push({
      id:i,
      text:`할일${i}`,
      checked:false,
    });
  }
  return array;
}
const App=()=>{
  const [todos,setTodos]=useState(createBulkTodos);
  // 고윳값을 사용될 id
  const nextId=useRef(2501);
  const onInsert=useCallback(
    text=>{
      const todo={
        id: nextId.current,
        text,
        checked:false
      };
      setTodos(todos=>todos.concat(todo));
      // nextId 1씩 더하기
      nextId.current+=1;
    },
    [todos],
  );
// 삭제 기능
const onRemove=useCallback(
    id=>{
      setTodos(todos=>todos.filter(todo=>todo.id!==id));
    },
    [todos],
);
// 토글 기능
const onToggle=useCallback(
  id=>{
    setTodos(todos=>
      todos.map(
        todo=>
        todo.id===id?{...todo,checked:!todo.checked}:todo,
        ),
    );
  },[todos],
);
  return (<TodoTemplate>
            <TodoInsert onInsert={onInsert}>
            </TodoInsert>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;
