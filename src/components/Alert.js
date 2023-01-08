import React from "react";

const Alert = (props) => {
  const capitalize = (typeofalert) => {
    return typeofalert.charAt(0).toUpperCase() + typeofalert.substr(1);
    /*.substring(1) or slice(1) */
  };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show w-75 `}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)} </strong> : {props.alert.message}
        {/*} <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>*/}
      </div>
    )
  );
};

export default Alert;
