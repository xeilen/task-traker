<template>
  <form @submit.prevent="submit">
    <label>Task Id:
      <input v-model="id" type="text">
    </label>
    <label>Task title:
      <input v-model="title" type="text">
    </label>
    <label>Task status:
      <select v-model="status">
        <option value="">Select Status</option>
        <option v-for="status in statuses" :key="status.value" :value="status.value">{{ status.name }}</option>
      </select>
    </label>
    <label>Dev:
      <select v-model="dev">
        <option value="">Select Dev</option>
        <option v-for="dev in developers" :key="dev.id" :value="dev.id">{{ dev.name }}</option>
      </select>
    </label>
    <button>Add</button>
  </form>
</template>

<script>
import { ref } from "vue";
import {useStore} from "vuex";

export default {
name: "AddTask",
  setup() {
    const store = useStore();
    const developers = ref(store.state.developers);
    const statuses = ref(store.state.statuses);
    const id = ref('');
    const title = ref('');
    const status = ref('');
    const dev = ref('')

    const submit = () => {
      console.log({
        developer: developers.value.filter(developer => developer.id === dev.value)[0].name,
        id: dev.value,
        tasks: [
          { taskTitle: title.value, taskId: id.value, taskStatus: status.value  }
        ]
      })
    }

    return {
      id,
      title,
      status,
      dev,
      developers,
      statuses,
      submit
    }
  }
}
</script>

<style scoped>

</style>
