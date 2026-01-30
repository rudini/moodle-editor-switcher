# Privacy Policy for Moodle Editor Switcher

**Last updated: January 30, 2026**

## Overview

Moodle Editor Switcher is a browser extension that allows users to quickly switch between different text editors in Moodle. This privacy policy explains how the extension handles user data.

## Data Collection

**We do not collect any personal data.**

This extension does not collect, store, transmit, or share any personal information or browsing data.

## Data Storage

The extension stores only one piece of information locally on your device:

- **Editor preference**: Your last selected editor choice (e.g., "TinyMCE", "Atto", "Plain Text")

This data is stored using Chrome's local storage API and never leaves your device. It is used solely to remember your preference between browser sessions.

## Permissions

The extension requires the following permissions:

| Permission | Purpose |
|------------|---------|
| `storage` | To save your editor preference locally on your device |
| `host_permissions` (moodle.hftm.ch) | To communicate with Moodle and change your editor settings |

## Network Requests

The extension only communicates with the Moodle server (moodle.hftm.ch) to:

1. Fetch your current editor preference
2. Submit your new editor preference when you make a change

No data is sent to any third-party servers.

## Third-Party Services

This extension does not use any:

- Analytics services
- Tracking services
- Advertising networks
- Third-party APIs

## Data Sharing

We do not sell, trade, or transfer any user data to third parties.

## Security

All communication with Moodle occurs over HTTPS. The extension uses your existing Moodle session for authentication and does not store any credentials.

## Children's Privacy

This extension does not knowingly collect any information from children under 13 years of age.

## Changes to This Policy

We may update this privacy policy from time to time. Any changes will be reflected in the "Last updated" date at the top of this document.

## Open Source

This extension is open source. You can review the complete source code to verify our privacy practices.

## Contact

If you have any questions about this privacy policy, please open an issue on the project's GitHub repository.

---

*This extension is not affiliated with or endorsed by Moodle Pty Ltd.*
