<template>
  <div class="container">
    <div>ID: {{ id }}</div>
    <div>{{task[0].taskTitle}}</div>
  </div>
</template>

<script>
// import { ref } from 'vue'
// import {ref} from "vue";

import {useStore} from "vuex";
import {onUpdated} from "@vue/runtime-core";
import {ref} from "vue";

export default {
name: "TaskDetails",
  props: ['id'],
  setup(props) {
  const store = useStore();
  let task = ref([])
  onUpdated(() => {
    const { devTasks } = store.state.tasks.find(dev => dev.devTasks.find(task => task.taskId === props.id));
    console.log(devTasks)
    task.value = devTasks.filter(item => item.taskId === props.id)
    console.log(task.value)
  })

    console.log(props.id)

    // const task = store.state.tasks
    // console.log(task)

    // const getTask = () => {
    //   const task =
    // }
    // const id = ref(props.id);
    //
    return {
      task: task.value
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 15px;
    width: 500px;
    margin-left: 25px;
    border: 2px solid lightgray;
    border-radius: 10px;
  }
</style>
