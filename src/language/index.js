import { createI18n } from 'vue-i18n'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale'
import localeZH from 'element-plus/lib/locale/lang/zh-cn'
import localeEN from 'element-plus/lib/locale/lang/en'

const i18n = createI18n({
  locale: localeZH.name,
  fallbackLocale: localeEN.name,
  messages: {
    'zh-cn': require('./zh-cn.js'),
    'en': require('./en.js')
  }
})
export default (app) => {
  locale.use(localeZH)
  app.use(i18n)
}