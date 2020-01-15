<template>
	<div class="box">
		<div class="header">
			<ul>
				<li>
					<router-link to='dynamic'><img src="@/img/图标317.png"></router-link>
				</li>
				<li><span>发动态</span></li>
				<li>发表</li>
			</ul>
		</div>
		<van-cell-group>
			<van-field v-model="message" rows="1" autosize type="textarea" placeholder="一起聊聊吧~" maxlength="140" show-word-limit />
		</van-cell-group>
		<van-uploader :after-read="afterRead" />
		<div class="fenx">
			<ul>
				<li><img src="../../img/图标318.png"></li>
				<li>给动态配音乐~</li>
				<li>&gt;</li>
			</ul>
		</div>
		<div class="fenx2">
			<p>同时分享到：</p>
			<p><img src="../../img/图标319.png"></p>
		</div>
		<div class="tail">
			<ul>
				<li><img src="../../img/图标321.png"></li>
				<li><img src="../../img/图标322.png"></li>
				<li><img src="../../img/图标323.png"></li>
				<li><img src="../../img/图标324.png"></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Field
	} from 'vant';
	import {
		Uploader
	} from 'vant';
	Vue.use(Field);
	Vue.use(Uploader);
	export default {
		data() {
			return {
				message: ''
			};
		},
		methods: {
			afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log(file);
			}
		}
	}
</script>

<style>
	.header {
		width: 100%;
		height: 2.5rem;
		border-bottom: 0.03125rem solid navajowhite;
	}

	.header ul li>a>img {
		display: inline;
		width: 1.5rem;
		height: 1.5rem;
		margin-left: -2rem;
		margin-top: 0.5rem;
	}

	.header ul {
		display: flex;
		justify-content: space-around;
		line-height: 2.5rem;
	}

	.header li span {
		font-size: 1.125rem;
		margin-left: -8rem;
	}

	.fenx {
		width: 100%;
		height: 3.375rem;
		border-bottom: #F7F7F7 solid 0.0625rem;
	}

	.fenx ul {
		display: flex;
		justify-content: space-around;
		padding-top: 1rem;
	}

	.fenx ul li:nth-child(3) {
		margin-left: 10.5rem;
	}

	.fenx ul li:nth-child(2) {
		margin-left: -1.5rem;
	}

	.fenx2 {
		width: 100%;
		height: 6.25rem;
		border-bottom: #F7F7F7 solid 0.0625rem;
	}

	.fenx2 p>img {
		display: inline;
		margin-top: 2rem;
	}

	.fenx2 {
		display: flex;
		justify-content: flex-start;
		margin-left: 1.5rem;
		line-height: 6.25rem;
	}

	.tail {
		width: 100%;
		min-height: 6rem;
	}

	.tail ul {
		margin-top: 1rem;
	}

	.tail ul li {
		float: left;
		margin-left: 1.5rem;
	}
</style>
