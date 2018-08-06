<template>
  <div class="content">
    <h2>插值</h2>
    <div>
      <p class="title">文本</p>
      <div class="highlight">
        <span>{{ text }}</span>
      </div>
    </div>
    <div>
      <p class="title">原始 HTML</p>
      <div class="highlight">
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
      </div>
    </div>
    <div>
      <p class="title">特性</p>
      <div class="highlight">
        <button v-bind:disabled="isButtonDisabled">Button</button>
      </div>
    </div>
    <div>
      <p class="title">javascript表达式</p>
      <div class="highlight">
        <p>{{ jsExpression.number + 1 }}</p>
        <p>{{ jsExpression.ok ? 'yes' : 'no' }}</p>
        <p>{{ jsExpression.message.split('').reverse().join('')}}</p>
        <p v-bind:id="'list-' + jsExpression.id">注意这个元素的id值</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '这是一段文本',
      rawHtml: '<span style="color: red">This should be red</span>',
      isButtonDisabled: true,
      jsExpression: {
        number: 1,
        ok: 'ok',
        message: 'abcde',
        id: 2
      }
    }
  }
}
</script>

