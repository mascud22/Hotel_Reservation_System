export function isValidDateRange(checkIn, checkOut) {
  return new Date(checkOut) > new Date(checkIn);
}