import Vue from 'vue';
import VueI18n from 'vue-i18n';
import pl from './pl.lang';
import en from './en.lang';

Vue.use(VueI18n);

const userLanguage = window.navigator.language.split('-').pop().toLowerCase();
const languageListFiles = require.context('@/languages', true, /\w+.js/);

const languageList = [];
languageListFiles
  .keys()
  .filter((file) => !file.includes('index'))
  .forEach((languageFile) =>
    languageList.push(languageFile.split('/')[1].split('.').shift())
  );

const i18n = new VueI18n({
  locale: languageList.includes(userLanguage) ? userLanguage : 'en',
  messages: {
    en,
    pl,
  },
});

export default i18n;
