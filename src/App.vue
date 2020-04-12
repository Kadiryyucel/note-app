<template>
  <div id="app">
    <navigator :title="'NoteApp'">
      <router-view/>
    </navigator>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.md-drawer{
  background-color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import navigator from './components/Navigator'
export default {
  components:{
    navigator
  },
  created(){
    this.$router.push({name:'login'});
  }
}
</script>
