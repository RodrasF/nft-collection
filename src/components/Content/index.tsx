import styles from "./styles.module.css"
import * as React from 'react';
import NFTCollectionModel from "../../models/NFTCollectionModel";
import AppRoutes from "../../router/AppRoutes";

type ContentProps = {}

export function Content(props: ContentProps) {
    
    return (
      <div className={styles.content}>
        <AppRoutes/>
      </div>
    )
}