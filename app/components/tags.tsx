import { Typography } from "@mui/material";

import { Box, Chip } from "@mui/material";

interface TagsProps {
    items: string[];
    title: string;
}

export function Tags({ items, title }: TagsProps) {
    return (
        <div>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 , mt: 3 }}>
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {items.map((skill) => (
                        <Chip
                            key={skill}
                            label={skill}
                            variant="outlined"
                            color="primary"
                            sx={{ mb: 1 }}
                        />
                    ))}
                </Box>
        </div>
    );
}