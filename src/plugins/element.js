import {
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElButton,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
} from "element-plus";

const components = [
  ElButton,
  ElDatePicker,
  ElForm,
  ElFormItem,
  ElInput,
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

const installElement = (app) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })

  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}

export {
  installElement
}