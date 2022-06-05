export interface SearchResult {
  "id": number
  "title": string
  "reason": Record<string, any>
  "highlight": string[]
  "source": Record<string, any>
}

export interface SearchData {
  "total": number
  "data": SearchResult[]
  "scroll_id": string[]
}
