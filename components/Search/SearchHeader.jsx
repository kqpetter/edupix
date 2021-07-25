import React from 'react';
import styles from '../../styles/Searchheader.module.css'


const Search = (props) => (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>
            Welcome to <a href="https://edupix.io">eduPix.io</a>
        </h2>
        <div className={styles.inputwrapper}>
            <input className={styles.searchinput} type="search" placeholder="Search resources" onChange={props.handleSearch} />
        </div>
    </div>
);

export default Search;