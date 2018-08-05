<template>
  <div class="menu">
    <ul>
      <li v-for="(item, index) in menus"><router-link :to="item.link">{{ item.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { name: 'Vue 实例', link: '/vueInstance' },
        { name: '模板语法', link: '/templateSyntax' }
      ]
    }
  }
}
</script>

<style scoped>
  .menu {
    position: fixed;
    width: 300px;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>


