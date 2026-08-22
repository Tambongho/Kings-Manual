export type Part = {
  title: string;
  chapters: string[];
};

export type Product = {
  slug: string;
  title: string;
  subtitle: string;
  price: number;
  compareAt?: number;
  cover: string;
  color: string; // tailwind color token for accents
  description: string;
  chapters: string;
  highlights: string[];
  parts?: Part[];
  gumroadUrl?: string;
};

export const VOLUMES: Product[] = [
  {
    slug: "volume-1",
    title: "Volume I — The Making of a Man",
    subtitle: "Biology, mind, and development from conception to maturity",
    price: 39,
    cover: "/covers/vol1.webp",
    color: "#1e3a5f",
    gumroadUrl: "https://thekingsmanual.gumroad.com/l/kwqvi",
    description:
      "From the evolutionary origins of the male body through puberty, the adolescent brain, mental health, personality, and the science of physical performance and longevity — Volume I is the biological and psychological foundation the rest of the encyclopedia builds on.",
    chapters: "35 chapters across 6 parts",
    highlights: [
      "Genetics, evolution, and a working map of male anatomy",
      "Puberty, testosterone, and the adolescent brain",
      "Mental health: depression, anxiety, trauma, addiction, resilience",
      "Nutrition, strength training, sexual health, and preventive medicine",
    ],
    parts: [
      {
        title: "Part I. Origins: Genetics, Evolution, and the Male Body",
        chapters: [
          "The Evolutionary Story of the Human Male",
          "Genetics and Sex Determination",
          "Male Anatomy and Physiology: A Working Map",
          "Conception, Gestation, and the Biology of Fatherhood's Beginning",
          "Infancy and Early Childhood Development in Boys",
        ],
      },
      {
        title: "Part II. Puberty and the Adolescent Transition",
        chapters: [
          "The Hormonal Cascade: Puberty Explained",
          "Testosterone: Myth, Measurement, and Meaning",
          "The Adolescent Brain: Risk, Reward, and Reasoning",
          "Rites of Passage: How Cultures Have Marked Manhood",
          "Identity Formation in the Teenage Years",
        ],
      },
      {
        title: "Part III. The Male Brain and Mind",
        chapters: [
          "Neuroanatomy and Male Brain Development Across the Lifespan",
          "Cognition, Learning, and Memory",
          "Attention, Focus, and the Architecture of Distraction",
          "Emotional Regulation and the Biology of Feeling",
          "Sleep: The Foundation Most Men Neglect",
        ],
      },
      {
        title: "Part IV. Mental Health and Inner Life",
        chapters: [
          "Depression in Men: Presentation, Detection, and Treatment",
          "Anxiety and the Nervous System",
          "Trauma, Stress, and the Body's Response",
          "Grief and Loss Across a Man's Life",
          "Addiction: Biology, Psychology, and Recovery",
          "Resilience: What the Evidence Actually Shows",
          "Identity, Purpose, and the Search for Meaning",
        ],
      },
      {
        title: "Part V. Personality, Motivation, and Behavior",
        chapters: [
          "Temperament and Personality: Frameworks and Evidence",
          "Motivation and the Psychology of Drive",
          "Confidence, Fear, and Courage",
          "Discipline and the Science of Habit Formation",
          "Decision-Making Under Uncertainty",
          "Creativity and the Creative Process",
        ],
      },
      {
        title: "Part VI. The Body: Health, Performance, and Longevity",
        chapters: [
          "Nutrition Science for Men",
          "Exercise, Strength, and Conditioning",
          "Sexual Health and Fertility",
          "Preventive Medicine and Screening by Decade",
          "Common Diseases: Heart Disease, Cancer, Diabetes, Obesity",
          "Sports Medicine, Injury, and Recovery",
          "Aging Biology and the Science of Longevity",
        ],
      },
    ],
  },
  {
    slug: "volume-2",
    title: "Volume II — Man in Civilization",
    subtitle: "History, philosophy, religion, and culture",
    price: 39,
    cover: "/covers/vol2.webp",
    color: "#5c1a2b",
    gumroadUrl: "https://thekingsmanual.gumroad.com/l/lehgd",
    description:
      "A sweeping tour of how men have lived, worked, fought, and believed across every era and continent — from prehistoric societies through the great philosophical and religious traditions that shaped what manhood has meant.",
    chapters: "37 chapters across 4 parts",
    highlights: [
      "Men in world history, from prehistory to the twentieth century",
      "The institutions men have built: fatherhood, work, law, marriage",
      "Aristotle, the Stoics, Confucianism, Bushido, and existentialism",
      "Christianity, Judaism, Islam, Buddhism, Hinduism, and African and Indigenous traditions",
    ],
    parts: [
      {
        title: "Part VII. Men in World History",
        chapters: [
          "Prehistoric and Early Human Societies",
          "Ancient Africa: Kingdoms, Empires, and Everyday Men",
          "Ancient Mesopotamia, Egypt, and the Near East",
          "Classical Greece and Rome",
          "Ancient and Imperial China",
          "Ancient and Classical India",
          "The Islamic Golden Age and the Middle East",
          "Medieval Europe",
          "Indigenous Societies of the Americas",
          "Indigenous and Aboriginal Traditions of Oceania and the Pacific",
          "The Age of Exploration and Its Men",
          "The Industrial Revolution and the Reshaping of Male Labor",
          "The Twentieth Century: War, Work, and Rapid Change",
          "Ordinary Men: Farmers, Craftsmen, and Laborers Through History",
        ],
      },
      {
        title: "Part VIII. Institutions Men Have Built and Inhabited",
        chapters: [
          "A History of Fatherhood",
          "A History of Masculinity as an Idea",
          "A History of Warfare and the Warrior",
          "A History of Work and the Trades",
          "A History of Education",
          "A History of Marriage and the Family",
          "A History of Law, Citizenship, and Civic Duty",
        ],
      },
      {
        title: "Part IX. Philosophy",
        chapters: [
          "Aristotle and Virtue Ethics",
          "Stoicism: Marcus Aurelius, Epictetus, Seneca",
          "Confucianism and East Asian Ethical Traditions",
          "Ubuntu and African Philosophical Traditions",
          "Bushido and the Warrior Codes of Japan",
          "Natural Law and the Western Legal-Philosophical Tradition",
          "Existentialism: Frankl, Kierkegaard, Camus",
          "Modern and Contemporary Moral Philosophy",
        ],
      },
      {
        title: "Part X. Religion and the Sacred Dimension of Manhood",
        chapters: [
          "Christianity: Responsibility, Service, and Family",
          "Judaism: Covenant, Study, and Communal Duty",
          "Islam: Submission, Justice, and Brotherhood",
          "Buddhism: Detachment, Compassion, and Discipline",
          "Hinduism: Dharma, Duty, and the Stages of Life",
          "Traditional African Religions and Cosmologies",
          "Indigenous Spiritual Traditions",
          "A Comparative Study: Responsibility, Humility, and Moral Development Across Faiths",
        ],
      },
    ],
  },
  {
    slug: "volume-3",
    title: "Volume III — Man in Practice",
    subtitle: "Relationships, work, wealth, and legacy",
    price: 39,
    cover: "/covers/vol3.webp",
    color: "#1b4332",
    gumroadUrl: "https://thekingsmanual.gumroad.com/l/wsohc",
    description:
      "The applied volume: friendship and marriage, leadership and enterprise, money and investing, and a decade-by-decade map of a man's life from childhood through old age — closing with honor, service, and what a man leaves behind.",
    chapters: "44 chapters across 5 parts",
    highlights: [
      "Friendship, marriage, fatherhood, and mentorship",
      "Leadership, negotiation, and building a business",
      "Money psychology, investing, real estate, and estate planning",
      "Every decade of a man's life, from childhood to end of life",
    ],
    parts: [
      {
        title: "Part XI. Relationships",
        chapters: [
          "Friendship and Brotherhood",
          "Dating, Courtship, and Modern Mating",
          "Marriage: Formation, Maintenance, and Meaning",
          "Communication, Conflict, and Repair",
          "Attachment Theory and Adult Relationships",
          "Fatherhood and Parenting",
          "Mentorship and Being Mentored",
          "Sexual Ethics and Consent",
          "Divorce, Separation, and Rebuilding",
          "Widowhood and Loss of a Partner",
          "Grandfatherhood",
        ],
      },
      {
        title: "Part XII. Career, Craft, and Enterprise",
        chapters: [
          "Education and the Paths to Mastery",
          "The Trades and Skilled Labor",
          "Building and Leading a Business",
          "Leadership: Theory and Practice",
          "Negotiation and Persuasion",
          "Public Speaking and Communication",
          "Entrepreneurship and Innovation",
          "Technology, Automation, and Artificial Intelligence in the Working Life of Men",
        ],
      },
      {
        title: "Part XIII. Wealth",
        chapters: [
          "The Psychology of Money",
          "Budgeting and Financial Foundations",
          "Investing and Asset Allocation",
          "Risk, Insurance, and Protecting a Household",
          "Real Estate and Property",
          "Taxes and Basic Tax Literacy",
          "Retirement Planning",
          "Estate Planning and Inheritance",
          "Charitable Giving and Stewardship",
        ],
      },
      {
        title: "Part XIV. The Decades of a Man's Life",
        chapters: [
          "Childhood (0–12)",
          "Adolescence (13–19)",
          "The Twenties: Formation",
          "The Thirties: Building",
          "The Forties: Reckoning",
          "The Fifties: Consolidation",
          "The Sixties: Transition",
          "The Seventies: Elderhood",
          "The Eighties and Beyond: Wisdom and Fragility",
          "End of Life, Death, and Dying",
        ],
      },
      {
        title: "Part XV. Character, Service, and Legacy",
        chapters: [
          "Honor and Reputation Across Cultures",
          "Responsibility and the Ethics of Duty",
          "Service to Family, Community, and Country",
          "Wisdom: What the Evidence and Traditions Agree On",
          "Legacy: What Men Leave Behind",
          "Case Studies in Character: Strengths and Failures Examined Honestly",
        ],
      },
    ],
  },
];

export const BUNDLE: Product = {
  slug: "bundle",
  title: "The Complete 3-Volume Set",
  subtitle: "All 116 chapters. Every part. One price.",
  price: 97,
  compareAt: 117,
  cover: "/covers/bundle-3d.webp",
  color: "#8a6d1f",
  description:
    "The full encyclopedia — biology and mind, history and philosophy, and practical mastery of relationships, career, and wealth — in one complete set. Built to be read once and referenced for a lifetime.",
  chapters: "116 chapters across 15 parts",
  highlights: [
    "Everything in Volumes I, II, and III",
    "Save $20 versus buying each volume separately",
    "Companion Workbook included free",
    "Lifetime access, all future revisions included",
  ],
  gumroadUrl: "https://thekingsmanual.gumroad.com/l/sdapx",
};

export const WORKBOOK = {
  slug: "workbook",
  title: "The Companion Workbook",
  subtitle: "128 pages of reflection prompts and exercises — free",
  cover: "/covers/workbook.webp",
  gumroadUrl: "https://thekingsmanual.gumroad.com/l/xpieta",
};

export const ALL_PRODUCTS: Product[] = [...VOLUMES, BUNDLE];

export function getProduct(slug: string): Product | undefined {
  return ALL_PRODUCTS.find((p) => p.slug === slug);
}

export function getParts(product: Product): Part[] {
  if (product.slug === "bundle") {
    return VOLUMES.flatMap((v) => v.parts ?? []);
  }
  return product.parts ?? [];
}
