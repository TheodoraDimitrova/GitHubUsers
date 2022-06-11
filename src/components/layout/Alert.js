import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const { alert, removeAlert } = useContext(AlertContext);
  const handleClose = (e) => {
    e.preventDefault();
    removeAlert();
  };

  return (
    alert !== null && (
      <>
        <div className={`alert ${alert.type}-msg`}>
          <i className="fa fa-info-circle">{alert.msg}</i>
          <span className="close-btn" onClick={handleClose}>
            &times;
          </span>
        </div>
      </>
    )
  );
};

export default Alert;
