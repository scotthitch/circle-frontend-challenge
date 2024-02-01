const spacesToKebabCase = (str: string): string => {
  return str.toLowerCase().replace(/ /g, "-")
  }

export const URLFormatter = (bookTitle: string, bookID: Number): string => {
  return spacesToKebabCase(bookTitle) + "-" + bookID.toString();
}