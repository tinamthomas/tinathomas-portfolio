import { Box, Paper } from "@mui/material";
import SkillsView from "./skills_view";
import { SkillsBox } from "./skillsbox";
import { Certifications } from "./certifications";

const certifications: string[] = [
    'AWS Certified AI Practitioner',
    'GCP Cloud Digital Leader',
    'GCP Generative AI Leader',
];

export function Skills() {
    return (
        <Box sx={{ flex: { xs: '1', md: '1' } }}>
            <Paper elevation={3} sx={{ p: 4}}>
                <SkillsBox title="Technical Skills">
                    <SkillsView />
                </SkillsBox>
            </Paper>
        </Box>
    );
}