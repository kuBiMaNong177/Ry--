<template>
	<div class="main">
		<header class="top">
			<ul>
				<li><img src="../../img/图标301.png" alt=""></li>
				<li><span>
						<router-link to='dynamic'>动态</router-link>
					</span>
					<span>
						<router-link to='near'>附近</router-link>
					</span></li>
				<li><img src="../../img/图标302.png" alt=""></li>
			</ul>
		</header>
		<div class="router-view">
			<router-view></router-view>
		</div>
		<Footer></Footer>
	</div>
</template>

<script>
import Footer from "@/components/footer/index.vue";
import Header from "@/components/header/index.vue";
export default {
  name: "Three",

  components: {
    Footer,
    Header
  }
};
</script>

<style scoped>
	.router-view {
		flex: 1;
		overflow-y: auto;
	}

	.main .top {
		height: 2.75rem;
		width: 100%;
		border-bottom: 1px solid #ccc;
	}

	.main .top>ul>li:nth-child(1)>img {
		width: 31px;
		height: 31px;
		color: rgba(153, 153, 153, 1);
	}

	.main .top>ul>li:nth-child(3)>img {
		width: 31px;
		height: 31px;
		color: rgba(153, 153, 153, 1);
	}

	.main .top>ul {
		display: flex;
		Justify-content: space-between;
		padding-top: 7px;
		align-items: center
	}

	.main .top>ul>li>span {
		border: #666666 solid 1px;
		padding: 2px 10px;
	}
</style>
