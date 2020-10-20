<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <News />
</template>

<script>
import HelloWorld from './components/Test.vue';
import News from './components/News.vue';
// import Test from './components/Test';

export default {
  name: 'App',
  components: {
    News,
    HelloWorld
  }
};
</script>
