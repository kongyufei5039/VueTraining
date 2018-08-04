module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        
    },
    plugins: [
        'html'
    ]
}