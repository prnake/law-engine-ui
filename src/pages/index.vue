<script setup lang="ts">
import { useEnter } from '~/composables/search'
import { useSearchStore } from '~/stores/search'

import { bannerUrl } from '~/config'

const { enter } = useEnter()
const search = useSearchStore()
const keyword = ref(search.savedKeyword)

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col justify-center items-center" h="full">
    <img width="280" height="156" class="w-70 filter drop-shadow" m="-b-4" :src="bannerUrl" alt="Rimo And XiaoYun">

    <InputBox @update_keyword="(w) => {keyword = w}" v-model="keyword" m="t-0 b-4" @enter="() => { enter(keyword) }" :button="true" />

    
  </div>
  <Footer />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
