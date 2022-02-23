import styles from "./styles.module.css"
import React from "react";

export class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <h6 className={styles.text}>@2022 Company</h6>
                <h6 className={styles.text}>Stuff</h6>
            </div>
        )
    }
}