import React from "react";
import { Tile } from '../tile/Tile';
import './tileList.css';

export const TileList = ({array}) => {
  const tiles = array.map( (item, index) => {
    return <Tile entry={item} key={item.name + '_' + index}/>
  })
  return (
    <div className="tiles-container">
      {tiles}
    </div>
  );
};
