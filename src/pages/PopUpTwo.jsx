import React, { useRef, useState } from "react";
import Button from "../components/Button";
import Barcode from "../components/Barcode";
import link from "../assets/link.png";
import Alert from "../components/Alert";

const PopUpTwo = ({ closePopUp }) => {
  const [successAlert, setSuccessAlert] = useState(false);
  const linkRef = useRef(null);

  //   const handleCopyLink = () => {
  //     console.log(linkRef);
  //     // Select the text inside the <p> element
  //     linkRef.current.select();
  //     // Copy the selected text to the clipboard
  //     document.execCommand("copy");
  //   };

  return (
    <div className="popuptwo_container">
      {successAlert && (
        <Alert
          text="link copied"
          setSuccessAlert={setSuccessAlert}
          bgColor="green"
        />
      )}
      <div className="popuptwo_content">
        <h2>HERE IS YOUR LINK</h2>
        <p>
          SHARE WITH YOUR FRIENDS FAMILY OR <br />
          ANYONE YOU WANT!!
          <br />
          <br />
          CLICK THE LINK TO COPY
        </p>
      </div>
      <div className="link_container">
        <img src={link} alt="" />
        <p>
          <textarea
            ref={linkRef}
            onClick={() => {
              //   handleCopyLink;
              //   console.log(linkRef);
              // Select the text inside the <p> element
              linkRef.current.select();
              // Copy the selected text to the clipboard
              document.execCommand("copy");
              setSuccessAlert(true);
            }}
            type="text"
            value="ZKwBoCBH1WxIV1xFx/Untitled?type=design&node-id=0-1&mode=design&t=FyKKW9LSZx66hsEw-0"
            readOnly
          />
        </p>
      </div>
      <div className="popuptwo_btns">
        <Button text="SHARE" />
        <Button text="CLOSE" onClick={closePopUp} />
      </div>

      <Barcode />
    </div>
  );
};

export default PopUpTwo;
