// import React from 'react'
// import { TrashIcon } from '../../../assets/images/icons'

// const Table = () => {
//   return (
//       <div>
//           <table class="min-w-full justify-center items-center divide-y divide-gray-300 shadow text-2xl break-normal">
//               <thead class="bg-black">
//                   <tr class="divide-x divide-gray-200">
//                       <th scope="col" class="py-3.5 pl-4 pr-4 font-semibold text-white sm:pl-6">No</th>
//                       <th scope="col" class="px-4 py-3.5 font-semibold text-white">ID Makalah</th>
//                       <th scope="col" class="px-4 py-3.5 font-semibold text-white">Judul inovasi</th>
//                   </tr>
//               </thead>
//               <tbody class="divide-y divide-gray-200 bg-[#F9F9F9] text-gray-400" >
//                   <tr class="divide-x divide-gray-200">
//                       <td class="py-4 pl-4 pr- sm:pl-6">1</td>
//                       <td class="p-4">20211234</td>
//                       <td class="p-4">
//                           <div className="flex items-center justify-between">
//                               <span className='text-center'>Inovasi Pembersihan Unit 1</span>
//                               <button className='flex items-center justify-center text-black bg-yellow-400 rounded-full'>
//                                   <img src={TrashIcon} alt="trash-logo" className='w-10 h-10 p-3' />
//                               </button>
//                           </div>
//                       </td>
//                   </tr>
//                   <tr class="divide-x divide-gray-200 bg-[rgba(0,0,0,0.1)]">
//                       <td class="py-4 pl-4 pr- sm:pl-6">2</td>
//                       <td class="p-4">20211234</td>
//                       <td class="p-4">
                        //   <div className="flex items-center justify-between">
                        //       <span className='text-center'>Inovasi Pembersihan Unit 12</span>
                        //       <button className='flex items-center justify-center text-black bg-yellow-400 rounded-full'>
                        //           <img src={TrashIcon} alt="trash-logo" className='w-10 h-10 p-3' />
                        //       </button>
                        //   </div>
//                       </td>
//                   </tr>

//               </tbody>
//           </table>
//     </div>
//   )
// }

// export default Table

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TrashIcon } from '../../../assets/images/icons';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(no, idMakalah, judulInovasi) {
    return { no, idMakalah, judulInovasi };
}

const rows = [
    createData(1, 20211234, 'Inovasi Pembersihan Unit 1'),
    createData(2, 20211454, 'Inovasi Pembersihan Unit 2'),
];

export default function CustomizedTables() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>No</StyledTableCell>
                        <StyledTableCell align="right">ID Makalah</StyledTableCell>
                        <StyledTableCell align="right">Judul Inovasi</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.no}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.idMakalah}</StyledTableCell>
                            <StyledTableCell align="right">
                                <div className="flex items-center justify-between">
                                    <span className='text-center'>{row.judulInovasi}</span>
                                    <button className='flex items-center justify-center text-black bg-yellow-400 rounded-full'>
                                        <img src={TrashIcon} alt="trash-logo" className='w-10 h-10 p-3' />
                                    </button>
                                </div>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
