import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArticleList } from "../network/Apps";



export interface IArticleList {
    page: number,
    hasNext: boolean,
    article: [],
    totalCount: number,
    maxPage: number
}


const initialState:IArticleList = {
    page:0,
    hasNext:false,
    article: [],
    totalCount:0,
    maxPage: 0
}

export const fetchArticleListAction = createAsyncThunk('FETCH_ARTICLE_LIST', async ():Promise<IArticleList> => {
    const articleList = await fetchArticleList(1);
    return articleList.data;
})

export const articleListSlice = createSlice({
    name: 'articleList',
    initialState,
    reducers: {
        // addArticle: (state:IArticle, action) => {
        //     state.title =  action.payload.title;
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(
        fetchArticleListAction.fulfilled, (state:IArticleList, action) => {
            state.article = action.payload.article;
            state.page = action.payload.page;
            state.hasNext = action.payload.hasNext;
            state.totalCount = action.payload.totalCount;
            state.maxPage = action.payload.maxPage;
            return state;
        }
        )
    }
})

// export const { addArticle } = articleSlice.actions;

export default articleListSlice.reducer