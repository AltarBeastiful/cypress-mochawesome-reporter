const cypress = require('cypress')
const fse = require('fs-extra')
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

async function runTests() {
  await fse.remove('mochawesome-report')
  const { totalFailed } = await cypress.run({
    record: true,
    key: "341971c0-3c21-4d14-9f0b-59d8316090fc"
  })
  const jsonReport = await merge()
  await generator.create(jsonReport)
  process.exit(totalFailed)
}

runTests()