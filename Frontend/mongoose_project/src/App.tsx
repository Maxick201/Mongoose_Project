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
  

  const [value, setValue] = useState <string>("");

  const sortedTodos = [...data].sort((a, b) => {
     if(a.hasOwnProperty(value) && b.hasOwnProperty(value)) {
        const Avalue = a[value];
        const Bvalue = b[value];
         if(typeof Avalue ==="number" && typeof Bvalue === "number"){
            a[value] - b[value]
         }
     }

     
  });

  console.log(value);
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

              <Slider posts={sortedData} loop />

              <StatusWrapper isError={isError} isLoading={isLoading}>
                <Posts posts={sortedData} />
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
