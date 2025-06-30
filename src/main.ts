// core
import App from "@/App.vue"
import { createApp } from "vue"
import { pinia } from "@/store"
import { router } from "@/router"
import "@/router/permission"
// load
import { loadPlugins } from "@/plugins"
import { loadDirectives } from "@/directives"
// css
import "uno.css"
import "normalize.css"
import "@/styles/index.less"

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)
/** 加载自定义指令 */
loadDirectives(app)

app.use(pinia).use(router)
router.isReady().then(() => {
  app.mount("#app")
})
