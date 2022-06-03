import React from "react";

import TableItems from "./TableItems";

const TableItem = ({ data }) => {
  return (
    <div>
      <table className="table table-striped table-bordered mytable ">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element) => {
            return <TableItems element={element} key={element.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
