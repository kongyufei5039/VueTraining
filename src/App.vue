<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <div>
      <menu-list></menu-list>
    </div>
    <div>
      <c-main></c-main>
    </div>
  </div>
</template>

<script>
import menuList from './components/menu'
import cMain from './components/main'
export default {
  components: { menuList, cMain }
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


