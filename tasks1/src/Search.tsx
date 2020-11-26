import React,{useState} from "react";
import {searchSpaces} from "./service/search";


export default function Search(){

    const [results, setResults]=useState();
    const [error, setError]=useState();

    const inputStyle ={
        marginTop:"50px",
        fontSize:"20px"
    }
    const liStyle ={
        listStyleType:"none",
        fontSize: "1.5em",
        lineHeight:"1.2em"
    }

    function ChangeInput(target:string){
        if(target){
            searchSpaces(target).then((data)=>setResults(data)).catch(err=>setError(<p>coś poszło nie tak...</p>));
            console.log(target)
        } else {
            setResults(null);
            setError(null)
        }


    }

    if(results){
        console.log(results.spaces)
    }

    return(
        <section>
            <form>
                <label>
                    <input style={inputStyle} type='text' placeholder='write the text..' onChange={({target})=>ChangeInput(target.value)}/>
                </label>
            </form>
            <ul>
                {results? results.spaces.map(function (item:any){
                        return <li style={liStyle} key={results.spaces.indexOf(item)}>{item.name}</li>
                    })

                    :error
                }
            </ul>
        </section>
    )
}