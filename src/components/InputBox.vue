<script lang="ts" setup>
const props = defineProps<{
  modelValue: string
  button: boolean
}>()
defineEmits(['update_keyword','enter'])
const { t } = useI18n()
const showSuggest = function() { console.log(123)}

const keyword = ref('');
keyword.value = props.modelValue;

import { onMounted, ref } from 'vue'

import { search_complete } from '~/api'

const querySearch = async (queryString: string, cb: any) => {
  const results = await search_complete({
    q: queryString,
  });
  // call callback function to return suggestions
  if(results && results.data)
    cb(results.data);
  else
    cb([]);
}
// const querySearch = (queryString: string, cb: any) => {
//   const results = queryString
//     ? restaurants.value.filter(createFilter(queryString))
//     : restaurants.value
//   // call callback function to return suggestions
//   cb(results)
// }

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}

onMounted(() => {
})
</script>

<template>
  <div
    class="sese-search-wrapper wrapper relative flex justify-center items-center"
    p="2"
    m="y-4"
    rounded="full"
  >
    <el-autocomplete
        v-model="keyword"
        :fetch-suggestions="querySearch"
        :trigger-on-focus="false"
        clearable
        class="sese-input"
        :prefix-icon="Search"
        @select="handleSelect"
        @keydown.enter="$emit('update_keyword', keyword);$emit('enter')"
      />
  </div>
  <div m="b-18" v-if="button">
      <button
        class="sese-btn m-3 text-sm btn "
        bg="gradient-to-r"
        @click="$emit('update_keyword', keyword);$emit('enter')"
      >
        {{ t('button.search') }}
      </button>

      <button
        class="sese-btn m-3 text-sm btn "
        bg="gradient-to-r"
        @click="$router.push(`/prosearch`)"
      >
        {{ t('button.prosearch') }}
      </button>
    </div>
</template>

<style lang="scss">
.sese-search-wrapper {
  transition: 0.4s;
  &:hover {
    --tw-shadow: 0 10px 30px -10px rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1);
    -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
  }

}

.sese-input {
  width: 30.5rem;
}

@media (max-width: 639.9px) {
  .sese-input {
    width: calc(100vw - 8rem);
  }
}
</style>
