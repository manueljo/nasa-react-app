const Sidebar = (props) => {
  const { handleModalToggle } = props;

  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleModalToggle}></div>
      <div className="sidebarContents">
        <h2>Martian Landscape</h2>
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            voluptatum nemo quibusdam velit mollitia numquam minima laudantium
            praesentium maiores. Dolor!
          </p>
        </div>
        <button onClick={handleModalToggle}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
