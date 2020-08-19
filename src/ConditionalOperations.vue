<template>
  <div>
    <p v-if="show">You can see me!</p>
    <p v-else>Now you can see me!</p>
    <button @click="show = !show">Switch</button>
  </div>

<!--  v-show vs v-if -->
<!--  <div>-->
<!--    <p v-if="show">You can see me! <span>Hello!</span></p>-->
<!--    <p v-show="show">Do you also see me?</p>-->
<!--    <button @click="show = !show">Switch</button>-->
<!--  </div>-->

<!--  v-for -->
<!--  <div>-->
<!--    <ul>-->
<!--      <li v-for="(ingredient, index) in ingredients" :key="index">-->
<!--        {{ ingredient }}-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->


<!--  <div>-->
<!--   <ul>-->
<!--     <li v-for="person in persons" :key="person.id">-->
<!--       {{ person.name }} - {{person.age}}-->
<!--     </li>-->
<!--   </ul>-->
<!--  </div>-->


<!--  <div>-->
<!--    <span v-for="n in 10" :key="n">-->
<!--      {{n}}-->
<!--    </span>-->
<!--  </div>-->

</template>

<script>

export default {
  name: 'ConditionalOperations',

  data() {
    return {
      show: true,
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        { name: 'Jack', age: 27, color: 'red', id: 1 },
        { name: 'James', age: 33, color: 'blue', id: 2 }
      ]
    }
  },
}
</script>

<style>
</style>
