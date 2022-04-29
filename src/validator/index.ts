export const validator = (target: Record<string, any>) => {
  for (const key in target) {
    target[key];
  }
};
