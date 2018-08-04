# Vue.js 技术栈练习

## Vue 实例

### [创建实例](./src/components/vueInstance.js)
```javascript
var vm = new vue({
    //选项
})
```

### 数据与方法
#### [响应系统](https://github.com/answershuto/learnVue/blob/master/docs/%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.MarkDown)

```javascript
// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
  data: data
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data.a // => true

// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2

// ……反之亦然
data.a = 3
vm.a // => 3
```

### [实例属性](./src/components/vueInstance.js)
#### vm.$data
#### vm.$props
#### vm.$el
#### vm.$options
#### vm.$parent
#### vm.$root
#### vm.$children
#### vm.$slots
#### vm.$scopedSlots
#### vm.$refs
#### vm.$isServer
#### vm.$attrs
#### vm.$listeners

### 实例生命周期
#### vm.created
#### vm.mounted
#### vm.updated
#### vm.destroyed