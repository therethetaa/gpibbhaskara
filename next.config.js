/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    domains: [
      "thefavored-one.com",
      "dev.thefavored-one.com",
      "images.unsplash.com",
      "api.thefavored-one.com",
    ],
  },
};
