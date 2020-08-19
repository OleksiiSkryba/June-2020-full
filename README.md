PUT NAME OF THE COMPONENTS INTO THE main.js

like:
import Vue from 'vue'
import Events from './Events.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Events),
}).$mount('#app')


/////
Homework
Створити простий todolist
В папці assests є скрін як приблизно має виглядати
Має бути масив тудушок, в інпуті вписуємо туду і пушимо в масив за допомогою кнопки Add.
Видаляємо тудушки за допомогою кнопки delete.
Якщо тудушок більше 10 кнопка повинна сховатись.


 
