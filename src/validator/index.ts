export const validator = (target: { [key: string]: any }) => {
  for (const key in target) {
    target[key];
  }
};
