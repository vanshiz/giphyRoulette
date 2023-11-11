import React,{useState} from 'react';
import Spinner from './Spinner';
import axios from 'axios';
import { useEffect } from 'react';
import useGif from '../hooks/useGif';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
export default function Random() {

    // const [gif,setGif]=useState('');
    // const[loading,setLoading]=useState(true);
    // async function fetchData(){
    //   setLoading(true);
    //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //   const {data}=await axios.get(url);
    //   const imageSource=data.data.images.downsized_large.url;
    //   setGif(imageSource);
    //   setLoading(false);
    // }

    // useEffect(()=>{
    //   fetchData();
    // },[])

    const {gif,loading,fetchData}=useGif();
    function clickHandler(){
      fetchData();
    }
 
  return(
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="underline text-2xl uppercase font-extrabold mt-5">A Random Gif</h1>
      {
        loading?(<Spinner/>):(<img src={gif} width="300" />)
      }
      <button onClick={clickHandler} className="w-11/12 bg-green-300 opacity-1 w-10/12 h-10 text-lg px-2 rounded-lg mb-5">Generate</button>
    </div>
  );
}
