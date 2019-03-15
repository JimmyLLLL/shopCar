/*
* @Author: Venus-Lin
* @Date:   2018-11-29 13:34:13
* @Last Modified by:   Venus-Lin
* @Last Modified time: 2018-12-01 09:19:04
*/

const state = {
	Goods:[], //商品详细数据
	totalPrice:0,
	hasSth:[] //哪几个商品是真的有一件以上的
}

const mutations = {
	setGoodsInfo(state,Goods){
		state.Goods = Goods
	},
	handleAddActions(state,id){
		const thisGoods = state.Goods[id]
		thisGoods.num++
		if(state.hasSth.indexOf(id)==-1){
			state.hasSth.push(id)
		}
		state.totalPrice += thisGoods.price
	},
	handleReduceActions(state,id){
		const thisGoods = state.Goods[id]
		thisGoods.num--
		if(thisGoods.num==0){
			const index = state.hasSth.indexOf(id)
			state.hasSth.splice(index,1)
		}
		state.totalPrice -= thisGoods.price
	}

}

const actions = {
	/*handleAddActions({commit},id){


	},
	handleReduceActions({commit},id){

	}*/
}

const getters = {
	/*acount:function(state){
		console.log('你又改动了count，getter已经监听，现在的值是'+state.count)
		return state.count
	}*/
}

const moduleA = {
	state,mutations,actions,getters
}

export default moduleA