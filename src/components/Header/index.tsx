import styles from "./styles.module.css"
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

export class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <h2 className={styles.title}>NFT Collections</h2>
                <div className={styles.search}>
                    <SearchIcon className={styles.search_icon}/>
                    <InputBase
                        className={styles.search_input}
                        placeholder="Search…"
                    />
                </div>
            </div>
        )
    }
}