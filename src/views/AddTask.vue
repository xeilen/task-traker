<template>
  <form @submit.prevent="submit" class="flex flex-col justify-center p-4">
    <label class="mb-3">Task Id:
      <input class="border-2 border-green-400 myClass" v-model="id" type="text">
    </label>
    <label  class="mb-3">Task title:
      <input class="border border-green-400" v-model="title" type="text">
    </label>
    <label  class="mb-3">Source link:
      <input class="border border-green-400" v-model="link" type="text">
    </label>
    <label  class="mb-3">Task status:
      <select class="border" v-model="status">
        <option value="">Select Status</option>
        <option v-for="status in statuses" :key="status.value" :value="status.value">{{ status.name }}</option>
      </select>
    </label>
    <label  class="mb-3">Dev:
      <select class="border" v-model="dev">
        <option value="">Select Dev</option>
        <option v-for="dev in developers" :key="dev.id" :value="dev.id">{{ dev.name }}</option>
      </select>
    </label>
    <button class="max-w-sm bg-green-400 text-white text-lg rounded-md">Add</button>
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
    const link = ref('')

    const submit = () => {
     const newtodo = {
        developer: developers.value.filter(developer => developer.id === dev.value)[0].name,
        id: dev.value,
        devTasks: [
          {
            taskTitle: title.value,
            taskId: id.value,
            taskStatus: status.value,
            workbenchLink: link.value
          }
        ]
      }

      store.commit('addTask', newtodo)
      id.value = '';
      title.value = '';
      status.value = '';
      dev.value = '';
    }

    return {
      id,
      title,
      link,
      status,
      dev,
      developers,
      statuses,
      submit
    }
  }
}
</script>

<style lang="scss" scoped>
 .myClass {
   &:focus {
     outline: none;
     border: 2px solid crimson;
     border-radius: 3px;
   }
 }
</style>
