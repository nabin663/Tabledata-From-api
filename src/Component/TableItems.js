import React from "react";

const TableItems = ({ element, onEclick, onDclick, uid }) => {
  return (
    <tr>
      <td>{element.id}</td>
      <td>{element.title}</td>
      <td>{element.body}</td>
      <td>
        <div className="icons"></div>
        <i
          className="fas fa-edit mx-2"
          onClick={() => {
            onEclick(uid);
          }}
        ></i>
        <i
          className="fas fa-trash-alt mx-2"
          onClick={() => {
            onDclick(uid);
          }}
        ></i>
      </td>
      <td></td>
    </tr>
  );
};

export default TableItems;
