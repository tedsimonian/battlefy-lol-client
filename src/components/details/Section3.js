import React from "react";
import SegmentGrid from "../reusable/SegmentGrid";
import RowColumn from "../reusable/RowColumn";

const Section3 = ({ level, kda, itemNames }) => {
  return (
    <SegmentGrid color="green">
      <RowColumn headerName={"Level"} headerColor={"teal"} columnData={level} />
      <RowColumn headerName={"K/D/A"} headerColor={"blue"} columnData={kda} />
      <RowColumn headerName={"Items"} headerColor={"blue"}>
        <div className="row">
          {/* Loop through our items. Filter out any undefined values then loop and create the jsx */}
          {itemNames
            .filter((item) => item)
            .map((item, index) => {
              return (
                <div className="column" key={index}>
                  {item}
                </div>
              );
            })}
        </div>
      </RowColumn>
    </SegmentGrid>
  );
};

export default Section3;
