import { apiFetch } from './fetch'

interface SearchParams {
  q: string
  slice: string
}

interface CompleteParams {
  q: string
}

export async function search_complete(params: Partial<CompleteParams>) {
  const { useToast } = await import('vue-toastification')
  const toast = useToast()

  const completeParams: {
    q: string
  } = {
    q: params.q || ''
  }
  const data = await apiFetch('/search_complete', {
    params: completeParams,
  }).catch((e) => {
    console.error(e)
    toast.error('坏了！服务器坏了！快去打莉沫酱！')
  })
  return data
}

export async function search(params: Partial<SearchParams>) {
  const { useToast } = await import('vue-toastification')
  const toast = useToast()

  const searchParams: {
    q: string
    slice?: string
  } = {
    q: params.q || '',
    slice: params.slice || '0:10',
  }
  const data = await apiFetch('/search', {
    params: searchParams,
  }).catch((e) => {
    console.error(e)
    toast.error('坏了！服务器坏了！快去打莉沫酱！')
  })
  return data
}
