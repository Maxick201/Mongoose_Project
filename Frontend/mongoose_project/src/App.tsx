import './App.css'
import { useFetchPosts } from './hooks/useFetchPost';
import Posts from './components/Posts/Posts';
import StatusWrapper from './components/StatusWrapper/StatusWrapper';
import PaginationButtons from './components/PaginationButtons/PaginationButtons';
import getPagesQuantity from './utils/getPagesQuantity';
import { useState, type DetailedHTMLProps, type SelectHTMLAttributes } from 'react';
import ShowMoreButton from './components/ShowMoreButton/ShowMoreButton';
import LeftButton from './components/RightAndLeftButtons/LeftButton/LeftButton';
import RightButton from './components/RightAndLeftButtons/RightButton/RightButton';
import Slider from './components/Slider/Slider';
import Cart from "./pages/Cart.tsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import type { PostType } from './components/Post/Post.tsx';
// import TrafficLight from './components/TrafficLight/TrafficLight.tsx';


function App() {
  const [page, setPage] = useState(1);
  const [save, setSave] = useState<boolean>(false);
  const [sortDesc, setSortDesc] = useState(true); // true = от большего id к меньшему
  const { isLoading, isError, data } = useFetchPosts(page, 10, save);
  const quantity = getPagesQuantity(100, 10);
  
  const [searchValue, setSearchValue] = useState("");

  const [searchResults, setSearchResults] = useState([]);


    const [value, setValue] = useState <string>("");

    // const sortedTodos = [...data].sort((a:PostType, b:PostType) => {
    //    if(a.hasOwnProperty(value) && b.hasOwnProperty(value)) {
    //       const Avalue = a[value] as unknown;
    //       const Bvalue = b[value];
    //        if(typeof Avalue ==="number" && typeof Bvalue === "number"){
    //           return a[value] - b[value]
    //        }
    //    }


    // });

  

    const sortedPosts = [...data].sort((a, b) => {
      if (a.hasOwnProperty(value) && b.hasOwnProperty(value)) {
        const Avalue = a[value];
        const Bvalue = b[value];
        if (typeof Avalue === "number" && typeof Bvalue === "number") {
          return a[value] - b[value];
        } else if (typeof Avalue === "string" && typeof Bvalue === "string") {
          return a[value].localeCompare(b[value]);
        }
      }
      return 0;
    });
  
    console.log(searchValue , "search value")
    const search = (t)=>{
      const foundedPosts = sortedPosts.filter((p)=> p.title === t);
      console.log(foundedPosts + "Pam pam");

      if(!foundedPosts.length)
      {
        console.log("sfdsdasd");
        setSearchResults(foundedPosts);
      }
      
    }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>


              <select value = {value} onChange = {(e)=> setValue(e.target.value)}>
                <option value="">Выберите выриант</option>
                <option value="id">По Id</option>
                <option value="title">По Title</option>
                <option value="userid">По UserId</option>
              </select>

              <form onSubmit={(e) => {
                e.preventDefault();
                search(searchValue);
              }}>
                <input onChange = {(e) => {setSearchValue(e.target.value)}} type = "search" placeholder='Title...'/>
              </form>
              <div style={{ display: "flex" }}>
                <LeftButton page={page} setPage={setPage} setSave={setSave} />
                <PaginationButtons
                  quantity={quantity}
                  page={page}
                  setPage={setPage}
                  setSave={setSave}
                />
                <RightButton page={page} setPage={setPage} setSave={setSave} />
              </div>
              

              <Slider posts={sortedPosts} loop />

              {/* <StatusWrapper isError={isError} isLoading={isLoading}>
                {searchResults.length > 0} ? (
                    <Posts posts={searchResults} />
                  ) : (
                    <Posts posts={sortedPosts} />
                  );
              </StatusWrapper> */}

              <StatusWrapper isError={isError} isLoading={isLoading}>
                {searchResults.length > 0 ? (
                  <Posts posts={searchResults} />
                ) : (
                  <Posts posts={sortedPosts} />
                )}
              </StatusWrapper>

              {page < 10 && (
                <ShowMoreButton setSave={setSave} setPage={setPage} />
              )}
            </>
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

// return (
//   <>
//   <TrafficLight></TrafficLight></>
// );




export default App
