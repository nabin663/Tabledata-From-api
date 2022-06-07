import React from "react";

import TableItems from "./TableItems";

const TableItem = ({ data, onclick, onEclick, onDclick }) => {
  return (
    <div>
      <button id="button" className="btn my-2" onClick={onclick}>
        + Add User
      </button>
      <table className="table table-striped table-bordered mytable ">
        <thead>
          <tr>
            <th>User Id</th>
            <th>title</th>
            <th>Body</th>
            <th>Edit Your Note</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <TableItems
                element={element}
                key={element.id}
                onEclick={onEclick}
                onDclick={onDclick}
                uid={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
