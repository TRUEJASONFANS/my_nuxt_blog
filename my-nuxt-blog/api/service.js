import ax from './axios'

// 获取文章列表
export function getArts (params) {
  return ax.get('/arts')
          .then(res => res.data)
}

// 文章归档
export function getallArts (params) {
  return ax.get('/allArticle')
          .then(res => res.data)
}

// 获取单个文章
export function getArt (data) {
  return ax.get(`/article/${data.id}`)
          .then(res => res.data)
}
