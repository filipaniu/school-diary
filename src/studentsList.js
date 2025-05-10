import HttpService from "./HttpService";
import {useEffect, useState} from "react";
import {Table, TableCell, TableHead, TableRow, TableContainer, TableBody} from "@mui/material";

function StudentList(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        HttpService.getStudents().then((response) => {
                setData(response.data)
            }
        );
    }, [props.shouldRender]);

    function renderRow(x, index) {
        return <TableRow key={index}>
            <TableCell>{x.id}</TableCell>
            <TableCell>{x.firstName}</TableCell>
            <TableCell>{x.lastName}</TableCell>
            <TableCell>{x.dob}</TableCell>
        </TableRow>;
    }

    return <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell width={"9%"}>Id</TableCell>
                    <TableCell width={"21%"}>First Name</TableCell>
                    <TableCell width={"21%"}>Last Name</TableCell>
                    <TableCell>Date of Birth</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(renderRow)}
            </TableBody>
        </Table>
    </TableContainer>
}

export default StudentList;

