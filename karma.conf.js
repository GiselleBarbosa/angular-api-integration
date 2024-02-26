// Karma configuration file
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    files: [
      {
        pattern: 'tests/**/*.spec.ts',
        type: module, // Defina o tipo de arquivo como 'module'
      },
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {
        // Configurações do Jasmine podem ser adicionadas aqui
        // Consulte https://jasmine.github.io/api/edge/Configuration.html para opções disponíveis
        // Por exemplo, você pode desativar a execução aleatória com `random: false`
        // ou definir uma semente específica com `seed: 4321`
      },
      clearContext: false, // Deixa a saída do Jasmine Spec Runner visível no navegador
    },
    jasmineHtmlReporter: {
      suppressAll: true, // Remove traços duplicados
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-api-integration'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
