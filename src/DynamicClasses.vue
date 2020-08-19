<template>
<!--  <div>-->
<!--    <div-->
<!--        class="demo"-->
<!--        @click="atached = !attached"></div>-->
<!--    <div class="demo" :class="{red: attachRed}"></div>-->
<!--    <div class="demo"></div>-->
<!--  </div>-->

<!--  <div></div>-->

<!--  <div>-->
<!--    <div-->
<!--        class="demo"-->
<!--        @click="atached = !attached"></div>-->
<!--    <div class="demo" :class="divClasses"></div>-->
<!--    <div class="demo"></div>-->
<!--  </div>-->

  <div>
    <div class="demo"></div>
    <div class="demo"></div>
<!--    Декілька стилів можна передавати в масиві через кому
-->
    <div class="demo" :class="[color, {red: attachRed}]"></div>
    <hr>
    <input type="text" v-model="color">
  </div>
</template>

<script>

export default {
  name: 'DynamicClasses',

  data() {
    return {
      attachRed: false,
      color: 'red'
    }
  },

  computed: {
    divClasses: function () {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    },

    methods: {
      sayHello() {
        this.title = 'Hello!';
        return this.title;
      }
    }
  },
}
</script>

<style>
.demo {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}
</style>
