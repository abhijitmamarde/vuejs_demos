Vue.component('dropdown-sep', {

  template: `<li role="separator" class="divider"></li>`,

});

Vue.component('dropdown-item', {

  props: ['name'],

  template: `<li><a @click="clicked">{{ name }}</a></li>`,

  methods: {
    clicked() {
      this.$emit('clicked')
    }
  }

});

Vue.component('dropdown', {

  props: ['name'],

  mixins: [VueClickaway.mixin],

  template: `
  <li class="dropdown" :class="{open: showDropDown}">
    <a class="dropdown-toggle" v-on-clickaway="clicked_away_Dropdown" @click="toggleDropdown">{{ name }}<span class="caret"></span></a>
    <ul class="dropdown-menu">
      <slot></slot>
    </ul>
  </li>
  `,
  
  data: function () {
      return {
        
        showDropDown: false,

      }
  },
  
  methods: {

    clicked_away_Dropdown() {
      this.showDropDown = false;
    },

    toggleDropdown() {
      this.showDropDown = !this.showDropDown;
    },

  },

});
