<script>
export default {
  data:function (){
    return{
      todoItems:[
          "왤케",
          "집중",
          "안댐"
      ]
    }
  },
  methods:{
    removeTodo:function (todoItem,index){
    localStorage.removeItem(todoItem);
    this.todoItems.splice(index,1);//특정 index에서 하나를 지울 수 있음
    },
    toggleTodo:function (todoItem,index){
      localStorage.toggleTodo(todoItem,index);
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  created:function () {
    if(localStorage.length>0){
      for(var i=0; i<localStorage.length; i++){
        if(localStorage.key(i)!=='loglevel:webpack-dev-server'){
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  }
}
</script>
<style scoped>
ul{
  list-style-type: none;
  padding-left: 0;
  margin-top:0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn{
  line-height: 45px;
  color:#62acde;
  margin-right: 5px;
}
.checkBtnCompleted{
  color:#b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>

<template>
  <div>
    <ul>
      <li v-for="todoItem in todoItems" v-bind:key="todoItem" v-on:click="toggleTodo(todoItem,index)">
        {{todoItem}}
        <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

