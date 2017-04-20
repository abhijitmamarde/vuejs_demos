Vue.component('vueTypeahead', MyTypeAheadComponent);

const app = new Vue({
    el: '#vue-instance',

    data: {
      label:'',
      value: '',
      value1: '',
      myTemplate: '<div><h3>{{team}}</h3><h4>Custom Template</h4></div>',
      localValues: ['Dhaka', 'Rangpur', 'Rajshahi', 'Sylhet', 'Khulna']
    },

    methods: {

      done: function(data) {
          console.log(data);
      },

    },
});