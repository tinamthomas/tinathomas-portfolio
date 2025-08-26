import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Avatar,
  Stack,
  Paper,
} from '@mui/material';
import {
  GitHub,
  Email,
  Code,
  Work,
} from '@mui/icons-material';
import { About } from './about';

export function HomePage() {

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
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
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chatbot using OpenAI API and natural language processing',
      tech: ['Python', 'OpenAI API', 'FastAPI', 'React'],
      github: '#',
      live: '#'
    }
  ];

  const experiences = [
    {
      role: 'Senior Software Engineer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Led development of microservices architecture and mentored junior developers'
    },
    {
      role: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built scalable web applications and implemented CI/CD pipelines'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Developed responsive user interfaces and optimized application performance'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
            <Box sx={{ flex: { xs: '1', md: '1' } }}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Hi, I'm Tina Thomas
              </Typography>
              <Typography variant="h4" component="h2" gutterBottom sx={{ opacity: 0.9 }}>
                Software Developer
              </Typography>
              <Typography variant="h6" sx={{ mb: 4, opacity: 0.8 }}>
                Passionate about creating innovative solutions and building scalable applications
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<Work />}
                  sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<Email />}
                  sx={{ borderColor: 'white', color: 'white', '&:hover': { borderColor: 'grey.300' } }}
                >
                  Contact Me
                </Button>
              </Stack>
            </Box>
            <Box sx={{ flex: { xs: '1', md: '1' }, textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  mx: 'auto',
                  mb: 2,
                  border: 4,
                  borderColor: 'white',
                  bgcolor: 'primary.main'
                }}
              >
                <Typography variant="h1">TT</Typography>
              </Avatar>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <About />
      </Container>

      {/* Projects Section */}
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
                    <Stack direction="row" spacing={1}>
                      <Button size="small" startIcon={<GitHub />} href={project.github} target="_blank">
                        Code
                      </Button>
                      <Button size="small" startIcon={<Code />} href={project.live} target="_blank">
                        Live Demo
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Experience Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
            Let's Work Together
          </Typography>
          <Typography variant="h6" sx={{ textAlign: 'center', mb: 4, opacity: 0.9 }}>
            I'm always interested in new opportunities and exciting projects
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Email />}
              href="mailto:hello@example.com"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main', 
                px: 4, 
                py: 1.5,
                '&:hover': { bgcolor: 'grey.100' }
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
