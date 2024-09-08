const Footer = (props) => {
  const {handleModalToggle, data} = props

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>APOD API PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handleModalToggle}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
