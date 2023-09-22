import React from "react";
import InputList from "../InputList";
import Button from "./button/Button";

const LoingPage = () => {
  return (
    <div
      style={{
        width: "50%",
        margin: "2rem auto",
        backgroundColor: "#fff",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <h1 style={{ fontFamily: "Arial", fontSize: "2rem", color: "#222" }}>
          Login Form
        </h1>
        <p style={{ fontFamily: "Arial", fontSize: "1rem", color: "#666" }}>
          This is my login form
        </p>
      </div>
      <form>
        <InputList text="name" label="What is your name" type="name" />
        <InputList text="email" label="What is your email" type="email" />
        <InputList
          text="password"
          label="What is your password"
          type="password"
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button type="reset" text="Reset" variant="success" size="medium" />
          <Button type="button" text="Cancel" variant="error" size="medium" />
          <Button type="submit" text="submit" size="medium" variant="primary" />
        </div>
      </form>
    </div>
  );
};

export default LoingPage;
