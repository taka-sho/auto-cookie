require('babel-register')

exports.config = {
  specs: [
    './test/*.js'
  ],
  capabilities: [
    {
      browserName: 'internet explorer',
      version: '11.0'
    },
    {
      browserName: 'MicrosoftEdge'
    }
  ],
  exclude: [],
  bail: 0,
  sync: true,
  logLevel: 'verbose',
  coloredLogs: true,
  waitforTimeout: 15000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot', 'spec'],
  services: ['selenium-standalone'],
  seleniumArgs: {
    seleniumArgs: [
      '-Djna.nosys=true'
    ]
  },
  mochaOpts: {
    ui: 'bdd',
    compilers: ['js:babel-register'],
    timeout: 15000
  }
}
