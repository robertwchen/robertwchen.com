export const links = {
  email: 'mailto:robert@robertwchen.com',
  github: 'https://github.com/robertwchen',
  linkedin: 'https://www.linkedin.com/in/robertwchen/',
  resume: '/resume.pdf'
};

export const resumeUpdated = 'May 26, 2026';

export const hero = {
  intro: "Hello, I'm",
  name: 'Robert Chen',
  role: 'Recent Computer Engineering + Electrical Engineering Graduate from UVA',
  summary:
    'I build across hardware and software: sensors, firmware, messy data, apps, ML, dashboards, backend logic, and deployment.'
};

export const about = [
  'I recently graduated from the University of Virginia in Computer Engineering and Electrical Engineering. I like working across the boundary between software and hardware: web products, ML/CV tools, cloud systems, mobile apps, and embedded prototypes.',
  'Recently, I have worked on AWS infrastructure automation at Verint, computer vision research for tennis broadcast analysis at UVA, and full-stack tools for real estate operations.',
  'Outside of engineering, I founded the Yo-Yo Club at UVA, helped with sports in the Taiwanese Student Association, and love playing pickleball and tennis.'
];

export const funFact =
  'I like seeing an idea turn into a physical system, then into a product someone can actually use.';

export const expertise = ['Full Stack / Product', 'Computer Vision / ML', 'Robotics / Embedded', 'Cloud / DevOps'];

export const drives = [
  {
    title: 'Love to Build',
    text: 'I like turning rough ideas into working products, whether that means a Flutter app, a CI automation, a sensor rig, or a computer vision pipeline.'
  },
  {
    title: 'Love to Learn',
    text: 'I am drawn to projects that force me to cross layers: firmware to app UI, OCR to structured state, or infrastructure code to production deployment.'
  },
  {
    title: 'Love to Deliver',
    text: 'The work I am proudest of has a measurable outcome: faster PR feedback, less manual reporting, higher classification accuracy, or a tool someone can actually use.'
  },
  {
    title: 'Love to Collaborate',
    text: 'I enjoy working with teams, sharing demos early, and making technical systems understandable to people who need to trust them.'
  }
];

export const experience = [
  {
    org: 'Verint',
    role: 'DevOps Cloud Automation Engineer Intern',
    period: 'May 2025 - Nov 2025',
    summary:
      'Built cloud infrastructure, deployment automation, and secure file-transfer tooling across AWS and CI/CD systems.',
    achievements: [
      'Migrated Terraform workspaces to OpenTofu and standardized remote state plus reusable modules for EC2, S3, and IAM.',
      'Delivered an AWS Transfer Family web client on ECS Fargate using CloudFormation, Cognito, DynamoDB, S3, CloudFront, Docker, CloudWatch, and Angular.',
      'Cut pull-request feedback time to roughly 2-3 minutes across about 30 PRs/week using GitHub Actions, Harness, Python, and Bash.'
    ],
    stack: ['AWS', 'OpenTofu', 'Terraform', 'Docker', 'GitHub Actions', 'Harness', 'Python', 'Bash']
  },
  {
    org: 'Visual Intelligence Lab, UVA',
    role: 'Research Assistant, ML & Computer Vision',
    period: 'Sep 2025 - Present',
    summary:
      'Building computer vision and data pipelines for tennis broadcast analysis and serve-performance evaluation.',
    achievements: [
      'Developed a Python OCR pipeline that extracts JSON match state from tennis broadcast score overlays.',
      'Used OpenCV, Tesseract OCR, temporal smoothing, and finite-state-machine logic to make noisy visual state machine-readable.',
      'Built a reproducible serve-analysis pipeline and defined a Serve Index using speed, outcomes, and 3D keypoints.'
    ],
    stack: ['Python', 'OpenCV', 'Tesseract', 'NumPy', 'Pandas', 'Computer Vision']
  },
  {
    org: 'S&J Chen, LLC',
    role: 'Software Engineering Intern',
    period: 'May 2024 - Aug 2024',
    summary:
      'Shipped a full-stack tenant payment portal and reporting workflow for real estate operations.',
    achievements: [
      'Built a Next.js, TypeScript, Supabase, and Vercel portal for tenants, leases, invoices, and admin workflows.',
      'Reduced manual rent follow-ups by roughly 60% across two shopping centers.',
      'Automated Stripe webhook reconciliation and CSV reporting, reducing monthly reporting from about 3 hours to about 30 minutes.'
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Vercel']
  },
  {
    org: 'Ready Racquets Plus',
    role: 'Tennis Instructor',
    period: 'Apr 2023 - Jul 2025',
    summary:
      'Led weekly group tennis lessons for students ages 5-16, teaching fundamentals, teamwork, and progression-based drills.',
    achievements: [
      'Coached beginner and intermediate players through structured drills focused on technique, movement, consistency, and confidence.',
      'Adapted instruction across age groups and skill levels while keeping group sessions active, clear, and encouraging.'
    ],
    stack: ['Coaching', 'Teaching', 'Communication']
  }
];

export const projects = [
  {
    title: 'Flying Birdies',
    category: 'Robotics / Embedded',
    type: 'Embedded sports product',
    summary:
      'Racket-mounted badminton sensor system with BLE firmware, Flutter app, SQLite history, and swing analytics.',
    stack: ['Flutter', 'Embedded C', 'BLE', 'IMU', 'DSP'],
    href: 'https://github.com/robertwchen/flying-birdies'
  },
  {
    title: 'KitchenMaster',
    category: 'Computer Vision / ML',
    type: 'Pickleball kitchen-fault review pipeline',
    summary:
      'Single-camera review tool for court geometry, ball-event candidates, foot position, and legal/fault/uncertain artifacts.',
    stack: ['Python', 'OpenCV', 'YOLO', 'NumPy', 'pytest'],
    href: 'https://github.com/robertwchen/kitchen-master'
  },
  {
    title: 'UVA CIO Connector',
    category: 'Full Stack / Product',
    type: 'Club discovery and management platform',
    summary:
      'Django platform for UVA club search, membership, event RSVP, join requests, executive management, and role-based access.',
    stack: ['Django', 'Python', 'PostgreSQL', 'Google OAuth', 'AWS S3'],
    href: 'https://github.com/robertwchen/uva-cio-connector'
  },
  {
    title: 'Autonomous Serving Robot',
    category: 'Robotics / Embedded',
    type: 'ROS2 navigation robot',
    summary:
      'TurtleBot3 serving robot with table routing, odometry-locked control, LiDAR bypass behavior, and simulation-to-hardware tuning.',
    stack: ['ROS2', 'Python', 'TurtleBot3', 'LiDAR', 'Odometry'],
    href: 'https://github.com/robertwchen/autonomous-serving-robot'
  },
  {
    title: 'Scorebug Reader',
    category: 'Computer Vision / ML',
    type: 'Computer vision tool',
    summary:
      'Python OCR pipeline that turns tennis broadcast score overlays into structured JSON match state.',
    stack: ['Python', 'OpenCV', 'Tesseract', 'JSON']
  },
  {
    title: 'BreadCrumb',
    category: 'Mobile',
    type: 'Offline-first object recovery app',
    summary:
      'SwiftUI MVP for recovering misplaced items using live camera capture, local object proposals, and visual similarity search.',
    stack: ['SwiftUI', 'AVFoundation', 'Vision', 'CoreMedia', 'Python'],
    href: 'https://github.com/robertwchen/BreadCrumb'
  },
  {
    title: 'Photo Curator App',
    category: 'Mobile',
    type: 'Mobile ML product',
    summary:
      'Cross-platform photo curation app combining on-device ML, gesture-driven UI, cloud sync, and vector search.',
    stack: ['React Native', 'TensorFlow.js', 'NestJS', 'AWS', 'pgvector']
  },
  {
    title: 'Food Forecast',
    category: 'Computer Vision / ML',
    type: 'Food insecurity forecasting app',
    summary:
      'ML app that predicts monthly food distribution needs from SNAP, unemployment, poverty, population, and historical inputs.',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'Next.js', 'TypeScript'],
    href: 'https://github.com/robertwchen/food-insecurity-forecasting-app'
  },
  {
    title: 'Friends First',
    category: 'Full Stack / Product',
    type: 'Student event matching MVP',
    summary:
      'Vercel-ready MVP for structured student social events with applications, confirmations, check-ins, connections, and admin review.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe'],
    href: 'https://github.com/robertwchen/friends-first'
  },
  {
    title: 'Vision-Assisted Quadcopter',
    category: 'Robotics / Embedded',
    type: 'Robotics prototype',
    summary:
      'FPV quad converted into a vision-assisted autonomy platform using ArduPilot, AprilTags, and MAVLink.',
    stack: ['ArduPilot', 'MAVLink', 'OpenCV', 'UART']
  },
  {
    title: 'Programmable 32-bit RISC Processor',
    category: 'Robotics / Embedded',
    type: 'Digital design project',
    summary:
      'Verilog CPU implementation covering ALU, register file, control/decode logic, test vectors, and waveform simulation debugging.',
    stack: ['Verilog', 'RTL Design', 'Simulation', 'Verification']
  }
];

export const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Python',
  'AWS',
  'Docker',
  'OpenCV',
  'PyTorch',
  'TensorFlow',
  'Flutter',
  'SwiftUI',
  'Embedded C',
  'C++',
  'Supabase',
  'PostgreSQL',
  'Terraform',
  'OpenTofu',
  'GitHub Actions',
  'ROS2',
  'ArduPilot'
];
