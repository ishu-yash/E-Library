import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from "../Components/BookForm";
import BookList from "../Components/BookList";

const BookContainer:React.FunctionComponent = ()=>{
    const [Books,setBooks] = useState([]);

    const [searchKey, setSearchKey] = useState('Competitive Programming');

    const searchKeyChangeHandler = (keyword:string)=>{
        setSearchKey(keyword);
    }

    useEffect(()=>{
        axios.get("https://www.googleapis.com/books/v1/volumes?maxResults=8&q="+searchKey).then(response=>{
            console.log(response);
            setBooks(response.data.items);
        });
    },[searchKey]);
    
    return (
    <div>
        <BookForm Value={searchKey} changed={searchKeyChangeHandler}/>
        <BookList bookArray={Books}/>
    </div>);
}

export default BookContainer;