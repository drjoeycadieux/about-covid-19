const Dotenv = require('dotenv-webpack');

module.exports = {
    // ... other Webpack config
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, '.env'), // Path to your .env file
        }),
    ],
};
