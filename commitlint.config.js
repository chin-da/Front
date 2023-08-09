module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(\w+)\] (.+)/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
  plugins: [
    {
      rules: {
        'header-match-team-pattern': parsed => {
          const { type, subject } = parsed;
          if (type === null && subject === null) {
            return [false, "header must be in format '[type] subject'"];
          }
          return [true, ''];
        },
      },
    },
  ],
  rules: {
    'type-empty': [2, 'never'],
    'header-match-team-pattern': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'REFACTOR',
        'CHORE',
        'DOCS',
        'FEAT',
        'FIX',
        'DEL',
        'MOVE',
        'RENAME',
        'MERGE',
        'STYLE',
        'INIT',
        'ADD',
        'TEST',
      ],
    ],
    'type-case': [2, 'always', 'upper-case'],
  },
};
