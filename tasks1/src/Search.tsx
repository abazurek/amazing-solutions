import React, {useState, useEffect} from "react";
import {searchSpaces, delay} from "./service/search";
import debounce from "./debounce";


export default function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState();
    const [error, setError] = useState();

    const debouncedSearchTerm = debounce(searchTerm, 500);

    useEffect(()=>{
        if(debouncedSearchTerm){
            searchSpaces(debouncedSearchTerm)
                .then(delay(500))
                .then(data=>setResults(data))
                .catch(err=>setError(<p>coś poszło nie tak...</p>));
        }else {
            setResults(null);
            setError(null)
        }

    }, [debouncedSearchTerm])

    const inputStyle = {
        marginTop: "50px",
        fontSize: "20px"
    }
    const liStyle = {
        listStyleType: "none",
        fontSize: "1.5em",
        lineHeight: "1.2em"
    }


    return (
        <section>
            <form>
                <label>
                    <input  style={inputStyle} type='text' placeholder='write the text..'
                           onChange={({target}) => setSearchTerm(target.value)}/>
                </label>
            </form>
            <ul>
                {results ? results.spaces.map(function (item: any) {
                        return <li style={liStyle} key={results.spaces.indexOf(item)}>{item.name}</li>
                    })

                    : error
                }
            </ul>
        </section>
    )
}