<template>
	<cl-page :padding="20">
		<cl-card label="基础用法">
			<cl-radio v-model="v1" label="1">炸鸡</cl-radio>
			<cl-radio v-model="v1" label="2">汉堡</cl-radio>
			<cl-radio v-model="v1" label="3">薯条</cl-radio>
			<cl-radio v-model="v1" label="4">可乐</cl-radio>
			<cl-radio v-model="v1" label="5">冰淇淋</cl-radio>
		</cl-card>

		<cl-card label="禁用">
			<cl-radio v-model="v3" disabled label="1">炸鸡</cl-radio>
			<cl-radio v-model="v3" disabled label="2">汉堡</cl-radio>
		</cl-card>

		<cl-card label="边框">
			<cl-radio v-model="v4" border label="1">炸鸡</cl-radio>
			<cl-radio v-model="v4" border label="2">汉堡</cl-radio>
		</cl-card>

		<cl-card label="边框填充">
			<cl-radio-group v-model="v5" fill border>
				<cl-radio label="1">
					<cl-text align="right" block>鸡米花（靠右）</cl-text>
				</cl-radio>
				<cl-radio label="2">可乐</cl-radio>
				<cl-radio label="3">蛋挞</cl-radio>
			</cl-radio-group>
		</cl-card>

		<cl-card label="只显示文字">
			<cl-radio-group v-model="v6" text border>
				<cl-radio label="1">炸鸡</cl-radio>
				<cl-radio label="2">汉堡</cl-radio>
			</cl-radio-group>
		</cl-card>

		<cl-card label="带背景">
			<cl-radio-group v-model="v6" text border bg>
				<cl-radio label="1">炸鸡</cl-radio>
				<cl-radio label="2">汉堡</cl-radio>
			</cl-radio-group>
		</cl-card>

		<cl-card label="圆角">
			<cl-radio-group v-model="v7" round border>
				<cl-radio label="1">炸鸡</cl-radio>
				<cl-radio label="2">汉堡</cl-radio>
			</cl-radio-group>
		</cl-card>

		<cl-card label="文字贼多">
			<cl-radio-group v-model="v8">
				<cl-radio label="1">
					汉堡、可乐、鸡肉卷、鸡排、鸡腿、蛋挞、薯条、鸡翅、原味鸡
				</cl-radio>

				<cl-radio label="2"> 鸡块、鸡米发、鸡腿堡 </cl-radio>
			</cl-radio-group>
		</cl-card>

		<cl-card label="自定义图标">
			<cl-radio-group v-model="v9">
				<cl-radio
					v-for="(item, index) in ['汉堡', '可乐', '薯条']"
					:key="index"
					:label="index"
				>
					<template #icon="{ checked }">
						<cl-icon
							name="like-fill"
							:size="36"
							:color="checked ? 'primary' : 'info'"
						/>
					</template>
					{{ item }}
				</cl-radio>
			</cl-radio-group>
		</cl-card>
	</cl-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const v1 = ref("1");
const v2 = ref("2");
const v3 = ref("2");
const v4 = ref("2");
const v5 = ref("2");
const v6 = ref("2");
const v7 = ref("1");
const v8 = ref("1");
const v9 = ref("1");
</script>
