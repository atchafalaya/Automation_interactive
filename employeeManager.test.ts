import {Builder, Capabilities} from "selenium-webdriver"
import { empVerify } from "../src/empVerify"
import { empInfo } from "../testData"



const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
})
afterAll(async () => {
    await driver.quit()
})

test('Verify Each Employee', async () => {
    for(let i=0; i < empInfo.length; i++){
        await empVerify(driver, i)
    }
})