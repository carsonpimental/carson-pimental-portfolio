export type ProjectCategory = string;

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
    category: "Data Engineering · Machine Learning · Baseball Analytics",
    description:
      "Developed an end-to-end NCAA Division I pitcher evaluation system using more than 2 million TrackMan pitches, combining data engineering, statistical modeling, pitch classification, and interactive visualization. I built a repeatable Python and SQL pipeline to ingest, clean, validate, and structure pitch-level data, then engineered features including rolling velocity measures and pitch-level run values for downstream modeling. Using R and Python, I developed pitch-clustering methods and Stuff+ / Location+ models, with the resulting metrics and pitch characteristics surfaced through an interactive dashboard for pitcher analysis.",
    technologies: [
      "Python",
      "SQL",
      "R",
      "PostgreSQL",
      "Supabase",
      "TrackMan",
      "Machine Learning",
      "Feature Engineering",
      "Clustering",
      "Stuff+",
      "Data Visualization",
    ],
    featured: true,
    image: {
      src: "/images/projects/Stuff+/Screenshot 2026-09-17 153155.png",
      alt: "NCAA pitcher evaluation dashboard",
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
    title: "MLB Deviations",
    category: "Full-Stack Baseball Analytics · Statcast · Change Detection",
    description:
      "Developed MLB Deviations, a full-stack pitcher analysis application that compares MLB pitchers across custom date ranges and automatically surfaces meaningful changes in pitch characteristics. The platform processes Statcast pitch-level data to compare velocity, movement, release traits, spin characteristics, and pitch usage, while using z-scores to rank the most unusual changes. The final interface combines statistical comparisons with movement and usage visualizations to make arsenal changes easier to identify and communicate.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "React",
      "Statcast",
      "pybaseball",
      "Z-Scores",
      "Data Visualization",
    ],
    featured: true,
    image: {
      src: "/images/projects/DEVIATIONS/Dev Cover.png",
      alt: "MLB Deviations cover",
    },
    links: {
      external: "https://x.com/MLB_DEVIATIONS",
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
    slug: "scouts-defensive-alignments",
    title: "scOUTs – Defensive Alignments",
    category: "Baseball Analytics · TrackMan · Clustering · Defensive Positioning",
    description:
      "Developed scOUTs, a Next.js defensive positioning application that transforms raw TrackMan batted-ball data into interactive spray charts and opponent scouting reports. The platform cleans and combines TrackMan exports, classifies batted balls into infield and outfield groups, and uses cluster-based epicenters to identify common landing zones. Final reports translate those patterns into practical depth, angle, and directional positioning guidance that coaches and players can use for game preparation.",
    technologies: [
      "TrackMan",
      "Clustering",
      "Data Cleaning",
      "Data Visualization",
      "Baseball Scouting",
      "Next.js",
    ],
    featured: false,
    image: {
      src: "/images/projects/scOUTs/scOUTs cover.png",
      alt: "scOUTs cover",
    },
    sections: {
      overview:
        "scOUTs is a defensive positioning application that turns raw TrackMan batted-ball exports into spray charts and opponent scouting reports that translate patterns into actionable depth/angle guidance.",
      problem:
        "How can we reliably translate raw tracking exports into a repeatable scouting workflow that produces coach-usable defensive positioning recommendations?",
      data:
        "TrackMan batted-ball exports (CSV) containing ball-in-play events with hit type tags, launch characteristics, and landing/trajectory information used to build infield/outfield groupings.",
      approach:
        "Ingest and clean multiple TrackMan exports, classify batted balls into infield/outfield groups, generate spray visualizations, and summarize common landing zones using clustering/epicenters for report-ready scouting outputs.",
      methods:
        "Data cleaning + schema normalization; rule-based batted-ball classification with manual overrides; spray chart visualization; clustering/epicenter summaries of landing zones; report generation designed for printing and distribution.",
      results:
        "Generated infield and outfield scouting reports that turn spray tendencies into practical defensive positioning guidance, producing clean, shareable packets for game preparation.",
      application:
        "Opponent preparation: hitter-specific scouting packets for coaches and players, supporting series planning and pregame defensive alignment decisions.",
      visuals:
        "See the project page for report-ready infield/outfield outputs and the scOUTs cover visual.",
      takeaways: [
        "Tracking data becomes valuable when translated into decisions.",
        "Scouting tools need workflow + print-ready outputs, not just charts.",
      ],
    },
  },
  {
    slug: "farmer-boys-forecasting",
    title: "Farmer Boys Forecasting & Analytics Platform",
    category: "Time Series Forecasting · Machine Learning · Model Validation",
    description:
      "Built and validated an ensemble forecasting model across six candidate models and 40 rolling backtests, evaluating and stress-testing competing approaches to identify the most predictive blend. I also applied OLS decomposition to separate underlying performance from seasonal and calendar noise, creating cleaner baselines and adjusted metrics for decision-making. The final models were deployed through a Streamlit web app that translated complex outputs into simple, actionable information for non-technical stakeholders across the organization.",
    technologies: [
      "LightGBM",
      "ETS",
      "OLS",
      "Time Series Forecasting",
      "Feature Engineering",
      "Ensemble Modeling",
      "Rolling Backtests",
      "Streamlit",
      "Python",
    ],
    featured: false,
    image: {
      src: "/images/projects/FB/08868770016071080395fca85c7d8954-400-400-thumb.png",
      alt: "Farmer Boys logo",
    },
    links: {
      reportPdf: "/documents/Farmer_Boys_Final_Client_Report.pdf",
    },
    sections: {
      overview:
        "Production-ready forecasting and analytics workflow built for Farmer Boys, with separate pipelines for sales and transactions, rigorous rolling validation, and self-service delivery through Streamlit.",
      problem:
        "How can we deliver accurate, stable forecasts that are validated out-of-sample and packaged into a workflow that nontechnical stakeholders can run weekly?",
      data:
        "Weekly sales and transaction time series with engineered calendar, holiday, and seasonality signals plus lag/rolling features designed for forecasting stability.",
      approach:
        "Build a library of candidate statistical + ML models, validate using rolling backtests, then optimize ensembles and deploy results through a self-service app.",
      methods:
        "Feature engineering (lags, rolling averages, momentum, trend, YoY, seasonal, holiday); OLS seasonal decomposition; ETS variants; LightGBM; ensemble weight searches; 40 rolling 13-week backtests; Streamlit delivery with downloadable outputs.",
      results:
        "Sales: MAPE 1.29% (R² 0.81). Transactions: MAPE 1.44% (R² ~0.81). Validation: 40 rolling backtests producing 520 out-of-sample predictions. Ensembles outperformed individual component models for both targets.",
      application:
        "Operational planning and decision support via repeatable forecast generation, decomposition outputs, charts, and exports designed for nontechnical users.",
      visuals:
        "See the project page for the Streamlit dashboard, decomposition visuals, forecast vs benchmark comparisons, and ensemble evidence.",
      takeaways: [
        "Rolling validation is critical for trustworthy forecasting claims.",
        "Ensembles can outperform single models when optimized and stress-tested.",
        "Delivery matters: self-service workflows drive adoption.",
      ],
    },
  },
  {
    slug: "mlb-allstar-2026-ml",
    title: "Predicting the 2026 MLB All-Star Team",
    category: "Machine Learning · Model Validation · Baseball Analytics",
    description:
      "Developed a machine learning framework to predict 2026 MLB All-Star selections, comparing multiple classification approaches and tuning models through stratified cross-validation and GridSearchCV. To improve performance on the imbalanced target, I tested SMOTE, created a custom F-beta evaluation metric, and optimized classification thresholds based on the cost of missed All-Stars versus false positives. The selected model was then applied to Steamer projections to produce player-level All-Star probabilities and final predictions.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "Decision Trees",
      "Naive Bayes",
      "SMOTE",
      "GridSearchCV",
    ],
    featured: false,
    image: {
      src: "/images/2026-mlb-all-star-game-logo-philadelphia-phillies-sportslogosnet-feat-111853z-768x499.jpg",
      alt: "2026 MLB All-Star Game",
    },
    links: {
      reportPdf: "/documents/ML MLB All Star Report.pdf",
    },
    sections: {
      overview:
        "Built and evaluated a machine-learning framework to predict MLB All-Star selections from player performance data, with emphasis on validation, modeling judgment, and baseball application.",
      problem:
        "How can we predict All-Star selection probabilities in a way that is methodologically sound (no leakage), robust to class imbalance, and aligned with decision-making objectives?",
      data:
        "Player-season level dataset with engineered performance features and a clearly defined modeling window informed by data validation checks on historical All-Star standards.",
      approach:
        "Compare multiple classification approaches under stratified cross-validation, tune hyperparameters and classification thresholds, and select a final model based on a custom precision-recall objective that weights recall more heavily.",
      methods:
        "Scikit-learn pipelines (leakage prevention), stratified 5-fold cross-validation, GridSearchCV, SMOTE variants, and threshold optimization using an F-beta objective weighted toward recall.",
      results:
        "Selected Logistic Regression with SMOTE (F-beta 0.65; recall 0.81; precision 0.52) at an optimized classification threshold of 0.33. Other models achieved higher recall, but this model provided the strongest balance of recall and precision for the project objective.",
      application:
        "Applied the selected model to 2026 Steamer projections to generate player-level All-Star probabilities for evaluation and discussion.",
      visuals:
        "See the project page for key validation results, model comparisons, and final prediction outputs.",
      takeaways: [
        "Validate assumptions about the target before modeling.",
        "Treat imbalanced classification as a precision-recall problem—not an accuracy problem.",
        "Prevent leakage with pipelines and fold-contained preprocessing.",
        "Tune thresholds to match the real objective, not the default 0.50 cutoff.",
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
