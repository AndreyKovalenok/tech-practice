const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@ui': path.resolve(__dirname, 'src/ui'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@flows': path.resolve(__dirname, 'src/flows'),
    },
  },
  jest: {
    configure: config => {
      config.moduleNameMapper = {
        ...config.moduleNameMapper,
        '^@ui(.*)$': '<rootDir>/src/ui$1',
        '^@features(.*)$': '<rootDir>/src/features$1',
        '^@shared(.*)$': '<rootDir>/src/shared$1',
        '^@api(.*)$': '<rootDir>/src/api$1',
        '^@flows(.*)$': '<rootDir>/src/flows$1',
      };

      return config;
    },
  },
};
