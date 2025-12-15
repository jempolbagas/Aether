from playwright.sync_api import sync_playwright

def verify_ux_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to the contact section
        page.goto("http://localhost:9002#contact")
        page.wait_for_timeout(2000) # Wait for animations

        # Verify Label/Placeholder Fix
        referral_input = page.locator("input[name='referral']")
        placeholder = referral_input.get_attribute("placeholder")
        print(f"Referral Placeholder: {placeholder}")

        if placeholder != "REFERRAL CODE (OPTIONAL)":
            print("ERROR: Placeholder mismatch!")
        else:
            print("SUCCESS: Placeholder corrected.")

        # Take screenshot of Contact Form
        page.screenshot(path="verification/contact_fix.png")

        # Go to the projects section
        page.goto("http://localhost:9002#projects")
        page.wait_for_timeout(2000)

        # Verify Focus State on Project Card (Simulate Tab)
        # We need to find the link wrapping the card
        # The first project link
        project_link = page.locator("a[href^='/work/']").first
        project_link.focus()
        page.wait_for_timeout(500)

        # Take screenshot of Focused Project Card
        page.screenshot(path="verification/project_focus.png")

        browser.close()

if __name__ == "__main__":
    verify_ux_changes()
