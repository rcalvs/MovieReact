function Banner(props){
  const { banner } = props;
  
  return (
    <div className="border-4">
      {/* {console.log(banner)} */}
      {
      !banner 
        ? <p>Render a Movie Banner</p>
        : 
        <div className="w-full relative h-96">
          <img
            className="object-cover object-center h-96 w-full z-0 "
            alt="poster"
            src={`https://image.tmdb.org/t/p/w500/${banner.backdrop_path}`}
          />
            <div className="w-full top-0 absolute h-96 bg-gradient-to-l from-transparent to-black">
              <h1 className="text-white font-bold absolute inset-x-0 bottom-0">{ banner.title }</h1>
            </div>
          
        </div>


      }
      
    </div>
  );
} 

export default Banner;