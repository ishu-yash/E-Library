import React from 'react';
import BookCard from "../Cards/BookCard";

interface Props{
    bookArray : Array<any>
}
const BookList:React.FunctionComponent<Props> = (props) =>{
    const list = props.bookArray.map(book => <BookCard book={book} key={book.etag}></BookCard>);
    const style={
        backgroundImage : "url('https://c8.alamy.com/comp/K1YR7H/abstract-blurred-white-bookshelves-with-books-manuals-and-textbooks-K1YR7H.jpg')",
        backgroundAttachment: "fixed"
    }
    return (
        <div className='pt-6 pl-2 pb-6 pr-2 grid grid-flow-col grid-cols-4 grid-rows-2 gap-6 w-screen' style={style}>
            {list}
        </div>
    );
}

export default BookList;