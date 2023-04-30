import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/home/projects/nuxt-view-transitions/node_modules/.pnpm/nuxt@3.4.0_@types+node@18.16.3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}