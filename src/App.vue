<template>
   <the-header></the-header>
   <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
         <component :is="slotProps.Component"></component>
      </transition>
   </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
   components: {
      TheHeader,
   },
   created(){
      this.$store.dispatch('tryLogin');
   }
};
</script>

<style>
* {
   box-sizing: border-box;
}

html {
   font-family: 'Roboto', sans-serif;
}

body {
   margin: 0;
}

.router-enter-from {
   opacity: 0;
   transform: translateY(-30px);
}

.route-enter-active {
   transition: all 0.3s ease-out;
}

.route-leave-to {
   opacity: 0;
   transform: translateY(30px);
}

.router-enter-to,
.route-leave-from {
   opacity: 1;
   transform: translateY(0);
}

.route-leave-active {
   transition: all 0.3s ease-in;
}
</style>