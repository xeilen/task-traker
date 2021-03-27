<template>
  <div class="container">
    <h2>This is the Filter component</h2>
    <div>
      <label> Filter by retailer:
        <input
            v-model="inputValue"
            type="text"
            @keyup="$emit('testEmit', { inputValue, selectedDeveloper })"
        />
      </label>
    </div>
    <div>
      <label for="">Select developer:
        <select name="" id="" v-model="selectedDeveloper" @change="$emit('testEmit', { inputValue, selectedDeveloper })">
          <option value="">Select developer</option>
          <option v-for="dev in developers" :key="dev" :value="dev">{{ dev }}</option>
        </select>
      </label>
    </div>
    <div>{{inputValue}}</div>
    <div>{{ selectedDeveloper }}</div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
name: "Filter",
  props: ['developers'],
  emits: ['testEmit'],
  setup() {

    const inputValue = ref('')
    const selectedDeveloper = ref('')



    return {
      inputValue,
      selectedDeveloper
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
