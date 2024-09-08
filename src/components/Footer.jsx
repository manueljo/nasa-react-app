const Footer = (props) => {
  const {handleModalToggle} = props

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>Martian Landscape</h2>
        <h1>APOD API PROJECT</h1>
      </div>
      <button onClick={handleModalToggle}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
