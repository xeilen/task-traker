<template>
  <div class="task-container">
    <ul class="task-list">
      <li class="task-list__dev-tasks" v-for="dev in tasks" :key="dev.developer">
        <strong>{{ dev.developer }}</strong>
        <ul>
          <li
              class="task-list__item"
              v-for="task in dev.devTasks"
              :key="task.taskId"
              :class="{
                active: task.taskStatus === 'active',
                done: task.taskStatus === 'done',
                incoming: task.taskStatus === 'incoming'
              }"
              @click="selectTask(task.taskId)"
          >
            <span class="">{{task.taskId}} - {{ task.taskTitle }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <TaskDetails v-if="selectedTask" :id="selectedTask"/>
  </div>

</template>

<script>
import {useStore} from 'vuex'
import TaskDetails from "@/views/TaskDetails";
import { ref } from "vue";
export default {
name: "Tasks",
  components: { TaskDetails },
  setup() {
    const store = useStore();
    console.log(store.state)

    const selectedTask = ref(null)

    const selectTask = (taskID) => {
      selectedTask.value = taskID
    }

    return {
      tasks: store.state.tasks,
      selectedTask,
      selectTask
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

      &:hover {
        transform: scale(1.02);


      }

    }
  }
</style>
