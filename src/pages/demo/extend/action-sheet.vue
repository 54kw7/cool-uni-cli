<template>
	<cl-page :padding="20">
		<cl-action-sheet ref="ActionSheet" />

		<cl-card label="基础用法">
			<cl-button @tap="open">打开</cl-button>
		</cl-card>

		<cl-card label="添加图标">
			<cl-button @tap="open2">打开</cl-button>
		</cl-card>

		<cl-card label="禁用">
			<cl-button @tap="open3">打开</cl-button>
		</cl-card>

		<cl-card label="关闭回调">
			<cl-button @tap="open4">打开</cl-button>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUi } from "/$/cool-ui";

const ui = useUi();

const ActionSheet = ref<ClActionSheet.Ref>();

function open() {
	ActionSheet.value?.open({
		list: [
			{
				label: "删除好友",
			},
		],
	});
}

function open2() {
	ActionSheet.value?.open({
		list: [
			{
				label: "微信支付",
				icon: "cl-icon-payment",
			},
		],
	});
}

function open3() {
	ActionSheet.value?.open({
		title: "删除好友会同时删除所有聊天记录",
		list: [
			{
				label: "删除好友",
				color: "red",
			},
		],
	});
}

function open4() {
	ActionSheet.value?.open({
		closeOnClickModal: false,
		list: [
			{
				label: "删除好友",
				color: "red",
			},
		],
		beforeClose(index, done) {
			if (index == 0) {
				ui.showConfirm({
					title: "提示",
					message: "是否删除该联系人",
					callback(action) {
						if (action == "confirm") {
							ui.showToast("删除成功");
						}

						done();
					},
				});
			} else {
				done();
			}
		},
	});
}
</script>
