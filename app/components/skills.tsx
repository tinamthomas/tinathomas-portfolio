import { Box, Paper } from "@mui/material";
import { Tags } from "./tags";

const skills: string[] = [
    'React', 'Vue', 'TypeScript', 'Node.js', 'JavaScript', 'Java', 'Kotlin', 'Golang', '.NET', 'GCP',
    'AWS', 'Docker', 'Git', 'REST APIs', 'K8s', 'Terraform', 'CI/CD', 'Chef', 'SQL'
];
const certifications: string[] = [
    'AWS Certified AI Practitioner',
    'GCP Cloud Digital Leader',
];

export function Skills() {
    return (
        <Box sx={{ flex: { xs: '1', md: '1' } }}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Tags items={skills} title="Skills & Technologies" />
                <Tags items={certifications} title="Certifications" />
            </Paper>
        </Box>
    );
}