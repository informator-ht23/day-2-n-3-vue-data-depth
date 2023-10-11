<script>
import Header from './components/header/Header.vue';
import Gdpr from './components/cookie/Gdpr.vue';
import { RouterView } from 'vue-router';

export default {
  components: { Header, Gdpr }
}
</script>

<template>
  <Header />
  <RouterView />
</template>

<style>
</style>