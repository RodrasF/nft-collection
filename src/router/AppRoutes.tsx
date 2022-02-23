import React from "react";
import { Routes, Route} from "react-router-dom";
import { NFTCollectionDetail, NFTCollectionList } from "../components";

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<NFTCollectionList />} />
        <Route path="/:collectionId" element={<NFTCollectionDetail/>} />
      </Routes>
    );
}