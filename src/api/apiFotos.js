import { useState, useEffect } from 'react'

function useApiFotos() {
  const [fotos, setFotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
   FetchedFotos();
},[]);

const FetchedFotos = async () => {
    const url = `https://jsonplaceholder.typicode.com/photos?_limit=10`;
    try{
        const response = await fetch(url);

        if(!response.ok){
           throw new Error(`Error fetching photos from API`)
        }
        const data = await response.json();
        setFotos(data);

    }catch(error){
         console.error(`Error ${error}`);
    }finally {
        setIsLoading(false); 
    }
} 
  return {fotos, isLoading,}
}

export default useApiFotos;