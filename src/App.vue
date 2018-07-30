<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <hello-world></hello-world>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  components: {
    'hello-world': HelloWorld
  }
}
</script>
