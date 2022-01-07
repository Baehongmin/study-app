import request from './utill'

export function fetchArticle(){
    return request({
        url: '/writeList',
        method: 'get'
    })
}