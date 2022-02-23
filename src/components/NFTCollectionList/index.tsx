import styles from "./styles.module.css";
import React, { useEffect } from "react";
import NFTCollectionModel from "../../models/NFTCollectionModel";
import { NFTCollectionListItem } from "..";
import * as NFTCollectionsStore from "../../store/nftcollections.duck";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

type NFTCollectionListProps = {};

const useCollections = () => {
  const dispatch = useDispatch();

  const collections: Array<NFTCollectionModel> | undefined = useSelector(
    (state: RootState) => state.nftCollections.items
  );

  useEffect(() => {
    axios
      .get(`https://api.opensea.io/api/v1/collections?offset=0&limit=10`)
      .then((response) => {
        const payload: NFTCollectionsStore.SetItemsActionType = {
          items: response.data.collections,
        };
        dispatch(NFTCollectionsStore.actions.setItems(payload));
      });
    console.log("Fetch Collections");
  }, []);

  return collections;
};

export function NFTCollectionList(props: NFTCollectionListProps) {
  const collections = useCollections();

  return (
    <ul className={styles.list}>
      {collections?.map((item, index) => (
        <li className={styles.item} key={index}>
          <NFTCollectionListItem item={item} />
        </li>
      ))}
    </ul>
  );
}
