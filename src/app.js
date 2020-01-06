import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';
import Input from './input';

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);

new Vue({
    el: '#app',
    data: {
        loading1: false,
    },
    methods: {
        handleChange: function(e){
            console.log('handleChange', e.target.value)
        }
    }
});

import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

//测试icon的属性值是不是和传入的值相等
{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    vm.$mount(div);
    let el = vm.$el.querySelector('use');
    expect(el.getAttribute('xlink:href')).to.eq('#i-settings');

    vm.$el.remove();
    vm.$destroy();
}
//测试有loading不能有icon
{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
        }
    });
    vm.$mount(div);
    let el = vm.$el.querySelector('use');
    expect(el.getAttribute('xlink:href')).to.eq('#i-loading');

    vm.$el.remove();
    vm.$destroy();
}

//测试 order和iconPosition是否对应
{
    const div = document.createElement('div');
    document.body.appendChild(div);

    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true,
            iconPosition: 'right',
        }
    });
    vm.$mount(div);
    let el = vm.$el.querySelector('svg');
    let { order } = window.getComputedStyle(el);
    expect(order).to.eq('2');

    vm.$el.remove();
    vm.$destroy();
}

//测试函数是否被执行
{
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    vm.$mount();
    let spy = chai.spy(function(){});
    vm.$on('click', spy);

    let button = vm.$el;
    button.click();
    expect(spy).to.have.been.called();
}