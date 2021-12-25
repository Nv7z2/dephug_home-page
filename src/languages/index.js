import Vue from 'vue';
import VueI18n from 'vue-i18n';
import pl from './pl.lang';
import en from './en.lang';

Vue.use(VueI18n);

const userLanguage = window.navigator.language.split('-').pop().toLowerCase();

const i18n = new VueI18n({
  locale: userLanguage || 'en',
  messages: {
    en,
    pl,
  },
});

export default i18n;
