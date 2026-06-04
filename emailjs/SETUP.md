# EmailJS — Contact form template setup

Matches `src/components/ContactForm.jsx` (Name, Email, Mobile, Service, Message).

## Your IDs (already in code)

| Setting | Value |
|---------|--------|
| Service ID | `engineersurajsahani` |
| Template ID | `engineersurajsahani` |
| Public Key | `BY6c0mKQge9oFWOyD` |

## 1. Open EmailJS template

1. Go to [https://dashboard.emailjs.com/admin/templates](https://dashboard.emailjs.com/admin/templates)
2. Open template **engineersurajsahani** (or create one with that ID)

## 2. Subject line

Copy from `contact-form-subject.txt`:

```
New inquiry — {{service}} — {{user_name}}
```

Paste into the template **Subject** field.

## 3. HTML body

1. Open `contact-form-template.html` in this folder
2. Select all (`Ctrl+A`) and copy
3. In EmailJS template editor, switch **Content** to **HTML** (code `</>` icon)
4. Paste the full HTML

## 4. Template settings (required)

| Field | Value |
|-------|--------|
| **To Email** | Your inbox (e.g. `hello@sapphireinfotech.com`) |
| **From Name** | `Sapphire Website` |
| **Reply To** | `{{user_email}}` |

## 5. Variables (must match code)

EmailJS auto-detects these from the HTML. They are sent from `ContactForm.jsx`:

| Variable | Form field |
|----------|------------|
| `{{user_name}}` | Your Name |
| `{{user_email}}` | Email |
| `{{user_phone}}` | Mobile Number |
| `{{service}}` | Service Interest |
| `{{subject}}` | Same as service (for reply subject) |
| `{{message}}` | Tell us about your project |
| `{{submitted_at}}` | Auto (IST date/time) |

## 6. Test

Submit the form on `/contact` or the homepage CTA. You should receive the styled email within a few seconds.

If fields show blank in the email, variable names in the dashboard must match the table above exactly.
