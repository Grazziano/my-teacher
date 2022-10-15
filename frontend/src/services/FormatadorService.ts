export const FormatadorService = {
  valorMonetario(value: number): string {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    });
  },
  limitarTexto(text: string, maxSize: number): string {
    if (text.length < maxSize) {
      return text;
    }
    return text.slice(0, maxSize) + '...';
  },
};
