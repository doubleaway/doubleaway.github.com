<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo"/>
    <span class="addContainer" v-on:click="addTodo">
      <i class="far fa-plus addBtn" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
  export default {
    data:function(){
      return{
        newTodoItem:" "
      }
    },
    methods:{
      addTodo:function (){
        if(this.newTodoItem!=='') {
          var obj = {complete: false, item: this.newTodoItem};
          //  (텍스트,불린)d으로 저장
          //저장하는 로직
          localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
          this.clearInput();
        }
      },
      clearInput:function (){
        this.newTodoItem="";//비워주기(초기화)
      }
    }
  }
</script>

<style scoped>
  input:focus{
    outline: none;
  }
  .inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer{
    float: right;
    background: linear-gradient(to right, #62eac6,#32cee6);

    display: block;
    width: 50px;
    height: 100%;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color:white;
    vertical-align: middle;
  }
</style>