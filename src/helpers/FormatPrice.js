import React from 'react'

const FormatPrice = ({price}) => {
  return Intl.NumberFormat("ur-PK",{
    style:"currency",
    currency:"PKR",
    minimumFractionDigits:2,
  }).format(price/100);
}

export default FormatPrice
