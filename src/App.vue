<template>
  <Header />
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
  <router-view/>
</template>

<script>
import Header from "@/components/Header";
import db from './db'
export default {
  components: {Header},
   setup() {
    const data = db.firestore().collection('testUsers')
    data.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(item => {
        console.log(item.doc.id)
      })
    })
    // data.onSnapshot(snapshot => {
    //   snapshot.docs.forEach(item => {
    //     console.log(item.data());
    //   });
    //   //     .forEach(item => {
    //   //   console.log(item.doc.data())
    //   // })

     console.log(data)
  }
}
</script>

<style lang="scss">

</style>
