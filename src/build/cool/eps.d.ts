declare namespace Eps {
	interface DemoGoodsEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 标题
		 */
		title?: string;
		/**
		 * 价格
		 */
		price?: number;
		/**
		 * 描述
		 */
		description?: string;
		/**
		 * 主图
		 */
		mainImage?: string;
		/**
		 * 分类
		 */
		type?: number;
		/**
		 * 状态
		 */
		status?: number;
		/**
		 * 示例图
		 */
		exampleImages?: json;
		/**
		 * 库存
		 */
		stock?: number;
		/**
		 * 创建时间
		 */
		createTime?: string;
		/**
		 * 更新时间
		 */
		updateTime?: string;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserAddressEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 用户ID
		 */
		userId?: number;
		/**
		 * 联系人
		 */
		contact?: string;
		/**
		 * 手机号
		 */
		phone?: string;
		/**
		 * 省
		 */
		province?: string;
		/**
		 * 市
		 */
		city?: string;
		/**
		 * 区
		 */
		district?: string;
		/**
		 * 地址
		 */
		address?: string;
		/**
		 * 是否默认
		 */
		isDefault?: boolean;
		/**
		 * 创建时间
		 */
		createTime?: string;
		/**
		 * 更新时间
		 */
		updateTime?: string;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}

	interface UserInfoEntity {
		/**
		 * ID
		 */
		id?: number;
		/**
		 * 登录唯一ID
		 */
		unionid?: string;
		/**
		 * 头像
		 */
		avatarUrl?: string;
		/**
		 * 昵称
		 */
		nickName?: string;
		/**
		 * 手机号
		 */
		phone?: string;
		/**
		 * 性别
		 */
		gender?: number;
		/**
		 * 状态
		 */
		status?: number;
		/**
		 * 登录方式
		 */
		loginType?: number;
		/**
		 * 密码
		 */
		password?: string;
		/**
		 * 介绍
		 */
		description?: string;
		/**
		 * 创建时间
		 */
		createTime?: string;
		/**
		 * 更新时间
		 */
		updateTime?: string;
		/**
		 * 任意键值
		 */
		[key: string]: any;
	}
	interface BaseComm {
		/**
		 * 文件上传模式
		 */
		uploadMode(data?: any): Promise<any>;
		/**
		 * 文件上传
		 */
		upload(data?: any): Promise<any>;
		/**
		 * 参数配置
		 */
		param(data?: any): Promise<any>;
		/**
		 * 实体信息与路径
		 */
		eps(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { uploadMode: string; upload: string; param: string; eps: string };
		/**
		 * 权限状态
		 */
		_permission: { uploadMode: boolean; upload: boolean; param: boolean; eps: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoCache {
		/**
		 * 设置缓存
		 */
		set(data?: any): Promise<any>;
		/**
		 * 获得缓存
		 */
		get(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { set: string; get: string };
		/**
		 * 权限状态
		 */
		_permission: { set: boolean; get: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoEvent {
		/**
		 * 全局事件，多进程都有效
		 */
		global(data?: any): Promise<any>;
		/**
		 * 普通事件，本进程生效
		 */
		comm(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { global: string; comm: string };
		/**
		 * 权限状态
		 */
		_permission: { global: boolean; comm: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoGoods {
		/**
		 * entity分页查询
		 */
		entityPage(data?: any): Promise<any>;
		/**
		 * sql分页查询
		 */
		sqlPage(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DemoGoodsEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			entityPage: string;
			sqlPage: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			entityPage: boolean;
			sqlPage: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoI18n {
		/**
		 * 翻译成英文
		 */
		en(data?: any): Promise<any>;
		/**
		 * 翻译成繁体
		 */
		tw(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { en: string; tw: string };
		/**
		 * 权限状态
		 */
		_permission: { en: boolean; tw: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoPlugin {
		/**
		 * 调用插件
		 */
		invoke(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { invoke: string };
		/**
		 * 权限状态
		 */
		_permission: { invoke: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoQueue {
		/**
		 * addGetter
		 */
		addGetter(data?: any): Promise<any>;
		/**
		 * getter
		 */
		getter(data?: any): Promise<any>;
		/**
		 * 发送队列数据
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { addGetter: string; getter: string; add: string };
		/**
		 * 权限状态
		 */
		_permission: { addGetter: boolean; getter: boolean; add: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoRpc {
		/**
		 * 分布式事务
		 */
		transaction(data?: any): Promise<any>;
		/**
		 * 集群事件
		 */
		event(data?: any): Promise<any>;
		/**
		 * 远程调用
		 */
		call(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { transaction: string; event: string; call: string };
		/**
		 * 权限状态
		 */
		_permission: { transaction: boolean; event: boolean; call: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoSse {
		/**
		 * 事件流 服务端主动推送
		 */
		call(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { call: string };
		/**
		 * 权限状态
		 */
		_permission: { call: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoTenant {
		/**
		 * 权限标识
		 */
		permission: {};
		/**
		 * 权限状态
		 */
		_permission: {};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface OpenDemoTransaction {
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<DemoGoodsEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<DemoGoodsEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: DemoGoodsEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface DictInfo {
		/**
		 * 获得所有字典类型
		 */
		types(data?: any): Promise<any>;
		/**
		 * 获得字典数据
		 */
		data(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { types: string; data: string };
		/**
		 * 权限状态
		 */
		_permission: { types: boolean; data: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface Swagger {
		/**
		 * 获得Swagger JSON数据
		 */
		json(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { json: string };
		/**
		 * 权限状态
		 */
		_permission: { json: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserAddress {
		/**
		 * 默认地址
		 */
		default(data?: any): Promise<any>;
		/**
		 * 删除
		 */
		delete(data?: any): Promise<any>;
		/**
		 * 修改
		 */
		update(data?: any): Promise<any>;
		/**
		 * 单个信息
		 */
		info(data?: any): Promise<UserAddressEntity>;
		/**
		 * 列表查询
		 */
		list(data?: any): Promise<UserAddressEntity[]>;
		/**
		 * 分页查询
		 */
		page(data?: any): Promise<{
			pagination: { size: number; page: number; total: number; [key: string]: any };
			list: UserAddressEntity[];
			[key: string]: any;
		}>;
		/**
		 * 新增
		 */
		add(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			default: string;
			delete: string;
			update: string;
			info: string;
			list: string;
			page: string;
			add: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			default: boolean;
			delete: boolean;
			update: boolean;
			info: boolean;
			list: boolean;
			page: boolean;
			add: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserComm {
		/**
		 * 获取微信公众号配置
		 */
		wxMpConfig(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: { wxMpConfig: string };
		/**
		 * 权限状态
		 */
		_permission: { wxMpConfig: boolean };
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserInfo {
		/**
		 * 更新用户密码
		 */
		updatePassword(data?: any): Promise<any>;
		/**
		 * 更新用户信息
		 */
		updatePerson(data?: any): Promise<any>;
		/**
		 * 绑定手机号
		 */
		bindPhone(data?: any): Promise<any>;
		/**
		 * 绑定小程序手机号
		 */
		miniPhone(data?: any): Promise<any>;
		/**
		 * 获取用户信息
		 */
		person(data?: any): Promise<any>;
		/**
		 * 注销
		 */
		logoff(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			updatePassword: string;
			updatePerson: string;
			bindPhone: string;
			miniPhone: string;
			person: string;
			logoff: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			updatePassword: boolean;
			updatePerson: boolean;
			bindPhone: boolean;
			miniPhone: boolean;
			person: boolean;
			logoff: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	interface UserLogin {
		/**
		 * 刷新token
		 */
		refreshToken(data?: any): Promise<any>;
		/**
		 * 绑定小程序手机号
		 */
		miniPhone(data?: any): Promise<any>;
		/**
		 * 一键手机号登录
		 */
		uniPhone(data?: any): Promise<any>;
		/**
		 * 密码登录
		 */
		password(data?: any): Promise<any>;
		/**
		 * 图片验证码
		 */
		captcha(data?: any): Promise<any>;
		/**
		 * 验证码
		 */
		smsCode(data?: any): Promise<any>;
		/**
		 * 微信APP授权登录
		 */
		wxApp(data?: any): Promise<any>;
		/**
		 * 手机号登录
		 */
		phone(data?: any): Promise<any>;
		/**
		 * 小程序登录
		 */
		mini(data?: any): Promise<any>;
		/**
		 * 公众号登录
		 */
		mp(data?: any): Promise<any>;
		/**
		 * 权限标识
		 */
		permission: {
			refreshToken: string;
			miniPhone: string;
			uniPhone: string;
			password: string;
			captcha: string;
			smsCode: string;
			wxApp: string;
			phone: string;
			mini: string;
			mp: string;
		};
		/**
		 * 权限状态
		 */
		_permission: {
			refreshToken: boolean;
			miniPhone: boolean;
			uniPhone: boolean;
			password: boolean;
			captcha: boolean;
			smsCode: boolean;
			wxApp: boolean;
			phone: boolean;
			mini: boolean;
			mp: boolean;
		};
		/**
		 * 请求
		 */
		request: Service["request"];
	}

	type json = any;

	type Service = {
		request(options?: {
			url: string;
			method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
			data?: any;
			params?: any;
			headers?: {
				[key: string]: any;
			};
			timeout?: number;
			proxy?: boolean;
			[key: string]: any;
		}): Promise<any>;
		base: { comm: BaseComm };
		open: {
			demo: {
				cache: OpenDemoCache;
				event: OpenDemoEvent;
				goods: OpenDemoGoods;
				i18n: OpenDemoI18n;
				plugin: OpenDemoPlugin;
				queue: OpenDemoQueue;
				rpc: OpenDemoRpc;
				sse: OpenDemoSse;
				tenant: OpenDemoTenant;
				transaction: OpenDemoTransaction;
			};
		};
		dict: { info: DictInfo };
		swagger: Swagger;
		user: { address: UserAddress; comm: UserComm; info: UserInfo; login: UserLogin };
	};
}
