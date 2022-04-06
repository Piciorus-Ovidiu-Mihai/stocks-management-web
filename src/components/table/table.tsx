import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MaterialTable({
  headers,
  data,
  orderBy,
  direction,
}: {
  headers: any[];
  data: any[];
  orderBy: any;
  direction: any;
}) {
  return (
    <TableContainer component={Paper} sx={{ height: 800 }}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell
                key={header.name}
                align="left"
                sortDirection={orderBy === header.name ? direction : false}
              >
                {header.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{maxBodyHeight: 200}}>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 }, maxHeight: "max-content"}}
            >
              {headers.map((header) => (
                <TableCell key={header.name}>{item[header.name]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
