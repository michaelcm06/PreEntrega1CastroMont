import React from 'react'

import { Badge, IconButton } from '@mui/material';

const CartWidget = ({ cartQuantity }) => {
  return (
    <IconButton>
        <Badge badgeContent={cartQuantity} color="error">
        </Badge>
    </IconButton>
  )
}

export default CartWidget;