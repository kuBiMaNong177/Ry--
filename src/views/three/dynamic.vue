<template>
	<div class="naver">
		<div class="nav">
			<ul>
				<li><img src="@/img/图标304.png"><span>发动态</span></li>
				<li><img src="@/img/图标305.png"><span>发短视频</span></li>
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
				<li><img src="@/img/图标306.png">26</li>
				<li><img src="@/img/图标307.png">26</li>
				<li><img src="@/img/图标308.png">转发</li>
			</ul>
		</div>
		<div class="bofang">
			<div class="datu">
				<p>#为喜欢的人做过的那些改变<br><span>xxx人参与</span></p>
			</div>
		</div>
		<div class="dong1">
			<div class="box"></div>
			<p>网易云音乐<span>转发：</span></p>
			<h6>13.23</h6>
			<span class="guanzhu">关注+</span>
			<h5>#歌单推荐#仿佛看完了好几场演唱会</h5>
			<div class="box1">
				<h4>@云音乐歌单之友 分享歌单：您的假期余额仅剩半天，想嗨请从速！</h4>
				<img src="../../img/图片303.png">
				<div class="box2">
					<img src="../../img/图片303.png">
					<h3>那些惊艳嗨翻天的华语现场...<br><span>by 雾与晨</span></h3>
				</div>
			</div>
			<ul>
				<li><img src="@/img/图标306.png">26</li>
				<li><img src="@/img/图标307.png">26</li>
				<li><img src="@/img/图标308.png">转发</li>
			</ul>
		</div>
		<div class="hots">
			<h2>热门话题&nbsp;&gt;</h2>
			<ul>
				<li><img src="@/img/图片309.png"></li>
				<li><img src="@/img/图片310.png"></li>
				<li><img src="@/img/图片311.png"></li>
			</ul>
		</div>
		<div class="dong2">
			<div class="box"></div>
			<p>网易云音乐<span>转发：</span></p>
			<h6>13.23</h6>
			<span class="guanzhu">关注+</span>
			<h5>自然界中一些“隐形”的生物，这种有点透明的样子很神奇也很萌呀，可能这也是一种透明的保护色吧。</h5>
			<div class="box1">
				<ul>
					<li><img src="@/img/图片312.png"></li>
					<li><img src="@/img/图片312.png"></li>
					<li><img src="@/img/图片312.png"></li>
					<li><img src="@/img/图片312.png"></li>
				</ul>
				<div class="box2">
					<img src="../../img/图片303.png">
					<h3>那些惊艳嗨翻天的华语现场...<br><span>by 雾与晨</span></h3>
				</div>
			</div>
			<ul>
				<li><img src="@/img/图标306.png">26</li>
				<li><img src="@/img/图标307.png">26</li>
				<li><img src="@/img/图标308.png">转发</li>
			</ul>
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
		background: red;
		border-radius: 0.875rem;
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
		background: rgba(217, 217, 217, 1);
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
		width: 100%;
		height: 11.25rem;
		margin-top: 20rem;
		background: #eeeff0;
		position: relative;
	}

	.bofang .datu {
		width: 18.75rem;
		height: 10.3125rem;
		background: rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0.5rem;
		left: 2.5rem;
	}

	.bofang .datu p {
		text-align: center;
		margin-top: 3.75rem;
	}

	.dong1 {
		float: left;
		background: white;
		width: 100%;
		min-height: 20rem;
		position: relative;
		border-bottom: 0.3125rem rgba(217, 217, 217, 1) solid;
	}

	.dong1 .box {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: pink;
		margin: 0.625rem 0 0 0.625rem;
	}

	.dong1 p {
		font-size: 0.875rem;
		margin: -2.25rem 0 0 3.75rem;
	}

	.dong1 p>span {
		margin-left: 1.25rem;
	}

	.dong1 h6 {
		margin-left: 3.75rem;
		margin-top: 0.125rem;
	}

	.dong1 .guanzhu {
		background: red;
		border-radius: 0.875rem;
		margin-left: 18.875rem;
		padding: 0.3125rem;
		color: white;
		position: absolute;
		top: 0.875rem;
	}

	.dong1 h5 {
		margin-left: 3.75rem;
	}

	.dong1 .box1 {
		width: 16.25rem;
		height: 15rem;
		background: rgba(217, 217, 217, 1);
		margin-left: 3.75rem;
	}

	.dong1 ul>li>img {
		width: 0.875rem;
		height: 0.875rem;
		display: inline;
	}

	.dong1 .box1 h4 {
		font-size: 0.75rem;
	}

	.dong1 .box1 img {
		height: 8.75rem;
		width: 8.75rem;
	}

	.dong1 .box1 .box2 {
		width: 15rem;
		height: 3.75rem;
		background-color: white;
		margin-left: 0.625rem;
	}

	.dong1 .box1 .box2 img {
		width: 2.75rem;
		height: 2.75rem;
		/* margin-top: 0.375rem; */
		padding-top: 0.5rem;
		margin-left: 0.25rem;
	}

	.dong1 .box1 .box2 h3 {
		font-size: 0.75rem;
		margin-left: 3.375rem;
		margin-top: -2.5rem;
	}

	.dong1 .box1 .box2 span {
		font-size: 0.625rem;
	}

	.dong1 ul {
		/* margin-top: 0.625rem; */
		padding: 1.25rem;
		display: flex;
		justify-content: space-around;
	}

	.hots {
		border-bottom: 0.3125rem rgba(217, 217, 217, 1) solid;
		width: 100%;
		height: 6.875rem;
		background-color: white;
		margin-top: 23.5rem;
	}

	.hots h2 {
		font-size: 0.875rem;
		padding: 0.625rem 0 0 0.625rem;
	}

	.hots ul {
		display: flex;
		justify-content: space-between;
		padding: 0.625rem;
	}
	.dong2 {
		float: left;
		background: white;
		width: 100%;
		min-height: 20rem;
		position: relative;
		border-bottom: white solid 3.125rem;
	}
	
	.dong2 .box {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		background: pink;
		margin: 0.625rem 0 0 0.625rem;
	}
	
	.dong2 p {
		font-size: 0.875rem;
		margin: -2.25rem 0 0 3.75rem;
	}
	
	.dong2 p>span {
		margin-left: 1.25rem;
	}
	
	.dong2 h6 {
		margin-left: 3.75rem;
		margin-top: 0.125rem;
	}
	
	.dong2 .guanzhu {
		background: red;
		border-radius: 0.875rem;
		margin-left: 18.875rem;
		padding: 0.3125rem;
		color: white;
		position: absolute;
		top: 0.875rem;
	}
	
	.dong2 h5 {
		margin-left: 3.75rem;
	}
	
	.dong2 .box1 {
		width: 16.25rem;
		min-height: 15rem;
		/* background: rgba(217, 217, 217, 1); */
		margin-left: 3.75rem;
	}
	
	.dong2 .box1 ul{display: flex;flex-wrap: wrap;}
	.dong2 .box1 ul>li>img{width: 5rem;height: 5rem;}
	.dong2 ul>li>img {
		width: 0.875rem;
		height: 0.875rem;
		display: inline;
	}
		
	.dong2 .box1 .box2 {
		width: 15rem;
		height: 3.75rem;
		background-color: white;
		margin-left: 0.625rem;
	}
	
	.dong2 .box1 .box2 img {
		width: 2.75rem;
		height: 2.75rem;
		/* margin-top: 0.375rem; */
		padding-top: 0.5rem;
		margin-left: 0.25rem;
	}
	
	.dong2 .box1 .box2 h3 {
		font-size: 0.75rem;
		margin-left: 3.375rem;
		margin-top: -2.5rem;
	}
	
	.dong2 .box1 .box2 span {
		font-size: 0.625rem;
	}
	
	.dong2 ul {
		/* margin-top: 0.625rem; */
		padding: 1.25rem;
		display: flex;
		justify-content: space-around;
	}
</style>
