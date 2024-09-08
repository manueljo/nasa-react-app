const Main = ({data}) => {
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt={data.title || 'mars landscape image'} className="bgImage" />
    </div>
  );
};

export default Main;
