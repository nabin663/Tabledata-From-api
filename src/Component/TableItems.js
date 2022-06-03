import React from "react";

const TableItems = ({ element }) => {
  return (
    <tr>
      <td>{element.id}</td>
      <td>{element.name}</td>
      <td>{element.email}</td>
    </tr>
  );
};

export default TableItems;
