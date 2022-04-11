import React from 'react';
//material-ui
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "4rem",
            '& .MuiTableCell-root': {
                fontSize: "1.2rem",
            },
            [theme.breakpoints.down(775)]: {
                padding: "0rem 0rem 4rem 0rem",
            }
        },
        table: {
            width: "70%",
            [theme.breakpoints.down(995)]: {
                width: "90%",
            },
            [theme.breakpoints.down(775)]: {
                width: "100%",
            },

        },

        row: {
            [theme.breakpoints.down(455)]: {
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
                flexDirection: "column",
                textAlign: "center",
            }

        },
        nameCell: {
            [theme.breakpoints.down(455)]: {
                textAlign: "left",
                fontWeight: 600,
            }
        },
        cell: {
            [theme.breakpoints.down(455)]: {
                textAlign: "center",
            }
        },
        title: {
            fontSize: "2rem",
            lineHeight: "2rem",
            margin: "10rem 0 1rem 1.5rem",
            color: "#2b2b2b",
            letterSpacing: "0.4rem",
            [theme.breakpoints.down(530)]: {
                textAlign: "left",
                paddingBottom: "1.5rem",
            }

        }
    }));

function createData(name: string, frequency: string | null, time: number | null, price: string | null) {
    return { name, frequency, time, price };
}

const rows = [
    createData('Zajęcia dla Dzieci', '2x w tygodniu', 45, '120 zł/msc'),
    createData('Zajęcia dla Pań', '2x w tygodniu', 60, '180 zł/msc'),
    createData('Zajęcia dla Par', '1x w tygodniu', 60, '100 zł/msc'),
    createData('Zajęcia indywidulne dla Nowożeńców', null, 60, '110 zł/zajęcie'),
    createData('Zajęcia indywidulne Pro-Am', null, 45, '110 zł/zajęcie'),
    createData('Zajęcia SPORT', null, null, '200 zł/msc'),
    createData('Wynajem sali', 'zajęcia indywidualne', null, '35 zł/h'),
    createData('Profesjonalne Pokazy Taneczne', 'według indywidualnych ustaleń', null, null),
    createData('Jednorazowe wejście na wybrane zajęcia', null, null, '35 zł/h'),
];

const title = 'Cennik'

const Prices: React.FC = () => {
    const classes = useStyles();
    return (
        <section>
            <TableContainer component={Paper} className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        <Typography className={classes.title}
                            variant="h1" component="h2" gutterBottom>
                            {title.toUpperCase()}
                        </Typography>
                        {rows.map((row, index) => (
                            <TableRow key={index} className={classes.row} style={(index % 2 ? { backgroundColor: 'transparent' } : { backgroundColor: '#d7bd78' })} id={row.frequency ? row.frequency : ""} >
                                <TableCell className={classes.nameCell} component="th" scope="row">
                                    {row.name.toUpperCase()}
                                </TableCell>
                                <TableCell className={classes.cell} align="right">{row.frequency ? row.frequency : ""}</TableCell>
                                <TableCell className={classes.cell} align="right">{row.time ? row.time + 'min' : ''}</TableCell>
                                <TableCell className={classes.cell} align="right">{row.price ? row.price : ''}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    )
}

export default Prices;
