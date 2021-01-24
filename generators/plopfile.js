module.exports = function (plop) {
  plop.setGenerator('atom', {
    description: 'application atom logic',
    prompts: [
      {
        type: 'list',
        choices: ['atom', 'molecule', 'organism', 'template'],
        name: 'category',
        message: 'Select component category'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Type component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{category}}s/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{category}}s/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{category}}s/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{category}}s/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
