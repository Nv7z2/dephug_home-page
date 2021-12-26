<template>
  <div class="home">
    <home-navigation />
    <home-hero-section />
    <home-how-we-work />
  </div>
</template>

<script>
import HomeNavigation from '@/components/Home/HomeNavigation.vue';
import HomeHeroSection from '@/components/Home/HomeHeroSection.vue';
import HomeHowWeWork from '@/components/Home/HomeHowWeWork.vue';

export default {
  name: 'Home',
  components: {
    HomeNavigation,
    HomeHeroSection,
    HomeHowWeWork,
  },
};
</script>
