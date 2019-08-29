import React from 'react';

const Error = ({error}) => {
  console.log(error);
  return (
    <h1 className="errorMsg">
      Status: {error.status} <br />
      Message: {error.msg}
    </h1>
  );
};

export default Error;
