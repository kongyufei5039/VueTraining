import Vue from "../../node_modules/vue";

var data = { a: 1 }

var vm = new Vue ({
  data
})
console.log( vm.a == data.a)

vm.a = 2
console.log(data.a)

export default vm