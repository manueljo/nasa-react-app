const Sidebar = (props) => {
  const { handleModalToggle, data } = props;

  return (
    <div className="sidebar">
      <div className="bgOverlay" onClick={handleModalToggle}></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">Description - {data?.date}</p>
          <p>
           {data?.explanation}
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
