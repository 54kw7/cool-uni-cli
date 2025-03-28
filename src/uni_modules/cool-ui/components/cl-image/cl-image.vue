<template>
	<view
		class="cl-image"
		:style="[imgStyle, baseStyle]"
		:class="[
			{
				'is-round': round,
				'is-error': !src || isError,
			},
		]"
		@tap="onPreview"
	>
		<view class="cl-image__placeholder" v-if="!src">
			<slot name="placeholder">
				<text class="icon cl-icon-image"></text>
			</slot>
		</view>

		<view class="cl-image__error" v-else-if="isError">
			<slot name="error">
				<text class="icon cl-icon-toast-warning"></text>
			</slot>
		</view>

		<template v-else>
			<view class="cl-image__loading" v-if="isLoading && showLoading">
				<cl-loading />
			</view>

			<image
				class="cl-image__target"
				:src="src"
				:mode="mode"
				:lazy-load="lazyLoad"
				:webp="webp"
				:show-menu-by-longpress="showMenuByLongpress"
				@error="handleError"
				@load="handleLoad"
			/>

			<slot></slot>
		</template>
	</view>
</template>

<script lang="ts">
import { type PropType, computed, defineComponent, ref, watch } from "vue";
import { isNumber, isArray, isString, isNaN } from "lodash-es";
import { parseRpx } from "/@/cool/utils";
import { useStyle } from "../../hooks";

export default defineComponent({
	name: "cl-image",

	props: {
		// 图片地址
		src: String,
		// 图片裁剪、缩放的模式
		mode: {
			type: String,
			default: "aspectFill",
		},
		// 图片大小
		size: {
			type: [String, Number, Array],
			default: "100%",
		},
		// 是否圆角
		round: Boolean,
		// 当前预览值
		previewCurrent: String,
		// 预览列表
		previewList: Array as PropType<string[]>,
		// 懒加载
		lazyLoad: Boolean,
		fadeShow: {
			type: Boolean,
			default: true,
		},
		webp: Boolean,
		showMenuByLongpress: Boolean,
		showLoading: {
			type: Boolean,
			default: true,
		},
	},

	setup(props, { emit }) {
		// 是否加载失败
		const isError = ref(false);

		// 是否加载中
		const isLoading = ref(false);

		// 样式
		const imgStyle = computed(() => {
			const [height, width] = size.value;

			let minWidth = "0";
			let minHeight = "0";

			// 不是有效高
			if (isNaN(parseInt(height))) {
				minHeight = width;
			}

			// 不是有效宽
			if (isNaN(parseInt(width))) {
				minWidth = height;
			}

			return {
				height,
				width,
				minWidth,
				minHeight,
			};
		});

		// 尺寸
		const size = computed(() => {
			let size: any = ["100%", "100%"];

			if (isString(props.size) || isNumber(props.size)) {
				size = [props.size, props.size];
			} else if (isArray(props.size)) {
				size = props.size;
			}

			return size.map(parseRpx);
		});

		// 加载失败
		function handleError(e: Event) {
			isError.value = true;
			isLoading.value = false;
			emit("error", e);
		}

		// 加载成功
		function handleLoad(e: Event) {
			isError.value = false;
			isLoading.value = false;
			emit("load", e);
		}

		// 点击是否预览图片
		function onPreview(e: Event) {
			if (props.previewList) {
				uni.previewImage({
					urls: props.previewList || [],
					current: props.previewCurrent || props.src,
				});

				e.stopPropagation();
			}
		}

		watch(
			() => props.src,
			(val) => {
				isLoading.value = !!val;
				isError.value = false;
			},
			{
				immediate: true,
			},
		);

		return {
			isError,
			isLoading,
			size,
			imgStyle,
			handleError,
			handleLoad,
			onPreview,
			...useStyle(),
		};
	},
});
</script>
