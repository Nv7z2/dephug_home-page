<template>
  <div class="home">
    <home-navigation />
    <home-hero-section />
  </div>
</template>

<script>
import HomeNavigation from '@/components/Home/HomeNavigation.vue';
import HomeHeroSection from '@/components/Home/HomeHeroSection.vue';

export default {
  name: 'Home',
  components: {
    HomeNavigation,
    HomeHeroSection,
  },
};
</script>
