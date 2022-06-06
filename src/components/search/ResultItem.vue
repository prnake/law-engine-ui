<script lang="ts" setup>
import type { SearchResult } from '~/api/types'

defineProps<{
  result: SearchResult
}>()

/**
 * 高亮文本
 */
const highlightedText = (content: string, keywords: string[]) => {
  // to solve xss
  let result = content.replace(/</g, '&lt;').replace(/>/g, '&gt;')
  keywords.forEach((item) => {
    const re = new RegExp(item, 'gi')
    result = result.replace(re, (val: string) => {
      return `<em class="highlight">${val}</em>`
    })
  })
  return result
}
</script>

<template>
  <div class="result-item relative" flex="~ col" text="left" m="b-4">
    <!-- <a :href="result['id']" target="_blank" class="block truncate">
      <cite class="not-italic" text="xs">{{ result['title'] }}</cite>
    </a> -->
    <!-- <template v-if="result['highlight']"> -->
      <a
        :href="result['id']" target="_blank"
        class="text-lg text-blue-900 hover:underline dark:text-blue-500"
      >
        <h3 class="top-0 truncate">
          {{ result['title'] }}
        </h3>
      </a>
      <cite class="not-italic" text="xs">{{ result['tag'].join("｜") }}</cite>
      <p text="sm" v-html="result['highlight'].join('......')" />
    <!-- </template>
    <div v-else>
      <div class="inline-flex justify-start items-center border" p="1" m="1">
        <div i-ri-alert-line />
        <span m="l-1">我们的探测器对这个奇怪的网站没有效果！</span>
      </div>
    </div> -->

    <Transition>
      <div class="reason-container absolute top-0 -right-60 min-h-full justify-center hidden opacity-0 transition" flex="~ col">
        <blockquote class="search-reason" p="l-2" text="xs">
          <span v-for="value, key in result['reason']" :key="key" class="block">
            {{ key }}：{{ value.toFixed(3) }}
          </span>
        </blockquote>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
.result-item {
  &:hover {
    .reason-container {
      opacity: 1;
    }
  }
}

.search-reason {
  color: var(--se-c-text-light);
  border-left: 4px solid var(--se-c-text-light);
}
</style>
