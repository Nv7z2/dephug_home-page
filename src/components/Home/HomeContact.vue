<template>
  <base-home-section
    sectionClass="contact"
    sectionId="contact"
    headingString="contact.heading"
  >
    <div class="contact__content">
      <div class="contact__poster">
        <div class="contact__poster-content">
          <a href="mailto:contact@dephug.com">contact@dephug.com</a>
        </div>
      </div>

      <form ref="contactform" class="contact__form">
        <h3 class="contact__form-heading">
          {{ $t('contact.lets_make_a_deal') }}
        </h3>
        <h4 class="contact__form-small-heading">
          {{ $t('contact.or_collaborate') }}
        </h4>

        <transition name="fade">
          <p
            class="contact__send-result"
            :class="{
              'contact__send-result--success': isFormSentSuccessfully,
              'contact__send-result--fail': !isFormSentSuccessfully,
            }"
            v-if="isFormSendingDone"
          >
            {{ $t(send_res_text) }}
          </p>
        </transition>

        <label for="" class="contact__field">
          <span class="contact__field-label">
            {{ $t('contact.form.name') }}
          </span>
          <input
            type="text"
            name="name"
            class="contact__field-input"
            v-model="form.name"
            @keypress="validateInput"
            @change="validateInput"
            :disabled="isSending"
          />
        </label>
        <label for="" class="contact__field">
          <span class="contact__field-label">
            {{ $t('contact.form.email') }}
          </span>
          <input
            type="text"
            name="email"
            class="contact__field-input"
            v-model="form.email"
            @keypress="validateInput"
            @change="validateInput"
            :disabled="isSending"
          />
        </label>
        <label for="" class="contact__field">
          <span class="contact__field-label">
            {{ $t('contact.form.subject') }}
          </span>
          <input
            type="text"
            name="subject"
            class="contact__field-input"
            v-model="form.subject"
            @keypress="validateInput"
            @change="validateInput"
            :disabled="isSending"
          />
        </label>
        <label for="" class="contact__field">
          <span class="contact__field-label">
            {{ $t('contact.form.message') }}
          </span>
          <textarea
            class="contact__field-input"
            rows="6"
            name="message"
            v-model="form.message"
            :disabled="isSending"
            @keydown="validateInputMessage"
            @change="validateInputMessage"
            @keypress.enter="sendEmail"
          ></textarea>
        </label>

        <base-button
          class="contact__button"
          :disabled="!isFormValid || isSending"
          @click="sendEmail"
        >
          <transition name="fade" mode="out-in">
            <span v-if="!isSending">{{ $t('contact.form.button_label') }}</span>
            <span v-else>{{ $t('contact.form.button_label_sending') }}</span>
          </transition>
        </base-button>
      </form>
    </div>
  </base-home-section>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      isFormValid: false,
      isSending: false,
      send_res_text: '',
      isFormSendingDone: false,
      isFormSentSuccessfully: null,
    };
  },
  methods: {
    validateInput(e) {
      let fieldName = e.target.name;
      let isEntireFormOk = true;

      if (this.validators[fieldName].test(this.form[fieldName].toLowerCase())) {
        // Field is valid
        e.target
          .closest('.contact__field')
          .classList.remove('contact__field--invalid');
        e.target
          .closest('.contact__field')
          .classList.add('contact__field--valid');
      } else {
        e.target
          .closest('.contact__field')
          .classList.add('contact__field--invalid');
        e.target
          .closest('.contact__field')
          .classList.remove('contact__field--valid');
      }

      Object.entries(this.form).forEach((element) => {
        if (element[0] != 'message') {
          if (!this.validators[element[0]].test(element[1].toLowerCase())) {
            isEntireFormOk = false;
          }
        }
      });

      if (
        isEntireFormOk &&
        Object.values(this.form).every((value) => !!value)
      ) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },
    validateInputMessage(e) {
      if (
        e.target.value.length >= 10 &&
        this.form.name &&
        this.form.email &&
        this.form.subject
      )
        this.isFormValid = true;
      if (e.target.value.length < 10) this.isFormValid = false;
    },
    clearFormValuesWhenDone() {
      this.form.name = '';
      this.form.email = '';
      this.form.subject = '';
      this.form.message = '';

      document.querySelectorAll('.contact__field').forEach((formField) => {
        formField.classList.remove('contact__field--valid');
        formField.classList.remove('contact__field--invalid');
      });
    },
    clearFormDataWhenDone() {
      this.send_res_text = '';
      this.isFormSendingDone = false;
      this.isFormSentSuccessfully = null;
    },
    sendEmail() {
      this.isSending = true;
      if (this.isFormValid == false) return;

      emailjs
        .send('service_0pwjdfk', 'template_seomx6h', {
          name: this.form.name,
          email: this.form.email,
          subject: this.form.subject,
          message: this.form.message,
        })
        .then(() => {
          this.isSending = false;
          this.isFormSendingDone = true;
          this.isFormSentSuccessfully = true;
          this.send_res_text = 'contact.message_send';
          this.clearFormValuesWhenDone();

          setTimeout(() => {
            this.clearFormDataWhenDone();
          }, 5000);
        })
        .catch(() => {
          this.isSending = false;
          this.isFormSendingDone = true;
          this.isFormSentSuccessfully = false;
          this.send_res_text = 'contact.message_not_send';

          setTimeout(() => {
            this.clearFormDataWhenDone();
          }, 5000);
        });
    },
  },
  computed: {
    validators() {
      return {
        name: /\w{3,}/,
        email:
          /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/,
        subject: /\w{3,}/,
      };
    },
  },
  mounted() {
    const poster = document.querySelector('.contact__poster');

    window.addEventListener('scroll', () => {
      poster.style.backgroundPositionY =
        -poster.getBoundingClientRect().y / 3 + 'px';
    });
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.contact {
  &__content {
    display: flex;
    gap: 5rem;

    @include mq {
      flex-direction: column-reverse;
      gap: 2rem;
    }
  }

  &__poster,
  &__form {
    flex: 1;
  }

  &__poster {
    display: flex;
    border-radius: 0.5rem;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0 0.5rem 1rem -0.5rem rgba($primary, 0.3);
    background: url('~@/assets/contact_poster.webp') center / 125%;
  }

  &__poster-content {
    padding: 1.25rem;
    display: flex;
    align-items: center;
    background-color: #00000060;
    backdrop-filter: blur(6px);
    border-radius: 0.5rem;

    a {
      color: #fffbf7;
      font-weight: bold;
      text-decoration: none;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
  }

  &__form-heading {
    font-size: 2.25rem;
    margin: 0;
    color: $text-dark;
  }

  &__form-small-heading {
    font-size: 1.5rem;
    margin: 0 0 3.5rem 0;
    color: rgba($text-dark, 0.35);
  }

  &__field {
    display: flex;
    margin-bottom: 1.5rem;
    flex-direction: column;
  }

  &__field--invalid &__field-label {
    color: rgb(179, 62, 62);
  }

  &__field--invalid &__field-input {
    border-color: rgb(179, 62, 62);
    background-color: rgba(179, 62, 62, 0.3);
  }

  &__field--valid &__field-label {
    color: rgb(102, 187, 85);
  }

  &__field--valid &__field-input {
    border-color: rgb(102, 187, 85);
    background-color: rgba(102, 187, 85, 0.3);
  }

  &__field-label {
    font-size: 14px;
    transition: all 0.3s ease;
  }

  &__field-input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    resize: vertical;
    background-color: #f1e8dd;
    border: 2px solid #f1e8dd;
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0.5rem 1rem -0.5rem rgba($primary, 0.3);
  }

  &__button {
    display: inline-block;
    width: 50%;
    margin-left: auto;
    max-width: 320px;

    @include mq {
      width: 100%;
      margin: 0;
      max-width: unset;
    }
  }

  &__send-result {
    &--success {
      color: rgb(84, 177, 84);
    }
    &--fail {
      color: rgb(221, 72, 72);
    }
  }
}
</style>
