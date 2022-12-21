import React from "react";
import ReactDOM from "react-dom";
import style from "./Popup.module.css";

const OverlayRoot = (props) => {
  return (
    <div onClick={props.closePopup} className={style.PopupBackground}>
      <div className={style.PopupWrapper}>
        <div className={style.PopupHeader}>Invalid input</div>
        <div className={style.PopupBody}>
          <p>{props.error}</p>
        </div>
        <div className={style.PopupFooter}>
          <button className={style.FooterButton} onClick={props.closePopup}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const Popup = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverlayRoot 
            closePopup={props.closePopup}
            error={props.error}

        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Popup;
