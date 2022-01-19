import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addArticleLike, fetchArticle, addArticleUnLike } from "../network/Apps";

export interface IArticle {
    title: string,
    contents: string,
    writer:string,
    likeCount?:number,
    unLikeCount?:number
    isData:boolean,
    _id:string
}

const initialState:IArticle = {
    title: '',
    contents: '',
    writer:'',
    likeCount:0,
    unLikeCount:0,
    _id:'',
    isData:false
}

export const fetchArticleAction = createAsyncThunk('FETCH_ARTICLE', async (id:string):Promise<IArticle> => {
    const articleList = await fetchArticle(id);
    return articleList.data.list;
})

export const fetchArticleLikeAction = createAsyncThunk('ADD_ARTICLE_LIKE', async (id:string) => {
    const articleLikeCount = await addArticleLike(id);
    return articleLikeCount.data;
})

export const fetchArticleUnLikeAction = createAsyncThunk('ADD_ARTICLE_UNLIKE', async (id:string) => {
    const articleUnLikeCount = await addArticleUnLike(id);
    return articleUnLikeCount.data;
})

export const articleSilce = createSlice({
    name: 'article',
    initialState,
    reducers:{
    },
    extraReducers:(builder) => {
        builder.addCase(fetchArticleAction.fulfilled, (state:IArticle, action) => {
            state.title = action.payload.title;
            state.contents = action.payload.contents;
            state.writer = action.payload.writer;
            state.likeCount = action.payload.likeCount;
            state.unLikeCount = action.payload.unLikeCount;
            state._id = action.payload._id;
            state.isData = true;
            return state;
        }),
        builder.addCase(fetchArticleLikeAction.fulfilled, (state:IArticle, action) => {
            state.likeCount = action.payload.likeCount;
            return state;
        }),
        builder.addCase(fetchArticleUnLikeAction.fulfilled, (state:IArticle, action) => {
            state.unLikeCount = action.payload.unlikeCount;
            return state;
        })
    }
})

export default articleSilce.reducer