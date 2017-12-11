<template>
  <div class="mui-content">
    <!-- 轮播图 -->
	<wodeswipe :imgUrl="img_url"></wodeswipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li  v-for="item in menus" :key="item.url"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
						 <router-link :to="item.url">
		                    <span class="mui-icon" :class="item.className"></span>
		                    <div class="mui-media-body">{{item.title}}</div>
						</router-link>
					</li>
	</ul> 
  </div>
</template>

<script>

//导入轮播图的组件
import swipe from '../commons/swipe.vue';

    export default ( {
        data() {
            return {
				menus:[],
				img_url:'getlunbo'
			};
		},
		created(){
			this.getmenus();
		},
		methods:{
			//获取9宫格数据
			getmenus() {
				this.$http
				.get('getmenus')
				.then((response)=>{
					if(response.status ===200 && response.data.status ===0){
						// console.log(response.data)
						this.menus = response.data.message;
					}else{
						console.log('服务器内部错误');
					}
				})
				.catch((err) => {
					console.error(err);
				})
			}
		},
		components:{
			wodeswipe: swipe
		}
	});

</script>

<style scoped>
	.mint-swipe .page1 {
		background-color: red;
	}
	.mint-swipe .page2 {
		background-color: green;
	}
	.mint-swipe .page3 {
		background-color: blue;
	}
	.mint-swipe img {
		width: 100%;
		height: 100%;
	}
   .mui-icon {
    width: 50px;
    height: 50px;
    }

    .mui-table-view.mui-grid-view .mui-table-view-cell {
        background: #fff;
    }

    .mui-content>.mui-table-view:first-child {
        margin-top: 0;
    }

    .icon-news {
        background: url("../../../statics/images/menu1.png");
        background-repeat: round;
    }

    .icon-share {
        background: url("../../../statics/images/menu2.png");
        background-repeat: round;
    }

    .icon-buy {
        background: url("../../../statics/images/menu3.png");
        background-repeat: round;
    }

    .icon-feedback {
        background: url("../../../statics/images/menu4.png");
        background-repeat: round;
    }

    .icon-video {
        background: url("../../../statics/images/menu5.png");
        background-repeat: round;
    }

    .icon-contact {
        background: url("../../../statics/images/menu6.png");
        background-repeat: round;
    }

    
</style>
