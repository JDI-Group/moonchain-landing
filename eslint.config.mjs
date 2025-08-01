import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  typescript: true,
  react: true,
  rules: {
    'react-refresh/only-export-components': 'off',
    'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
    'react/no-array-index-key': 'off',
  },
})
