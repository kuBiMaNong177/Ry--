<template>
	<div class="naver">
		<div class="banner">
			<div class="banner_1">
				<img src="http://img61.ddimg.cn/upload_img/00791/xmj/zhong-1575253807.jpg">
				<p>主播翻唱大赛投票进行中！人气主播翻唱实力大揭秘</p>
			</div>
			<div class="banner_1">
				<img src="http://img61.ddimg.cn/upload_img/00791/xmj/240X120-1577794283.jpg">
				<p>主播翻唱大赛投票进行中！人气主播翻唱实力大揭秘</p>
			</div>
		</div>
		<div class="nav">
			<div class="nav_1">
				<div class="box"><img src="../../img/图片312.png"></div>
				<p>路人甲<span>0.01km</span></p>
				<h5>最近听：【Something I Need】-Ben Haenow</h5>
			</div>
			<div class="nav_1">
				<div class="box"><img src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1912113785,1587702892&fm=26&gp=0.jpg"></div>
				<p>路人乙<span>0.21km</span></p>
				<h5>最近听：【Something I Need】-Ben Haenow</h5>
			</div>
			<div class="nav_1">
				<div class="box"><img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3637123525,1197717325&fm=26&gp=0.jpg"></div>
				<p>路人丙<span>0.16km</span></p>
				<h5>最近听：【Something I Need】-Ben Haenow</h5>
			</div>
			<div class="nav_1 nav_3">
				<div class="box"><img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2034740944,4251903193&fm=26&gp=0.jpg"></div>
				<p>路人丁<span>0.61km</span></p>
				<h5>最近听：【Something I Need】-Ben Haenow</h5>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.naver {
		background: #eeeff0;
	}

	.banner_1 {
		width: 100%;
		height: 140px;
		background-color: rgba(238, 238, 238, 1);
		position: relative;
	}

	.banner_1>img {
		width: 100%;
		height: 100%;
	}

	.banner_1>p {
		position: absolute;
		top: 7.4rem;
		color: rgba(255, 255, 255, 1);
		background-color: rgba(0, 0, 0, 0.3);
		text-align: center;
		width: 100%;
		font-size: 0.875rem;
	}

	.banner>div:nth-child(2) {
		top: 0.625rem;
	}

	.nav {
		margin-top: 0.625rem;
	}

	.nav .nav_1 {
		width: 100%;
		height: 5rem;
		background: floralwhite;
		float: left;
	}

	.nav .nav_1 .box img{
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: rgba(181, 181, 181, 1);
		margin-top:10px ;margin-left: 10px;
	}
	.nav .nav_1 p{margin-left: 3.75rem;margin-top: -1.875rem;}
	.nav .nav_1 p>span{margin-left: 11.875rem;font-size: 0.75rem;}
	.nav .nav_1 h5{font-size: 0.75rem;margin-left: 0.625rem;margin-top: 1rem;}
	.nav:nth-child(n+2) div{margin-top: 0.625rem;}
	.nav_3{border-bottom: white solid 3.125rem;}
</style>
