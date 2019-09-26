# 常用

## 记录

// gitlab  
1743090005@qq.com
Zhoufei1

原型地址：https://org.modao.cc/app/3a9b4204c440b789fab49fcf229c619e4dc96ec0#screen=sc5bf049fc90ce2c75fa087

UI 地址：https://sketch.cloud/s/0YRwA

vpn：

1、登录链接   https://vpn.bdhgidc.cn:8899
2、首次登录请先下载新的客户端，网页链接里有提示
3、后续运维每次登录，建议使用客户端
4、证书导入密码 2019514 ，证书有效期3个月，后续如需再使用，参照运维管理办法（283585526 群文件）规则发邮件申请新证书即可，账号信息不变。
5、 用户名 wangrong_xzqj  初始密码 6f0kcmw  修改初始密码是：Wang0710	
6、用户名首次登录必须修改密码，密码有效期为3个月，3个月到期后必须修改密码；密码至少8位，且包含数字和字母，密码不能和用户名重复。
7、ssl vpn拨通后，直接访问要访问的资源即可。
运维管理（热力）：密码 wang0710

用户名：zhangy-xzqj		密码：qgkj2019	证书导入密码：2408850

接口地址 ：http://www.el.com	wifi：Tenda	用户名

## 主路由器 
路由器登录名：admin
路由器登密码：P_H_pinghai2014sui	初始化 Linksys1900

wifi密码：1124?phyk

## 入室测温

wifi：Tenda

登录账号：panbin  密码：123

初始化项目：
/backend 加入以下文件：
ormconfig.development.json
ormconfig.production.json

router: fontend/src/pages/.umi/router

## 水表 PC：

C:\Program Files\redis	redis-server 

## 水表app：

wifi：nova...

localhost:8080/#/start/worker
localhost:8080/#/start/user

app：msater

backend：new 

npm i

员工端：liutinghui	000000

	BEL005	12345abc


2019-9-16

1.登录接口:  post
/api/loginByPwd
参数:
mobilephone, password 
返回值：
错误 
 success: false,
 error: 'MOBILEPHONE_REQUIRED',

正确
 success: true,
    access_token: xxxx,
    token_type: "bearer"

登录成功之后带token跳home页

2.获取验证码:post
/api/getSmsCode
参数
mobilephone


3.注册接口: post  先发验证码，没输入验证码不能注册
/api/registerByPwd
参数:
mobilephone, password, confirmPassword
返回值：
错误 
 success: false,
 error: 'MOBILEPHONE_REQUIRED',
 error_description: '手机号码字段（mobilephone）为必须'

正确
 success: true,
    msg: '注册成功，请登录!',
    
### 2019-09-26
- app.get('/invoices/paidlist', invoices.paidlist)   //列表
- app.get('/invoices/getPaymentDetail', invoices.getPaymentDetail)   //详情
- app.post('/invoices/savInvoicesInfo', invoices.savInvoicesInfo)  //提交发票记录
- app.get('/invoices/getInoiceList', invoices.getInoiceList) //发票记录列表
    

## 热力 / 一站一日：

测试地址： 192.168.1.135  WiFi：Tenda

线上地址：172.16.133.32  连nova的wifi  然后登陆vpn 才可以访问

启动本地：xampp 	npm run dev	localhost		wifi ：Tenda

编译：npm run build:prod

.env 文件 ：APP_ENV=local   跑本地编译后代码
	  APP_ENV=local2   跑线上编译后代码

liuli	123456
zsg 	1
zhaogang 123456	导入在 各业务数据=》财务=》 水电实际采购金额 
sunying     123456     导入在 各业务数据=》人力
wangpengyu     123456      能量




# 工作记录

## 热力
格式化数据：

import {
  toLocaleStringContent
} from 'methods/initText'

toLocaleStringContent(c, '元')

## 热力 / 一站一日

order_by: "[{"column":"area","sequence":"desc"}]"

order_by: "[{"column":"area","sequence":"asc"}]"

各业务数据 > 导入优化：
+ [X] 能源、热量上传优化  
+ [X] 工资导入优化

页面升级：
+ [X] 数据查询器  

全网检测 > 供热概览：
+ [X] 气象温度：加数 
+ [X] 核算情况：单位修正

全网检测 > 每日运行总汇： 
+ [X] 添加 供暖季监测 表格

热力站 > 基本信息：
+ [X] 按日核算 http://localhost/stations/88/basic   tag：明细 改为每天数据： single = 1   

热力站 > 日核算:
+ [X] 日核算：日期 列 不渲染

热力站 > 月成本统计：
+ [X] 管理类型 信息展示错误

成本分析 > 月成本统计 > 按热力站汇总：
+ [X] 管理类型 信息展示错误

成本分析 > 成本构成：
+ [X] 上年同期单位面积成本   单位错误（元/㎡）数据格式化

### 2019-9-25
- 水表客户端：账号密码登录注册，不同类型表缴费、电子发票
- 热力：改bug
- 测温：首页bug、首页柱状图、logo更改

