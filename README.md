CareyShop 商城框架系统
===============
CareyShop（简称 CS）是一套基于 ThinkPHP5 框架开发的高性能商城框架系统，秉承简洁、快速、极致的开发理念，框架内使用面向对象模块化调用，在多终端、跨平台时采用 REST API 架构来进行数据交互，可直接对接 PC、移动设备、小程序、云部署，构建 Android、IOS 的 APP。

### 设计理念
放眼移动热潮、新零售概念、各类<abbr title="泛指各类终端机器或各类平台，终端机有IOS与Android为代表，平台以“微信小程序”为代表">终端</abbr>的增多，服务端会与各类前端进行交互，和第三方相互协作也更加紧密、频繁。出于这样的整体环境，我们摒弃传统开发方向，直接以 REST 架构为基础，将各类业务处理层模块化。

框架所有的业务处理逻辑存放在公共模块目录中，对于框架内的其他模块可通过面向对象的方式调用公共模块，而外部则以 API 接口进行交互，如此真正做到业务处理层的入口路径统一。具体开发使用请参见[「CareyShop 完全开发手册」](https://doc.careyshop.cn/docs/word/)

### 导航向导
> CareyShop 交流一群（QQ）：714593455

[Demo 预览](https://demo.careyshop.cn/admin "Demo 预览") | [官方网站](https://www.careyshop.cn "CareyShop官方网站") | [文档中心](https://doc.careyshop.cn "CareyShop文档中心") | [数据库词典](https://doc.careyshop.cn/docs/data_dict "数据库词典")

后端项目 Git

[Github 仓库](https://github.com/dnyz520/careyshop "Github 仓库") | [码云仓库](https://gitee.com/careyshop/careyshop "码云仓库") | [Coding 仓库](https://e.coding.net/careyshop/careyshop.git "Coding 仓库")

后台项目 Git

[Github 仓库](https://github.com/dnyz520/careyshop-admin "Github 仓库") | [码云仓库](https://gitee.com/careyshop/careyshop-admin "码云仓库") | [Coding 仓库](https://e.coding.net/careyshop/careyshop-admin.git "Coding 仓库")

### 安装使用
将项目下的`public`目录设为`web访问`目录，第一次访问时会进入`安装向导`，通过向导完成安装。

### 快速启动
切换到项目`public`目录，输入命令行`php -S 127.0.0.1:8080 router.php`，便可使用 PHP 自带的`webserver`服务快速访问，按键`Ctrl + C`退出服务。

> 建议使用`IP`启动，避免使用`localhost`

#### 声明
CareyShop 原则上使用 AGPLv3 开源，请遵守 AGPLv3 的相关条款，或者与我们联系获取商业授权，

本项目包含的源码（包括第三方）和二进制文件存在版权信息另行标注的情况。

证书号：软著登字第2395639号

登记号：2018SR066544
