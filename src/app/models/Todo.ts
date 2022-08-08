export class Todo {
  content: string;
  completed: boolean;

  constructor(content: string, completed: boolean) {
    this.content = content;
    this.completed = completed;
  }
}
