<template>
  <div>
    <button v-on:click="counter++">Increase</button>
    <button v-on:click="counter--">Decrease</button>
    <button v-on:click="secondCounter++">Increase Second</button>
    <p>Counter: {{ counter }} | {{ secondCounter }}</p>
    <p>Result: {{ result() }} | {{ output }}</p>
  </div>
</template>

<script>

export default {
  name: 'ComputedProperty',

  data() {
    return {
      counter: 0,
      secondCounter: 0
    }
  },

  computed: {
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  },

  methods: {
    result: function() {
      console.log('Method');
      return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
    }
  }
}
</script>

<style>
</style>
