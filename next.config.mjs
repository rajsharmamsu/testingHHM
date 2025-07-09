/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,

  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/hhm',
  //       permanent: false, // or true if you want browsers to cache the redirect
  //     },
  //   ];
  // },
};

export default nextConfig;
