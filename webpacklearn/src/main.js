const {add, mul} = require('./js/mathUtils.js')

console.log(add(10, 10))
console.log(mul(10, 10))

import * as info from './js/info.js'

console.log(info)

require('./css/normal.css')

require('./css/special.less')

document.writeln('<h1>菠萝</h1>')

import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
	el: '#app',
	template: '<App></App>',
	components: {
		App
	}
})
