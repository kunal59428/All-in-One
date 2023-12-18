import { createContext } from "react";

const DataContext = createContext([
    {
        id: 1,
        name: "Sofa",
        category: "furniture",
        quantity: 5
    },
    {
        id: 2,
        name: "chair",
        category: "furniture",
        quantity: 5
    },
    {
        id: 3,
        name: "Bed",
        category: "furniture",
        quantity: 5
    },
    {
        id: 4,
        name: "Table",
        category: "furniture",
        quantity: 5
    },

])

export default DataContext