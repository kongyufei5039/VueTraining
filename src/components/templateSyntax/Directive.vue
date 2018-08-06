<template>
  <div class="content">
    <h2>指令</h2>
    <div>
      <p class="title">v-text</p>
      <div class="highlight">
        <span v-text="text"></span>
      </div>
    </div>
    <div>
      <p class="title">v-html</p>
      <div class="highlight">
        <span v-html="html"></span>
      </div>
    </div>
    <div>
      <p class="title">v-show</p>
      <div class="highlight">
        <p v-show="showFlag">{{ showContent }}</p>
        <button @click="showFlag = !showFlag">click me</button>
      </div>
    </div>
    <div>
      <p class="title">v-if</p>
      <div class="highlight">
        <p>根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。</p>
        <p v-if="randomNumber <= 0.5">{{ randomNumber }}</p>
        <button @click="randomNumber = Math.random()">click me</button>
      </div>
    </div>
    <div>
      <p class="title">v-else</p>
      <div class="highlight">
        <p>前一兄弟元素必须有 <span class="code">v-if</span> 或 <span class="code">v-else-if</span>。</p>
        <p v-if="randomNumber > 0.5">{{ randomNumber }}</p>
        <p v-else>random &lt;= 0.5</p>
      </div>
    </div>
    <div>
      <p class="title">v-if-else</p>
      <div class="highlight">
        <p>前一兄弟元素必须有 <span class="code">v-if</span> 或 <span class="code">v-else-if</span>。</p>
        <p v-if="randomNumber < 0.2">随机数小于0.2</p>
        <p v-else-if="randomNumber < 0.4">随机数小于0.4</p>
        <p v-else-if="randomNumber < 0.6">随机数小于0.6</p>
        <p v-else>随机数大于0.6</p>
      </div>
    </div>
    <div>
      <p class="title">v-for</p>
      <div class="highlight">
        <p>基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 <span class="code">alias in expression</span> ，为当前遍历的元素提供别名</p>
        <p><span class="code">v-for</span> 默认行为试着不改变整体，而是替换元素。迫使其重新排序的元素，你需要提供一个 <span class="code">key</span> 的特殊属性</p>
        <p v-for="item in fruits" >{{ `${item.id}、${item.name}` }}</p>
      </div>
    </div>
    <div>
      <p class="title">v-on</p>
      <div class="highlight">
        <p>绑定事件监听器。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '和插值语法一样',
      html: '<p style="font-weight: 600; color: #2c3e50;">注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译</p>',
      showFlag: true,
      showContent: '根据表达式之真假值，切换元素的 display CSS 属性。',
      randomNumber: Math.random(),
      fruits: [{id: 1, name: '苹果'}, {id: 2, name: '橘子'}, {id: 3, name: '火龙果'}]
    }
  }
}
</script>

