export type ProjectCategory =
  | "Data Pipeline & Modeling"
  | "Full-Stack Application"
  | "Batted-Ball Analytics"
  | "Forecasting"
  | "Machine Learning Research";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  featured: boolean;
  image: {
    src: string;
    alt: string;
  };
  links?: {
    github?: string;
    external?: string;
    reportPdf?: string;
  };
  sections: {
    overview: string;
    problem: string;
    data: string;
    approach: string;
    methods: string;
    results: string;
    application: string;
    visuals: string;
    takeaways: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "ncaa-pitcher-evaluation",
    title: "NCAA Pitcher Evaluation — Data Pipeline, Modeling & Stuff+ Dashboard",
    category: "Data Pipeline & Modeling",
    description:
      "End-to-end pipeline and pitcher evaluation system built on 2M+ TrackMan pitches, with modeling and dashboard workflows for actionable evaluation.",
    technologies: [
      "Python",
      "SQL",
      "R",
      "PostgreSQL",
      "Supabase",
      "Feature Engineering",
      "Stuff+",
      "Dashboards",
    ],
    featured: true,
    image: {
      src: "/images/projects/ncaa-stuffplus.svg",
      alt: "Placeholder dashboard preview",
    },
    sections: {
      overview:
        "Independent analytics project developed in collaboration with Baltimore Orioles Assistant General Manager Sig Mejdal. The system focuses on reliable ingestion, validation, feature engineering, and modeling to support pitcher evaluation.",
      problem:
        "How can we build a scalable, trusted evaluation workflow for NCAA pitchers using TrackMan pitch-level data that supports both research and practical decision-making?",
      data:
        "2M+ TrackMan pitches with pitcher, pitch, and ball-flight features. Includes multi-source ingestion, cleaning, standardization, and validation checks to ensure consistency across seasons and parks.",
      approach:
        "Design a repeatable pipeline from raw ingestion to model-ready tables, then build pitcher-level views that combine pitch-level run values, rolling velocity metrics, clustering, and Stuff+/Location+ style modeling.",
      methods:
        "PostgreSQL/Supabase-backed warehouse; Python ingestion + QC; feature engineering for movement, velocity, release, and context; pitch clustering; pitch-level run values; model training and calibration for Stuff+/Location+ style outputs; dashboard-oriented aggregations.",
      results:
        "A unified dataset and modeling workflow that supports interactive pitcher analysis. Designed for extensibility (new seasons, new features, new model versions) with repeatable QA.",
      application:
        "Supports pitcher evaluation, pitch design conversations, and identification of actionable traits. Enables quick exploration of pitch shapes, consistency, and performance indicators.",
      visuals:
        "Space reserved for dashboard screenshots, pipeline/architecture diagrams, and model visuals.",
      takeaways: [
        "Reliable ingestion + validation is as important as model accuracy.",
        "Pitch-level features benefit from rolling context and clustering-based summaries.",
        "Model outputs must map cleanly to scouting and player-dev questions.",
      ],
    },
  },
  {
    slug: "mlb-deviations",
    title: "MLB Deviations — Pitcher Change Analysis",
    category: "Full-Stack Application",
    description:
      "Full-stack tool for detecting meaningful pitcher changes across date ranges (movement, velo, usage, release) with clean visual comparisons and shareable outputs.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "Statcast",
      "pybaseball",
      "Change Detection",
    ],
    featured: true,
    image: {
      src: "/images/projects/mlb-deviations.svg",
      alt: "Placeholder app screenshot",
    },
    sections: {
      overview:
        "MLB Deviations is a research-to-product style application that surfaces pitch-level changes over time with side-by-side comparisons and statistical summaries.",
      problem:
        "How can analysts quickly identify changes that matter (not noise) when pitchers adjust movement, velocity, release, or usage across time windows?",
      data:
        "Statcast pitch-by-pitch data pulled via pybaseball/Statcast endpoints, normalized into analysis-ready frames for comparisons by pitch type and date range.",
      approach:
        "Build a FastAPI backend that computes comparisons and summaries, and a Next.js frontend that supports interactive selection of date ranges, pitch filters, and clear visual outputs.",
      methods:
        "Backend: data retrieval, filtering, summary statistics, and change metrics. Frontend: responsive charts/tables, clear deltas, and a UI designed for quick exploration.",
      results:
        "A usable tool that produces repeatable change analysis outputs and supports publishing pitcher notes externally (e.g., social posts).",
      application:
        "Useful for monitoring new pitch shapes, velo spikes/drops, usage changes, and release point shifts—supporting evaluation, scouting, and player-dev discussions.",
      visuals:
        "Space reserved for application screenshots and example posts/usage from Twitter/X.",
      takeaways: [
        "Product-like UX makes analysis easier to adopt.",
        "Clear baselines and comparable windows are critical for change detection.",
        "Shareable visuals improve communication speed.",
      ],
    },
  },
  {
    slug: "uci-batted-ball-clustering",
    title: "UCI Baseball — Batted Ball Clustering & Defensive Positioning",
    category: "Batted-Ball Analytics",
    description:
      "TrackMan-based clustering of batted balls to inform defensive positioning and communicate hitter tendencies with coach-friendly visuals.",
    technologies: [
      "Python",
      "TrackMan",
      "Clustering",
      "Visualization",
      "Defensive Positioning",
    ],
    featured: false,
    image: {
      src: "/images/projects/uci-clusters.svg",
      alt: "Placeholder cluster visual",
    },
    sections: {
      overview:
        "Created for UCI Baseball to translate TrackMan batted-ball data into actionable defensive positioning recommendations.",
      problem:
        "How can we summarize hitter batted-ball tendencies in a way that helps coaches and players make positioning decisions?",
      data:
        "TrackMan batted-ball events with spray, launch characteristics, and contextual descriptors, aggregated per hitter and situation.",
      approach:
        "Cluster batted balls into archetypes, then map clusters to recommended infield/outfield positioning adjustments and visual summaries.",
      methods:
        "Feature engineering on batted-ball vectors; clustering and cluster stability checks; visualization of clusters and recommended positioning; coach-facing summaries.",
      results:
        "Clear cluster visuals and positioning recommendations that can be communicated quickly in meetings and pre-series prep.",
      application:
        "Defensive alignment planning, scouting reports, and player discussions around approach and tendencies.",
      visuals:
        "Space reserved for spray charts, cluster plots, and positioning diagrams.",
      takeaways: [
        "Clustering is most valuable when paired with coaching language.",
        "Visual clarity matters more than model complexity for adoption.",
      ],
    },
  },
  {
    slug: "farmer-boys-forecasting",
    title: "Farmer Boys Forecasting",
    category: "Forecasting",
    description:
      "Graduate capstone forecasting system with six candidate methods, 40 rolling backtests, and an ensemble model delivered through a Streamlit app for nontechnical users.",
    technologies: [
      "Time Series",
      "ETS",
      "OLS Decomposition",
      "LightGBM",
      "Ensembling",
      "Backtesting",
      "Streamlit",
    ],
    featured: false,
    image: {
      src: "/images/projects/forecasting.svg",
      alt: "Placeholder forecasting chart",
    },
    sections: {
      overview:
        "Capstone project focused on building a robust, validated forecasting workflow for sales/transactions, and delivering outputs through a tool nontechnical stakeholders can use.",
      problem:
        "How can we improve forecast accuracy and reliability for operational planning while keeping outputs interpretable and easy to consume?",
      data:
        "Historical sales and transaction time series, with calendar effects and potential external signals engineered as features.",
      approach:
        "Evaluate multiple model families with rolling backtests, then select/ensemble based on performance and stability.",
      methods:
        "40 rolling backtests; candidate models (OLS decomposition, ETS, LightGBM, and others); validation metrics and error analysis; ensemble strategy; Streamlit delivery.",
      results:
        "A validated workflow and app-based delivery that supports practical forecasting usage rather than a one-off analysis.",
      application:
        "Planning and decision support for operations teams; consistent forecast delivery and interpretability.",
      visuals:
        "Space reserved for backtest result charts and the Streamlit app UI.",
      takeaways: [
        "Backtesting design drives trustworthy conclusions.",
        "A usable app can be the difference between adoption and shelfware.",
      ],
    },
  },
  {
    slug: "mlb-allstar-2026-ml",
    title: "Predicting the 2026 MLB All-Star Team with Machine Learning",
    category: "Machine Learning Research",
    description:
      "Formal graduate ML project predicting All-Star selection using feature engineering, model comparisons, and validation—paired with baseball interpretation.",
    technologies: [
      "Machine Learning",
      "Feature Engineering",
      "Model Comparison",
      "Validation",
      "Baseball Interpretation",
    ],
    featured: false,
    image: {
      src: "/images/projects/allstar-ml.svg",
      alt: "Placeholder model comparison",
    },
    links: {
      reportPdf: "/documents/all-star-report.pdf",
    },
    sections: {
      overview:
        "Formal research project building and validating ML models to predict MLB All-Star selections, with emphasis on methodology, evaluation, and interpretation.",
      problem:
        "Can we predict All-Star selection using publicly available performance and context features, and what signals appear to drive selection outcomes?",
      data:
        "Player-season level dataset with engineered performance and context variables, curated for consistent training/evaluation splits.",
      approach:
        "Frame as a supervised classification problem, engineer features aligned to baseball value signals, and compare multiple model families under a clear validation scheme.",
      methods:
        "Feature engineering; baseline models; advanced ML models; cross-validation/holdouts; calibration; error analysis; interpretation of key drivers.",
      results:
        "Validated model comparisons and a structured report detailing methodology, results, and baseball interpretation.",
      application:
        "Demonstrates end-to-end ML process, rigorous evaluation, and the ability to communicate results in baseball terms.",
      visuals:
        "Space reserved for tables/figures from the written report and any model interpretation visuals.",
      takeaways: [
        "Model performance must be paired with interpretability.",
        "Clear validation prevents overconfident conclusions.",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
