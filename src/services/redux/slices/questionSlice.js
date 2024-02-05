import { nanoid, createSlice } from "@reduxjs/toolkit";

//creating initial state

const initialState = {
  questions: [],
};

//creating question slice

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      const question = action.payload;
      state.questions.push(question);
    },

    // removeTodo: (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },
  },
});

//exporting

export { questionSlice };
export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
