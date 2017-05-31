import Vue from 'vue';
import Hello from '@/components/Hello';

describe('Hello.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Hello);
        const vm = new Constructor().$mount();
        expect(vm.$el.querySelector('.hello h1').textContent)
            .to.equal('Welcome to Your Vue.js App');
    });
    it('now should pass', () => {
        expect([1, 2, 3].indexOf(5)).to.equal(-1);
    });
});
