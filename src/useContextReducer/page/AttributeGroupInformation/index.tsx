import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";

function AttributeGroupInformation() {
  const {state} = useLocation()
  useEffect(() => {
    console.log(state)
  },[])
  return (
    <div>AttributeGroupInformation</div>
  );
}

export default AttributeGroupInformation;