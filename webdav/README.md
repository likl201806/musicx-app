# WebDAV Help Pages - Internationalization

## 支持的语言
- 英文 (English) - 默认语言
- 中文 (Chinese)  
- 日文 (Japanese)
- 俄文 (Russian)

## 语言检测机制
1. 优先使用localStorage中保存的用户语言偏好
2. 其次检测浏览器语言 (navigator.language)
3. 默认使用英文

## 实现方式
每个HTML页面都包含：
1. 语言切换按钮（右上角）
2. 内嵌的翻译数据对象
3. 语言检测和切换逻辑
4. 响应式设计，支持移动端

## 页面列表
1. infini-cloud.html - InfiniCLOUD配置说明
2. yandex-disk.html - Yandex.Disk配置说明
3. box.html - Box配置说明
4. opendrive.html - OpenDrive配置说明
5. cloud-mail-ru.html - Cloud Mail.ru配置说明
6. 4shared.html - 4Shared配置说明
7. synology.html - Synology NAS配置说明
8. wd-my-cloud-home.html - WD My Cloud Home配置说明
9. custom.html - 自定义WebDAV配置说明

## 技术特点
- 纯静态HTML，无需服务器端支持
- JavaScript在客户端进行语言切换
- localStorage保存用户语言偏好
- 移动端友好的响应式设计
