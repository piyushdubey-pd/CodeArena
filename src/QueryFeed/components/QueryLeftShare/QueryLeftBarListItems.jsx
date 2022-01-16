import React from "react";

import  "./QueryLeftBarListItems.css";

const QueryLeftBarListItems = (props) => {
  return (
    <div className="LeftBarListItemsMain">
 
          <div className="LeftBarListItemsEach">
            <p className="LeftBarListItemsEachText" >
              {/* How to connect with AWS Services ? */}
              {props.ListItemText}
            </p>
      </div>
    </div>
  );
};

export default QueryLeftBarListItems;
