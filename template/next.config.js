/** @type {import('next').NextConfig} */

const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/auth/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
