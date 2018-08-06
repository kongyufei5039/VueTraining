<template>
  <div class="content">
    <h2>指令</h2>
    <div>
      <p class="title">v-text</p>
      <div class="highlight">
        <span v-text="text"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: 'a'
    }
  }
}
</script>

