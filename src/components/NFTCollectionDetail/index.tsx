import styles from "./styles.module.css"
import React, { useEffect } from "react"
import NFTCollectionModel from "../../models/NFTCollectionModel";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as NFTCollectionsStore from "../../store/nftcollections.duck"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";

type NFTCollectionDetailProps = {}

type NFTCollectionDetailParams = {
    collectionId: string
}

const useSelectedCollection = () => {
    const dispatch = useDispatch();
    const {collectionId} = useParams<NFTCollectionDetailParams>()
    
    const selectedCollection : NFTCollectionModel | undefined = useSelector(
        (state: RootState) => state.nftCollections.selectedItem
    )

    useEffect(() => {
        axios.get(`https://api.opensea.io/api/v1/collection/${collectionId}`)
            .then( response =>  {
                const payload : NFTCollectionsStore.SetSelectedItemActionType = {
                    selectedItem: response.data.collection
                }
                dispatch(NFTCollectionsStore.actions.setSelectedItem(payload))
            })
        console.log("Fetch Collection");
    }, [collectionId])

    return selectedCollection
}

export function NFTCollectionDetail (props : NFTCollectionDetailProps) {
    const selectedCollection : NFTCollectionModel | undefined = useSelectedCollection()
    return (
        <div className={styles.item}>
            <h4 className={styles.title}>{selectedCollection?.name}</h4>
            <p className={styles.description}>{selectedCollection?.description}</p>
        </div>
    )
}