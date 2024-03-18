import React from 'react';

function BoilingVerdict({celsius = 0}) {
  if(celsius >= 100){
    return <p>The Water Is Boil!</p>;
  }
  return <p>Water Not Boil!</p>;
}

export default BoilingVerdict;