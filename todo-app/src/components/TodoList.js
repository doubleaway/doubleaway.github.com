import React, { useCallback } from 'react';
import TodoListItem from './TodoListltem';
import './TodoList.scss';
import { List } from 'react-virtualized';
const TodoList=({todos,onRemove,onToggle})=>{
    const rowRender=useCallback(
        ({index,key,style})=>{
            const todo=todos[index];
            return(
                <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
                />
            );
        },
        [onRemove,onToggle,todos],
    );

    return(
        <List
        className="TodoList"
        width={500}
        height={513}
        rowCount={todos.length}
        rowHeight={60}
        rowRenderer={rowRender}
        list={todos}
        style={{outline:'none'}}
        />
    );
};
export default React.memo(TodoList);