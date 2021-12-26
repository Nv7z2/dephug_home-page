<template>
  <div class="portfolio__project-box">
    <a :href="link" class="portfolio__project-label">
      <span class="portfolio__project-icon">
        <img src="../../assets/anchor-icon.svg" alt="" />
      </span>
      <span class="portfolio__project-name">{{ name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: '#',
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__project-box {
    height: 26rem;
    display: flex;
    border-radius: 0.5rem;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0 0.5rem 2rem -0.5rem rgba($primary, 0.6);
    background: url('~@/assets/project.jpeg') center / cover;

    @include mq {
      height: 14rem;
    }
  }

  &__project-label {
    padding: 1.25rem;
    display: flex;
    align-items: center;
    background-color: #00000060;
    backdrop-filter: blur(6px);
    border-radius: 0.5rem;
    text-decoration: none;
  }

  &__project-icon {
    img {
      width: 1rem;
      height: 1rem;
      margin-right: 1rem;
    }
  }

  &__project-name {
    font-weight: bold;
    color: $text-light;
  }
}
</style>
