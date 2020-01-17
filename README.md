# 周记

## 2020 
### 1-13
一站一日：

- 热力站 - 无效站列表 ：增加折线图 弹出框增加站名和无效原因，数据请求时先展示弹出框并显示 loading 动画。
- 热力站 - 基本信息 ：表头增加单位，增加编辑权限，编辑时根据要求不同输入增加下拉选择框的功能，校验输入为数字的情况
- 热力站 - 月成本统计 ：表头显示的多选下拉列表中，“全部”默认为不勾选
- 热力站 - 月成本统计 ：选择一个分公司后中心会自动选择，且无法选择所有的中心

- 独网锅炉房 - 基本信息 ：表头增加单位，增加编辑权限，编辑时根据要求不同输入增加下拉选择框的功能，校验输入为数字的情况
- 独网锅炉房 - 成本统计 ：表头显示的多选下拉列表中，“全部”默认为不勾选
- 独网锅炉房 - 成本统计 : 修复选择一个分公司后中心会自动选择，且无法选择所有中心

- 成本分析 - 成本构成 ：刘利账号登录打开日期为Invalid date，且没有数据 - 日期传参修改 5号之前之后不同参数
- 成本分析 - 面积构成 : 海淀刘博远登陆后，收费项目对比图例过小 - 重新计算布局
- 成本分析 - 单位面积对比 ：图表大小修改参考成本分析 - 重新调整颜色和计算布局大小
- 成本分析 - 月成本统计 ：设置默认日期，按要求传日期参数，修复下拉多选bug，调整筛选项布局。

- 城市热网 - 预计完成 ：调整日期控件 为整体联动区间
- 城市热网 - 热源历史查询 - 年度结算 ：修改默认年度为当前日期的上个月的年度

- 数据查询器 - 所有表都要显示默认日期，默认日期与表格数据一致

- 各业务数据 - 财务 - 财务列表 ：增加公司筛选项

- 全网监测 - 排行榜 - 按公司 ：按照新设计实现
- 全网监测 - 排行榜 - 按中心 ：按照新设计实现
- 气象信息 - 气象站点历史： 日期筛选框为的月份和年份是英文 改为中文
## 2019
### 12-30 
一站一日：
- 
- 单个锅炉房：经营、补贴、折旧、大修、中小修 页面 增加最小高度
- 热力站 无效列表 ：新增查看一次数据功能及弹出 table 信息页面，重写顶部筛选框功能。
- 成本分析 月成本统计： 修复顶部自动补全筛选框bug

### 12-12
- 热力站历史导出接口：/api/stations/history/url/{type}

### 11-04
- 测温：单个热力站信息页面
- 测温首页：阶梯温度 按要求修改 显示1，数据为null时处理数据。

### 10-28
- 测温/任务明细：选择合服设置默认合服公司
- 测温/ 测温任务：sp接口调试，列表功能调试
- 测温/ 展示图形按新需求更改
- 热力：预计完成页面
### 10-21
- 热力站 / 月成本统计 :筛选排名的时候,展示数据格式修改为整数
- 独网锅炉房 / 成本统计 :筛选排名的时候,展示数据格式修改为整数
- 成本分析 趋势: error 粉色条
- 预计计划执行到位率: 按正确排序显示

# 常用

## 记录
## className: 'nowrap',  // table 文字不换行
## <LocaleProvider locale={zh_CN}>  </LocaleProvider>
import LocaleProvider from 'antd/lib/locale-provider';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
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

### 主路由器 
路由器登录名：admin
路由器登密码：P_H_pinghai2014sui	初始化 Linksys1900

### wifi密码：1124?phyk

## 入室测温

wifi：Tenda

登录账号：panbin  密码：123

初始化项目：
/backend 加入以下文件：
ormconfig.development.json
ormconfig.production.json

- 主分支：dev-assignment

router: fontend/src/pages/.umi/router

### 主要框架：
- https://umijs.org/zh/guide/
- https://ant.design/docs/react/introduce-cn
- https://dvajs.com/guide/

## 水表 PC：

C:\Program Files\redis	redis-server 

## 水表app：

wifi：nova...

localhost:8080/#/start/worker
localhost:8080/#/start/user

app：msater

backend：new 

员工端：
	liutinghui	000000
	BEL005	12345abc
查询：010505000339


## 热力 / 一站一日：

测试地址： 192.168.1.135  WiFi：Tenda

线上地址：172.16.133.32  连nova的wifi  然后登陆vpn 才可以访问

启动本地：xampp 	npm run dev	localhost		wifi ：Tenda

table：
fixed: key === 'company'?true:false,
align: 'right',
        className: 'nowrap',

### 公共组件

- 公共方法： src / common /uicommon 
- 公共组件： src / common / uicomponents
- 图片： public/ imgs 
- 样式：sass / main.scss
- 编译：npm run build:prod

### 文件配置
1. routers.js  配置路径 + routes/web.php 配置路径
2. reducerList.js 配置state名
3. methods/getChroot.js 引入list  或 不做处理
4. sdks/fetchData.js  配置接口地址
5. reducers.js 引入list 或不配置

合并代码分支：dev

.env 文件 ：APP_ENV=local   跑本地编译后代码
	    APP_ENV=local2   跑线上编译后代码


账号：

- liuli	123456
- zsg 	1
- zhaogang 123456	导入在 各业务数据=》财务=》 水电实际采购金额 
- sunying     123456     导入在 各业务数据=》人力
- wangpengyu     123456      能量
- 集团  liuli  dongyan   
- 分公司 wangpengyu 




