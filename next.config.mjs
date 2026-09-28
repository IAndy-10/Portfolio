/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old engineer project routes → new slug routes
      { source: '/projects-1', destination: '/projects/a-fish-story', permanent: true },
      { source: '/projects-2', destination: '/projects/sustainability-strategy', permanent: true },
      { source: '/projects-3', destination: '/projects/vestaesg', permanent: true },
      // Old artist project routes → new slug routes
      { source: '/projects-art-1', destination: '/projects/posttalk', permanent: true },
      { source: '/projects-art-2', destination: '/projects/reverbo', permanent: true },
      { source: '/projects-art-4', destination: '/projects/yoterra', permanent: true },
      { source: '/projects-art-5', destination: '/projects/perkung-fu', permanent: true },
      { source: '/projects-art-6', destination: '/projects/neochucao', permanent: true },
      { source: '/projects-art-7', destination: '/projects/aquifuturo', permanent: true },
      { source: '/projects-art-8', destination: '/projects/dance-of-laplace', permanent: true },
      // Stubs that previously redirected to /projects
      { source: '/projects-4', destination: '/projects', permanent: true },
      { source: '/projects-5', destination: '/projects', permanent: true },
      { source: '/projects-6', destination: '/projects', permanent: true },
      { source: '/projects-7', destination: '/projects', permanent: true },
      // Old rewrite targets
      { source: '/projects-art-3', destination: '/projects', permanent: true },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/fish-story',
        destination: '/fish-story/index.html',
      },
      {
        source: '/fish-story/',
        destination: '/fish-story/index.html',
      },
    ];
  },
};

export default nextConfig;
