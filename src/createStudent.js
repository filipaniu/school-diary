import HttpService from "./HttpService";
import {useState} from "react";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button} from "@mui/material";

function CreateStudent(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");

    function addStudent() {
        const newStudent = {firstName, lastName, dob};
        HttpService.createStudent(newStudent).then(() => {
            setFirstName("");
            setLastName("");
            setDob("");
            props.setShouldRender(new Date());
        });
    }

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell width={"9%"}></TableCell>
                        <TableCell width={"21%"}>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                size="small"
                                onChange={(x) => setFirstName(x.target.value)}
                                value={firstName}
                            />
                        </TableCell>
                        <TableCell width={"21%"}>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                size="small"
                                onChange={(x) => setLastName(x.target.value)}
                                value={lastName}
                            />
                        </TableCell>
                        <TableCell>
                            <TextField
                                label="Date of Birth"
                                type="date"
                                variant="outlined"
                                size="small"
                                onChange={(x) => setDob(x.target.value)}
                                value={dob}
                            />
                        </TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={addStudent}
                            >
                                Add Student
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CreateStudent;