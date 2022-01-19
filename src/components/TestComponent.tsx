import { Button, Table, Tbody, Td, Th, Thead, Tr, Wrap } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticleListAction } from "../store/articleListSlice";
import { fetchArticleAction } from "../store/articleSlice";
import { RootState } from "../store/store";

const TestComponent = () => {
    const list = useSelector((state: RootState) => state.articleList.article)
    const dispatch = useDispatch()
    useEffect(()=>{dispatch(fetchArticleListAction())},[])
    return (
      <Wrap>
        <Button
            aria-label="Increment value"
            onClick={() => dispatch(fetchArticleListAction())}
          >
            새로고침
        </Button>
      <Table>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>타이틀</Th>
              <Th>날짜</Th>
              <Th>좋아요</Th>
              <Th>싫어요</Th>
            </Tr>
          </Thead>
          <Tbody>
          {list.map((item:any, index:number) => {
            return (
              <Tr key={index} onClick={() => dispatch(fetchArticleAction(item._id))}>
                <Td>{index}</Td>
                <Td>{item.title}</Td>
                <Td>{item.date}</Td>
                <Td>{item.likeCount}</Td>
                <Td>{item.unLikeCount}</Td>
              </Tr>)
          })}
          </Tbody>
      </Table>
    </Wrap>
    )
}

export default TestComponent;