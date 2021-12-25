import Vue from 'vue';

const requireComponent = require.context(
  './components',
  true,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentName = fileName.split('/').pop().split('.').shift();
  const componentConfig = requireComponent(fileName);

  Vue.component(componentName, componentConfig.default || componentConfig);
});
