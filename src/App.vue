<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <div>
      <menu-list></menu-list>
    </div>
    <div>
      <home></home>
    </div>
  </div>
</template>

<script>
import menuList from './components/menu'
import home from './components/main'
export default {
  components: { menuList, home }
}
</script>

<style>
  .fl {
    display: block;
    float: left;
  }
  .fr {
    display: block;
    float: right;
  }
</style>


