export function isPastDate(date) {
  return new Date(date) < new Date();
}