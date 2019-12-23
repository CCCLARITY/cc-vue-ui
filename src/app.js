import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);

new Vue({
    el: '#app',
    data: {
        loading1: false,
    }
});

import chai from 'chai';
const expect = chai.expect;

{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);         //TODO
    const vm = new Constructor({
        propsData: {                                //TODO
            icon: 'settings',
        }
    });
    vm.$mount(div);
    let el = vm.$el.querySelector('use');       //TODO
    expect(el.getAttribute('xlink:href')).to.eq('#i-settings');

    vm.$el.remove();            //TODO
    vm.$destroy();
}