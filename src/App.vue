<template>
  <div id="app"> 
    <navbar></navbar>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import navbar from '@/components/Navbar';
export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Muli:200');
#app {
  font-family: 'Muli', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 24px;
  color: #2c3e50;
}
html {
  background-color: #2c3e50;
}
body {
  margin: 0
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
