export const Utils = {
  formatDecimal(value: number): number {
    return parseInt(String(value).replace(/[\.\,]/g, ''));
  },

  formatException(exception: JSON): string {
    let error = JSON.stringify(exception);
    error = error
      .replace('[', '')
      .replace(']', '')
      .replace(/,/g, ', <br />')
      .replace(/"/g, '');
    return error;
  },
};
