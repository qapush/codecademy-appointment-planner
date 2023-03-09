import React from "react";

export const Tile = ({entry}) => {
  
  const result = Object.entries(entry).map( (item, index) => {
    return <p className={index === 0 ? 'tile-title' : 'title'} key={item[0]}>{item[1]}</p>
  })

  return (
    <div className="tile-container">
      {result}
    </div>
  );
};
