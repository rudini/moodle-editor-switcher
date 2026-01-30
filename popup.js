// Configuration
const MOODLE_URL = 'https://moodle.hftm.ch';

document.addEventListener('DOMContentLoaded', async () => {
  const buttons = document.querySelectorAll('.editor-option');
  const statusDiv = document.getElementById('status');

  // Load current editor preference on startup
  await loadCurrentEditor();

  buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const editor = btn.dataset.editor;

      // Show loading state
      showStatus('Switching editor...', 'loading');

      try {
        const result = await changeEditor(editor);

        if (result.success) {
          // Update UI
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          // Save to storage
          await chrome.storage.local.set({ currentEditor: editor });

          showStatus('Editor switched successfully', 'success');
        } else {
          throw new Error(result.error || 'Switch failed');
        }
      } catch (error) {
        showStatus(error.message, 'error');
      }
    });
  });

  async function loadCurrentEditor() {
    try {
      // Try to get the current editor from Moodle
      const response = await fetch(`${MOODLE_URL}/user/editor.php`, {
        credentials: 'include'
      });
      const html = await response.text();

      // Find which editor is currently selected
      const selectMatch = html.match(/<select[^>]*name="([^"]*)"[^>]*>([\s\S]*?)<\/select>/i);
      if (selectMatch) {
        const selectContent = selectMatch[2];
        const selectedMatch = selectContent.match(/<option[^>]*selected[^>]*value="([^"]*)"/i);
        if (selectedMatch) {
          const currentEditor = selectedMatch[1];
          buttons.forEach(btn => {
            if (btn.dataset.editor === currentEditor) {
              btn.classList.add('active');
            }
          });
          await chrome.storage.local.set({ currentEditor });
          return;
        }
      }

      // Fallback to stored value
      const stored = await chrome.storage.local.get('currentEditor');
      if (stored.currentEditor !== undefined) {
        buttons.forEach(btn => {
          if (btn.dataset.editor === stored.currentEditor) {
            btn.classList.add('active');
          }
        });
      }
    } catch (error) {
      // Fallback to stored value on error
      const stored = await chrome.storage.local.get('currentEditor');
      if (stored.currentEditor !== undefined) {
        buttons.forEach(btn => {
          if (btn.dataset.editor === stored.currentEditor) {
            btn.classList.add('active');
          }
        });
      }
    }
  }

  function showStatus(message, type) {
    if (type === 'loading') {
      statusDiv.innerHTML = `<div class="spinner"></div><span>${message}</span>`;
    } else {
      statusDiv.innerHTML = `<span>${message}</span>`;
    }
    statusDiv.className = 'status ' + type;
    statusDiv.style.display = 'flex';

    if (type === 'success') {
      setTimeout(() => {
        statusDiv.style.display = 'none';
      }, 2000);
    }
  }
});

async function changeEditor(editor) {
  try {
    // First, fetch the editor preferences page to get all form fields
    const getResponse = await fetch(`${MOODLE_URL}/user/editor.php`, {
      credentials: 'include'
    });
    const html = await getResponse.text();

    // Extract all required form fields
    const sesskey = extractValue(html, /name="sesskey"[^>]*value="([^"]+)"/);
    const userId = extractValue(html, /name="id"[^>]*value="([^"]+)"/);
    const qfToken = extractValue(html, /name="_qf__user_edit_editor_form"[^>]*value="([^"]+)"/);

    if (!sesskey) {
      return { success: false, error: 'Not logged in to Moodle' };
    }

    // Find the editor select field name
    const selectMatch = html.match(/<select[^>]*name="([^"]*)"[^>]*>[\s\S]*?<option[^>]*value="atto"/i);
    const editorFieldName = selectMatch ? selectMatch[1] : 'preference_editor';

    // Build form data with all required fields
    const formData = new URLSearchParams();
    if (userId) formData.append('id', userId);
    formData.append('sesskey', sesskey);
    if (qfToken) formData.append('_qf__user_edit_editor_form', qfToken);
    formData.append(editorFieldName, editor);
    formData.append('submitbutton', 'Save changes');

    const response = await fetch(`${MOODLE_URL}/user/editor.php`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: 'Request failed' };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function extractValue(html, regex) {
  const match = html.match(regex);
  return match ? match[1] : null;
}
