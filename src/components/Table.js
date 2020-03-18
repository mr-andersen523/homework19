import React from "react";
import TableBody from "./TableBody"

const Table = () => {
return (
    <table className="table table-striped text-center table-hover">
<thead>
    <tr>
    <th scope="col">Photo</th>
    <th scope="col">Name</th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
    <th scope="col">Date of Birth</th>
    </tr>

</thead>

<TableBody />


</table>
);
}

export default Table;
