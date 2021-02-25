import React from "react";
export default function Section({
  variation = "",
  children,
  containerVariant = "bg-white",
  noBox = false,
}) {
  return (

    <section className={`hero ${variation}`}>
      <div className="hero-body ">
        <div
          className={`container ${containerVariant} ${
            noBox ? " " : "container-box"
          }  `}
        >
          {children}
        </div>
      </div>
    </section>
    
  );
}
