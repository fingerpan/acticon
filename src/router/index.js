import Vue from 'vue'
import Router from 'vue-router'
import layout from 'components/layout/acticon-box.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      name: "layout",
      path:'/',
      component:layout

    }


  ]
})
