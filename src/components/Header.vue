<template>
  <div class="header">
    <div class="header__logo">
      <h1 class="header__title font-bold">Task Tracker</h1>
    </div>

    <div class="header__nav">
      <nav class="nav">
        <router-link to="/">Tasks</router-link>
        <router-link to="/overview">Overview</router-link>
        <router-link to="/add">Add task</router-link>
        <!--        <ul class="nav__list">-->
        <!--          <li class="nav__item">Tasks</li>-->
        <!--          <li class="nav__item">Overview</li>-->
        <!--        </ul>-->
      </nav>
    </div>
  </div>
</template>

<script>
// import {useStore} from "vuex";
// import {ref} from "vue";

export default {
name: "Header",
  setup() {
    // const store = useStore()
    // const developers = ref()
  }
}
</script>

<style lang="scss" scoped>
  .header {
    height: 75px;
    background: #42B983;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;

    &__title {
      color: white;

     }
  }

  .nav {
    display: flex;
    justify-content: space-around;
    list-style: none;

    a {
      color: white;
      margin-left: 20px;
      text-decoration: none;
    }
  }
</style>
