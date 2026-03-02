# Flow 🌊

Flow is a powerful, open-source workflow automation platform (inspired by n8n) built to connect your favorite apps and APIs. Build complex automation flows visually with an intuitive drag-and-drop interface.

## 🌟 Features

- **Visual Workflow Builder:** Drag-and-drop interface to build complex automation workflows easily.
- **Ready-to-use Nodes:**
  - **Triggers:** Manual Trigger, Google Form Trigger, Stripe Trigger.
  - **AI Integrations:** OpenAI, Anthropic, Gemini.
  - **Communication:** Discord, Slack.
  - **Utilities:** HTTP Request.
- **Reliable Background Execution:** Powered by Inngest for robust, serverless background job processing.
- **Secure Authentication:** Built-in authentication using Better Auth (supports Google & GitHub OAuth).
- **Monetization Ready:** Integrated with Polar.sh for subscriptions and payments.
- **Real-time Monitoring:** Error tracking and performance monitoring with Sentry.

## 🛠 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Styling:** Tailwind CSS & [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Flow Builder:** [React Flow](https://reactflow.dev/) (`@xyflow/react`)
- **Background Jobs:** [Inngest](https://www.inngest.com/)
- **Authentication:** [Better Auth](https://better-auth.com/)
- **Payments:** [Polar.sh](https://polar.sh/)
- **Monitoring:** [Sentry](https://sentry.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+)
- PostgreSQL database
- Inngest CLI (for local background job execution)

### Installation

1. Clone the repository and navigate into it:
   ```bash
   # Clone your repository here
   cd flow
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Copy the example environment file and fill in your details:
   ```bash
   cp .env.example .env
   ```

   Key required variables:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `ENCRYPTION_KEY`: Run `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` to generate
   - `BETTER_AUTH_SECRET`: Run `npx auth secret` to generate

4. Setup Database:
   ```bash
   npx prisma db push
   ```

5. Start the Development Environment:
   The project uses `mprocs` to run Next.js, Inngest, and ngrok concurrently.
   ```bash
   npm run dev:all
   ```
   Or run the Next.js dev server standalone:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
