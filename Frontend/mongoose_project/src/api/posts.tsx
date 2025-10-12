// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

import axios from "axios";

//ИЗУЧИТЬ
export async function getPosts(){
    return await axios.get('https://jsonplaceholder.typicode.com/posts');
}