/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      'i/avatars/[id]/route.ts': ['./src/assets/static/characters'],
      'i/characters/[id]/route.ts': [
        './src/assets/static/avatars',
        './src/assets/static/characters/mono',
      ],
      'i/characters-bw/[id]/route.ts': [
        './src/assets/static/avatars',
        './src/assets/static/characters/vibrant',
      ],
    },
    outputFileTracingIncludes: {
      'i/avatars/[id]/route.ts': ['./src/assets/static/avatars'],
      'i/characters/[id]/route.ts': ['./src/assets/static/characters/vibrant'],
      'i/characters-bw/[id]/route.ts': ['./src/assets/static/characters/mono'],
    },
  },
}

module.exports = nextConfig
