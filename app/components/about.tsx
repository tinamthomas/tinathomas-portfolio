import { Typography, Box, Stack, IconButton } from "@mui/material";
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export function About() {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ flex: { xs: '1', md: '1' } }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              About Me
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              I'm a passionate software developer with 10+ years of experience building modern web applications. 
              I specialize in full-stack development with a focus on React, Node.js, Java and Kotlin.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              I love coding and learning new technologies. I'm also passionate about teaching anything tech related.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <IconButton href="https://github.com/tinamthomas" target="_blank" sx={{ color: 'primary.main' }}>
                <GitHub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/tina-maria-thomas/" target="_blank" sx={{ color: 'primary.main' }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="mailto:hello@example.com" sx={{ color: 'primary.main' }}>
                <Email />
              </IconButton>
            </Stack>
          </Box>
      </Box>
    );
}