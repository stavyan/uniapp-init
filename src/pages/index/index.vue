<template>
	<view class="content">
    <u-field
        v-model="mobile"
        label="手机号"
        placeholder="请填写手机号"
    >
    </u-field>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        mobile: 'Hello'
			};
		},
		onLoad() {
      // let a = 1;
		},
		methods: {

		}
	};
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
