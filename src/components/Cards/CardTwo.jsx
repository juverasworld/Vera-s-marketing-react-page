import React from "react";
import "./Cards.css";
import { cardsData1 } from "../../Data/Data";

import Card from "../Card/Card";

const CardTwo = () => {
  return (
    <div className="Cards">
      {cardsData1.map((carda, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={carda.title1}
              color={carda.color1}
              barValue={carda.barValue1}
              value={carda.value1}
              png={carda.png1}
              series={carda.series1}
            />
          </div>
          
        );
      })}
    </div>
  );
};

export default CardTwo;
