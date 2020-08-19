<template>
  <div>
    <h1>{{message}}</h1>
    <hr>
    <p> {{sayHello() }} </p>
  </div>
</template>

<script>

export default {
  name: 'Interpolation',

  data() {
    return {
      message: 'Hello World',
    }
  },

  methods: {
    sayHello() {
      this.title = 'Hello!';
      return this.title;
    }
  }
}
</script>

<style>
</style>
