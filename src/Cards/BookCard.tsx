import React from 'react';
import Helper from './Helper';
interface Props{
    book : any
}
const BookCard:React.FunctionComponent<Props> = (props)=>{
    const obj=props.book.volumeInfo;
    const res=Helper(obj);
    const Data={...res};
    const style={
        width:"20rem"
    }
    return (
        <div className='transition duration-500 ease-in-out bg-white h-56 shadow-md rounded-lg flex overflow-hidden transform hover:-translate-y-1 hover:scale-105' style={style}>
            <img src={Data.imgsource} alt="book" className='h-56'/>
            <div className = 'ml-2 flex flex-col item-center'>
                <a href={Data.preview} className='h-16 mt-3 text-left pr-2 text-lg font-semibold text-blue-500 hover:text-blue-700 hover:underline'>{Data.title}</a>
                <div className='mt-16'>
                    <p className='text-left font-semibold text-base text-gray-600'>{Data.author[0]}</p>
                    <p className='italic text-gray-500 text-sm'>{Data.publishedDate}</p>
                </div>
            </div>
        </div>
    );
}
export default BookCard;