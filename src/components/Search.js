//Contains a form with the input element and the search button
//contains functions that handle the input element and resets the field
//contains a function that calls the search function which is passed as props to it.
import React, {useState} from "react";

const Search = (props) => {
  const[searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);     //set search value into "search result input"
  }

  const resetInputField = () =>{
    setSearchValue("")
  }

  const callSearchFunction = (e) =>{
    e.preventDefault();
    props.search(searchValue);           //search goes here
    resetInputField();
  }



     const onSearchClick = () => {
       document.getElementsByClassName("search")[0].classList.toggle("open");
       // callSearchFunction();
     };




  return (
    <div className="search" >
    <input type="search" className="search-box" />
    <span className="search-button" onClick={onSearchClick}>
      <span className="search-icon"></span>
    </span>
  </div>
  );

}
export default Search;
