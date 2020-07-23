import React from 'react';
import '../App.css';

function TwoColumns({Column1, Column2, Rows1, Rows2}) {
  return (
    <div className="two-columns">
      <div className="row">
        <div className="column">
          <h2>{Column1}</h2>
            <Rows1 />
        </div>
        <div className="column">
          <h2>{Column2}</h2>
            <Rows2 />
        </div>
      </div>
    </div>
  );
}

export default TwoColumns;