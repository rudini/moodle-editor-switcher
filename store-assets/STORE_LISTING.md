# Chrome Web Store Listing

## Extension Name
Moodle Editor Switcher

## Short Description (132 characters max)
Switch between Moodle text editors (TinyMCE, Atto, Plain Text) with a single click. No more navigating to settings!

## Detailed Description

**Tired of navigating through Moodle settings just to change your text editor?**

Moodle Editor Switcher lets you instantly switch between different text editors directly from your browser toolbar. No more clicking through menus or waiting for page reloads!

### Features

🚀 **One-Click Switching**
Change your editor preference instantly without leaving your current page.

📝 **All Moodle Editors Supported**
- **TinyMCE** - Full-featured rich text editor with advanced formatting
- **Atto** - Moodle's lightweight built-in editor
- **Plain Text** - Simple textarea for quick text entry
- **Default** - Use your site's default editor

✨ **Smart Detection**
Automatically detects and highlights your currently active editor when you open the popup.

🔒 **Secure & Private**
- Works with your existing Moodle session
- No data collection or external requests
- Open source code

### How It Works

1. Click the extension icon in your browser toolbar
2. Select your preferred editor from the list
3. Done! Your editor preference is instantly updated

### Perfect For

- **Teachers & Instructors** who need different editors for different content types
- **Students** who prefer plain text for quick submissions
- **Course Administrators** testing editor configurations
- **Anyone** who frequently switches between Moodle editors

### Requirements

- You must be logged into your Moodle site
- Currently configured for moodle.hftm.ch (HFTM - Höhere Fachschule Technik Mittelland)

---

**Note:** This extension is designed for HFTM Moodle users. For other Moodle installations, the source code can be adapted.

## Category
Productivity

## Language
English

---

# Assets Checklist

## Required
- [x] Icon 128x128 (`icon128.png`)
- [x] At least one screenshot 1280x800 or 640x400 (`screenshot-1280x800.png`)

## Recommended
- [x] Small promo tile 440x280 (`promo-small-440x280.png`)
- [x] Marquee promo tile 1400x560 (`promo-marquee-1400x560.png`)
- [ ] YouTube video URL (see video recording instructions below)

---

# Video Recording Instructions

To create a promotional video:

1. Run the video recording script:
   ```bash
   node record-video.js
   ```

2. The script will:
   - Open a browser with the extension loaded
   - Navigate to Moodle
   - Wait for you to log in
   - Automatically demonstrate the extension

3. Use screen recording software (OBS, QuickTime, etc.) to capture the demonstration

4. Recommended video specs:
   - Resolution: 1280x720 or 1920x1080
   - Duration: 30-60 seconds
   - Format: MP4
   - Upload to YouTube and add the URL to your store listing

---

# Privacy Policy (Required for Chrome Web Store)

## Privacy Policy for Moodle Editor Switcher

**Last updated: [Date]**

### Data Collection
This extension does not collect, store, or transmit any personal data.

### Permissions Used
- **storage**: Used to remember your last selected editor preference locally
- **host_permissions (moodle.hftm.ch)**: Required to communicate with Moodle to change editor settings

### Data Storage
The only data stored is your editor preference, which is saved locally in Chrome's storage and never transmitted externally.

### Third-Party Services
This extension does not use any third-party analytics, tracking, or data collection services.

### Contact
For questions about this privacy policy, please contact: [your email]
