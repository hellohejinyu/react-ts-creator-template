// Prettier 相比于 ESLint 来说，格式化后的代码更优雅
// 但是因为 Prettier 的配置放在了最后，所以覆盖掉了 Standard 的一些配置
// 个人比较喜欢 Standard 中提倡的单引号和结尾不加分号的做法
// 所以这里配置一下

module.exports = {
  semi: false, // 末尾不要分号
  singleQuote: true, // 单引号
}
