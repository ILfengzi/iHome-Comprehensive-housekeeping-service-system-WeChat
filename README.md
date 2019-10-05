<!--
 * @Description: 
 * @Author: 
 * @Date: 2019-10-05 16:07:28
 * @LastEditTime: 2019-10-05 22:49:08
 * @LastEditors: Lin Changkun
 -->
# ihome

> WeChat applet of ihome using mpvue framework

## Build Setup

### 首先确保本地已安装node、yarn、vue-cli等

```bush
# 克隆项目
git clone url(本项目地址)

# 安装依赖
yarn install

# 开发时构建
yarn start (或者yarn run dev)

# 到这一步项目已完成了。。。

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
