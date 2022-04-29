export class ErrorLogStore {
  private store: any[] = [];

  private static parseError(errLog: string) {
    const error = new Error(errLog);
    const [message, path]: string[] = error.stack?.split('\n', 2) || [];
    if (message && path) return { message, path };
  }

  public printErrorLogs() {
    return console.log(this.store);
  }

  public addErrorLog(errLog: string) {
    this.store.push(ErrorLogStore.parseError(errLog));
  }
}
