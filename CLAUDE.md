# CLAUDE.md - AI Assistant Guide

## Repository Overview

**Name:** ideas
**Owner:** wrichman
**Purpose:** A collaborative learning and development repository where a team of developers practices web development, builds projects, and works on production applications.

**Repository Type:** Mixed-use (Learning + Production)
- Individual learning projects and exercises
- Production/semi-production applications (grant scrapers, e-commerce platforms)
- Daily development logs and progress tracking

---

## Repository Structure

### Per-Developer Organization

This repository uses a **per-developer directory structure** where each team member has their own top-level directory:

```
ideas/
├── Arbri/          # Production work: React projects, Python scrapers
├── Bishoy/         # JavaScript & React learning exercises
├── Chris/          # React beginner projects & fundamentals
├── Prayaag/        # Events, promises, React projects
├── Raymond/        # Advanced JS, full-stack e-commerce
├── Sitong/         # JavaScript fundamentals, async patterns
├── README.md       # Minimal project description
└── add_ideas       # Simple text file
```

### Directory Purposes

#### **Arbri/** - Production Focus
- **ReactProjects/** - "Catch of the Day" React app with Firebase
  - Real-time data syncing, routing, transitions
  - Firebase 8.10, React 17, Stylus CSS
- **WebsiteCrawler/** - Python-based grant scraper
  - Uses Firecrawl API + OpenAI for intelligent web scraping
  - Exports structured grant data to CSV
  - Production tool for grant discovery
- **Logs/** - Detailed daily development logs (May-July 2024)

#### **Bishoy/** - Structured Learning
- **JS course/** - Comprehensive JavaScript exercises
  - Debugging tools, DOM manipulation, events, data types
  - Uses ESLint with "wesbos" config
- **React/catch-of-the-day/** - React tutorial project
  - Firebase integration, routing, deployment configs

#### **Chris/** - Beginner Learning Track
- **react-beginner-catch-of-the-day/** - Tutorial-based learning
- **Supporting files:** Classes, promises, personal portfolio work
- **log.md** - Personal learning progress tracking

#### **Prayaag/** - Async & Modern React
- **Events/, promises/, events_callbacks/** - Async patterns
- **React/my-project/** - Modern React 18 with Bootstrap
- **closures.js** - JavaScript fundamentals

#### **Raymond/** - Advanced Full-Stack
- **JS/** - Organized by topic (intro, functions, promises, APIs, async, scope)
- **React/Advanced-React/** - **"Sick Fits" E-commerce Platform**
  - **Frontend:** Next.js 13.4, React 18, Apollo Client, GraphQL
  - **Backend:** Keystone CMS, TypeScript, GraphQL API
  - **Features:** Stripe payments, authentication, file uploads
  - Enterprise-grade full-stack application
- **React/Playground/** - Experimental React projects

#### **Sitong/** - JavaScript Foundations
- Progressive learning: basic practice → promises → AJAX → async/await → API → React
- Clear progression from fundamentals to modern patterns

---

## Technologies & Tech Stack

### Frontend Frameworks
- **React:** 17.0.2 - 18.2.0 (multiple versions across projects)
- **Next.js:** 10.0.5 - 13.4.3 (advanced projects)
- **React Router DOM:** 5.3.0

### State Management & Data
- **Apollo Client:** 3.7.14 (GraphQL client)
- **Firebase:** 8.10.0 (backend-as-a-service)
- **re-base:** 4.0.0 (Firebase + React bindings)
- **GraphQL:** 16.6.0

### Styling Solutions
- **Styled-components:** 6.0.0-rc.1 (CSS-in-JS)
- **Stylus:** 0.55.0 (CSS preprocessor)
- **Bootstrap:** 5.2.3 + React Bootstrap 2.7.4
- **Autoprefixer:** For CSS compatibility

### Backend & APIs
- **Keystone CMS:** @keystone-next/* suite (headless CMS)
- **GraphQL:** Server-side API layer
- **Nodemailer:** 6.4.17 (email sending)
- **Python 3.x:** For web scraping scripts

### External Services
- **Stripe:** Payment processing (@stripe/react-stripe-js)
- **Firecrawl API:** Web scraping service
- **OpenAI API:** AI-powered data extraction
- **Firebase:** Real-time database & authentication
- **Airtable:** Data management (referenced in logs)

### Development Tools
- **ESLint:** 8.41.0 (wesbos/airbnb configs)
- **Babel:** JavaScript transpilation
- **TypeScript:** Advanced React backend uses TS
- **Prettier:** Code formatting
- **Jest + React Testing Library:** Testing framework
- **Concurrently:** 6.4.0 (run multiple npm scripts)

---

## Development Workflows

### Daily Logging Pattern
**Convention:** Team members log daily progress in personal log files
- Format: Date-based entries (e.g., "May 2024, Tuesday 21:")
- Content: Completed work, blockers, learning progress
- Location: Individual directories (e.g., `Chris/log.md`, `Arbri/Logs/`)

### Git Workflow

#### Branch Strategy
- **Main branch:** Primary development branch
- **Feature branches:** Use pattern `claude/descriptive-name-{sessionId}`
  - Example: `claude/add-claude-documentation-SOoYT`
  - CRITICAL: Must start with `claude/` and end with session ID

#### Commit Patterns
**Observed Styles:**
- **Logging commits:** "Logged", "Updated for Friday", "Logged for week 3"
- **Feature commits:** "Website Crawler added", "Code App finished"
- **Informal but consistent:** Short, descriptive messages
- **Frequency:** Multiple commits per day during active development

**Best Practices for AI Assistants:**
1. Use descriptive commit messages focused on "why" not "what"
2. Follow the existing informal but clear style
3. Commit frequently during development sessions
4. Include context in feature-related commits

#### Push Requirements
```bash
# ALWAYS use -u flag for new branches
git push -u origin <branch-name>

# Branch MUST follow pattern: claude/*-{sessionId}
# Otherwise push will fail with 403 error

# Retry logic for network failures:
# - Retry up to 4 times
# - Exponential backoff: 2s, 4s, 8s, 16s
```

### Project Setup Patterns

#### React Projects
```bash
# Most projects use standard npm workflows
npm install          # Install dependencies
npm start           # Development server
npm run build       # Production build
npm test            # Run tests
```

#### Common Dependencies Installation
Projects typically include:
- React + React DOM
- React Router (for multi-page apps)
- Stylus/Styled-components (for styling)
- Firebase/Apollo (for backend/API)
- ESLint (for linting)

---

## File Organization Conventions

### Configuration Files

#### .gitignore Patterns
**Standard exclusions:**
```
node_modules/
.eslintrc
package-lock.json
package.json          # Sometimes excluded
.DS_Store            # macOS files
.cache/              # Build caches
```

**Note:** Conventions vary by directory. Raymond's JS folder has custom .gitignore.

#### ESLint Configuration
- **Primary config:** "wesbos" (Wes Bos standards)
- **Alternative:** Airbnb style guide (Advanced React projects)
- **Location:** `.eslintrc` files in project roots

#### TypeScript Configuration
- **Used in:** Raymond/React/Advanced-React/sick-fits/backend/
- **File:** `tsconfig.json`
- **Purpose:** Backend type safety and compilation

### Project Structure Patterns

#### Standard React App Structure
```
project-name/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── Header.js
│   │   └── [Feature].js
│   ├── css/
│   │   └── style.css (or .styl)
│   ├── helpers.js
│   └── index.js
├── package.json
├── .gitignore
└── README.md
```

#### Advanced Full-Stack Structure (Sick Fits)
```
sick-fits/
├── frontend/          # Next.js React app
│   ├── components/
│   ├── lib/
│   ├── pages/
│   └── package.json
└── backend/          # Keystone CMS API
    ├── schemas/
    ├── keystone.ts
    ├── tsconfig.json
    └── package.json
```

---

## Key Files & Their Purposes

### Root Level
- **README.md** - Minimal project description ("This is an idea")
- **add_ideas** - Simple text marker ("[add ideas]")
- **.DS_Store** - macOS metadata (should be gitignored)

### Per-Developer Logs
- **Chris/log.md** - Personal learning journal with dates
- **Arbri/Logs/** - Directory with detailed daily logs
- Track progress, blockers, completed features

### Configuration Files
- **package.json** - Project dependencies and scripts
- **.eslintrc** - Code quality standards
- **tsconfig.json** - TypeScript compiler options
- **now.json** - Vercel deployment configuration
- **security-rules.json** - Firebase security rules

### Application Entry Points
- **src/index.js** - React app entry point
- **public/index.html** - HTML template
- **keystone.ts** - Backend API entry (Advanced React)

---

## Best Practices for AI Assistants

### When Working in This Repository

#### 1. Respect Directory Boundaries
- Each developer has their own space
- Don't modify another developer's directory without explicit instruction
- Keep changes isolated to the relevant developer's folder

#### 2. Understand Project Context
Before making changes:
- Identify which developer's directory you're working in
- Understand if it's a learning project or production code
- Check for existing patterns in that developer's other projects

#### 3. Match Existing Patterns
- **Code style:** Follow ESLint config if present (wesbos/airbnb)
- **Naming:** Use existing naming conventions in that directory
- **Structure:** Mirror existing component/file organization
- **Dependencies:** Use compatible versions with existing packages

#### 4. Git Workflow
```bash
# Always check current branch first
git status
git branch

# Create feature branches with proper naming
git checkout -b claude/feature-name-{sessionId}

# Commit frequently with clear messages
git add .
git commit -m "Add grant scraper CSV export feature"

# Push with upstream tracking
git push -u origin claude/feature-name-{sessionId}
```

#### 5. Learning vs Production Code
**Learning Projects (Bishoy, Chris, Prayaag, Sitong):**
- Focus on clarity and educational value
- Add comments explaining complex concepts
- Keep code simple and easy to understand
- It's okay to have tutorial-style code

**Production Projects (Arbri's scrapers, Raymond's Sick Fits):**
- Follow production-grade patterns
- Include error handling
- Write maintainable, scalable code
- Add proper validation and security measures

#### 6. Dependencies Management
**Before adding new dependencies:**
1. Check if similar functionality exists in the project
2. Verify compatibility with existing React/Node versions
3. Use exact versions that match project patterns
4. Update package.json appropriately

**Common dependency version ranges:**
- React: 17.0.2 - 18.2.0
- Node: 10+ (based on Babel configs)
- ESLint: 8.x

#### 7. Testing & Validation
**For React projects:**
```bash
# Install dependencies
npm install

# Run linter
npm run lint  # (if configured)

# Start dev server to verify
npm start

# Run tests (if configured)
npm test
```

**For Python projects:**
```bash
# Check Python version
python --version

# Install requirements (if requirements.txt exists)
pip install -r requirements.txt

# Run script to verify
python script_name.py
```

#### 8. Documentation Updates
**When adding new features:**
- Update relevant README.md if it exists
- Add comments for complex logic
- Update log files if that's the developer's pattern
- Consider adding examples for future reference

#### 9. Firebase & External Services
**Projects using Firebase (Arbri, Bishoy):**
- Check for `base.js` or Firebase config files
- Don't commit Firebase credentials
- Understand real-time database vs Firestore usage
- Check `security-rules.json` for database rules

**Projects using APIs (Arbri's scraper):**
- Store API keys in environment variables
- Don't commit `.env` files
- Add `.env.example` as template
- Handle API errors gracefully

#### 10. Styling Approaches
**Identify the styling method:**
- **Stylus:** `.styl` files, compile to CSS
- **Styled-components:** CSS-in-JS, template literals
- **Regular CSS:** `.css` files in src/css/
- **Bootstrap:** className-based utility classes

**Match the existing approach** - don't mix styling paradigms within a project.

---

## Common Tasks & Patterns

### Adding a New React Component
```javascript
// Standard pattern observed in projects
import React from 'react';

class ComponentName extends React.Component {
  render() {
    return (
      <div className="component-name">
        {/* Component content */}
      </div>
    );
  }
}

export default ComponentName;
```

**Or functional component (newer projects):**
```javascript
import React from 'react';

function ComponentName() {
  return (
    <div className="component-name">
      {/* Component content */}
    </div>
  );
}

export default ComponentName;
```

### Firebase Integration Pattern
```javascript
// From observed base.js files
import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  // Config from environment/config file
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
```

### GraphQL Query Pattern (Advanced React)
```javascript
// Apollo Client pattern from Sick Fits
import { useQuery, gql } from '@apollo/client';

const QUERY_NAME = gql`
  query {
    items {
      id
      name
      # fields
    }
  }
`;

function Component() {
  const { data, loading, error } = useQuery(QUERY_NAME);
  // Handle loading/error/data states
}
```

---

## Troubleshooting Guide

### Common Issues & Solutions

#### 1. Git Push Fails with 403
**Problem:** Branch name doesn't follow required pattern
**Solution:** Ensure branch starts with `claude/` and ends with session ID
```bash
git checkout -b claude/proper-name-ABC123
```

#### 2. Network Failures on Git Operations
**Solution:** Implement retry logic with exponential backoff
```bash
# Retry up to 4 times: 2s, 4s, 8s, 16s delays
```

#### 3. Firebase Connection Errors
**Check:**
- Firebase config in `base.js` or environment
- Security rules in `security-rules.json`
- Firebase version compatibility (8.10.0 used in projects)

#### 4. ESLint Errors
**Solution:** Check which config is used
```bash
# For wesbos config
npm install --save-dev eslint-config-wesbos

# Run linter
npx eslint src/
```

#### 5. Styling Not Appearing
**Check:**
- Is Stylus installed? (`npm install stylus`)
- Are `.styl` files being compiled?
- Is CSS imported in `index.js`?
- For styled-components, is ThemeProvider set up?

#### 6. Module Not Found Errors
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Or use npm ci for clean install
npm ci
```

---

## Project-Specific Notes

### Arbri's Grant Scraper (WebsiteCrawler/gpt.py)
**Purpose:** Scrape grant websites and extract structured data using AI

**Key Components:**
- Firecrawl API for web scraping
- OpenAI API for intelligent data extraction
- CSV export functionality

**Usage Pattern:**
```python
# Likely usage (based on file name and purpose)
python gpt.py
# Outputs: CSV file with grant data
```

**Fields Extracted:** Deadline, amount, eligibility criteria, application process

### Raymond's Sick Fits (Advanced-React/sick-fits/)
**Purpose:** Full-stack e-commerce platform

**Frontend Features:**
- Product catalog with images
- Shopping cart functionality
- User authentication
- Stripe checkout integration
- Order history
- Search and filtering

**Backend Features:**
- GraphQL API
- User management
- Product CRUD operations
- Order processing
- Email notifications (Nodemailer)
- File uploads

**Development:**
```bash
# Frontend
cd frontend
npm install
npm run dev  # Next.js dev server

# Backend
cd backend
npm install
npm run dev  # Keystone CMS
```

### Tutorial-Based Projects (Catch of the Day)
**Source:** Wes Bos "React for Beginners" course

**Features:**
- Real-time fish market simulation
- Firebase sync across devices
- Inventory management
- Order tracking
- Routing and transitions

**Multiple implementations by:** Arbri, Bishoy, Chris, Raymond

---

## Learning Resources Referenced

Based on project structures and configurations:

1. **Wes Bos Courses:**
   - "React for Beginners" (Catch of the Day project)
   - "Advanced React & GraphQL" (Sick Fits project)
   - JavaScript fundamentals courses (ESLint config references)

2. **Technologies to Study:**
   - React fundamentals (components, state, props, lifecycle)
   - React Router for navigation
   - Firebase for backend-as-a-service
   - GraphQL and Apollo Client for API communication
   - Next.js for server-side rendering
   - Styled-components for CSS-in-JS
   - TypeScript for type safety
   - Stripe for payment processing

---

## Quick Reference

### Most Common Commands

```bash
# Git operations
git status
git add .
git commit -m "message"
git push -u origin branch-name
git fetch origin branch-name
git pull origin branch-name

# npm operations
npm install
npm start
npm run build
npm test
npm run dev

# Project exploration
ls -la
find . -name "*.js" | grep -v node_modules
```

### File Locations Cheat Sheet

| What | Where |
|------|-------|
| React components | `src/components/*.js` |
| Styles | `src/css/*.styl` or styled-components |
| Firebase config | `src/base.js` |
| Entry point | `src/index.js` |
| HTML template | `public/index.html` |
| Dependencies | `package.json` |
| Lint config | `.eslintrc` |
| Git ignore | `.gitignore` |
| TypeScript config | `tsconfig.json` (if TypeScript) |

---

## Version Information

**Last Updated:** December 21, 2025
**Repository State:** Active development
**Current Branch:** claude/add-claude-documentation-SOoYT
**Recent Activity:** Logging commits (June-July 2024)
**Primary Contributors:** Arbri Kumria (31+ commits), Chris, Prayaag, Raymond, Sitong

---

## Notes for Future AI Assistants

1. **This is a learning repository** - Expect varying code quality and patterns
2. **Respect individual learning paths** - Each developer is at different skill levels
3. **Production code exists** - Treat Arbri's scrapers and Raymond's Sick Fits as production-grade
4. **Tutorial code is okay** - Don't over-engineer learning projects
5. **Logging is important** - Team uses logs for tracking progress
6. **Multiple React versions** - Projects use different React versions (17-18)
7. **Dependencies matter** - Check existing versions before adding new packages
8. **Git workflow is specific** - Follow the `claude/*-{sessionId}` branch pattern
9. **Individual patterns vary** - Each developer has their own organizational style
10. **Ask before major changes** - Especially for production code or cross-directory changes

---

## Contact & Collaboration

**Repository Owner:** wrichman
**Git Remote:** http://local_proxy@127.0.0.1:25912/git/wrichman/ideas

**Team Members (by directory):**
- Arbri Kumria (primary committer)
- Bishoy
- Chris Alexander Pop
- Prayaag
- Raymond
- Sitong

**Collaboration Model:** Per-developer directories with individual ownership and learning tracks.

---

*This document is maintained by AI assistants working in this repository. Update it when significant structural changes occur or new patterns emerge.*
