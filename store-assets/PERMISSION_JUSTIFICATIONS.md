# Permission Justifications / Berechtigungsbegründungen

## Storage Permission

**English:**
The storage permission is required to save the user's editor preference locally. When a user selects their preferred Moodle editor (TinyMCE, Atto, or Plain Text), this choice is stored locally so the extension can display the currently active editor when the popup is opened. No personal data is collected or transmitted - only the editor preference string (e.g., "tiny", "atto", "textarea") is stored locally on the user's device.

**Deutsch:**
Die Storage-Berechtigung wird benötigt, um die Editor-Präferenz des Benutzers lokal zu speichern. Wenn ein Benutzer seinen bevorzugten Moodle-Editor auswählt (TinyMCE, Atto oder Nur Text), wird diese Auswahl lokal gespeichert, damit die Erweiterung den aktuell aktiven Editor anzeigen kann, wenn das Popup geöffnet wird. Es werden keine persönlichen Daten gesammelt oder übertragen - nur die Editor-Präferenz (z.B. "tiny", "atto", "textarea") wird lokal auf dem Gerät des Benutzers gespeichert.

---

## Host Permission (moodle.hftm.ch)

**English:**
The host permission for moodle.hftm.ch is required to communicate with the Moodle server. The extension needs to:
1. Fetch the current editor preference from the user's Moodle settings
2. Submit the new editor preference when the user makes a change

This is the core functionality of the extension. Without this permission, the extension cannot read or modify the user's editor settings on Moodle.

**Deutsch:**
Die Host-Berechtigung für moodle.hftm.ch wird benötigt, um mit dem Moodle-Server zu kommunizieren. Die Erweiterung muss:
1. Die aktuelle Editor-Einstellung aus den Moodle-Benutzereinstellungen abrufen
2. Die neue Editor-Einstellung übermitteln, wenn der Benutzer eine Änderung vornimmt

Dies ist die Kernfunktionalität der Erweiterung. Ohne diese Berechtigung kann die Erweiterung die Editor-Einstellungen des Benutzers auf Moodle nicht lesen oder ändern.
