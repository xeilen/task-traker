<template>
  <div class="container">
    <h2>This is the Filter component</h2>
    <div class="">
      <label> Filter by retailer:
        <input
            v-model="inputValue"
            class="border"
            type="text"
            @keyup="$emit('testEmit', { inputValue, selectedDeveloper, selectedStatus })"
        />
      </label>
    </div>
    <div>
      <label>Select developer:
        <select class="border" v-model="selectedDeveloper" @change="$emit('testEmit', { inputValue, selectedDeveloper, selectedStatus })">
          <option value="">All devs</option>
          <option v-for="dev in developers" :key="dev" :value="dev.id">{{ dev.name }}</option>
        </select>
      </label>
    </div>
    <div>
      <label>Filter by status
        <select class="border" v-model="selectedStatus" @change="$emit('testEmit', { inputValue, selectedDeveloper, selectedStatus })">
          <option value="">All</option>
          <option v-for="status in statuses" :key="status.value" :value="status.value">{{status.name}}</option>
        </select>
      </label>
    </div>
    <div>{{inputValue}}</div>
    <div>{{ selectedDeveloper }}</div>
    <div>{{ selectedStatus }}</div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
name: "Filter",
  props: ['developers', 'statuses'],
  emits: ['testEmit'],
  setup() {
    //todo implement reactive instead of ref
    const inputValue = ref('')
    const selectedDeveloper = ref('')
    const selectedStatus = ref('')

    return {
      inputValue,
      selectedDeveloper,
      selectedStatus
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
