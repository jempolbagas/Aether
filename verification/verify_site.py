from playwright.sync_api import sync_playwright

def verify_aether(page):
    # 1. Go to homepage
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle") # Wait for page/network to settle

    # Screenshot Homepage
    page.screenshot(path="verification/1_homepage_desktop.png")
    print("Homepage screenshot taken.")

    # 2. Click on a project (The Vector)
    # Finding the link by partial href since it's wrapped in a Card
    page.click("a[href='/work/the-vector']")
    page.wait_for_load_state("networkidle") # Wait for page/network to settle

    # Screenshot Project Page
    page.screenshot(path="verification/2_project_page_desktop.png")
    print("Project page screenshot taken.")

    # 3. Test Mobile View (Homepage)
    page.set_viewport_size({"width": 375, "height": 812})
    page.goto("http://localhost:3000")
    page.wait_for_load_state("networkidle") # Wait for page/network to settle

    # Screenshot Mobile Homepage
    page.screenshot(path="verification/3_homepage_mobile.png")
    print("Mobile Homepage screenshot taken.")

    # 4. Open Mobile Menu
    page.click("button:has-text('MENU')")
    page.wait_for_selector("text=Projects", state="visible") # Wait for menu to be visible

    # Screenshot Mobile Menu
    page.screenshot(path="verification/4_mobile_menu.png")
    print("Mobile Menu screenshot taken.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        try:
            verify_aether(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
