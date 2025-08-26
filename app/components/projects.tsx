import { Box, Container, Typography, Card, CardContent, Chip, Stack, Button } from "@mui/material";
import { GitHub, Code } from '@mui/icons-material';

export function Projects() {
    const projects = [
        {
            title: 'Auctioneer Client',
            description: 'Decoupled asset ingest from legacy contracts, enabling faster seller onboarding and streamlined asset flows. They replaced legacy contracts with a unified, versioned Agreements & Deals model that supports all deal types, regions, and channels, while automating agreement, validation and deal generation.',
            tech: ['Retool', 'Java', 'Spring boot', 'Honeycomb', 'Playwright', 'Circle CI', 'helm', 'kubernetes'],
            github: '#',
            live: '#'
        },
        {
            title: 'Task Management App',
            description: 'Real-time collaborative task management with WebSocket integration',
            tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
            github: '#',
            live: '#'
        },
    ];
    return (
        <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 6 }}>
            Featured Projects
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, flexWrap: 'wrap' }}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ flex: { xs: '1', md: '1 1 calc(33.333% - 16px)' }, minWidth: { md: '300px' } }}>
                <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    );
}