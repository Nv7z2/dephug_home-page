<template>
  <div
    class="portfolio__project-box"
    :style="`background: url(${require('@/assets/' +
      imagePath)}) center / cover;`"
  >
    <a :href="link" class="portfolio__project-label" target="_blank">
      <span class="portfolio__project-icon">
        <img src="../../assets/anchor-icon.svg" alt="" />
      </span>
      <span class="portfolio__project-name">{{ name }}</span>
    </a>

    <div class="portfolio__project-description-wrapper">
      <button
        class="portfolio__project-description-button"
        @mouseenter="isDescriptionVisible = true"
        @mouseleave="isDescriptionVisible = false"
        @click="isDescriptionVisible = !isDescriptionVisible"
      >
        i
      </button>
      <div
        class="portfolio__project-description-content"
        :class="{
          'portfolio__project-description-content--visible':
            isDescriptionVisible,
        }"
      >
        {{ $t('portfolio.' + description) }}
      </div>
    </div>
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
    imagePath: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isDescriptionVisible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__project-box {
    height: 280px;
    display: flex;
    position: relative;
    border-radius: 0.5rem;
    flex-direction: column-reverse;
    justify-content: space-between;
    box-shadow: 0 0.5rem 2rem -0.5rem rgba($primary, 0.6);
    background: url('~@/assets/project.webp') center / cover;

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

  &__project-description-wrapper {
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    align-items: flex-end;
  }
  &__project-description-button {
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    color: $text-light;
    border-radius: 50%;
    backdrop-filter: blur(6px);
    background-color: #00000060;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(#000, 0.25);
  }
  &__project-description-content {
    width: calc(100% - 1rem);
    padding: 0;
    max-height: 0;
    margin-top: 0.5rem;
    overflow-y: hidden;
    color: $text-light;
    border-radius: 0.25rem;
    backdrop-filter: blur(6px);
    background-color: #00000090;
    transition: all 0.4s ease-in-out;

    &--visible {
      max-height: 12rem;
      padding: 0.5rem 0.75rem;

      @include mq {
        max-height: 7rem;
        overflow-y: scroll;
      }
    }
  }
}
</style>
