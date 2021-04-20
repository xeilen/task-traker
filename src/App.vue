<template>
  <Header/>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <router-view v-if="!isLoading"/>
  <h2 v-if="isLoading">Loading...</h2>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {Header},
  setup() {

  }
}
</script>

<style lang="scss">

</style>
