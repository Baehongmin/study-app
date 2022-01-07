import { fetchArticle } from "../network/Apps"

export default function Home() {
  fetchArticle().then((content) => {
    console.log(content)
  })
  return (
    <div> HELLO WORLD STUDY </div>
  )
}
