import code from "../assets/pngegg 1.png";

const Barcode = () => {
  return (
    <div>
      <img src={code} alt="" className="barcode_image" />
      <p className="img_para">powered by intralink</p>
    </div>
  );
};

export default Barcode;
