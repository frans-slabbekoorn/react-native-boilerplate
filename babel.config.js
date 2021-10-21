module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                cwd: 'babelrc',
                extensions: ['.ts', '.d.ts', '.tsx', '.js', '.ios.js', '.android.js'],
                alias: {
                    '@components': './src/components',
                    '@contexts': './src/contexts',
                    '@functions': './src/functions',
                    '@hooks': './src/hooks',
                    '@screens': './src/screens',
                    '@custom-types': './src/types',
                    '@styles': './src/styles',
                    '@assets': './src/assets',
                    '@config': './config',
                    '@': './src',
                },
            },
        ],
        'jest-hoist',
    ],
};
