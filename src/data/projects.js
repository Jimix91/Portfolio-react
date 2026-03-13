import ticketflowLogoImage from "../assets/ticketflow_logo_subtitle_transparent.png";
import ticketflowDashboardImage from "../assets/ticketflowdashboard.png";
import ticketflowResolutionImage from "../assets/ticketflowresolution.png";
import arkadiaLogoImage from "../assets/logoArkadia1.png";
import arkadiaDashboardImage from "../assets/arkadiadashboard.png";
import arkadiaGameListImage from "../assets/arkadiagamelist.png";
import cityverseDashboardImage from "../assets/cityversedashboard.png";
import cityverseCitiesImage from "../assets/cityversecities.png";
import asteroidDashboardImage from "../assets/asteroidinvaderdashboard.png";
import asteroidGameImage from "../assets/asteroidinvadergame.png";

export const projects = [
  {
    slug: "ticketflow",
    title: "TicketFlow",
    subtitle: "Full Stack TypeScript Application (2026)",
    problem:
      "Internal IT support management system with a React + TypeScript SPA connected to a REST backend, implementing end-to-end ticket CRUD from UI to database.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Express",
      "Prisma",
      "PostgreSQL",
      "REST API",
    ],
    role: "Full Stack: frontend task flows, API integration, and backend ticket lifecycle CRUD.",
    demoCredentials: [
      { role: "Admin", email: "admin@ticketflow.dev", password: "123456" },
      { role: "Agent", email: "agent@ticketflow.dev", password: "123456" },
      { role: "Employee", email: "employee@ticketflow.dev", password: "123456" },
    ],
    projectDescription:
      "TicketFlow is an internal IT helpdesk platform designed for company teams to report, track, and resolve technical issues in a structured way. It has role-based workflows for admins, agents, and employees, and supports the full lifecycle of support tickets from creation to resolution and archiving. The app combines a TypeScript backend API with a React single-page frontend, focused on practical day-to-day support operations.",
    problemItSolves:
      "Many internal support teams struggle with scattered communication (chat, email, verbal requests), unclear ownership, and poor visibility of ticket status. TicketFlow solves this by centralizing all support requests in one system, enforcing status transitions, assigning responsibility, and keeping a complete comment history.",
    problemItSolvesHighlights: [
      "Accountability: every ticket has a creator, optional assignee, and status trail.",
      "Visibility: teams can filter, prioritize, and monitor open/in-progress/closed workloads.",
      "Coordination: comments and status updates reduce back-and-forth and context loss.",
      "Follow-through: archived ticket logic helps separate active work from completed backlog.",
    ],
    techStack: {
      frontend: "React 18 + TypeScript + Vite + Tailwind CSS.",
      backend: "Node.js + Express + TypeScript.",
      database: "PostgreSQL with Prisma ORM.",
      authSecurity:
        "JWT (jsonwebtoken) + password hashing (bcryptjs) + request validation (zod).",
      tooling:
        "TSX for dev runtime, Prisma migrations/seeding, Vercel-compatible serverless entrypoint.",
    },
    features: [
      {
        title: "Authentication and profile",
        items: [
          "Register/login with JWT-based auth.",
          "Authenticated profile retrieval and profile update (including profile image).",
        ],
      },
      {
        title: "Role-based permissions",
        items: [
          "Roles: ADMIN, AGENT, EMPLOYEE.",
          "Permission-sensitive actions for editing, deleting, assigning, and commenting.",
        ],
      },
      {
        title: "Ticket management",
        items: [
          "Create, read, update, delete tickets.",
          "Priority (LOW, MEDIUM, HIGH) and status (OPEN, IN_PROGRESS, CLOSED).",
          "In-progress substatus (PENDING_AGENT, PENDING_EMPLOYEE) for handoff clarity.",
          "Auto-generated unique ticket code.",
        ],
      },
      {
        title: "Collaboration",
        items: [
          "Comment timeline per ticket.",
          "Comment create/edit/delete with author-based constraints.",
          "Optional image attachments for tickets/comments.",
        ],
      },
      {
        title: "Dashboard productivity",
        items: [
          "Kanban-style columns by status.",
          "Drag-and-drop status transitions (role-aware).",
          "Search + multi-filtering (status, priority, assignee, creator, dates).",
          "Overdue indicators and summary metrics.",
        ],
      },
      {
        title: "Lifecycle handling",
        items: [
          "Closed tickets transition to archived view after a threshold period.",
          "Separate active vs archived scopes for cleaner operations.",
        ],
      },
      {
        title: "UX/ops improvements",
        items: [
          "Periodic data refresh for near-live updates.",
          "Cold-start mitigation via health endpoint warm-up behavior.",
        ],
      },
    ],
    architecture: [
      {
        title: "Frontend SPA",
        items: [
          "UI pages/components handle interaction and rendering.",
          "Central API client manages HTTP calls and token headers.",
          "Local state controls auth, ticket data, filters, and navigation.",
        ],
      },
      {
        title: "Backend API",
        items: [
          "Express app with route modules (auth, users, tickets).",
          "Middleware pipeline for CORS, JSON parsing, auth guard, and centralized error handling.",
          "Prisma data access layer to PostgreSQL.",
        ],
      },
      {
        title: "Data model",
        items: [
          "User <-> Ticket (creator + assignee relations).",
          "Ticket <-> Comment (timeline/history relation).",
        ],
      },
      {
        title: "Deployment-aware design",
        items: [
          "Traditional server entry and serverless entry are both supported.",
        ],
      },
    ],
    securityCurrent: [
      "Password hashing with bcrypt (not stored in plain text).",
      "JWT bearer authentication with expiry for protected routes.",
      "Request schema validation using Zod to prevent malformed input.",
      "CORS origin restriction via environment configuration.",
      "Role- and ownership-based authorization checks for sensitive operations.",
      "Basic input constraints for image payload format and size.",
      "Centralized error handling for controlled API responses.",
    ],
    securityNext: [
      "Rate limiting and brute-force protection on auth endpoints.",
      "Refresh token rotation / shorter-lived access tokens.",
      "Security headers (Helmet), audit logging, and stricter upload strategy (object storage instead of large data URLs).",
      "Stronger secret management and automated security scanning in CI.",
    ],
    deployment: [
      "Backend: Can run as a standard Node service (Render/Railway/Fly) with PostgreSQL.",
      "Backend: Also prepared for Vercel serverless routing.",
      "Frontend: Designed for Vercel/Netlify static deployment.",
      "Environment setup: Backend uses DATABASE_URL, JWT_SECRET, FRONTEND_URL, PORT.",
      "Environment setup: Frontend uses VITE_API_URL.",
      "Production behavior: Serverless cold starts are acknowledged and partially mitigated with health checks and warm-up patterns.",
    ],
    lessonsLearned: [
      "End-to-end TypeScript significantly reduces integration errors between frontend and backend contracts.",
      "Role-based business rules become complex quickly; centralizing permission logic is essential.",
      "Serverless deployment introduces real-world latency/cold-start concerns that do not appear locally.",
      "Ticket workflows are not just CRUD; status semantics, assignment rules, and audit-like comments are core product value.",
      "Prisma + migrations speed up backend development, but schema decisions (relations/enums) strongly shape app behavior.",
      "UX details like filters, polling, and archived views greatly improve operational usability, not just visual polish.",
    ],
    overview:
      "TicketFlow centralizes internal incident management for IT support teams. The app allows users to register tickets, assign priorities, track statuses, and keep complete traceability between requester, support team, and database.",
    needCovered:
      "It solves the need to replace manual operations (email, shared sheets, chats) with a structured flow that includes history, clear ownership, and measurable response times.",
    techDetails: [
      "React + TypeScript for a typed and maintainable UI with reusable components.",
      "Express to expose REST endpoints and handle ticket lifecycle business logic.",
      "Prisma as the ORM layer for data modeling, migrations, and safer queries.",
      "PostgreSQL as persistent storage for tickets, users, categories, and statuses.",
      "Frontend and backend validations to ensure consistent data during create and edit flows.",
    ],
    appWalkthrough: [
      "Main screen with a list filterable by status, priority, and assignee.",
      "Ticket creation form with key fields (description, impact, urgency, category).",
      "Ticket detail view with a change timeline to audit each transition.",
      "Admin panel to update statuses, reassign ownership, and close incidents.",
    ],
    screenshots: [
      {
        src: ticketflowLogoImage,
        alt: "TicketFlow brand and product identity",
        caption: "TicketFlow branding and product identity used across the platform.",
      },
      {
        src: ticketflowDashboardImage,
        alt: "TicketFlow dashboard with Kanban ticket workflow",
        caption:
          "Dashboard view with KPI cards, filters, and drag-and-drop ticket workflow by status.",
      },
      {
        src: ticketflowResolutionImage,
        alt: "TicketFlow ticket resolution screen",
        caption:
          "Ticket resolution page with status control, comment timeline, and structured follow-up actions.",
      },
    ],
    demo: "https://ticketflow-phi.vercel.app/",
    githubFrontend: "https://github.com/Jimix91/typescript-frontend-ticketflow",
    githubBackend: "https://github.com/Jimix91/typescrypt-backend-ticketflow",
  },
  {
    slug: "arkadia",
    title: "Arkadia",
    subtitle: "Full Stack Game Portal (Dec 2025)",
    problem:
      "Fullstack game portal focused on discovery, reviews, and fast title comparison in a single unified experience.",
    tech: ["React", "Vite", "React Router", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    role: "Full Stack: game/review data modeling, auth, protected routes, and UI delivery.",
    projectDescription:
      "Arkadia is a fullstack game portal where players can explore a curated catalog, publish reviews, and share opinions in a clean, fast interface designed for discovery.",
    problemItSolves:
      "It brings fragmented game opinions into one place, helping players compare titles quickly, find what fits their taste, and avoid decision fatigue.",
    techStack: {
      frontend: "React + Vite + React Router.",
      backend: "Node.js + Express.",
      database: "MongoDB.",
      authSecurity: "JWT + bcrypt.",
      tooling: "REST API architecture with environment-based deployment config.",
    },
    features: [
      {
        title: "Authentication and route protection",
        items: [
          "User signup/login with protected routes.",
          "Session-aware navigation and private access for authenticated actions.",
        ],
      },
      {
        title: "Catalog and reviews",
        items: [
          "Create games and publish reviews.",
          "Centralized opinions and ratings to support quick comparison.",
        ],
      },
      {
        title: "Discovery and sorting",
        items: [
          "Filters by genre, platform, and rating.",
          "Lists sorted by popularity or score.",
        ],
      },
      {
        title: "Administration",
        items: [
          "Admin panel for content management.",
          "Role-aware control paths for sensitive update/delete operations.",
        ],
      },
    ],
    architecture: [
      {
        title: "SPA + REST separation",
        items: [
          "A React SPA consumes a REST API for games, reviews, and user flows.",
          "Server code is organized in routes, models, and middleware layers.",
          "Role-based authorization logic controls access to admin actions.",
        ],
      },
    ],
    securityCurrent: [
      "Passwords are hashed with bcrypt before persistence.",
      "Sessions are managed with JWT tokens.",
      "Sensitive endpoints are protected with authorization checks.",
    ],
    deployment: [
      "Frontend and backend are deployed separately.",
      "Environment variables are used for API URLs and secret keys.",
      "Deployment configuration keeps runtime credentials out of source code.",
    ],
    lessonsLearned: [
      "Building a complete product end to end improved data modeling and access-control decisions.",
      "State management and iterative UI/UX refinements were essential for usability.",
      "The original codebase was built in Spanish, which reinforced the importance of naming consistency and documentation.",
    ],
    screenshots: [
      {
        src: arkadiaLogoImage,
        alt: "Arkadia brand and product identity",
        caption: "Arkadia branding and visual identity used across the platform.",
      },
      {
        src: arkadiaDashboardImage,
        alt: "Arkadia dashboard with catalog and filters",
        caption: "Main discovery view with game catalog, filters, and quick navigation.",
      },
      {
        src: arkadiaGameListImage,
        alt: "Arkadia game list and review exploration",
        caption: "Catalog browsing experience for comparing games and reading community opinions.",
      },
    ],
    demo: "https://arkadia-gameportal.vercel.app/",
    githubFrontend:
      "https://github.com/Jimix91/arkadia-gamePortal-project-frontend",
    githubBackend:
      "https://github.com/Jimix91/arkadia-gamePortal-project-backend",
  },
  {
    slug: "cityverse",
    title: "Cityverse",
    subtitle: "React SPA - CRUD Application (Dec 2025)",
    problem:
      "SPA with external API + mock backend implementing full CRUD workflows.",
    tech: ["React", "Hooks", "Context", "REST APIs"],
    role: "Frontend: architecture, CRUD flows, and integration.",
    overview:
      "Cityverse is a travel-focused SPA that integrates external sources to discover cities, save personalized content, and manage editable entries.",
    needCovered:
      "It provides a unified solution to browse information, save favorites, and manage personal travel data from a single interface.",
    techDetails: [
      "React with Hooks to encapsulate logic and compose decoupled views.",
      "Context API to share global state without prop drilling in CRUD flows.",
      "Integration with external REST APIs and a mock backend to simulate a real environment.",
      "Error handling and loading-state strategies to improve UX.",
      "Responsive design for desktop and mobile devices.",
    ],
    appWalkthrough: [
      "City search with dynamic results connected to an external API.",
      "Favorites section to create, edit, and delete saved items.",
      "Detail view for each entry with contextual information and CRUD actions.",
      "Visual messaging for loading, error, and confirmation states.",
    ],
    screenshots: [
      {
        src: cityverseDashboardImage,
        alt: "Cityverse dashboard with search and favorites",
        caption: "Main dashboard view with city search and saved favorites.",
      },
      {
        src: cityverseCitiesImage,
        alt: "Cityverse cities exploration view",
        caption: "Cities browsing experience with detailed information and CRUD controls.",
      },
    ],
    demo: "https://cityverse-travel-app.vercel.app/",
    github: "https://github.com/JC-Studio-DualCode/travel-project-app",
  },
  {
    slug: "asteroid-invader",
    title: "Asteroid Invader",
    subtitle: "Vanilla JavaScript Interactive App (Nov 2025)",
    problem:
      "Interactive app built with pure JavaScript and DOM APIs, focused on UX and element manipulation.",
    tech: ["JavaScript", "DOM", "HTML", "CSS"],
    role: "Frontend: UI, DOM logic, and UX polish.",
    overview:
      "Asteroid Invader is an interactive browser experience built without frameworks to practice frontend architecture, animations, and user event control.",
    needCovered:
      "It addresses the need to validate strong JavaScript and DOM fundamentals in a complete project focused on user experience and performance.",
    techDetails: [
      "Vanilla JavaScript for game logic, collisions, and state control.",
      "DOM APIs for rendering and real-time element updates.",
      "Semantic HTML as the structural base for panels, score, and controls.",
      "CSS for layout, visual feedback, animations, and visual hierarchy.",
      "Modular organization to separate responsibilities in the main loop.",
    ],
    appWalkthrough: [
      "Start screen with instructions and a clear play action.",
      "Main game scene with continuous movement and hit detection.",
      "Scoring system with visual feedback for each player event.",
      "End screen with result summary and restart option.",
    ],
    screenshots: [
      {
        src: asteroidDashboardImage,
        alt: "Asteroid Invader main game interface",
        caption: "Game screen with score display, controls, and visual feedback.",
      },
      {
        src: asteroidGameImage,
        alt: "Asteroid Invader gameplay in action",
        caption: "Active gameplay showing physics, collisions, and user interaction.",
      },
    ],
    demo: "https://jimix91.github.io/Asteroid-Invader.game/",
    github: "https://github.com/Jimix91/Asteroid-Invader.game",
  },
];