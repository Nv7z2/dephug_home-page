<template>
  <div class="home">
    <home-navigation />
    <home-hero-section />
    <home-how-we-work />
    <home-portfolio />
    <home-about-us />
    <home-contact />
    <base-footer />
  </div>
</template>

<script>
import HomeNavigation from '@/components/Home/HomeNavigation.vue';
import HomeHeroSection from '@/components/Home/HomeHeroSection.vue';
import HomeHowWeWork from '@/components/Home/HomeHowWeWork.vue';
import HomePortfolio from '@/components/Home/HomePortfolio.vue';
import HomeAboutUs from '@/components/Home/HomeAboutUs.vue';
import HomeContact from '@/components/Home/HomeContact.vue';

export default {
  name: 'Home',
  components: {
    HomeNavigation,
    HomeHeroSection,
    HomeHowWeWork,
    HomePortfolio,
    HomeAboutUs,
    HomeContact,
  },
};
</script>
