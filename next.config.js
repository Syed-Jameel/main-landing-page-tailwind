/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/home1",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/about1",
        permanent: false,
      },
      {
        source: "/services",
        destination: "/service1",
        permanent: false,
      },
      {
        source: "/blogs",
        destination: "/blog1",
        permanent: false,
      },
      {
        source: "/contact",
        destination: "/conatact1",
        permanent: false,
      },

    ];
  },

  images: {
    domains: ["tailwindui.com", "www.w3.org", "images.unsplash.com", "ohio.clbthemes.com", "demo.rivaxstudio.com"],
  },
};

module.exports = nextConfig;
