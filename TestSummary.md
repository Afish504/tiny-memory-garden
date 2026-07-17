# Memory Garden Testing Outline

**Tool:** Playwright  
**Website:** https://memory-garden-kappa.vercel.app/

## What I plan to test

### 1. Home page
- Make sure the website loads without errors.
- Check that the main title, buttons, and navigation are visible.
- Make sure important links go to the correct pages.

### 2. User account
- Test creating an account with valid information.
- Test login with the correct email and password.
- Test invalid login information.
- Test logging out.

### 3. Garden or memory features
- Test creating a new memory.
- Test adding a title, description, date, and image.
- Test saving the memory.
- Test editing an existing memory.
- Test deleting a memory.
- Make sure the saved memory still appears after refreshing the page.

### 4. Form validation
- Try submitting forms with missing information.
- Test invalid dates, emails, and file types.
- Make sure error messages are easy to understand.
- Make sure duplicate submissions are prevented.

### 5. Navigation
- Test every navigation button.
- Test the browser back and forward buttons.
- Make sure protected pages send logged-out users to the login page.
- Check that there are no broken links.

### 6. Mobile and desktop layout
- Test the website on desktop, tablet, and mobile sizes.
- Make sure text does not overlap.
- Make sure buttons are easy to press.
- Make sure images resize correctly.

### 7. Accessibility
- Test keyboard navigation.
- Make sure form fields have labels.
- Check that images have alt text.
- Make sure buttons and links have clear names.

### 8. Error handling
- Test what happens when the internet connection is lost.
- Test failed API requests.
- Make sure the user sees an error message instead of a blank page.

## Playwright pseudocode

```ts
import { test, expect } from "@playwright/test";

test.describe("Memory Garden website", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://memory-garden-kappa.vercel.app/");
  });

  test("home page loads", async ({ page }) => {
    await expect(page).toHaveTitle(/Memory Garden/i);
    await expect(page.locator("body")).toBeVisible();
  });

  test("user can create a memory", async ({ page }) => {
    // Log in first if required
    // Click the button used to add a memory
    // Fill in the memory title and description
    // Upload an image if the feature allows it
    // Click save
    // Confirm the new memory appears on the page
  });

  test("required fields show errors", async ({ page }) => {
    // Open the create-memory form
    // Leave required fields empty
    // Click save
    // Confirm an error message appears
  });

  test("user can edit a memory", async ({ page }) => {
    // Open an existing memory
    // Click edit
    // Change the title or description
    // Save the changes
    // Confirm the updated information appears
  });

  test("user can delete a memory", async ({ page }) => {
    // Open an existing memory
    // Click delete
    // Confirm the deletion
    // Make sure the memory is removed
  });

  test("mobile layout works", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload();

    // Confirm the main content and navigation are still visible
    await expect(page.locator("body")).toBeVisible();
  });
});
```

## Expected result
The website should load correctly, users should be able to create and manage memories, forms should show clear errors, and the site should work on both desktop and mobile devices.
