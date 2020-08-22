import React from  'react';
interface Props{
    Value:string;
    changed : (a:string) => void
}
const BookForm:React.FunctionComponent<Props> = (props)=>{
    const style = {
        height : "24rem",
        backgroundImage : "url('http://www.camerdesign.com/wp-content/uploads/2017/03/admirable-fitted-bookshelves-with-beadboard-background-accent-also-white-cabinet-and-various-books.jpg')"
    };
    const imgStyle ={
        width : "44rem"
    }
    return (
        <div className='w-screen bg-cover flex flex-col justify-center shadow-lg' style={style}>
            <p className='bg-transparent text-center mt-2 text-6xl font-medium font-mono text-blue-800'>E-Library</p>
            <div className='hover:bg-blue-500  flex my-auto mx-auto border-2 border-blue-500 rounded-full'>
                <input className='h-16 bg-transparent text-center text-2xl font-mono font-normal text-blue-500 outline-none hover:text-white'
                style={imgStyle} 
                type="text" 
                value={props.Value} 
                onChange={e => props.changed(e.target.value)}/>
                <img className="h-10 w-10 transform -translate-x-8 translate-y-3" 
                src="https://icon-library.net/images/search-flat-icon/search-flat-icon-9.jpg" alt="searchIcon"/>
            </div>
        </div>
    );
}

export default BookForm;