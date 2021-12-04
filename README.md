# boilerplate-vue3

## 简介

`boilerplate-vue3` 是一个面向中国用户的简单 `vue` 模板，目标是帮助你快速开发桌面端网页/移动端网页。当然，也希望能引导你更进一步地了解 `vue` 生态。

如果你想要快速开发移动端应用，请考虑加入 [cordova](https://cordova.apache.org/)、[native-script](https://nativescript.org/)、[ionic](https://ionicframework.com/) 或 [capacitor](https://capacitorjs.com/)，或者使用 [boilerplate-uni-app-vue3](https://github.com/MillCloud/boilerplate-uni-app-vue3)。

如果你想要快速开发桌面端应用，请考虑使用 [electron](https://www.electronjs.org/) 或 [tauri](https://tauri.studio/)。

该模板只支持 vue 3。vue 2 支持请查看 [boilerplate-vue2](https://github.com/MillCloud/boilerplate-vue2)。

### 主要依赖

- [vue3](https://v3.cn.vuejs.org/)
- [vite](https://cn.vitejs.dev/)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [vue-router](https://router.vuejs.org/zh/)
- [pinia](https://pinia.esm.dev/)
- [vue-use](https://vueuse.org)
- [typescript](https://www.typescriptlang.org/zh/)
- [axios](https://github.com/axios/axios)
- [vue-query](https://vue-query.vercel.app/)
- [statuses](https://github.com/jshttp/statuses)
- [windicss](https://windicss.org/)
- [element-plus](https://element-plus.org/) - 对于移动端网页，请考虑 [vant](https://youzan.github.io/vant)
- [iconify](https://iconify.design/)
- [@modyqyw/utils](https://github.com/modyqyw/utils)
- [dayjs](https://dayjs.gitee.io/zh-CN/)
- [nprogress](https://ricostacruz.com/nprogress/)
- [sass](https://sass-lang.com/)
- [@modyqyw/fabric](https://github.com/ModyQyW/fabric)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates)

请先阅读上面的文档，并确保对 `node` 和 `npm` 有 [基本了解](http://nodejs.cn/learn)。

## 起步

这部分说明将让你得到能在本地运行的项目副本以开始开发。有关如何部署项目，请阅读 [部署部分](#部署)。

### 准备

你可能需要使用梯子或手机 WiFi 完成准备步骤。

对于 macOS 用户，请按照以下指引操作。

```sh
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# 设置镜像，加快下载速度
export NVM_NODEJS_ORG_MIRROR=https://npmmirror.com/mirrors/node
# 安装 node@lts
nvm install --lts
# 使用 node@lts
nvm use --lts
# 设置默认版本
nvm alias default node
# 安装 pnpm
npm i -g pnpm --registry=https://registry.npmmirror.com
# 安装 homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
# 安装 git
brew install git
# 不自动转换换行符
git config --global core.autocrlf false
# 设置默认分支名为 main
git config --global init.defaultBranch main

```

设置 `~/.huskyrc`。

```sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

```

对于 Windows 用户，请按照以下指引操作。

首先安装 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases/download/1.1.8/nvm-setup.zip) 和 [Git](https://git-scm.com/downloads)。

然后使用 Windows Terminal 作为终端，Git Bash 作为 Shell，参考 [让 Win10 的终端更好用](https://sspai.com/post/63814) 和 [配置 Windows Terminal](https://sspai.com/post/62167)。

如果你正在使用 [Chocolatey](https://chocolatey.org/) 或 [Scoop](https://scoop.sh/)，你也可以通过命令安装，然后配置。

```sh
# 使用 Chocolatey
choco install nvm
choco install git

# 使用 Scoop
scoop install nvm
scoop install git

# 不自动转换换行符
git config --global core.autocrlf false
# 设置默认分支名为 main
git config --global init.defaultBranch main
# 设置镜像，加快下载速度
nvm node_mirror https://npmmirror.com/mirrors/node
nvm npm_mirror https://npmmirror.com/mirrors/npm
# 安装 node@lts
nvm install lts
# 使用 node@lts
nvm use lts
# 安装 pnpm
npm i -g pnpm --registry=https://registry.npmmirror.com

```

你可能需要配置 `~/.huskyrc`。

其它系统请根据以上指引自行调整。

### 安装与运行

```sh
# clone 项目到本地
git clone git@github.com:MillCloud/boilerplate-vue3.git
# git clone git@gitee.com:MillCloud/boilerplate-vue3.git
# 进入项目
cd boilerplate-vue3
# 安装依赖
pnpm install
# 启动项目
pnpm run dev

```

## 使用

### 项目结构

```sh
.
├── .husky                      # husky 配置目录
├── public
├── src
│   ├── assets                  # 资产目录
│   ├── components              # 全局组件目录
│   ├── composables             # 全局组合式 API 目录
│   ├── constants               # 固定数据目录
│   ├── layouts                 # 布局目录
│   ├── pages                   # 页面视图目录
│   ├── plugins                 # 插件目录
│   ├── router                  # 路由目录
│   ├── stores                  # 状态仓库目录
│   ├── styles                  # 全局样式和全局变量目录
│   ├── utils                   # 工具方法目录
│   ├── App.vue
│   ├── components.d.ts         # 组件定义文件
│   ├── global.d.ts
│   ├── guard.ts                # 导航守卫
│   ├── main.ts
│   ├── shims-vue-query.d.ts
│   └── shims-vue.d.ts
├── .commitlintrc.js            # commitlint 配置文件
├── .editorconfig
├── .env                        # 所有环境都载入的环境变量
├── .eslintrc.js                # eslint 配置文件
├── .gitattributes              # git 配置文件
├── .gitignore                  # git 配置文件
├── .lintstagedrc.js            # lint-staged 配置文件
├── .markdownlint.json          # markdownlint 配置文件
├── .npmrc                      # npm 配置文件
├── .prettierrc.js              # prettier 配置文件
├── .release-it.js              # release-it 配置文件
├── .stylelintrc.js             # stylelint 配置文件
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js           # postcss 配置文件
├── README.md
├── tailwind.config.js          # tailwindcss 配置文件
├── tsconfig.json               # typescript 配置文件
└── vite.config.ts              # vite 配置文件
```

### VSCode 支持

你可以参考 [插件](https://modyqyw.top/environment/#%E6%8F%92%E4%BB%B6) 和 [settings.json](https://modyqyw.top/environment/#settings-json)。

### 路由

使用 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) 和 [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) 实现约定式路由。

### 部署

- 确认所有环境变量和模式相关的地方已经配置完成，参考 [vite 文档 - 环境变量和模式](https://cn.vitejs.dev/guide/env-and-mode.html) 和 [vite-plugin-env-compatible](https://github.com/IndexXuan/vite-plugin-env-compatible)。
- 运行 `pnpm run release`，更新版本号并上传 `dist` 目录下的内容。
- 更多自定义可以参考 `release-it` 文档说明，使用 `node` 运行脚本完成操作。
