import React from "react";
import CatsList from "./CatsList";
import CatsEditor from "./CatsEditor";

export default function CatsManager() {
  return (
    <div className="CatsManager">
      <CatsList/>
      <CatsEditor/>
    </div>
  )
}
