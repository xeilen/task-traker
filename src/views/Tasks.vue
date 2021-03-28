<template>
  <div class="task-container">
    <TaskList @select-task="emitSelectTask" :tasks="tasks" :selectedTask="selectedTask"/>
    <TaskDetails v-if="selectedTask" :task="selectedTask"/>
    <Filter @testEmit="getEmitData" :developers="developers" :statuses="statuses"/>
  </div>

</template>

<script>
import TaskDetails from "@/views/TaskDetails";
import Filter from "@/components/Filter";
import {useStore} from 'vuex'
import TaskList from "@/components/TaskList";
// eslint-disable-next-line no-unused-vars
import {ref} from "vue";

export default {
name: "Tasks",
  components: {TaskList, Filter, TaskDetails },
  setup() {
    const store = useStore();
    const developers = ref(store.state.developers);
    console.log(developers)
    const statuses = ref(store.state.statuses)
    const tasks = ref(store.state.tasks)
    const selectedTask = ref(null);

    const getEmitData = (value) => {
      tasks.value = store.getters.getFilteredTask(value.inputValue, value.selectedDeveloper, value.selectedStatus)
      console.log(value);
    }

    const emitSelectTask = (taskId) => {
      const task = store.getters.getTask(taskId)
      selectedTask.value = task
      console.log(task)
    }

    // computed(() => {
    //
    // })


    return {
      // tasks: store.getters.getFilteredTask(fromInput),
      selectedTask,
      // fromInput,
      getEmitData,
      emitSelectTask,
      tasks,
      developers,
      statuses
    }
  }
}
</script>

<style lang="scss" scoped>
  .task-container {
    display: flex;
  }
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
