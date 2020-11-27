import React, {useState, useEffect} from "react";

import {delay} from "../service/delay";

import debounce from "../service/debounce";


export default function SearchComponent({searchSpaces, property}:any) {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState();
    const [error, setError] = useState();

    const debouncedSearchTerm = debounce(searchTerm, 500);

    useEffect(()=>{
        if(debouncedSearchTerm){
            searchSpaces(debouncedSearchTerm)
                .then(delay(500))
                .then((data:string)=>setResults(data))
                .catch((err:any)=>setError(<p>coś poszło nie tak...</p>));
        }else {
            setResults(null);
            setError(null)
        }

    }, [debouncedSearchTerm])

    return (
        <section>
            <form>
                <label>
                    <input type='text' placeholder='write the text..'
                           onChange={({target}) => setSearchTerm(target.value)}/>
                </label>
            </form>
            <ul>
                {results ? results[property].map(function (item: any) {
                        return <li key={results[property].indexOf(item)}>{Object.values(item)}</li>
                    })

                    : error
                }
            </ul>
        </section>
    )
}