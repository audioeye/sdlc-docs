import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'
// import SkipToMain from './components/SkipToMain.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  // rootComponents: [
  //   SkipToMain
  // ],
  layouts: {
    Layout
  }
})
