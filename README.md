# Coffee Shop Project — Candidate Assessment

Welcome to the coding assessment for **[Tongston Group]**!  
This repository is bootstrapped using **Next.js** and **Tailwind CSS**.

## Objective

All candidates are expected to **clone this repository** and build a **fictitious coffee shop website (Brew Hez)** with the required pages and functionality listed below.

## Required Pages

### 1 Home Page

Create a welcoming landing page for the coffee shop.

### 2 About Page

Must include:

- **About the Company:** A brief description.
- **Team Section:** Team bios with **social media links** (use **Font Awesome** icons only).

### 3 Products Page

Showcase the various **brands of coffee** offered by the fictitious coffee shop and a button to place an order sending an email with the order using email js containing order details and customer information (phone number, name and home address).

### 4 Contact Page

- Must include a **contact form** that allows visitors to reach the company.
- The form must save submitted data to a **MongoDB database**.
- **MongoDB Connection:**
  - A production connection string **will be provided** — include a slot in your `.env` file for this.
  - see connection string MONGO_URI=mongodb+srv://TongstonDev:%23Dev_Tworld2024@tworld1.tslnb.mongodb.net/Tongston_Holdings
  - For development, use your **local MongoDB** setup.
  - Example:
    ```env
    MONGODB_URI=your-production-connection-string-here
    LOCAL_MONGODB_URI=mongodb://localhost:27017/your-db-name
    ```

## Technical Requirements

- **Framework:** Next.js (Pages Router)
- **Styling:** Tailwind CSS only (**no custom CSS**)
- **Reusable Components:**  
  All site elements should be **reusable**. Add clear **code comments** for readability and maintainability.
- **Icons:** **Font Awesome** only, if icons are needed.
- **Animations:** **Framer Motion** only — use animations where appropriate.
- **Alerts:** Use the provided **React SweetAlert2** component — it is reusable.
- **State Management:** Use proper React state and side effects.
- **Accessibility:**
- Proper section labels
- Screen reader-friendly structure
- Semantic, SEO-friendly HTML

## Design Requirements

- Extend your **Tailwind CSS** config with the following custom colors:

  | Name      | Hex                                     |
  | --------- | --------------------------------------- |
  | Primary   | `#FF0000` (Red)                         |
  | Secondary | `#FFFF00` (Yellow)                      |
  | Tertiary  | `#FFFFFF` (White)                       |
  | Custom    | One **additional color of your choice** |

- **Use only these colors** in your design.

Example `tailwind.config.js`:

```js
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#FFFF00",
        tertiary: "#FFFFFF",
        custom: "#YOUR_CUSTOM_HEX",
      },
    },
  },
  plugins: [],
};
```

## Project Setup Instructions

git clone [https://github.com/ITtongston/Code-Test.git]
cd [PROJECT_DIRECTORY]

## Create your personal working branch

git checkout -b [Your-Full-Name]

- All code must be pushed to your personal branch only.
- Push updates frequently to enable easy tracking and monitoring by the review team.

## Set up local MongoDB connection

- Use a local MongoDB for development:
- Add your local connection string to `.env.local`

## Deployment Instructions

- Deploy your project to Vercel (preferred) or Netlify.
- Provide the live deployed link so it can be reviewed during your interview.

## Strict Project Requirements

## All code must follow:

- Reusable code practices
- Maintainable, clean structure
- Strict adherence to Tailwind and Headless UI only — no custom CSS
- No AI integration of any form
- Proper use of React states and side effects
- Semantic HTML for SEO and accessibility
- Clear, relevant code comments explaining reusable logic and structure
- Proper section labels, ARIA attributes, and semantics for screen readers
- Only use Font Awesome icons
- Only use Framer Motion for animations
- Only use React SweetAlert2 for alerts (already reusable)

## Submission Deliverables

`Submit within 2 days of receiving this assessment email. Your submission must include:`

## Full Name

## Location

## Link to your GitHub repository

## Live Vercel or Netlify URL

## PDF Documentation (max 2 pages) covering:

- The development steps & approach used to ensure a unified, cohesive website
- Challenges faced and how you resolved them
- Measurable results/outcomes
- The tech stack used

## Branching Policy

- Clone the repository.
- Checkout from the main branch.
- Create and work on a new branch named with your full name.
- Push all updates to your personal branch only.

## Important Reminders

- No custom CSS.
- No AI integrations.
- Only Tailwind CSS & Headless UI for styling.
- Only Font Awesome for icons.
- Only Framer Motion for animations.
- Only React SweetAlert2 for alerts.
- Code must be clean, reusable, maintainable, SEO-friendly, and accessible.
  `Failure to follow these guidelines will impact your assessment.`

  ## Good Luck!

  `✨ We’re excited to see your best work. Bring your creativity, attention to detail, and coding standards! ✨`
