import listModel from "./listModel";

export default interface taskModel {
    name: string;
    completed: boolean;
    subtasks?: listModel[];
  }