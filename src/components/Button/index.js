import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MyButtons(props) {
    let {children,onClick,variant,color}=props
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onClick} variant={variant} color={color}>
        {children}
      </Button>

    </Stack>
  );
}