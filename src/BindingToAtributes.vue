<template>
<!-- :href -->
  <div>
    <h1>{{ message }}</h1>
    <p>{{ sayHello() }}</p>
    <p>
      <a v-bind:href="link">Google</a>
    </p>
  </div>

<!--  Розкоментуйте -->

<!-- v-once -->
<!--  <div>-->
<!--    <h1 v-once>{{ message }}</h1>-->
<!--    <p>{{ sayHello() }}</p>-->
<!--  </div>-->

<!-- v-html  -->
<!--  <div>-->
<!--    <span v-html="finishedLink"/>-->
<!--  </div>-->
</template>

<script>

export default {
  name: 'BindingToAtributes',

  data() {
    return {
      message: 'Hello World',
      link: 'http://google.com',
      finishedLink: '<a href="http://google.com">Google</a>'
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
