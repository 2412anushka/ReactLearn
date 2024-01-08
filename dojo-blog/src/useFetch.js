import {useState,useEffect} from 'react'

const useFetch = (url) => {  // Name of a Hook needs to start with a 'use' word
    const [isPending, setIsPending] = useState(true)
    const [data,setData]=useState(null)
    const [error,setError]=useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {                  // If the server receives data but gives error as a response
                    // console.log(res);
                    if (!res.ok) {
                        throw Error("Could not fetch data");
                    }
                    return res.json()
            })
                .then((data) => {
                    // setError(null)
                    setData(data);
                    setIsPending(false);
             })
                .catch(err =>{
                    setIsPending(false)
                    setError(err.message);  // Network Error
                })
        },(50))
    },[url]); 

    return {data,error,isPending}
}
 
export default useFetch;