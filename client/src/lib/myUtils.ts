import type { RouteLocationRaw } from "vue-router"

const spacesToKebabCase = (str: String): RouteLocationRaw => {
  return str.toLowerCase().replace(/ /g, "-")
  }

export const URLFormatter = (bookTitle: String, bookID: Number): RouteLocationRaw => {
  return "/" + spacesToKebabCase(bookTitle) + "-" + bookID.toString();
}