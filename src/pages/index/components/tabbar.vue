<template>
	<cl-footer :flex="false" border :z-index="399" :padding="0">
		<view class="tabbar">
			<view
				class="item"
				v-for="(item, index) in list"
				:key="index"
				:class="{
					'is-active': item.active,
				}"
				@tap="toLink(item.pagePath)"
			>
				<template v-if="item.pagePath == 'custom'">
					<view class="icon">
						<image src="https://cool-js.com/logo.png" mode="aspectFit" />
					</view>
				</template>

				<template v-else>
					<view class="icon">
						<image :src="item.icon" mode="aspectFit" />
					</view>
					<text class="label">{{ item.text }}</text>
					<view class="badge" v-if="item.number > 0">{{ item.number || 0 }}</view>
				</template>
			</view>
		</view>
	</cl-footer>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useCool } from "/@/cool";

const { router } = useCool();

// 当前页面路径
const pagePath = router.path;

const list = computed(() => {
	const arr = [...router.tabs];

	// 添加自定义
	arr.splice(1, 0, { pagePath: "custom" });

	return arr.map((e) => {
		const active = pagePath?.includes(e.pagePath);

		return {
			icon: "/" + (active ? e.selectedIconPath : e.iconPath),
			active,
			number: 0,
			...e,
		};
	});
});

function toLink(pagePath: string) {
	if (pagePath == "custom") {
		// #ifdef H5
		location.href = "https://cool-js.com/";
		// #endif
	} else {
		router.push("/" + pagePath);
	}
}

uni.hideTabBar();
</script>

<style lang="scss" scoped>
$icon-size: 56rpx;

.tabbar {
	display: flex;
	height: 120rpx;
	width: 100%;

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		position: relative;

		.icon {
			height: $icon-size;
			width: $icon-size;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.label {
			font-size: 22rpx;
			color: #bfbfbf;
		}

		.badge {
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			top: 20rpx;
			transform: translateX(20rpx);
			font-size: 20rpx;
			height: 36rpx;
			min-width: 36rpx;
			padding: 0 6rpx;
			background-color: #f56c6c;
			border: 4rpx solid #fff;
			color: #fff;
			border-radius: 18rpx;
			font-weight: bold;
			box-sizing: border-box;
		}

		&.is-active {
			.label {
				color: $cl-color-primary;
			}
		}

		.custom {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			position: relative;

			.icon {
				background: linear-gradient(
					to bottom right,
					#408fff,
					#6b69f8,
					#a35df2,
					#d14bd8,
					#e9388a
				);
				border-radius: 18rpx;
			}
		}
	}
}
</style>
