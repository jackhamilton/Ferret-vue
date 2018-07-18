<template>
  <div id="library">
    <profile></profile>
  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import profile from '@/components/Profile-banner'
export default {
  name: 'Library',
  components: {
    profile
  }
}
</script>

<style>
#library {
  text-align: left;
  color: whitesmoke;
}
</style>