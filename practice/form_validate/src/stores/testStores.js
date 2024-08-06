import { defineStore } from "pinia";

export const testStores = defineStore("lists", {
  state: () => ({
    todos: [
      {
        id: 1,
        text: "完成練習",
        isFinished: false,
      },
      {
        id: 2,
        text: "整理房間",
        isFinished: false,
      },
      {
        id: 3,
        text: "Sleep",
        isFinished: true,
      },
      {
        id: 4,
        text: "Money",
        isFinished: true,
      },
      {
        id: 5,
        text: "MoneyMoney",
        isFinished: true,
      },
    ],
  }),
  getters: {
    //需要被讀取的資料函示
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
  },
  actions: {
    //變更資料的狀態更新
    addTodo(text) {
      if (text.length == 0) return;
      this.todos.push({
        id: Math.floor(Math.random() * 100000),
        text: text,
        isFinished: false,
      });
    },
  },
});
