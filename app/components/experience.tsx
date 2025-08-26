import { Box, Typography, Container, Paper } from "@mui/material";

const experiences = [
    {
        role: 'Senior Software Engineer',
        company: 'Thoughtworks Chicago',
        period: '2019 - Present',
        description: 'Tech lead / tech anchor / full stack developer'
    },
    {
        role: 'Software Engineer',
        company: 'Thoughtworks India',
        period: '2014 - 2019',
        description: 'Developed and maintained web applications using React and Node.js'
    }
]

export function Experience() {
    return (
        < Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 6 }}>
                Experience
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {experiences.map((exp, index) => (
                    <Box key={index}>
                        <Paper elevation={2} sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: { md: 'center' } }}>
                                <Box sx={{ flex: { xs: '1', md: '1' } }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                        {exp.role}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        {exp.company}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {exp.period}
                                    </Typography>
                                </Box>
                                <Box sx={{ flex: { xs: '1', md: '3' } }}>
                                    <Typography variant="body1">
                                        {exp.description}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                ))}
            </Box>
        </Container >
    );
}