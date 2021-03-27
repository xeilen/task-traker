<template>
  <ul class="task-list">
    <li class="task-list__dev-tasks" v-for="dev in tasks" :key="dev.developer">
      <strong v-if="dev.devTasks.length">{{ dev.developer }}</strong>
      <ul>
        <li
            class="task-list__item"
            v-for="task in dev.devTasks"
            :key="task.taskId"
            :class="{
                active: task.taskStatus === 'active',
                done: task.taskStatus === 'done',
                incoming: task.taskStatus === 'incoming',
                'task-list__item--chosen': selectedTask && selectedTask.taskId === task.taskId
              }"
            @click="$emit('select-task', task.taskId)"
        >
          <span class="">{{task.taskId}} - {{ task.taskTitle }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
// import {ref} from "vue";

export default {
name: "TaskList",
  emits: ['select-task'],
  props: ['tasks', 'selectedTask', 'selectTask'],
  setup(props) {

    console.log(props)

    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.task-list {
//border: 1px solid gray;
  width: 300px;

&__dev-tasks {
   margin-bottom: 15px;
 }

&__item {
 //border: 1px solid lightgray;
   margin-top: 2px;
   padding-left: 9px;
   cursor: pointer;
   height: 40px;
   display: flex;
   align-items: center;
   transition: 0.3s;
   will-change: contents;
   font-weight: bold;

&--chosen {
   transform: translate(10px);
 }

//&:hover {
   //  transform: translate(2px);
   //}

}
}
</style>
