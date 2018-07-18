import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Library from '@/components/Library'
import Hot from '@/components/Hot'
import Movies from '@/components/Movies'
import Anime from '@/components/Anime'
import Manga from '@/components/Manga'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Library',
      name: 'Library',
      component: Library
    },
    {
      path: '/Hot',
      name: 'Hot',
      component: Hot
    },
    {
      path: '/Movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/Anime',
      name: 'Anime',
      component: Anime
    },
    {
      path: '/Manga',
      name: 'Manga',
      component: Manga
    }
  ]
})
