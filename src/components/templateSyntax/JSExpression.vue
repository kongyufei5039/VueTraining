<template>
  <div>
    <p>{{ number + 1 }}</p>
    <p>{{ ok ? 'yes' : 'no' }}</p>
    <p>{{ message.split('').reverse().join('')}}</p>
    <p v-bind:id="'list-' + id">注意这个元素的id值</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      number: 1,
      ok: 'ok',
      message: 'abcde',
      id: 2
    }
  }
}
</script>

