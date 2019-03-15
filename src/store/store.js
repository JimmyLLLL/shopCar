/*
* @Author: Venus-Lin
* @Date:   2018-11-28 20:39:19
* @Last Modified by:   Venus-Lin
* @Last Modified time: 2018-11-30 13:55:51
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import moduleA from './a'



const store = new Vuex.Store({
	modules:{
		a:moduleA
	}
})

export default store