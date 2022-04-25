# eslint-plugin-remove-test-urls

This plugin finds any test urls from your project and warns you about them.

## Installation

```bash
npm i eslint-plugin-remove-test-urls
```
or
```
yarn add eslint-plugin-remove-test-urls
```

## Usage

Add below changes to ```.eslintrc.js``` file
```javascript
module.exports = {
  ...
  plugins: [
    ...
   'remove-test-urls'
  ],
  ...
  rules: {
    "remove-test-urls/remove-test-urls": [
      'warn',
      {
        domains: ['domain.com'],
        subdomains: ['dev', 'staging', 'test'], // if you want to add subdomains add elements here, otherwise keep empty array
        exceptFileNameContains: ['test', 'mock'], // exclude files that contains these items in their names
      }
    ],
    ...
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)