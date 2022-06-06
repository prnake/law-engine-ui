import { useSearchStore } from '~/stores/search'

export const useEnter = () => {
  const search = useSearchStore()
  const router = useRouter()

  return {
    enter(keyword: string, pro: boolean = false) {
      if (keyword) {
        search.setNewKeyword(keyword)
        if (pro)
          router.push(`/prosearch?q=${encodeURIComponent(keyword)}`)
        else
          router.push(`/search?q=${encodeURIComponent(keyword)}`)
      }
    },
  }
}
