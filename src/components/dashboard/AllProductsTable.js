import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";
import React from 'react'

const AllProducts = ({ products, varients, title }) => {
    let id = 1;
    return (
        <BaseCard title={!title ? "Product Perfomance" : title}>
            <Table
                aria-label="simple table"
                sx={{
                    mt: 3,
                    whiteSpace: "nowrap",
                }}
            >
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                ID
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Title
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Slug
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Image
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Quantity
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography color="textSecondary" variant="h6">
                                Category
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography color="textSecondary" variant="h6">
                                Price
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => {
                        return <TableRow key={product.slug}>
                            <TableCell>
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        fontWeight: "500",
                                    }}
                                >
                                    {id++}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography
                                    sx={{
                                        fontSize: "15px",
                                        fontWeight: "500",
                                    }}
                                >
                                    {product.title}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "600",
                                            }}
                                        >
                                            {product.slug}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            sx={{
                                                fontSize: "11px",
                                                display:'flex',
                                                fontWeight:"bold"
                                            }}
                                        >

                                            <button className={`border-2 ml-1 bg-white text-x rounded-full w-6 h-6 focus:outline-none`}>{product.size}</button>
                                            <button className={`border-2 ml-1  bg-white rounded-full w-6 h-6 focus:outline-none bg-${product.color}-700`}></button>
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    <img src={product.img} width={'30px'} alt="" />
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color="textSecondary" variant="h6">
                                    {product.availableQty}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Chip
                                    sx={{
                                        pl: "4px",
                                        pr: "4px",
                                        backgroundColor: () => {
                                            switch (product.category) {
                                                case 'T-shirt': return "success.main"
                                                case 'Hoodies': return "primary.main"
                                                case 'Mugs': return "secondary.main"
                                                case 'Sticker': return "error.main"
                                            }
                                        },
                                        color: "#fff",
                                    }}
                                    size="small"
                                    label={product.category}
                                ></Chip>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="h6">${product.price}</Typography>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </BaseCard>
    );
};


export default AllProducts;
