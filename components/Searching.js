import React, { useState } from 'react';
import SearchHeader from './Search/SearchHeader';
import SearchResult from './Search/SearchResult';
import styles from '../styles/Searching.module.css'
import Head from 'next/head'


const Search = () => {
    const [results, setResults] = useState([])
    const [searchWord, setSearchWord] = useState('')

    // used to delay search until input has stopped
    const debounce = (func, timeout = 500) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        }
    }

    const handleSearch = (evt) => {
        const { value } = evt.target;
        setSearchWord(value);
        
        const search = (value) => {
            if (value.length > 0) {
                // Fetch images
                const images = async () => {
                  const res = await fetch(`https://images-316715.ew.r.appspot.com/api/title/${value}`)
                  const data = await res.json()
                  setResults(data);
                  return data
                }
                images();          
            } else {
                
                setResults([]);
            }
        };
        debounce(search(value))
    }
    return (
        <div>
            <Head>
                <title>eduPix.io</title>
                <meta name="edupix" content="open educational resources" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <div className={styles.container}>
            <div className={styles.main}>
            <SearchHeader handleSearch={handleSearch} />            
            
                { searchWord ? <>{results.length} results for <>{searchWord}</></> : null }
                <div className={styles.grid}>
                        { results.map((result, index) => <SearchResult {...result} key={`result-${index}`} />)} 
                </div>
                
                { results.length === 0 && searchWord ? 
                <>Sorry we couldnt find any content matching <>{searchWord}</></>
                : null }
                { results.length === 0 && !searchWord ? 
                <>Enter a search word above to find relevant resourses</>
                
                : null }
           
            </div>
            </div>
        </div>
    )
}

export default Search;