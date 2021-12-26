<template>
  <base-home-section
    sectionClass="how-we-work"
    sectionId="how-we-work"
    headingString="how_we_work.heading"
  >
    <div class="how-we-work__steps">
      <div class="how-we-work__step">
        <span>
          <div class="how-we-work__step-dot"></div>
          {{ $t('how_we_work.step1') }}
        </span>
        <strong>{{ $t('how_we_work.consulting') }}</strong>
        <span class="mobile-only">
          {{ $t('how_we_work.step_description1') }}
        </span>
      </div>
      <div class="how-we-work__step">
        <span>
          <div class="how-we-work__step-dot"></div>
          {{ $t('how_we_work.step2') }}
        </span>
        <strong>{{ $t('how_we_work.planning') }}</strong>
        <span class="mobile-only">
          {{ $t('how_we_work.step_description2') }}
        </span>
      </div>
      <div class="how-we-work__step">
        <span>
          <div class="how-we-work__step-dot"></div>
          {{ $t('how_we_work.step3') }}
        </span>
        <strong>{{ $t('how_we_work.working') }}</strong>
        <span class="mobile-only">
          {{ $t('how_we_work.step_description3') }}
        </span>
      </div>
      <div class="how-we-work__step">
        <span>
          <div class="how-we-work__step-dot"></div>
          {{ $t('how_we_work.step4') }}
        </span>
        <strong>{{ $t('how_we_work.implementation') }}</strong>
        <span class="mobile-only">
          {{ $t('how_we_work.step_description4') }}
        </span>
      </div>
    </div>

    <div class="how-we-work__divider">
      <div class="how-we-work__divider-dot-wrapper">
        <div class="how-we-work__divider-dot"></div>
      </div>
      <div class="how-we-work__divider-dot-wrapper">
        <div class="how-we-work__divider-dot"></div>
      </div>
      <div class="how-we-work__divider-dot-wrapper">
        <div class="how-we-work__divider-dot"></div>
      </div>
      <div class="how-we-work__divider-dot-wrapper">
        <div class="how-we-work__divider-dot"></div>
      </div>
      <div class="how-we-work__divider-line"></div>
    </div>

    <div class="how-we-work__steps-descriptions">
      <div class="how-we-work__step-description">
        <span>{{ $t('how_we_work.step_description1') }}</span>
      </div>
      <div class="how-we-work__step-description">
        <span>{{ $t('how_we_work.step_description2') }}</span>
      </div>
      <div class="how-we-work__step-description">
        <span>{{ $t('how_we_work.step_description3') }}</span>
      </div>
      <div class="how-we-work__step-description">
        <span>{{ $t('how_we_work.step_description4') }}</span>
      </div>
    </div>

    <div class="how-we-work__button-wrapper">
      <base-button>
        {{ $t('how_we_work.create_your_project') }}
      </base-button>
    </div></base-home-section
  >
</template>

<script>
export default {
  mounted() {
    const dividerDotWrapper = document.querySelector(
      '.how-we-work__divider-dot-wrapper'
    );

    function calculateDividerLineWidth() {
      document.querySelector(
        '.how-we-work__divider-line'
      ).style.width = `calc(100% - ${dividerDotWrapper.offsetWidth}px)`;
    }

    calculateDividerLineWidth();

    window.addEventListener('resize', calculateDividerLineWidth);
  },
};
</script>

<style lang="scss" scoped>
.how-we-work {
  position: relative;

  .mobile-only {
    display: none;

    @include mq {
      display: block;
      text-align: left;
      font-size: 1rem;
      margin-top: 1rem;
    }
  }

  &__step-dot {
    display: none;

    @include mq {
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      background-color: $primary;
    }
  }

  &__steps,
  &__divider,
  &__steps-descriptions {
    display: flex;
    gap: 4rem;

    @include mq {
      flex-direction: column;
    }
  }

  &__divider {
    position: relative;

    @include mq {
      display: none;
    }
  }

  &__step,
  &__divider-dot-wrapper,
  &__step-description {
    flex: 1;

    span,
    strong {
      font-size: 1.5rem;
      display: block;
      text-align: center;
      color: $text-dark;

      @include mq {
        text-align: left;
        display: inline-block;
      }
    }

    strong {
      @include mq {
        margin: 0.5rem 0;

        &::before {
          display: inline-block;
          content: ' - ';
          margin: 0 0.25rem;
        }
      }
    }
  }

  &__divider-dot-wrapper {
    display: flex;
    margin: 2rem 0 1rem 0;
    justify-content: center;
  }

  &__divider-dot {
    width: 1.5rem;
    height: 1.5rem;
    z-index: 2;
    border-radius: 0.75rem;
    background-color: $primary;
  }

  &__divider-line {
    height: 0.5rem;
    // width: calc(100% - 20rem);
    position: absolute;
    left: 50%;
    top: 2.5rem;
    transform: translateX(-50%);
    background-color: #f1dcc7;
  }

  &__steps-descriptions {
    @include mq {
      display: none;
    }
  }

  &__step-description span {
    font-size: 1rem;
    text-align: left;
  }

  &__button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 4rem;

    button {
      width: 20rem;
      max-width: 320px;

      @include mq {
        width: 85%;
        max-width: unset;
      }
    }
  }
}
</style>
