/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingExcludes: {
      'app/i/avatars/[id]/route.ts': ['./src/assets/static/characters'],
      'app/i/characters/[id]/route.ts': [
        './src/assets/static/avatars',
        './src/assets/static/characters/mono',
      ],
      'app/i/characters-bw/[id]/route.ts': [
        './src/assets/static/avatars',
        './src/assets/static/characters/vibrant',
      ],
    },
    outputFileTracingIncludes: {
      'app/i/avatars/[id]/route.ts': ['./src/assets/static/avatars'],
      'app/i/characters/[id]/route.ts': [
        './src/assets/static/characters/vibrant',
      ],
      'app/i/characters-bw/[id]/route.ts': [
        './src/assets/static/characters/mono',
      ],
    },
  },
}

module.exports = nextConfig
