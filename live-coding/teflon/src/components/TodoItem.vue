<script>

export default {
  props: [ 'text' ]
}
</script>

<template>
  <div>
    <input type="checkbox">
    <label>{{ text }}</label>
  </div>
</template>