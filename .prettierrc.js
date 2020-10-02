module.exports = {
  singleQuote: true,
  printWidth: 80,
  semi: false,
  tabWidth: 2,
  trailingComma: 'none',
  overrides: [
    {
      files: [
        '*.json',
        '.eslintrc',
        '.tslintrc',
        '.prettierrc',
        '.tern-project'
      ],
      options: {
        parser: 'json',
        tabWidth: 2
      }
    }
  ]
}
