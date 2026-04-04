import { Typography } from "@mui/material";

import { Box } from "@mui/material";

interface TagsProps {
    title: string;
    children: React.ReactNode;
}

export function SkillsBox({ title , children }: TagsProps) {
    return (
        <div>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {children}
                </Box>
        </div>
    );
}