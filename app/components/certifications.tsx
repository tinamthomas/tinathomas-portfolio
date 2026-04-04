import { useEffect } from 'react';
import { Box, Paper, Typography } from '@mui/material';
export function Certifications() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//cdn.credly.com/assets/utilities/embed.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <Box sx={{ flex: { xs: '1', md: '1' } }}>
            <Paper elevation={3} sx={{ p: 4}}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                    Certifications
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="405a535b-e3af-4d62-823f-7a8193941515" data-share-badge-host="https://www.credly.com"></div>
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="ce9f40d7-41e7-41de-b3cb-1a0198b3e619" data-share-badge-host="https://www.credly.com"></div>
                <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="99e42b17-e223-4ca8-b1d2-634c145a1f41" data-share-badge-host="https://www.credly.com"></div>
                </Box>
                
            </Paper>
        </Box>
    );
}

