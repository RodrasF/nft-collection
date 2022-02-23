import styles from "./styles.module.css";
import React from "react";
import NFTCollectionModel from "../../models/NFTCollectionModel";
import { Link } from "react-router-dom";

type NFTCollectionListItemProps = {
  item: NFTCollectionModel;
};

export function NFTCollectionListItem(props: NFTCollectionListItemProps) {
  return (
    <Link to={props.item.slug ?? "/"} style={{ textDecoration: "none" }}>
      <div className={styles.item}>
        <h4 className={styles.title}>{props.item.name}</h4>
        <p className={styles.description}>{props.item.description}</p>
      </div>
    </Link>
  );
}
