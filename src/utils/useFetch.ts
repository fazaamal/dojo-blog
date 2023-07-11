import { useState , useEffect} from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null); 
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(()=>{
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal}).then(res=>{
        if(!res.ok) throw Error('Could not fetch data');
        return res.json()
      }).then(data=>{
        console.log(data);
        setData(data)
        setIsPending(false)
        setError(null)
      }).catch(err=>{
        if(err.name === 'AbortError'){
          console.log('fetch aborted');
        }else{
          console.log(err.message);
          setError(err.message)
          setIsPending(false)  
        }
      })
  
    }, 300)

    
    return () => abortCont.abort();
  }, [url])

  return { data, isPending, setData, error };
}
 
export default useFetch;