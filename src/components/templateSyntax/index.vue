<template>
  <div>
    <interpolation></interpolation>
    <directive></directive>
    <originHtml></originHtml>
    <characteristical></characteristical>
    <js-expression></js-expression>
  </div>
</template>

<script>
import interpolation from './Interpolation'
import directive from './Directive'
import originHtml from './OriginHtml'
import characteristical from './Characteristical'
import jsExpression from './JSExpression'

export default {
  components: { interpolation, directive, originHtml, characteristical, jsExpression }
}
</script>

