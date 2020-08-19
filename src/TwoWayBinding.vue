<template>
  <div>
    <input type="text" v-model="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>

export default {
  name: 'TwoWayBinding',

  data() {
    return {
      name: 'James'
    }
  },
}
</script>

<style>
</style>
