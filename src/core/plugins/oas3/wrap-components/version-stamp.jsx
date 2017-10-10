import React from "react"
import { OAS3ComponentWrapFactory } from "../helpers"

export default OAS3ComponentWrapFactory((props) => {
  const { Ori } = props

  return <span>
    <Ori {...props} />
    <small style={{ backgroundColor: "#ff6600" }}>
      <pre className="version">OAS3</pre>
    </small>
  </span>
})
