function Writing(id, title, content) {
  return {
    setId(newId) {
      this.id = newId;
      return this;
    },
    setTitle(newTitle) {
      this.title = newTitle;
      return this;
    },
    setContent(newContent) {
      this.content = newContent;
      return this;
    }
  }
}

export default class WritingFactory {
  static createWriting() {
    return Writing();
  }
}