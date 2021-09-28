function Banner(props){
  const { movie } = props;

  return (
    <div className="border-4">

      {
      !movie 
        ? <p>Um titulo</p>
        : <h1 className="font-bold">{ movie.title }</h1>
      }
      
    </div>
  );
} 

export default Banner;