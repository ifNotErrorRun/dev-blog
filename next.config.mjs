import MillionLint from "@million/lint";
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
