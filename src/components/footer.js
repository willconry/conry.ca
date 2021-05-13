import { Divider, Typography } from '@material-ui/core'
import React from 'react'

export default function footer({ email, github }) {
    return (
        <>
            <Divider />
            <Typography variant="h4">
                Email:  {email} GitHub: {github}
            </Typography>
        </>
    )
}
