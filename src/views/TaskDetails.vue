<template>
  <div class="container">
    <div>ID: {{ id }}</div>
    <div>{{ task.taskTitle }}</div>
  </div>
</template>

<script>
// import { ref } from 'vue'
// import {ref} from "vue";

import {useStore} from "vuex";
import {onUpdated} from "vue";
// eslint-disable-next-line no-unused-vars
import {ref, reactive} from "vue";

export default {
name: "TaskDetails",
  props: ['id'],
  setup(props) {
  const store = useStore();

  let task = reactive(store.getters.getTask(props.id))
  onUpdated(() => {
    task.value = store.getters.getTask(props.id)
    console.log(task.value)
  })

    // const task = store.state.tasks
    // console.log(task)

    // const getTask = () => {
    //   const task =
    // }
    // const id = ref(props.id);

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
