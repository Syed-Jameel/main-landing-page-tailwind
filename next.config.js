/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com", "www.w3.org", "images.unsplash.com", "ohio.clbthemes.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
      {
        source: "/services",
        destination: "/",
        permanent: false,
      },
      {
        source: "/blogs",
        destination: "/",
        permanent: false,
      },

    ];
  },
};

module.exports = nextConfig;
