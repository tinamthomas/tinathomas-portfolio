import { Box, Container, Typography, Card, CardContent, Chip, Stack, Button } from "@mui/material";
import { GitHub, Code } from '@mui/icons-material';

export function Projects() {
    const projects = [
        {
            projectName: 'Deals management and migration',
            role: 'Senior Developer',
            client: 'Auctioneer group',
            description: 'Decoupled asset ingest from legacy contracts, enabling faster seller onboarding and streamlined asset flows. They replaced legacy contracts with a unified, versioned Agreements & Deals model that supports all deal types, regions, and channels, while automating agreement, validation and deal generation.',
            tech: ['Retool', 'Java', 'Spring boot', 'Honeycomb', 'Playwright', 'Circle CI', 'helm', 'kubernetes'],
            github: '#',
            live: '#'
        },
        {
          projectName: 'Asset and auction management',
          role: 'Developer',
          client: 'Auctioneer group',
          description: 'The Asset and auction management team focussed on providing a new unified solution for asset intake, while ensuring data consistency with legacy systems during the migration period.',
          tech: ['Retool'],
          github: '#',
          live: '#'
        },
        {
          projectName: 'Check-in delivery team',
          role: 'Developer',
          client: 'Pharmacy',
          description: 'Worked with a medical group as part of the delivery team to rebuild and replatform their patient check-in portal.',
          tech: ['Vue.js'],
          github: '#',
          live: '#'
        },
        {
          projectName: 'Behavioral Health Discovery',
          role: 'Technical Lead',
          client: 'Pharmacy',
          description: 'Worked with a medica group as part of the discovery team to understand the scope and effort for replatforming their Behavioral Health Program. This included being involved with the initial interviews to gain context and being part of the discovery workshops. On the technical side, once business context was gathered, involved technical deep dives and discussions with client architects and developer teams. Worked with the TL and PO to estimate stories and come up with a rough timeline for the proposed work',
          tech: ['Vue.js', '.NET'],
          github: '#',
          live: '#'
        },
        {
          projectName: 'Product Search',
          role: 'Developer',
          client: 'Retail',
          description: 'Worked with a retail company as part of a legacy migration project to migrate product search functionality from a legacy SAP Hybris system to a microservices architecture.',
          tech: ['Java', 'Spring boot', 'K8s', 'Github actions', 'Terraform'],
          github: '#',
          live: '#'
        },
        {
          projectName: 'Advisory Services',
          role: 'Technical Consultant',
          client: 'Machinery company',
          description: 'Worked with workrise to focus on their testing strategy and increase their level of confidence in software quality. This included setting up patterns for arch unit tests, unit tests for temporal workflows, integration tests and end-to-end tests, and integrating them into CI/CD.',
          tech: ['Kotlin', 'Spring boot', 'Spring boot', 'Terraform', 'Circle CI orbs', 'Temporal'],
          github: '#',
          live: '#'
        },
        {
          projectName: 'Rapid Innovations',
          role: 'Technical Lead',
          client: 'Government Agency',
          description: 'This govt agencyran an internal hackathon where a lot of good ideas/prototypes came out. Our team was in charge of taking 6 of these projects, and working on them to get them into a pilot phase, where feedback would be collected from the users. Based on this feedback, the pilot would either potentially move to a long term solution or be stopped, but anything beyond the pilot was out of scope for our team. Our day-to-day consisted of engaging with 6 different stakeholder groups for each project, working with them to identify and deliver must-have pilot features, and running pilot sessions with a small group of users.',
          tech: ['.NET', 'Angular', 'Delphi', 'VBA'],
          github: '#',
          live: '#'
        },
        {
          projectName: 'Baseline Measures',
          role: 'Developer',
          client: 'Education Group',
          description: 'Worked directly with stakeholders to assess baseline metrics to evaluate their currentsystem. Collaborat ed with client SMEs to understand their current process, pain points in the system, and came up with metrics to help them quantify issues in their current system. These metrics focussed primarily on data quality metrics and job processing metrics.',
          tech: ['MS SQL Server'],
          github: '#',
          live: '#'
        },
        {
            projectName: 'Engineering Remediation and Enablement',
            role: 'Senior Developer',
            client: 'Skilled Trade Company',
            description: 'The client is a major player in the skilled trade space. Their process was highly manual, requiring a lot of effort to generate timesheets. Our team worked to create an invoicing engine to kickstart their automated process. The solution proved the ability to automate 5% of their workload, which would give the basis to quickly extend the solution to other processes. solution to around 60% of their workload. The product received high client praise, citing they had the smoothest UAT and go-to-production ever',
            tech: ['Kotlin', 'Kafka', 'GCP Pubsub'],
            github: '#',
            live: '#'
        },
        {
            projectName: 'Identify Verification framework',
            role: 'Developer',
            client: 'Unemployment Agency',
            description: 'An Unemployment agency needed a solution that would integrate with an identity verification framework to automate their process to reduce fraud. I joined as part of a temporary handoff team to quickly gain context of the solution, work to fix critical production issues, and transition to the support team.',
            tech: ['Terraform', 'GCP', 'React', '.NET', 'IDemia'],
            github: '#',
            live: '#'
        },
        {
            projectName: 'Legacy Migration',
            role: 'Technical Lead',
            client: 'Unemployment Agency',
            description: 'An Unemployment Agency had a legacy system written in COBOL. Drove the effort to analyze thin slices of the legacy system, and work with the team to build a solution that would replace the slow and error-prone mainframe',
            tech: ['COBOL', '.NET', 'PostgresSQL', 'Azure'],
            github: '#',
            live: '#'
        },
        {
            projectName: 'Headless CMS and Content Delivery System',
            role: 'Senior Developer',
            client: 'Multi-Brand Company',
            description: 'Built for a client who\'s primary problem in the digital space was catering to content formultiple brands under their wing. Business requirements demanded that content had to be similar in terms of layout, styling and content, that also had to be flexible enough for variation in terms of content, when content went live, and brand. The authoring tool was built as a platform to enable other development teams(sales, marketing, promotions) to add their own content types',
            tech: ['React', 'Redux', 'Node.js', 'Typescript', 'Docker', 'Gitlab CI', 'MongoDB'],
            github: '#',
            live: '#'
        },
        {
            projectName: 'Performance Vision and Storyboard',
            role: 'Developer',
            client: 'B2B Analytics Company',
            description: 'We built a data analysis and visualization solution on top of Tableau for a B2B client. This was a complete rewrite, with a new tech stack and new features, built to meet the growing demands of the client: ease of deployment, time to market and customizability for different clients.',
            tech: ['React', 'Reflux', 'Golang', 'AWS', 'Chef', 'GO CI'],
            github: '#',
            live: '#'
        },
        {
            projectName: 'Analytics Modelling',
            role: 'Data Engineer',
            client: 'Retail Company',
            description: 'The client\'s Data Science team had built a high accuracy algorithm to forecast optimal SKU count per store. However, the infrastructure they had in place was not able to handle expected loads. Most of their jobs were data intensive and took almost a day to run. Our team was able to port this to a Hadoop based infrastructure, mainly using Hive and Pig, bringing the run-time to around 2 hours',
            tech: ['Hive', 'Pig', 'Hadoop'],
            github: '#',
            live: '#'
        },
    ];
    return (
        <Box sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 6 }}>
            Featured Projects
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, flexWrap: 'wrap' }}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
                <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                      {project.projectName}
                    </Typography>
                    <Box sx={{ 
                      mb: 3, 
                      p: 2
                    }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 'fit-content' }}>
                          <Box sx={{ 
                            width: 8, 
                            height: 8, 
                            borderRadius: '50%', 
                            bgcolor: 'secondary.main',
                            flexShrink: 0
                          }} />
                          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            Client:
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {project.client}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 'fit-content' }}>
                          <Box sx={{ 
                            width: 8, 
                            height: 8, 
                            borderRadius: '50%', 
                            bgcolor: 'primary.main',
                            flexShrink: 0
                          }} />
                          <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                            Role:
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {project.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
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