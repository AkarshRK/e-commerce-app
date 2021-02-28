import { isEqual, find } from './common-libraries'

export const formatCurrency = (num) => {
  return "₹" + Number(num.toFixed(1)).toLocaleString() + " ";
}

export const findById = (obj, id) => {
  return find(obj, function (item) { return isEqual(item._id, id); })
}