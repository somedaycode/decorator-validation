export class ErrorLogStore {
  private store: any[] = [];

  printErrorLogs() {
    return console.log(this.store);
  }

  addErrorLog(errLog: string) {
    this.store.push(this.parseError(errLog));
  }

  parseError(errLog: string) {
    const error = new Error(errLog);
    const [message, path]: string[] = error.stack?.split('\n', 2) || [];
    if (message && path) return { message, path };
  }
}
