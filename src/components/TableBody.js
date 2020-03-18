import React, { useContext } from "react";
import PersonsContext from "./personsContext";
//npm package to format birth dates
import dateFormat from 'dateformat';


//Used some randomuser3 folder code to help figure out how to use API to populate table

const TableBody = () => {
    const persons = useContext(PersonsContext);

return (
    
<tbody>
{persons.map ((person, index) => {
    return (
        <tr key={index}>
            <td> <img className="rounded-circle"src={person.picture.thumbnail} alt=""/> </td>
            <td>{person.name.first} {person.name.last} </td>
            <td>{person.email} </td>
            <td>{person.phone} </td>
            <td>{dateFormat(person.dob.date, "mediumDate")} </td>
        </tr>
    );
})}

</tbody>

);
}

export default TableBody;






