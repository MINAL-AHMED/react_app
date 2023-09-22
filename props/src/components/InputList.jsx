import React from 'react'

const InputList=(props)=> {
  return (
    <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <label
            htmlFor={props.text}
            style={{
              fontFamily: "Arial",
              fontSize: "1rem",
              color: "#424242",
              fontWeight: "bold",
            }}
          >
         {props.label}
          </label>
          <input
            type={props.type}
            id="name"
            style={{
              padding: "0.5rem 1rem",
              outline: "none",
              border: "1px solid #ddd",
              borderRadius: "0.20rem",
              fontFamily: "Arial",
              fontSize: "0.9rem",
              color: "#666",
            }}
          />
        </div>
  )
}

export default InputList