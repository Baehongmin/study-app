import request from './utill'

export interface IArticleList {
    page: string,
    hasNext: boolean,
    article: [],
    totalCount: number
}

export function fetchArticleList(page:number){
    return request({
        url: '/articleList',
        method: 'get',
        params: {
            page:page
        }
    })
}

export function fetchArticle(id:string) {
    return request({
        url: '/article',
        method: 'get',
        params: {
            id: id
        }
    })
}

export function addArticleLike(id:string) {
    return request({
        url: '/articleLike',
        method: 'post',
        params: {
            id: id
        }
    })
}

export function addArticleUnLike(id:string) {
    return request({
        url: '/articleUnLike',
        method: 'post',
        params: {
            id: id
        }
    })
}