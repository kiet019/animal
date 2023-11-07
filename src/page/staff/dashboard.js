import * as React from "react";
import StaffLayout from "../../layout/StaffLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import FormTitle from "../../components/title/form-title";

export default function Dashboard() {
  const animals = [
    {
      id: 1,
      name: "Buddy",
      species: "Dog",
      dateOfBirth: "2018-05-12",
      sex: "Male",
    },
    {
      id: 2,
      name: "Mittens",
      species: "Cat",
      dateOfBirth: "2019-08-25",
      sex: "Female",
    },
    {
      id: 3,
      name: "Rex",
      species: "Dog",
      dateOfBirth: "2017-10-03",
      sex: "Male",
    },
  ];

  return (
    <StaffLayout>
      <FormTitle title={"Animal"}/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Species</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Sex</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {animals.map((animal) => (
              <TableRow key={animal.id}>
                <TableCell>{animal.name}</TableCell>
                <TableCell>{animal.species}</TableCell>
                <TableCell>{animal.dateOfBirth}</TableCell>
                <TableCell>{animal.sex}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StaffLayout>
  );
}
