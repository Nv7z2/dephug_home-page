<template>
  <base-home-section
    sectionClass="about-us"
    sectionId="about-us"
    heading-string="about_us.heading"
  >
    <p>
      {{ $t('about_us.paragraph1') }}
    </p>

    <p>
      {{ $t('about_us.paragraph2') }}
    </p>

    <p>
      {{ $t('about_us.paragraph3') }}
    </p>
  </base-home-section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-us {
}
</style>
