<template>
  <div class="carWrappper">
  	<div class="goods" v-for="item in needShowGoods" :key="item.id">
  		<span class="goodsDesc">{{item.good}}</span>
  		<div class="numWrapper">
  			<span class="price">${{item.price}}</span>
	  		<span class="num">{{item.num}}件</span>		
  		</div>
  	</div>
  	<div class="totalPrice">
  		合计: ${{totalPrice}}
  	</div>
  	<div class="toCar">
  		 <router-link tag="div" class="backBtn" to="/">返回</router-link>
  		<div class="payBtn">付款</div>
  	</div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default{
	name:'car',
	data(){
		return{
			Goods:[],
			hasSth:[],
			needShowGoods:[],
			totalPrice:0
		}
	},
	methods:{
		getHasSthAndGoods(){
			const storeData = this.$store.state.a
			this.hasSth = storeData.hasSth
			this.Goods = storeData.Goods
			this.totalPrice = storeData.totalPrice
		},
		getShowGoods(){
			this.hasSth.forEach((id)=>{
				this.needShowGoods.push(this.Goods[id])
			})
		},
		initBlank(){
			this.needShowGoods = []
		}

	},
	activated(){
		this.initBlank()
		this.getHasSthAndGoods()
		this.getShowGoods()
	}
}
</script>

<style lang="stylus" scoped>
$fontNor = .4rem
	.carWrappper
		padding-bottom 1.5rem
		position relative
		.totalPrice
			height .6rem
			line-height .6rem
			font-size .4rem
			right .1rem
			position absolute
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
				.num
					font-size $fontNor
				.price
					margin-right .4rem
					font-size $fontNor
		.toCar
			display flex
			text-align center
			bottom 0
			width 100%
			z-index 99
			position fixed
			height .9rem
			line-height .9rem
			color white
			font-size .4rem
			background-color green
			.backBtn
				width 50%
			.payBtn
				width 50%
				background-color red
	
</style>