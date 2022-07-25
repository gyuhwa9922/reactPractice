import React from "react";
import Book from "./book";

function Library(props){
  return (
    <div>
    <Book name = "파이썬이란 ? " age = '100'/>
    <Book name = "리엑트란 ? " age = '200'/>
    <Book name = "자바스크립트란 ?" age = '300'/>
    </div>
  );
}

export default Library;