# Credentialing App Rebuild — Full Instructions

## Overview
Rebuild src/App.jsx as a COMPLETE credentialing command center using ALL data from src/data.json.
This is a React + Vite app. Single-file App.jsx. No external dependencies beyond React.
All data is in src/data.json — import it and use every field.

## Brand Colors
- Navy: #0d2137
- Teal: #1a7a8a
- Gold: #e8a838

## Required Sections (tabbed navigation)

### 1. ALERT BANNER (always visible at top)
- Red banner for CRITICAL alerts from data.json alerts array
- Shows message + action required
- Cannot be dismissed

### 2. TAB: Master Tracker (default tab)
- Show ALL 30+ rows from master_tracker grouped by phase (Foundation, Medicaid, Commercial, Payment Setup)
- Each row shows: Payer/Plan, Clinician/Group, Status badge (color-coded per status_legend), Date Submitted, Confirmation #, Missing Items, Follow-Up Date, Notes
- Status badges use colors from status_legend array
- Rows are clickable to expand and show editable fields (dates, notes, confirmation #)
- Save all edits to localStorage

### 3. TAB: Contact Directory
- Table of all 17 contacts from contact_directory
- Clickable phone numbers (tel: links)
- Clickable portal links
- Show Department, Hours, Notes

### 4. TAB: Call Scripts
- 9 expandable scripts from call_scripts
- Each shows Script Name, When to Use
- Click to expand and show full Script Text
- "📋 Copy" button on each that copies script text to clipboard
- Show toast/feedback on copy

### 5. TAB: Document Checklist
- Show all 13 documents from document_checklist
- Side-by-side columns: Clinician 1 | Clinician 2 | Group/Safe Harbor
- RED BACKGROUND on any cell where status contains "Expired" or "NEED"
- Show expiry dates
- Show notes

### 6. TAB: Weekly Checklist
- Mon-Fri tasks from weekly_checklist + "As Needed" tasks
- Checkboxes that persist in localStorage
- "Reset Week" button to clear all checkboxes
- Group by day

### 7. STATUS LEGEND (always visible, collapsible at bottom)
- Show all 11 statuses from status_legend
- Color badge + meaning + next action + typical duration

## Technical Rules
- Import data from './data.json'
- All state saves to localStorage key 'sh-credentialing-v2'
- No Firebase, no backend, no auth
- Mobile-first responsive
- Use brand colors throughout
- Tab navigation at top (sticky)
- Build must pass with `npx vite build`

## Files to Edit
- src/App.jsx — complete rewrite
- Do NOT edit main.jsx, vite.config.js, or package.json
