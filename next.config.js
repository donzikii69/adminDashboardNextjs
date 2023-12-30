/** @type {import('next').NextConfig} */
const nextConfig = {
  //tambahin remotePatterns biar next.js tau dan ngizinin
  //file address yang kita pake masuk ke aplikasi
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
