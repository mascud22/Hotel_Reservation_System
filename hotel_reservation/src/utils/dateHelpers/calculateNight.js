import { differenceInDays } from "date-fns";
export const calculateNights = (checkIn, checkOut) => {
  return differenceInDays(
    new Date(checkOut),
    new Date(checkIn)
  );
}