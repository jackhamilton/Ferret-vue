<template>
  <div id="home">
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
export default {
  name: 'Home',
  components: {
    navbar
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: whitesmoke;
}
</style>
