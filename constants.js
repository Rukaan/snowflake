// @flow
import * as d3 from 'd3'

export type TrackId = 'MOBILE' | 'WEB_CLIENT' | 'FOUNDATIONS' | 'SERVERS' |
  'PROJECT_MANAGEMENT' | 'COMMUNICATION' | 'CRAFT' | 'INITIATIVE' |
  'CAREER_DEVELOPMENT' | 'ORG_DESIGN' | 'WELLBEING' | 'ACCOMPLISHMENT' |
  'MENTORSHIP' | 'EVANGELISM' | 'RECRUITING' | 'COMMUNITY'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'MOBILE': Milestone,
  'WEB_CLIENT': Milestone,
  'FOUNDATIONS': Milestone,
  'SERVERS': Milestone,
  'PROJECT_MANAGEMENT': Milestone,
  'COMMUNICATION': Milestone,
  'CRAFT': Milestone,
  'INITIATIVE': Milestone,
  'CAREER_DEVELOPMENT': Milestone,
  'ORG_DESIGN': Milestone,
  'WELLBEING': Milestone,
  'ACCOMPLISHMENT': Milestone,
  'MENTORSHIP': Milestone,
  'EVANGELISM': Milestone,
  'RECRUITING': Milestone,
  'COMMUNITY': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3',
}

export const maxLevel = 135

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'MOBILE': Track,
  'WEB_CLIENT': Track,
  'FOUNDATIONS': Track,
  'SERVERS': Track,
  'PROJECT_MANAGEMENT': Track,
  'COMMUNICATION': Track,
  'CRAFT': Track,
  'INITIATIVE': Track,
  'CAREER_DEVELOPMENT': Track,
  'ORG_DESIGN': Track,
  'WELLBEING': Track,
  'ACCOMPLISHMENT': Track,
  'MENTORSHIP': Track,
  'EVANGELISM': Track,
  'RECRUITING': Track,
  'COMMUNITY': Track
|}

export const tracks: Tracks = {
  "MOBILE": {
    "displayName": "Mobile",
    "category": "A",
    "description": "Develops expertise in native mobile platform engineering, such as iOS or Android",
    "milestones": [{
      "summary": "Works effectively within established iOS or Android architectures, following current best practices",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Create a simple page with design from designer",
        "Call a backend API using existing library",
        "Install fabric and understand its usage",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Defines new useful component",
        "Migrates code from old patterns to new patterns",
        " ",
      ],
      "examples": [
        "Create new datepicker button component",
        "Migrate from MVC to MVVM based on discussion and example",
        " ",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": [
        "Implements complex features with a large product surface area",
        "Works effectively with mobile reactive programming framework",
        "Adds support for new features after a major version upgrade",
      ],
      "examples": [
        "Designed caching strategy for offline mode",
        "Informed the team about recent best practice changes and deprecations",
        " ",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migration strategies that reduce programmer burden",
        "Fixes subtle memory management issues",
        " ",
      ],
      "examples": [
        "Upgraded framework to a new major version",
        "Designed architecture for fetching and rendering stream items",
        "Pioneered application-level abstractions for multi-app environment",
      ],
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": [
        "Defines long-term goals and ensures active projects are in service of them",
        "Designs and builds innovative, industry-leading UI interactions",
        "Invents new techniques to responsibly stretch limits of the mobile platform",
      ],
      "examples": [
        "Defined roadmap of mobile technology",
        "Implemented mobile recycler views before platform support existed",
        " ",
      ],
    }],
  },

  "WEB_CLIENT": {
    "displayName": "Web client",
    "category": "A",
    "description": "Develops expertise in web client technologies, such as HTML, CSS, and JavaScript",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": [
        "Delivers features requiring simple modifications",
        "Adds simple actions that call server endpoints",
        "Reuses existing components appropriately",
      ],
      "examples": [
        "Create a simple page with design from designer",
        "Call a backend API using existing library",
        "Understand and implement ESLint accordingly",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Makes abstractions based on template and code patterns",
        "Specs and builds new useful component",
        "Prototypes simple new features quickly",
      ],
      "examples": [
        "Designed and implemented filter and sorting template",
        "Created new modal form system",
        "Delivered new menu with simple CRUD",
      ],
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": [
        "Implements complex features with a large product surface area",
        "Performs systemic tasks to significantly minimise bundle size",
        "Migrates code to newer technology",
      ],
      "examples": [
        "Utilitized service workers for real time notification",
        "Researched and configured webpack to upgrade performance",
        "Migrated javascript to typescript for project",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": [
        "Pioneers architecture migrations that reduce programmer burden",
        "Designs complete architecture framework stacks",
        "Makes architectural decisions that eliminate entire classes of bugs",
      ],
      "examples": [
        "Upgraded framework to a new major version",
        "Designed new code template for complete CMS",
        "Pioneered PWA for web and mobile application",
      ],
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": [
        "Defines a long-term vision for web client and ensures projects are in it",
        "Invents new techniques to innovate and overcome browser constraints",
        "Identifies and solved systemic problems with current architecture",
      ],
      "examples": [
        "Defined roadmap of front end technology",
        " ",
        " ",
      ],
    }],
  },

  "FOUNDATIONS": {
    "displayName": "Foundations",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines and databases",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }],
  },

  "SERVERS": {
    "displayName": "Servers",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technology such as Java",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": [
        "Delivers features requiring simple modifications",
        "Adds Java endpoints using Spring Boot architecture",
        "Makes minor server changes to support client needs",
      ],
      "examples": [
        "Created new services to show list user",
        "Configured connection to database or redis",
        "Queried a PostgreSQL appropriately",
      ],
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": [
        "Assesses correctness and utility of existing code",
        "Generalizes code when appropriate",
        "Determines data needs from requirements",
      ],
      "examples": [
        "Created general function to filter users",
        "Added dependencies to improve works",
        "Identified need for new index on PostgreSQL",
      ],
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": [
        "Implements complex features with a large product surface area",
        "Integrates third party services effectively",
        "Adds support for new features after a major version upgrade",
      ],
      "examples": [
        "Designed plan to migrated to Spring Boot 2",
        "Implemented Google Auth login to project",
        "Implemented payments integration with Go Pay",
      ],
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": [
        "Pioneers architecture migration strategies that improve works process",
        "Avoids subtle architectural mistakes when considering new systems",
        "Designs complete architecture framework stacks",
      ],
      "examples": [
        "Created and maintain modular user management JAR",
        "Created Spring Boot framework for creating Java microservices",
        "Designed and implemented microservices architecture for project",
      ],
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": [
        "Defines a long-term vision for services and ensures projects are in it",
        "Designs transformational projects of significant complexity and scope",
        "Makes decisions that have positive, long term, wide ranging consequences",
      ],
      "examples": [
        "Defined roadmap of back end technology",
        " ",
        " ",
      ],
    }],
  },

  "PROJECT_MANAGEMENT": {
    "displayName": "Project management",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": [
        " ",
        " ",
        " ",
      ],
      "examples": [
        " ",
        " ",
        " ",
      ],
    }],
  },

  "COMMUNICATION": {
    "displayName": "Communication",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": [
        "Communicates project status clearly and effectively",
        "Collaborates with others with empathy",
        "Asks for help at the appropriate juncture",
      ],
      "examples": [
        "Updated weekly meeting project status",
        "Discuss alternative approach on problem with pro and cons",
        "Gave thoughtful comments for effective meeting",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Practises active listening and suspension of attention",
        "Ensures stakeholders are aware of current blockers",
        "Chooses the appropriate tools for accurate and timely communication",
      ],
      "examples": [
        "Received and integrated critical feedback positively",
        "Created cross-team whatsapp for better collaboration",
        "Consulted to domain experts before writing spec",
      ],
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": [
        "Resolves communication difficulties between others",
        "Anticipates and shares schedule deviations in plenty of time",
        "Manages project stakeholder expectations effectively",
      ],
      "examples": [
        "Directed team response effectively during problems",
        "Gave a substantial Eng All Hands on presentation on React",
        "Gave notice of upcoming related work in tech meeting",
      ],
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": [
        "Communicates project risk and tradeoffs skillfully and with nuance",
        "Contextualizes and clarifies ambiguous direction and strategy for others",
        "Negotiates resourcing compromises with other teams",
      ],
      "examples": [
        "Aligned the entire organization with Nostra direction",
        "Present growth framework to build grow, trust and fair culture",
        "Gave insight of optional strategy and tradeoff in projects",
      ],
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": [
        "Defines processes for clear communication for the entire team",
        "Shares the right amount of information with right people, at right time",
        "Develops and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "Organized half year company feedback from entire organization",
        "Created the communication plan for a large organizational change",
        "Presented to the board about key company metrics and projects",
      ],
    }],
  },

  "CRAFT": {
    "displayName": "Craft",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": [
        "Tests new code thoroughly, both locally, and in UAT once shipped",
        "Tests for every new feature and bug fix",
        "Writes clear comments and documentation",
      ],
      "examples": [
        "Caught a bug on Testing before it went live",
        "Landed non-trivial PR with no caretaker comments",
        "Tests for the happy and sad cases",
      ],
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": [
        "Refactors existing code to make it more testable",
        "Adds tests for uncovered areas",
        "Deletes unnecessary code and deprecates proactively when safe to do so",
      ],
      "examples": [
        "Requested tests for a PR when acting as reviewer",
        "Reduce ESLint and sonarqube warning",
        "Fixed a TODO for someone else in the codebase",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better testing",
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
      ],
      "examples": [
        "Improved sonarqube rule to handle new version",
        "Simplified test data modification",
        "Created simple automation testing on Katalon",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error",
        "Focuses the team on quality with regular reminders",
        "Iterated repeatedly to develop Nostra underlines solution",
      ],
      "examples": [
        "Added code coverage reporting to CI pipeline",
        "Implement and use effectively ELK, APM and alerting",
        "Defined and oversaw plan for standard pentest and stress test",
      ],
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": [
        "Defines policies for the engineering org that encourage quality work",
        "Identifies and eliminates single points of failure throughout the organization",
        "Secures time and resources from execs to support great quality",
      ],
      "examples": [
        "Negotiated resources for Fix-It/Hackaton night with exec team",
        "Empower zero bugs culture with rewards and acknowledgement",
        "Built QA engineer division to fully automate test",
      ],
    }],
  },

  "INITIATIVE": {
    "displayName": "Initiative",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Writes posts about top improvement in code for beginner",
        "Raises meaningful tensions in tactical meetings",
        "Asks leadership team probing questions at townhall",
      ],
      "examples": [
        "Migrate blog post to Medium for more traffic",
        "Share tech or product meet up info to group",
        "Initiate on time stand up meeting",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Picks bugs off the backlog proactively",
        "Makes design quality improvements unprompted",
        "Takes on trust and safety tasks proactively",
      ],
      "examples": [
        "Advocated on own behalf for a change in role",
        "Implemented SASS and BEM in project",
        "Audited CMS performance in Chrome and proposed fixes",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Demonstrates concepts proactively with prototypes",
        "Fixes complicated bugs outside of regular domain",
        "Takes ownership of systems that nobody owns or wants",
      ],
      "examples": [
        "Defined style guide to resolve style arguments",
        "Proposed and implemented at-mentions prototype",
        "Create trello for managerial team to breakdown task",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new problem",
        "Exemplifies determination in the face of persistent obstacles",
        "Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Created interview guide and onboarding presentation",
        "Built new react native base code template with firebase",
        "Refactor legacy code to microservice to reuse",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Creates a new function to solve systemic issues",
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Migrated the core organizational structure",
        "Built new internal tool and convince to used it",
        "Convinced leadership and engineering org to use Kotlin",
      ],
    }],
  },

  "CAREER_DEVELOPMENT": {
    "displayName": "Career development",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": [
        "Advocates on behalf and in defense of a group member",
        "Shares opportunities for improvements and recognises achievements",
        "Explains appropriate available career paths",
      ],
      "examples": [
        "Collected and delivered feedback",
        "Discussed career options and areas of interest informally",
        "Suggest a developer roadmap to others",
      ],
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": [
        "Ensure a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive one on one conversation",
        "Provided coaching on how to have difficult conversations",
        "Taught group members the growth framework",
      ],
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Tech Lead position",
        "Arranged a requested switch of role for a group member",
      ],
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": [
        "Manages team transitions smoothly, respecting team and individual needs",
        "Develops best practices for conflict resolution",
        "Ensures all group members' roles are meeting their career needs",
      ],
      "examples": [
        "Completed training on situational leadership",
        "Built a resourcing plan based on company, team, and individual goals",
        "Prevented regretted attrition with intentional, targeted intervention",
      ],
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": [
        "Supports and develops senior leaders",
        "Identified leadership training opportunities for senior leadership",
        "Pushes everyone to be as good as they can be, with empathy",
      ],
      "examples": [
        "Provided coaching to group leads",
        "Devised Pathwise curriculum for group leads",
        "Advocated to execs for engineer development resources and programs",
      ],
    }],
  },

  "ORG_DESIGN": {
    "displayName": "Org design",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": [
        "Reflects on meetings that leave them inspired or frustrated",
        "Teaches others about existing processes",
        "Actively participates and makes contributions within organizational processes",
      ],
      "examples": [
        "Facilitated effective tactical meeting with empathy",
        "Explained tactical meeting format to a new hire",
        "Provided feedback on sprint planning meeting",
      ],
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": [
        "Defines meeting structure and cadence that meets team needs",
        "Engages in organizational systems thinking",
        "Advocates for improved sprint development, and proposes ideas to help",
      ],
      "examples": [
        "Facilitate result of retrospective meeting for small team",
        "Guide development process to follow sprint methodology",
        "Identify internal team problem and prevent collateral damage",
      ],
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "signals": [
        "Creates programs that meaningfully improve organizational",
        "Solves long-standing organizational problems",
        "Reallocates resources to meet organizational needs",
      ],
      "examples": [
        "Developed baseline team templates for consistency",
        "Created bug-rotation program to address ongoing quality issues",
        "Defined Guilds manifesto and charter",
      ],
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": [
        "Evaluates incentive structures and their effect on execution",
        "Analyzes existing processes for bias and shortfall",
        "Ties culture to concrete organizational actions or norms",
      ],
      "examples": [
        "Guide project manager mindset to product manager mindset",
        "Delegate unhandle responsibility to suitable role",
        "Provide fair and transparent guide to raise as lead",
      ],
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": [
        "Builds programs to train leadership in desired skills",
        "Creates new structures that provide unique growth opportunities",
        "Leads planning and communication for reorgs",
      ],
      "examples": [
        "Lead efforts to increase full stack engineers",
        "Reorganize structure to give career opportunities",
        "Built the growth framework guideline",
      ],
    }],
  },

  "WELLBEING": {
    "displayName": "Wellbeing",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable person principle to others",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themself in another's position to understand their perspective",
        "Checked in with colleague showing signs of burnout",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Help troubled members in its works",
        "Facilitate a retrospective session on turned down team",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "Help members with anger management",
        "Give motivational words in sprint planning",
        "Reframed a problem as a challenge, instead of a barrier",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around rumors by providing extra context",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver",
        "Challenged rumors and redirected to compassion and empathy",
        "Cultivated and championed culture of empathy within entire team",
      ],
    }],
  },

  "ACCOMPLISHMENT": {
    "displayName": "Accomplishment",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "Identify possible blocker",
        "Unblocked a group member",
        "Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Identify root cause of problem and prevent more from happen",
        "Convinced member to solve problem directly, rather than doing it",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group to address persistent communication failures",
        "Arranged a transfer to another team, in improving performance",
        "Motivate the success of product is on the team and not individual",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themself into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from externalities so they could focus on goals",
        "Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-performance team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "MENTORSHIP": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague with listening their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting course with a member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
      "signals": [
        "Avoids stoping information when it can be usefully shared with others",
        "Works to increase the high availability of teams",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave an interesting presentation about new implement technology",
        "Write a blog about practical junior problem in work",
        "Suggest a course for developer roadmap",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Created and lead Women in Eng group",
        "Organized an Eng Hands on with an outside speaker",
        "Designed and taught QA Eng curriculum",
      ],
      "examples": [
        "Created and lead Medium's Women in Eng group",
        "Organized an Eng All Hands with an outside speaker",
        "Designed and taught web client guild curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Started the eng advisor program and lined up external mentors",
        "Mentored mentors",
      ],
    }],
  },

  "EVANGELISM": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents Medium well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Explain to a friend that want to know more about Nostra",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared an event on post on social media",
        "Acted as a guide for a non-friend visitor to the office",
        "Supported friends efforts by giving a quote or take a photo",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to Medium",
        "Joined public group and represented Nostra appropriately, and well",
        "Organizes positive small-events that bring people to Nostra",
      ],
      "examples": [
        "Voluntarily introduce Nostra to juniors in college",
        "Organized a short tour of the office by college students",
        "Share about Nostra blog in a linked in post",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Medium",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes posts about Nostra that receive moderate traffic",
      ],
      "examples": [
        "Represented Nostra on a conference of industry experts",
        "Established close ties with Creative Commons",
        "Built a durable, long-standing relationship with college",
      ],
    }, {
      "summary": "Establishes Medium as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about Nostra's organizational or technical innovations",
        "Leverages significant following to evangelise Nostra",
      ],
      "examples": [
        "Published a paper on Nostra technology in a peer-reviewed journal",
        "Authored joint-press release",
        "Published or interviewed in a tech website",
      ],
    }, {
      "summary": "Introduces Medium in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Nostra positively",
        "Drives recognition of Nostra in significant numbers",
      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website",
        "Keynoted a conference with international attention",
        "Represented Nostra in national televised media",
      ],
    }],
  },

  "RECRUITING": {
    "displayName": "Recruiting",
    "category": "D",
    "description": "Strengthens Medium's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
      "signals": [
        "Reviews existing network for hiring leads regularly",
        "Shadows interviews to gain familiarity with process",
        "Reviews current job postings regularly",
      ],
      "examples": [
        "Completed interview calibration",
        "Set up casual sessions to practice asking questions",
        "Referred appropriate individuals for open positions",
      ],
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": [
        "Uses interview template to provide clear, objective feedback on candidates",
        "Interviews candidates with empathy and treats them all with equal respect",
        "Researches approaches for sourcing candidates and diversifying hiring",
      ],
      "examples": [
        "Added observable evidence for every rating",
        "Started a monthly lunch for candidates to meet Nostra employees",
        "Tested a new service for quality and diversity of candidates",
      ],
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": [
        "Teaches new interviewers how to interview with empathy",
        "Models great interview technique and feedback when shadowed",
        "Reverse shadows trainees and helps calibrate their feedback",
      ],
      "examples": [
        "Wrote new interview question which meets our criteria",
        "Brought candidates in proactively, with high conversion rate",
        "Proposed useful, tangible improvements to the interview process",
      ],
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": [
        "Documents subtle cues in interviews that indicate values alignment",
        "Makes hiring decisions, resolving discrepancies between conflicting reports",
        "Top-grades candidates and teases out character traits",
      ],
      "examples": [
        "Planned engineering summit on interview process and training",
        "Organized and lead Medium's presence at a recruitment fair",
        "Brought senior candidate that fit perfectly with culture",
      ],
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": [
        "Sets the tone, policy and goals around building a diverse, high-quality team",
        "Identifies and brings in promising acquisitions",
        "Tracks industry activity, identifying opportunities for critical roles",
      ],
      "examples": [
        "Talked with a senior candidate over many months to fill critical role",
        "Organized efforts convincing acquired engineers to join and stay",
        "Set goals, tracked and reported metrics on demographics over time",
      ],
    }],
  },

  "COMMUNITY": {
    "displayName": "Community",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": [
        "Participates in team activities and offsites",
        "Treats colleagues and clients with respect",
        "Joins groups or committees outside regular duties",
      ],
      "examples": [
        "Joined and actively participated in the whatsapp group",
        "Brought a small gift back from vacation for the team",
        "Wrote entertaining and informative article on whatsapp group",
      ],
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": [
        "Makes space for others to participate",
        "Collaborates with other engineers outside direct responsibilities",
        "Finds ways to ramp up and engage new hires quickly",
      ],
      "examples": [
        "Give new hire a warm welcome talk",
        "Brought shy and introverted people into a dominant conversation",
        "Volunteered as secretary for a team in meeting",
      ],
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": [
        "Takes on additional critical production support at short notice",
        "Pitches in to help other teams deadlines, without missing own deadlines",
        "Uses position to raise difficult issues on someone's behalf",
      ],
      "examples": [
        "Help critical production legacy bug while still contributing to projects",
        "Suggested and join to visit sick team member",
        "Stayed positive and improved team morale during period after layoffs",
      ],
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": [
        "Serving the team without complaint",
        "Implements concrete programs to signficantly improve team inclusivity",
        "Takes on large amounts of tedious grunt work for team without being asked",
      ],
      "examples": [
        "Devoted large amount of time to helping outside direct responsibilities",
        "Build tools to automate internal business process",
        "Rebuild Nostra website for better branding and hiring",
      ],
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": [
        "Brings separate teams together to build relatedness",
        "Holds individuals, teams, and leadership accountable to Medium's values",
        "Sets the tone, policy, and goals around maintaining an inclusive company",
      ],
      "examples": [
        "Organized family outing for the whole engineering org",
        "Challenged and corrected exclusionary behaviour or policies",
        "Devised, delivered and acted on findings from happiness survey",
      ],
    }],
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Engineer I', minPoints: 0, maxPoints: 16},
  {label: 'Engineer II', minPoints: 17, maxPoints: 35},
  {label: 'Senior Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Group Lead', minPoints: 36, maxPoints: 57},
  {label: 'Staff Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Senior Group Lead', minPoints: 58, maxPoints: 89},
  {label: 'Principal Engineer', minPoints: 90},
  {label: 'Director of Engineering', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
