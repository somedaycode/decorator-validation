export class ErrorLogStore {
  private store: any[] = [];

  private static parseError(errLog: string) {
    const error = new Error(errLog);
    const [message, path]: string[] = error.stack?.split('\n', 2) || [];
    if (message && path) return { message, path };
  }

  public throwIfHasErrorLogs() {
    if (this.store.length > 0) throw this.store;
    return console.log('No Errors found');
  }

  public addErrorLog(errLog: string) {
    this.store.push(ErrorLogStore.parseError(errLog));
  }
}
