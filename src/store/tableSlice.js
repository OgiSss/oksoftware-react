import { createSlice } from "@reduxjs/toolkit";

function createData(name, surname, age, seniority) {
    return { name, surname, age, seniority };
}

const rows = [];

for (let index = 0; index < 1000; index++) {
    rows.push(createData(`Name${index}`, `Surname${index}`, index, `Senior${index}`),)
}

export const initialState = {
    table: [...rows]
};

export const tableSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.table.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.table.splice(state.table.findIndex((item) => item.id === action.payload.id), 1);
        }
    }
})


// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = tableSlice.actions;

export default tableSlice.reducer;