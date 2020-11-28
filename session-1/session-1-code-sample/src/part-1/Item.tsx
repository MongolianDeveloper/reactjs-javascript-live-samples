import React from "react";
import "../App.css";

const ShowHide: React.FC<{ count: number; click: () => void }> = ({
  count,
  click,
}) => {
  return (
    <div className="item" onClick={click}>
      {count}
    </div>
  );
};

export default ShowHide;
