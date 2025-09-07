function Title({title, titleSpan, desc}){
    return(
    <div className="">
        <h1 className="text-center text-2xl md:text-4xl font-bold mb-2 mt-20">{title} <span className="underline font-light">{titleSpan}</span></h1>
        <p className="text-gray-500 max-w-80 mb-8 text-center mx-auto">{desc}</p>
    </div>)
}
export default Title;