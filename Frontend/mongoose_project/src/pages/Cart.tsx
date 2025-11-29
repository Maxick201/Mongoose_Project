import { useContext } from "react";
import { PostContext } from "../components/CartContext/PostContext";


export default function Cart() {
  const { posts } = useContext(PostContext);

  return (
    <div>
      <h1>Корзина</h1>

      {posts.length === 0 && <p>Корзина пустая</p>}

      {posts.map((item, index) => (
        <div key={index} style={{border: "1px solid white", padding: "10px", margin: "10px"}}>
          <p>ID: {item.id}</p>
          <p>TITLE: {item.title}</p>
          <p>BODY: {item.body}</p>
        </div>
      ))}
    </div>
  );
}
