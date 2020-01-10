<template>
	<div class="naver">
		<div class="nav">
			<ul>
				<li><img src="@/img/图标304.png" alt=""><span>发动态</span></li>
				<li><img src="@/img/图标305.png" alt=""><span>发短视频</span></li>
			</ul>
		</div>
		<div class="dong">
			<div class="box"></div>
			<p>你要不要吃芒果<span>发布短视频：</span></p>
			<h6>13.23</h6>
			<span class="guanzhu">关注+</span>
			<h5>一个关于垃圾和资源回收的小动画，你有没有装在包包里忘记扔掉的垃圾？</h5>
			<div class="box1"></div>
			<h5>爱电影的你不容错过</h5>
			<ul>
				<li><img src="@/img/图标306.png" alt="">26</li>
				<li><img src="@/img/图标307.png" alt="">26</li>
				<li><img src="@/img/图标308.png" alt="">转发</li>
			</ul>
		</div>
		<div class="bofang">
			<div class="datu">
				
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.nav {
		border-bottom: #eeeff0 0.25rem solid;
	}

	.nav>ul {
		display: flex;
		justify-content: space-around;
	}

	.nav>ul>li>img {
		width: 24px;
		height: 24px;
		display: inline;

	}

	.dong {
		float: left;
		background: white;
		width: 100%;
		min-height: 20rem;
		position: relative;
	}

	.dong .box {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: pink;
		margin: 0.625rem 0 0 0.625rem;
	}

	.dong p {
		font-size: 0.875rem;
		margin: -2.25rem 0 0 3.75rem;
	}

	.dong p>span {
		margin-left: 1.25rem;
	}

	.dong h6 {
		margin-left: 3.75rem;
		margin-top: 0.125rem;
	}

	.dong .guanzhu {
		background: #666666;
		margin-left: 18.875rem;
		padding: 0.3125rem;
		color: white;
		position: absolute;
		top: 0.875rem;
	}

	.dong h5 {
		margin-left: 3.75rem;
	}

	.dong .box1 {
		width: 15.625rem;
		height: 9.375rem;
		background: #63A35C;
		margin-left: 3.75rem;
	}

	.dong ul>li>img {
		width: 0.875rem;
		height: 0.875rem;
		display: inline;
	}

	.dong ul {
		/* margin-top: 0.625rem; */
		padding: 1.25rem;
		display: flex;
		justify-content: space-around;
	}
	.bofang {
		width: 100%;height: 11.25rem;background:  #eeeff0;
	}
</style>
