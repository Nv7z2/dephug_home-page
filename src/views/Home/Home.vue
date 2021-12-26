<template>
  <div class="home">
    <home-navigation />
    <home-hero-section />
    <home-how-we-work />
    <home-portfolio />
    <home-about-us />
  </div>
</template>

<script>
import HomeNavigation from '@/components/Home/HomeNavigation.vue';
import HomeHeroSection from '@/components/Home/HomeHeroSection.vue';
import HomeHowWeWork from '@/components/Home/HomeHowWeWork.vue';
import HomePortfolio from '@/components/Home/HomePortfolio.vue';
import HomeAboutUs from '../../components/Home/HomeAboutUs.vue';

export default {
  name: 'Home',
  components: {
    HomeNavigation,
    HomeHeroSection,
    HomeHowWeWork,
    HomePortfolio,
    HomeAboutUs,
  },
};
</script>
