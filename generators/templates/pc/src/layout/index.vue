<template>
  <div style="height: 100%">
    <cp-frame-layout>
      <template v-slot:aside-menu-icon="{ menu }">
        <svg-icon
          :iconClass="menu.icon"
          v-if="menu.icon"
          class="menu-icon menu-item-svg"
        />
      </template>

      <template v-slot:aside-menu-content="{ menu }">
        <span :class="menu.icon ? 'menu-title' : ''">{{
          menu.meta.title
        }}</span>
        <span v-if="menu.meta.pop" class="menu-tag menu-tag--danger">
          {{ menu.meta.pop || 0 }}
        </span>
      </template>
    </cp-frame-layout>
  </div>
</template>

<script>
import CpFrameLayout, {
  appMutations,
  headerMutations,
  asideMutations,
  pageMutations,
  tagsViewMutations
} from '@cci/cp-frame-layout'
// 设置一些基础信息
const accesstoken = '020b49ad-ae83-4eb4-b2e2-1dbe89aecb3d' // 到时候从vuex中取
const scope = '3' // 到时候从vuex中取

appMutations.title('xxxx管理系统')
asideMutations.renderDepth(4)
appMutations.logo(require('../assets/images/logo.png'))
headerMutations.theme('dg')
headerMutations.avatar(require('../assets/images/head.png'))
asideMutations.theme('dg')
asideMutations.switchTransitionName('')
pageMutations.httpPrefix('/JUMP/')
pageMutations.iframeBeforeJumpFunc(
  (url) => url + `?access_token=${accesstoken}&scope=${scope}`
)

export default {
  name: 'LayoutS',

  components: {
    CpFrameLayout
  },
  data() {
    return {
      // 需要移除的缓存页面
      delCacheOnlyArr: [
        // '/scoring/scoring-item',
        // '/scoring/scoring-item-type',
        // '/deduct/deduct-sub-items',
        // '/deduct/deduct-sub-items-type',
        // '/enterprise-rating'
      ]
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userData.userName || '**'
    }
  },

  created() {
    headerMutations.username(this.userName)

    headerMutations.dropdownItems([
      // {
      //   icon: 'el-icon-switch-button',
      //   content: '退出登录',
      //   handler: this.logout
      // }
    ])

    // 设置退出登陆的操作
    headerMutations.logout(() => {
      this.logout()
    })

    // appMutations.modifyMenuMeta('/province-case', {
    //   pop: 29
    // })
  },
  methods: {
    async logout() {
      const url = await this.$store.dispatch('Logout')
      await this.$store.dispatch('RemoveRoutes')
      // window.location.href = `${process.env.VUE_APP_NAVIGATION_URL}`
      window.location.href = url
    }
  },
  watch: {
    $route: {
      handler(view) {
        if (this.delCacheOnlyArr.includes(view.path)) {
          this.$nextTick(() => {
            tagsViewMutations.delCacheOnly(view)
          })
        }
        const path = this.$route.path
        if (path === '/404') {
          pageMutations.showHeader(false)
        } else {
          pageMutations.showHeader(true)
        }
      },
      immediate: true
    }
  }
}
</script>
