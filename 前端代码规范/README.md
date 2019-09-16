# 代码规范

版本号 | 代码规范 | 更新日期 | 备注
:-----:|:-------:|:--------:|:-----:
0.1.0 | 沁果科技前端团队 | 2019.8.21 | 

## 规范目的 

为提高团队协作效率, 便于后台人员添加功能及前端后期优化维护, 输出高质量的文档, 特制订此文档. 本规范文档一经确认, 前端开发人员必须按本文档规范进行前台页面开发. 本文档如有不对或者不合适的地方请及时提出, 经讨论决定后可以更改此文档. 

## 文件规范 

### 文件存放位置规范

|- Root                 
|- src  存放项目开发环境文件
|- common  存放公共文件
|- components   存放公共组件
|- sdk  存放接口相关信息
|- public
|- imgs 存放图片文件 
|- js   存放JavaScript脚本 
|- css  存放CSS文件 
|- tools  存放工具配置文件

# 一、文件命名规则 

文件名称统一用小写的英文字母、数字和下划线的组合,其中不得包含汉字、空格和特殊字符;
命名原则的指导思想一是使得你自己和工作组的每一个成员能够方便的理解每一个文件的意义,二是当我们在文件夹中使用“按名称排例”的命令时,同一种大类的文件能够排列在一起,以便我们查找、修改、替换、计算负载量等等操作。 

+ HTML的命名原则引文件统一使用 index.tsx  index.js  index.jsx 文件名(小写)各子页命名的原则首先应该以栏目名的英语翻译取单一单词为名称。

例如: 关于我们 / aboutus 信息反馈 / feedback 产 品 / product 
如果栏目名称多而复杂并不好以英文单词命名,则统一使用该栏目名称拼音或拼音的首字母表示;每一个目录中应该包含一个缺省的html 文件,文件名统一用 index.tsx  index.js  index.jsx;

+ 图片的命名原则 

图片的名称分为头尾两部分,用下划线隔开,头部分表示此图片的大类性质例如:广告、标志、菜单、按钮等等。放置在页面顶部的广告、装饰图案等长方形的图片取名: banner标志性的图片取名为: logo在页面上位置不固定并且带有链接的小图片我们取名为 button 在页面上某一个位置连续出现,性质相同的链接栏目的图片我们取名: menu 装饰用的照片我们取名: pic不带链接表示标题的图片我们取名: title 范例:banner_sohu.gif  banner_sina.gif  menu_aboutus.gif  menu_job.gif  title_news.gif  logo_police.gif   logo_national.gif   pic_people.jpg鼠标感应效果图片命名规范为"图片名+_+on/off"。例如:menu1_on.gif  menu1_off.gif

+ javascript的命名原则例如:广告条的javascript文件名为 ad.js  弹出窗口的javascript文件名为 pop.js

+ 动态语言文件命名原则以性质_描述,描述可以有多个单词,用“_”隔开,性质一般是该页面得概要。范例:register-form.jsx   registerPost.jsx  topic_lock.jsx

# 二、代码书写规范 

基本原则: 

1. 书写代码前，考虑并提高样式重复使用率；充分利用html自身属性及样式继承原理减少代码量；
2. 命名时避免使用中文拼音, 尽量使用简易的单词组合，语义化，简明化。css 命名使用 — 连接；js 使用驼峰式命名；
3. 必须为大区块样式添加注释, 小区块适量注释; 
4. 代码缩进与格式: 建议单行书写, 可根据自身习惯; 
5. 库引入: 原则上仅引入基础库, 若需引入其他工具库, 须与团队其他人员讨论决定; 

注意细则: 

css:
1. 每个 id 是唯一标识符，仅使用在大的模块上，为 JavaScript 钩子使用，样式避免 id 做关联，class 用在重复使用率高及子级中
2. class与id命名: 规避重名，避免使用中文拼音, 尽量使用简易的单词组合，命名要语义化，简明化，参考从属写法。如：`.ant-layout-content`
3. 避免使用 !important，尽量减少多层嵌套选择器。
5. css属性书写顺序, 建议遵循 布局定位属性-->自身属性-->文本属性-->其他属性. 此条可根据自身习惯书写, 但尽量保证同类属性写在一起。
6. 避免兼容性属性的使用, 比如text-shadow || css3的相关属性; 减少使用影响性能的属性, 比如position:absolute || float ; 

js:
1. 变量命名: 驼峰式命名. 原生JavaScript变量要求是纯英文字母, 首字母须小写, 如iTaoLun; 要求变量集中声明, 避免全局变量. 
2. 类命名: 首字母大写, 驼峰式命名. 如 ITaoLun; 
3. 函数命名: 首字母小写驼峰式命名. 如iTaoLun(); 
4. 尽量避免使用存在兼容性及消耗资源的方法或属性, 比如eval() &; innerText; 
5. 后期优化中, JavaScript非注释类中文字符须转换成unicode编码使用, 以避免编码错误时乱码显示; 
6. 代码结构明了, 加适量注释. 提高函数重用率; 
7. 注重与html分离, 减小reflow, 注重性能. 

图片:
1. 所有页面元素类图片均放入img文件夹, 测试用图片放于img/demoimg文件夹; 
2. 图片格式仅限于gif || png || jpg; 
3. 命名全部用小写英文字母 || 数字 || _ 的组合,其中不得包含汉字 || 空格 || 特殊字符;尽量用易懂的词汇, 便于团队其他成员理解; 另, 命名分头尾两部分, 用下划线隔开, 比如ad_left01.png || btn_submit.gif; 
4. 在保证视觉效果的情况下选择最小的图片格式与图片质量, 以减少加载时间; 
5. 尽量避免使用半透明的png图片(若使用, 请参考css规范相关说明); 
6. 运用css sprite技术集中小的背景图或图标, 减小页面http请求。

注释：
1. html注释: 注释格式 <!--这儿是注释-->, '--'只能在注释的始末位置,不可置入注释文字区域; 
2. css注释: 注释格式 /*这儿是注释*/; 
3. JavaScript注释, 单行注释使用'//这儿是单行注释' ,多行注释使用 /* 这儿有多行注释 */; 
/* Footer */ 
  内容区 
/* End Footer */ 


举个栗子 for js：

命名法|示例|命名对象
:---:|:---:|:----:
驼峰式 | doSomething |  变量
帕斯卡式 | MyObject | 对象
下划线式 | STATUS_NEW | 常量

注：命名使用意义完整的英文描述。如果命名过长时，可采用以去掉元音字母的方法或者以行业内约定俗成的缩写方式缩写命名。


命名参考:  

(1)页面结构 
容器: container 
页头:header 
内容:content/container 
页面主体:main 
页尾:footer 
导航:nav 
侧栏:sidebar 
栏目:column 
页面外围控制整体布局宽度:wrapper 
左右中:left right center 
登录条:loginbar 

(2)导航 
导航:nav 
主导航:mainbav 
子导航:subnav 
顶导航:topnav 
边导航:sidebar 
左导航:leftsidebar 
右导航:rightsidebar 
菜单:menu 
子菜单:submenu 
标题: title 
摘要: summary 

(3)功能 
标志:logo 
广告:banner 
登陆:login 
登录条:loginbar 
注册:regsiter 
搜索:search 
功能区:shop 
标题:title 
加入:joinus 
状态:status 
按钮:btn 
滚动:scroll 
标签页:tab 
文章列表:list 
提示信息:msg 
当前的: current 
小技巧:tips 
图标: icon 
注释:note 
指南:guild 
服务:service 
热点:hot 
新闻:news 
下载:download 
投票:vote 
合作伙伴:partner 
友情链接:link 
版权:copyright

[回到顶部](#readme)

## 一、HTML

1. 语义化标签
HTML5 提供了很多语义化元素，更好地帮助描述内容。希望你能从这些丰富的标签库中受益。
```html
<!-- bad -->
<div id="main">
  <div class="article">
    <div class="header">
      <h1>Blog post</h1>
      <p>Published: <span>21st Feb, 2015</span></p>
    </div>
    <p>…</p>
  </div>
</div>
<!-- good -->
<main>
  <article>
    <header>
      <h1>Blog post</h1>
      <p>Published: <time datetime="2015-02-21">21st Feb, 2015</time></p>
    </header>
    <p>…</p>
  </article>
</main>
```

常用标签：article 、 header 、 aside 、 hgroup 、 section 、 footer 、 time 、

请确保正确使用语义化的标签，错误的用法甚至不如保守的用法。

HTML5 doctype
为每个 HTML 页面的第一行添加标准模式（standard mode）的声明，这样能够确保在每个浏览器中拥有一致的展现。

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
</html>
```

## 二、es6语法规范

1. let 取代 var

ES6 提出了两个新的声明变量的命令：let和const。其中，let完全可以取代var，因为两者语义相同，而且let没有副作用。

2. 全局常量const
在全局环境，不应该设置变量，只应设置常量

好处：const优于let有几个原因。一个是const可以提醒阅读程序的人，这个变量不应该改变；另一个是const比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；最后一个原因是 JavaScript 编译器会对const进行优化，所以多使用const，有利于提高程序的运行效率，也就是说let和const的本质区别，其实是编译器内部的处理不同。 const声明常量还有两个好处，一是阅读代码的人立刻会意识到不应该修改这个值，二是防止了无意间修改变量值所导致的错误。


3. 使用解构赋值
使用数组成员对变量赋值时，优先使用解构赋值。
```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
函数的参数如果是对象的成员，优先使用解构赋值。

// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}
如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。

// bad
function processInput(input) {
  return [left, right, top, bottom];
}

// good
function processInput(input) {
  return { left, right, top, bottom };
}

const { left, right } = processInput(input);
```
4. 对象
对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。
```javascript
// bad
const a = {};
a.x = 3;

// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });

// good
const a = { x: null };
a.x = 3;
如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。

// bad
const obj = {
  id: 5,
  name: 'San Francisco',
};
obj[getKey('enabled')] = true;

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true,
};
```
另外，对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。
```javascript
var ref = 'some value';

// bad
const atom = {
  ref: ref,

  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  ref,

  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```
5. 数组
使用扩展运算符（...）拷贝数组。

```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```
使用 Array.from 方法，将类似数组的对象转为数组。
```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```
6. 函数
立即执行函数可以写成箭头函数的形式。
```javascript
(() => {
  console.log('Welcome to the Internet.');
})();
```
那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。
```javascript
// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});

// best
[1, 2, 3].map(x => x * x);
```
简单的、单行的、不会复用的函数，建议采用箭头函数。如果函数体较为复杂，行数较多，还是应该采用传统的函数写法。

7. Map结构
注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要key: value的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。
```javascript
let map = new Map(arr);

for (let key of map.keys()) {
  console.log(key);
}

for (let value of map.values()) {
  console.log(value);
}

for (let item of map.entries()) {
  console.log(item[0], item[1]);
}
```
8. class
总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。
```javascript
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```
使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。
```javascript
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
```
9. 使用promise时
一般来说，不要在then方法里面定义失败状态的回调函数(即then的第二个参数)，总是使用catch方法
```javascript
// bad
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// good
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```
新增

`i++`
尽量不要使用i++,尽量使用i+=1;(除了for循环)

[回到顶部](#readme)

## 三、vue规范

1. vue方法放置顺序

1.1 components

1.2 props

1.3 data

1.4 created

1.5 mounted

1.6 activited

1.7 update

1.8 beforeRouteUpdate

1.9 metods

1.10 filter

1.11 computed

1.12 watch

2. method 自定义方法命名

2.1 动宾短语（good：jumpPage、openCarInfoDialog）（bad：go、nextPage、show、open、login）

2.2 ajax 方法以 get、post 开头，以 data 结尾（good：getListData、postFormData）（bad：takeData、confirmData、getList、postForm）

2.3 事件方法以 on 开头（onTypeChange、onUsernameInput）

2.4 init、refresh 单词除外

2.5 尽量使用常用单词开头（set、get、open、close、jump）

2.6 驼峰命名（good: getListData）（bad: get_list_data、getlistData）

3. 生命周期方法注意点

3.1 不在 mounted、created 之类的方法写逻辑，取 ajax 数据，

3.2 在 created 里面监听 Bus 事件

4. 基于模块开发

原则：每一个vue组件首先必须专注于解决一个单一的问题，独立的，可复用的，微小的和可测试的。 如果你的组件做了太多的事或是变得臃肿，请将其拆成更小的组件并保持单一的原则。

5. Vue 组件命名

有意义的: 不过于具体，也不过于抽象
简短: 2 到 3 个单词
具有可读性: 以便于沟通交流
```javascript
<!-- 推荐 -->
<app-header></app-header>
<user-list></user-list>
<range-slider></range-slider>

<!-- 避免 -->
<btn-group></btn-group> <!-- 虽然简短但是可读性差. 使用 `button-group` 替代 -->
<ui-slider></ui-slider> <!-- ui 前缀太过于宽泛，在这里意义不明确 -->
<slider></slider> <!-- 与自定义元素规范不兼容 -->
```
6.验证组件的props
提供默认值。
使用 type 属性校验类型。
使用 props 之前先检查该 prop 是否存在。
```javascript
<template>
  <input type="range" v-model="value" :max="max" :min="min">
</template>
<script type="text/javascript">
  export default {
    props: {
      max: {
        type: Number, // 这里添加了数字类型的校验
        default() { return 10; },
      },
      min: {
        type: Number,
        default() { return 0; },
      },
      value: {
        type: Number,
        default() { return 4; },
      },
    },
  };
</script>
```

[回到顶部](#readme)
