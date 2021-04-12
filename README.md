<!--
 * @Description: 
 * @Author: Lily
 * @Date: 2021-04-12 11:18:46
 * @LastEditTime: 2021-04-12 11:49:48
 * @LastEditors: Lily
-->


# v-ellipsis
基于vue2的自定义文本省略指令
- 支持单行、多行省略，
- 支持鼠标移入时，出现气泡框提示

## 安装
```
    npm install v-ellipsis
```
or

```
    yarn add v-ellipsis
```
## 注册
```javascript
    import Vue from 'vue';
    import Ellipsis from 'v-ellipsis';
    import 'v-ellipsis/dist/ellipsis.umd.css';

    Vue.directive('ellipsis', Ellipsis);
```
## 用法
```html
    <!-- 单行 -->
    <div v-ellipsis="text">
      {{ text }}
    </div>
     <!-- 多行 -->
    <div v-ellipsis="{ placement: 'bottom', text, line:3 }">
      {{ text }}
    </div>
```

## 指令参数

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text|文本信息 | String | 无|
| line| 行数 | Number | 1 |
| placement|气泡框位置, 可选`top`  `top-left` `top-right` `left` `left-top` `left-bottom` `right` `right-top` `right-bottom` `bottom` `bottom-left` `bottom-right` | String | top|



