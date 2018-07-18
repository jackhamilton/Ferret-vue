<template>
  <div id="navbar">
    <div id="title">
      ferret
    </div>
    <div id="links">
      <div id="link" v-for="link in links" :key="link.id">
        <div @mouseover="mouseOver(link.id)"
             @mouseleave="mouseLeave(link.id)"
             @click="goto(link.id)">{{link.name}}</div>
        <transition name="component-fade">
            <div v-if="links[link.id].active">
               <hr>
            </div>
         </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      cID: 0,
      /* TODO: Add activeForUser property which hides them if the user doesn't want that type of media." */
      links: [{name: "Library", id: 0, active: false}, 
              {name: "Hot", id: 1, active: false},
              {name: "Movies", id: 2, active: false},
              {name: "Anime", id: 3, active: false}, 
              {name: "Manga", id: 4, active: false}]
    }
  },
  methods: {
    mouseOver: function(id) {
      this.links[id].active = true;
    },
    mouseLeave: function(id) {
      this.links[id].active = false;
    },
    goto: function(id) {
      this.$router.push('helloworld');
      //this.$router.push(this.links[id].name);
    }
  }
}
</script>

<style>
#navbar {
  background-color: #212f3d;
  position: relative;
  top: 0;
  height: 56px;
  width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  cursor: default;
}
#title {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  float: left;
  padding: 10px;
  color: whitesmoke;
}
#link {
  color: whitesmoke;
  float: left;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  height: 36px;
  cursor: pointer;
}
#links {
  display: table;
  margin: 0 auto;
}
hr {
  text-align: center;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
  margin-left: 10%;
  margin-right: 10%;
  transform: translateY(-22px);
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
