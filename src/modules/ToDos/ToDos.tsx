import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import getToDos, { ApiToDos } from "../../services/getToDos";
import { useAsync } from "react-async-hook";
import { Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
interface Column {
  id: "userId" | "id" | "title" | "completed";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  {
    id: "userId",
    label: "Id do Usuário",
    minWidth: 100,
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "id",
    label: "Id da Tarefa",
    minWidth: 100,
    format: (value: number) => value.toLocaleString("en-US"),
  },
  { id: "title", label: "Título da Tarefa", minWidth: 150 },
  {
    id: "completed",
    label: "Status",
    minWidth: 150,
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  loading: {
    position: "absolute",
    right: "50%",
    bottom: "50%",
  },
});

const ToDos: React.FC = () => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const loadToDos = useAsync(getToDos, []);
  const [toDos, setToDos] = React.useState<ApiToDos[]>([]);

  useEffect(() => {
    const toDos = loadToDos.result;
    if (toDos) {
      setToDos(toDos);
    }
  }, [loadToDos?.result]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    loadToDos.loading ? (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    ) : (
      <>
      <Typography variant="h5" align="center" style={{ marginBottom: "24px" }}>
        Lista de Álbuns
      </Typography>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    style={{ minWidth: column.minWidth }}
                  >
                    <b>{column.label}</b>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {toDos
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((l) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={l.id}>
                      {columns.map((column) => {
                        const value = l[column.id];
                        return (
                          <TableCell key={column.id}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value
                            }
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 50, 100]}
          component="div"
          count={toDos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage={"Linhas por página"}
        />
      </Paper>
      </>
    )
  );
};

export default ToDos;
