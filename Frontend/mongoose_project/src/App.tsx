import './App.css'
import { useFetchPosts } from './hooks/useFetchPost';
import Posts from './components/Posts/Posts';


function App() {
 const {isLoading,isError,data} = useFetchPosts();
  return (
    <>
      {isError && <h2>{isError}</h2>}
      {isLoading ? <h2>Идет загрузка...</h2>: data.length ? < Posts posts={data}/> : <h2>Постов нету</h2>}
    </>
  )
}

export default App
