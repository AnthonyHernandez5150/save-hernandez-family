# Legal Documents Directory

This folder should contain all legal documents and evidence files for the campaign website.

## Required Documents

### Immigration Documents
- `visa-denial-letter.pdf` - Official visa denial from Managua consulate
- `i601a-approval.pdf` - Approved I-601A provisional waiver (February 2024)
- `i601-hardship-waiver.pdf` - Submitted I-601 hardship waiver (April 2025)
- `legalnet-challenge.pdf` - Filed LegalNet challenge (March 2025)

### Medical Evidence
- `er-records-1998-redacted.pdf` - Hospital records from domestic violence incident
- `therapy-notes-redacted.pdf` - Mental health documentation
- `medical-reports-redacted.pdf` - Additional medical evidence

### Educational Records
- `school-counselor-reports-redacted.pdf` - Children's behavioral changes documentation
- `academic-records-redacted.pdf` - School performance impacts

### Congressional Documentation
- `congressional-inquiry.pdf` - Congressional inquiry documentation (May 2025)
- `representative-correspondence.pdf` - Letters from congressional representatives

## Document Guidelines

### Privacy Protection
- **REDACT ALL PERSONAL INFORMATION** including:
  - Social Security Numbers
  - Full addresses (show only city/state)
  - Personal medical details beyond what's necessary
  - Children's full names and birthdates
  - Financial account numbers

### File Naming Convention
Use descriptive names with dates:
- `visa-denial-2025-03-05.pdf`
- `er-records-1998-redacted.pdf`
- `congressional-inquiry-2025-05-07.pdf`

### File Formats
- **PDFs**: Primary format for legal documents
- **Images**: JPG/PNG for document photos
- **Max Size**: 10MB per file for web compatibility

## Security Considerations

1. **Password Protection**: Consider password-protecting sensitive documents
2. **Watermarks**: Add "CONFIDENTIAL" watermarks to sensitive files
3. **Access Control**: Limit access to truly necessary documents only
4. **Backup**: Keep originals in secure, separate location

## Document Categories for Website Display

### Public Documents (Full Display)
- Government denial letters (personal info redacted)
- Congressional correspondence
- Legal filing confirmations

### Restricted Documents (Excerpt Only)
- Medical records (show diagnostic codes/dates only)
- Therapy notes (show treatment duration, not details)
- Children's records (show impact, not specifics)

### Private Documents (Reference Only)
- Full medical files
- Complete legal case files
- Detailed financial records

## Integration with Website

Documents will be referenced in the website but served from secure storage:

```html
<!-- Example integration -->
<a href="legal/visa-denial-redacted.pdf" target="_blank" class="btn">
  View Visa Denial Letter
</a>
```

## Legal Disclaimer

All documents shared publicly should be reviewed by legal counsel before publication. Consider adding this disclaimer to the website:

"Documents have been redacted to protect privacy while maintaining transparency about our case. Full documentation is available to legal representatives and authorized parties upon request."
