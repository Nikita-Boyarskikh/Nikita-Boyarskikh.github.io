import Vue from 'vue';

import Index from 'components/Index';

new Vue({
  el: '#content',
  render(h) {
    return h(Index);
  }
});
