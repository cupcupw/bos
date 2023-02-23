<template>
  <hor-view :left-arrow="false">
    <router-view></router-view>
    <van-tabbar v-model="active" route>
      <van-tabbar-item v-for="(item, index) in computedTabbar" :key="index" replace :to="item.path" icon="home-o">
        {{ item.meta.title }}
      </van-tabbar-item>
    </van-tabbar>
  </hor-view>
</template>

<script setup lang="ts">
  import tabbar from '@/router/modules/tabbar'
  import { ref, computed } from 'vue'
  defineOptions({
    name: 'Foo',
  })
  const active = ref('')
  const computedTabbar = computed({
    get: () => tabbar[0].children,
    set: () => {},
  })
  console.log('computedTabbar=>', computedTabbar)
</script>

<style scoped></style>
