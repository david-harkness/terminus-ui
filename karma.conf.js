module.exports = function(config) {

  var libBase = 'src/lib/'; // transpiled app JS and map files

  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-remap-coverage'),
    ],

    client: {
      builtPaths: [libBase], // add more spec base paths as needed
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    files: [
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // zone.js
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // Paths loaded via module imports:
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },
      // Ladda
      { pattern: 'node_modules/angular2-ladda/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/angular2-ladda/**/*.js.map', included: false, watched: false },
      { pattern: 'node_modules/ladda/**/*.js', included: false, watched: false },
      // Material styles
      { pattern: 'node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css', included: true, watched: true },
      { pattern: 'node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css.map', included: false, watched: false },

      { pattern: 'src/demo/systemjs-angular-loader.js', included: false, watched: false },

      'tooling/karma-test-shim.js', // optionally extend SystemJS mapping e.g., with barrels

      // transpiled application & spec code paths loaded via module imports
      { pattern: libBase + '**/*.js', included: false, watched: true },

      // Asset (HTML & CSS) paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see proxies section)
      { pattern: libBase + '**/*.html', included: false, watched: true },
      { pattern: libBase + '**/*.css', included: false, watched: true },

      // Paths for debugging with source maps in dev tools
      { pattern: libBase + '**/*.ts', included: false, watched: false },
      { pattern: libBase + '**/*.js.map', included: false, watched: false }
    ],

    // Proxied base paths for loading assets
    proxies: {
      // required for modules fetched by SystemJS
      '/base/src/lib/node_modules/': '/base/node_modules/',
      '/base/src/lib/demo/': '/base/src/demo/'
    },

    exclude: [],

    preprocessors: {
      'src/lib/**/*.js': ['coverage'],
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'remap-coverage'],
    coverageReporter: {
      type : 'json',
      subdir : '.',
      file : 'coverage-final.json'
    },
    remapCoverageReporter: {
      'text-summary': null, // to show summary in console
      html: './coverage/html',
      'text-lcov': './coverage/lcov/',
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
