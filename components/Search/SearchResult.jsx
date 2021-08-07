import React from 'react';
import Link from "next/link"
import Image from "next/image"
import articleStyles from '../../styles/Article.module.css'



const SearchResult = (props) => {
    // console.log({ props })
    return (
                <Link href={`/article/${props.id}`}>
                    <a className={articleStyles.card}>
                    <h3>{props.title} &rarr;</h3>
                    <p>{props.license}</p>
                    <p>{props.publisher}</p>
                    </a>
                </Link>
                
            
    );
} 


export default SearchResult;