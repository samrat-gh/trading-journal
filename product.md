# NepseJournal - Product Context & AI Agent Directives

## 1. Product Overview
**NepseJournal** is a specialized Trading Journal and Portfolio Tracker built exclusively for traders operating in the Nepal Stock Exchange (NEPSE). It solves the problem of tracking trade performance by moving users away from basic tools like MeroShare or manual Excel sheets, providing them with emotional journaling, analytics, and data-driven insights.

## 2. Core Features
### A. Portfolio Tracking & Management
- **MeroShare CSV Import**: Users can seamlessly import their existing holdings using CSV files generated from MeroShare.
- **TMS Transaction History Upload**: Users can bulk-upload their historical transaction data directly from the NEPSE Trade Management System (TMS).
- **Manual Management**: Users have full CRUD (Create, Read, Update, Delete) capabilities to manually add, modify, or remove portfolio history, open positions, and closed trades.

### B. Trading Journaling
- **Trade Logging**: A customized writing space where users can log individual trades and tie them to their portfolio data.
- **Emotional & Strategic Tracking**: Emphasis on recording the "why" behind a trade (market rumors, chart setups, volume profiles) to help traders identify repeating patterns and kill bad trading habits. 

### C. Data Analytics
- Intelligent parsing of MeroShare/TMS data to deliver high-level visual analytics (profits, losses, win rates, risk/reward ratios).

---

## 3. Design System & Theming
The UI relies on a modern, high-contrast, "SaaS-y" aesthetic, optimized for a financial dashboard feel (reassuring, data-dense but readable).

### Color Palette
- **Base Neutrals**: The **Zinc** palette (`zinc-50` to `zinc-950`).
  - *Light Mode*: Primarily crisp white (`bg-white`) and light gray (`bg-zinc-50`) backgrounds. Text relies on `text-zinc-900` for headings and `text-zinc-500` for secondary descriptions.
  - *Dark Mode*: Deep dark backgrounds (`bg-zinc-950` and `bg-zinc-900`). Text inverted to `text-zinc-50` or `text-zinc-100`, with muted details in `text-zinc-400`.
- **Primary Accent (Brand)**: The **Emerald** palette (`emerald-500`, `emerald-600`, `emerald-700`).
  - Represents growth, profit, and the brand identity.
  - Call-To-Action (CTA) buttons heavily use `bg-emerald-600` (hover: `bg-emerald-700` in light mode, `bg-emerald-500` in dark mode).
  - Highlighting links and crucial success data is styled with `text-emerald-600`.
- **Destructive/Loss**: Red colors (e.g., `text-red-500`) are strictly reserved for form errors, invalid actions, and representing financial losses in the portfolio.

### Typography & Components
- **Fonts**: Handled natively by Next.js using `Geist` (Sans) and `Geist_Mono` (Mono) fonts.
- **Components**: The architecture utilizes `shadcn/ui` style Radix primitives.
- **Icons**: Heavily uses `lucide-react`.

---

## 4. Tech Stack Context
- **Framework**: Next.js (App Router, React server/client components).
- **Styling**: Tailwind CSS v4.
- **State Management**: Zustand (utilized for user preference stores, like theming/layout).
- **Tooling**: Biome is utilized heavily as the primary linter and formatter. (Note: Biome is very strict about `any` types, sorting CSS classes, and `href` usages).

---

## 5. AI Agent Directives
When contributing to this codebase, incoming AI Assistants must adhere to the following rules:
1. **Component Design**: Always prioritize using existing `@/components/ui/` pieces over writing custom HTML elements.
2. **Class Sorting**: Biome requires Tailwind classes to be sorted. Adhere strictly to the tailwind-merge/clsx standards.
3. **Theming Compliance**: Always implement proper `dark:` variants corresponding to the main theme. (e.g., `bg-white dark:bg-zinc-950`).
4. **Icons**: Exclusively use `lucide-react` for standard UI icons and use inline SVG elements for specific brand logos (e.g., Google/Facebook).
5. **Types**: Ensure strict TypeScript adherence; Biome will throw errors on implicit or explicit `any` types. User `unknown` with a type guard instead.
6. **NEPSE Context**: If generating mock data or placeholders, use realistic NEPSE ticker symbols (e.g., `NABIL`, `NTC`, `SHIVM`, `GBIME`, `CIT`).