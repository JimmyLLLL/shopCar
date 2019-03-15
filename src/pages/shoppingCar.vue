<template>
  <div class="carWrappper">
  	<div class="goods" v-for="item in data" :key="item.id">
  		<span class="goodsDesc">{{item.good}}</span>
  		<div class="numWrapper">
  			<span class="price">${{item.price}}</span>
	  		<button class="btn" @click="handleReduce(item.id)">-</button>
	  		<span class="num">{{item.num}}</span>
	  		<button class="btn" @click="handleAdd(item.id)">+</button>  			
  		</div>
  	</div>
  	<router-link class="toCar" tag="div" to="/car">往购物车</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'shoppingCar',
  data () {
    return {
    	data:[]
    }
  },
  methods:{
   	...mapMutations(['setGoodsInfo','handleAddActions','handleReduceActions']),
  	getGoodsInfo(){
  		axios.get('/api/data.json').then((res)=>{
  			let data = res.data.data
  			this.data = data
  			this.setGoodsInfo(this.data)
  		})
  	},
  	handleReduce(id){
  		const judge = this.data[id].num > 0
  		if(judge){
  			this.handleReduceActions(id)
  		}
  	},
  	handleAdd(id){
  		this.handleAddActions(id)
  	}
  },
  mounted(){
  	this.getGoodsInfo()
  }

}
</script>

<style lang="stylus" scoped>
$fontNor = .4rem
	.carWrappper
		padding-bottom .9rem
		position relative
		.goods
			border-bottom 1px solid black
			display flex
			height .6rem
			line-height .6rem
			padding .2rem
			.goodsDesc
				font-size $fontNor
			.numWrapper
				position absolute
				right 0rem
				margin-right .2rem
				.btn
					width .5rem
					height .5rem
					margin-top -.1rem		
				.num
					font-size $fontNor
				.price
					margin-right .4rem
					font-size $fontNor
		.toCar
			bottom 0
			width 100%
			z-index 99
			position fixed
			height .9rem
			line-height .9rem
			text-align center
			color white
			font-size .4rem
			background-color blue
</style>
