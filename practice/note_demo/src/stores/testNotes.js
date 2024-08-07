import { defineStore } from "pinia";

export const testNotes = defineStore("notes", {
  state: () => ({
    notes: [
      {
        id: 1,
        text: "完成練習",
        isPinned: false,
        content: "完成練習~~",
      },
      {
        id: 2,
        text: "整理房間",
        isPinned: false,
        content: "整理房間~~",
      },
      {
        id: 3,
        text: "Sleep",
        isPinned: true,
        content: "Sleep~~",
      },
      {
        id: 4,
        text: "Money",
        isPinned: true,
        content: "Money~~",
      },
      {
        id: 5,
        text: "MoneyMoney",
        isPinned: true,
        content: "MoneyMoney~~",
      },
    ],
  }),
  getters: {
    //需要被讀取的資料函示
    pinnedNotes(state) {
      return state.notes.filter((note) => note.isPinned);
    },
  },
  actions: {
    //變更資料的狀態更新
    addPinned(text, content) {
      if (text.length == 0) return;
      this.notes.push({
        id: Math.floor(Math.random() * 100000),
        text: text,
        isPinned: false,
        content: content,
      });
    },
    markedPin(id) {
      const index = this.notes.findIndex((note) => note.id === id);
      if (index !== -1) {
        this.notes[index].isPinned = !this.notes[index].isPinned;
      }
    },
  },
});
