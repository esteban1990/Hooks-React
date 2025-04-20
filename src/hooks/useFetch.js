import React, { useEffect, useState } from 'react'


let localCache = {}

export const useFetch = (url) => {
    
    const [state,setState] = useState({
        data: null,
        isLoading: false,
        hasError: false
    });


    useEffect(() => {
        getFetch();
   
    },[url])


    const setLoadingState = () => {
        setState({
            data: null,
            isLoading:true,
            hasError:false,
            error:null
        })
    }




    const getFetch = async() => {

        if(localCache[url]){
            setState({
                data : localCache[url],
                isLoading:false,
                hasError: false,
                error: null
            });
            return;

        }
        
        setLoadingState();

        const resp = await fetch(url);
        
        //sleep
        await new Promise(resolve => setTimeout(resolve,1500));
       //
        if(!resp.ok){
            setState({
                data:null,
                isLoading:false,
                hasError:true,
                error:{
                    code: resp.status,
                    messsage:resp.statusText,
                }
            });
            return;
        }


        const data =  await resp.json()
        // console.log({data})
        setState({
            data: data,
            isLoading:false,
            hasError:false,
            error:null
        })

    }

    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError:state.hasError

    }
}
