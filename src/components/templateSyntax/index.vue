<template>
  <div>
    <interpolation></interpolation>
    <directive></directive>
  </div>
</template>

<script>
import interpolation from './Interpolation'
import directive from './Directive'
export default {
  components: { interpolation, directive }
}
</script>

