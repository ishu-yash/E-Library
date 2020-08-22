const Data= (obj:any)=>{
    const defaultObj={ thumbnail :"https://www.koganpage.com/images/book-placeholder.png"};
    const defaultArray=['Anonymous']
    let imgObj=(obj.imageLinks===null)?defaultObj:obj.imageLinks;
    if(imgObj===undefined)
        imgObj=defaultObj;
    let author:Array<string>=(obj.authors===null)?defaultArray:obj.authors;
    if(author===undefined)
        author=defaultArray;
    const imgsource=imgObj.thumbnail;
    const title = obj.title;
    const publishedDate= obj.publishedDate;
    const preview=obj.previewLink;
    return {imgsource,title,publishedDate,preview,author};
}
export default Data;