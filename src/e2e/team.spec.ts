import { test, expect } from '@playwright/test'

test('should be navigate into team page', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.click('text=Team')

  await expect(page).toHaveURL('http://localhost:3000/team')

  let teamPage = await page.getByTitle('Team')

  await expect(teamPage).toHaveText('team')
})
