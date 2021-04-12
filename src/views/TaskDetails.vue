<template>
  <div class="container">
    <div>ID: {{ task.taskId }}</div>
    <div>Title: {{ task.taskTitle }}</div>
    <div>Status: {{ task.taskStatus }}</div>
    <div><a class="xl:text-blue-500 text-sm" target="_blank" :href="task.workbenchLink">Source on Workbench</a></div>
<!--    <div>{{ task.taskTitle }}</div>-->
  </div>
</template>

<script>
export default {
name: "TaskDetails",
  props: ['task'],
  setup(props) {
    console.log(props)

    return {

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
