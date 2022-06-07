import { apiFetch } from './fetch'

interface SearchParams {
  q: string
  slice: string
  must: string
}

interface CompleteParams {
  q: string
  fields: string
}

export async function search_complete(params: Partial<CompleteParams>) {
  const { useToast } = await import('vue-toastification')
  const toast = useToast()

  const completeParams: {
    q: string
    fields: string
  } = {
    q: params.q || '',
    fields: params.fields || ''
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
    must?: string
  } = {
    q: params.q || '',
    slice: params.slice || '0:10',
    must: params.must || '',
  }
  const data = await apiFetch('/search', {
    method: 'POST',
    body: searchParams,
  }).catch((e) => {
    console.error(e)
    toast.error('坏了！服务器坏了！快去打莉沫酱！')
  })
  return data
}
