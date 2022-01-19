import { Grid, Box, Button, GridItem } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { fetchArticleLikeAction, fetchArticleUnLikeAction } from "../store/articleSlice"
import { RootState } from "../store/store"

const ArticleComponent = () => {
    const article = useSelector((state: RootState) => state.article)
    const dispatch = useDispatch()
    return (
    <Grid bg='papayawhip'>
        {article.isData &&<GridItem>
        <Box>제목 : {article.title}</Box>
        <Box>내용 : {article.contents}</Box>
        <Box>좋아요 : {article.likeCount}</Box>
        <Box>싫어요 : {article.unLikeCount}</Box>
        <Button onClick={()=>dispatch(fetchArticleLikeAction(article._id))}> 좋아요 </Button>
        <Button onClick={()=>dispatch(fetchArticleUnLikeAction(article._id))}> 싫어요 </Button>
        </GridItem>
        }
    </Grid>)
}

export default ArticleComponent