// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

import axios from "axios";

//ИЗУЧИТЬ
export async function getPosts(page ?: number, limit ?: number){
    return await axios.get('https://jsonplaceholder.typicode.com/posts',{ 
        params: {
            _page : page,
            _limit : limit
        }
    });

}