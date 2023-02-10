import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <React.Fragment>
      <input
        className="TodoSearch"
        placeholder="This is a placeholder"
        onChange={onSearchValueChange}
        value={searchValue}
      ></input>
    </React.Fragment>,
    <p>{searchValue}</p>,
  ];
}

export { TodoSearch };
