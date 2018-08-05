<template>
  <div>
    <button v-bind:disabled="isButtonDisabled">Button</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isButtonDisabled: true    
    }
  }
}
</script>

