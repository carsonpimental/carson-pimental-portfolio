import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, SectionTitle, Tag } from "@/components/ui";
import { getProject } from "@/content/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const isAllStar = slug === "mlb-allstar-2026-ml";
  const isFarmerBoys = slug === "farmer-boys-forecasting";
  const isScouts = slug === "scouts-defensive-alignments";
  const isDeviations = slug === "mlb-deviations";
  const isNCAA = slug === "ncaa-pitcher-evaluation";

  const hasLinks = Boolean(
    project.links?.reportPdf || project.links?.github || project.links?.external,
  );

  return (
    <div>
      <section className="border-b border-white/10">
        <Container className="py-12 sm:py-16">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tag>{project.category}</Tag>
              {project.featured ? <Tag>Featured</Tag> : null}
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl [font-family:var(--font-display)]">
              {project.title}
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.6fr_0.9fr]">
            <div className="space-y-10">
              {isAllStar ? (
                <>
                  <div className="space-y-4">
                    <SectionTitle title="Key Work" />
                    <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
                      {[
                        "Data Validation: Tested whether historical All-Star performance standards were statistically stable before selecting the modeling window.",
                        "Model Comparison: Evaluated logistic regression, decision trees, random forest, and Gaussian Naive Bayes, including multiple tuned variants.",
                        "Imbalanced Classification: Recognized that All-Stars made up only about 10% of observations and avoided relying on misleading accuracy.",
                        "Custom Evaluation: Used an F-beta objective weighted more heavily toward recall because missing a true All-Star was considered more costly than producing an additional false positive.",
                        "Leakage Prevention: Used Scikit-learn pipelines so preprocessing was fit only within training folds.",
                        "Cross-Validation & Tuning: Used stratified 5-fold cross-validation and GridSearchCV for hyperparameter optimization.",
                        "SMOTE: Tested oversampling strategies to improve minority-class performance.",
                        "Threshold Optimization: Tuned the classification cutoff rather than using the default 0.50 threshold.",
                        "Final Application: Applied the selected model to 2026 Steamer projections to generate player-level All-Star probabilities.",
                      ].map((x) => (
                        <li key={x} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                          <span className="text-zinc-300">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <p className="text-sm font-medium text-zinc-50">Results</p>
                      <dl className="mt-4 grid gap-3 text-sm">
                        {[
                          ["Selected Model", "Logistic Regression with SMOTE"],
                          ["F-beta", "0.65"],
                          ["Recall", "0.81"],
                          ["Precision", "0.52"],
                          ["Optimized Classification Threshold", "0.33"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex items-start justify-between gap-6">
                            <dt className="text-zinc-400">{k}</dt>
                            <dd className="text-right font-medium text-zinc-50">
                              {v}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-4 text-xs leading-6 text-zinc-400">
                        Other models achieved higher recall, but the final model
                        was selected for the strongest balance of recall and
                        precision under the project objective.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <SectionTitle title="Visuals" />
                    {[ 
                      {
                        title: "P-Test / data validation",
                        src: "/images/projects/All_Star_P_Test.jpeg",
                        alt: "P-test data validation",
                      },
                      {
                        title: "Model comparisons",
                        src: "/images/projects/All_Star_Model_Comparisons.jpeg",
                        alt: "Model comparisons",
                      },
                      {
                        title: "Final predictions",
                        src: "/images/projects/All_Star_Predictions.jpeg",
                        alt: "Final predictions",
                      },
                    ].map((img) => (
                      <div
                        key={img.src}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      >
                        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                          <p className="text-sm font-medium text-zinc-50">
                            {img.title}
                          </p>
                          <p className="text-xs text-zinc-500">{img.src}</p>
                        </div>
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain bg-black"
                            sizes="(min-width: 1024px) 900px, 100vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {isNCAA ? (
                <>
                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src="/images/projects/Stuff+/Screenshot 2026-09-17 130011.png"
                          alt="NCAA pitcher evaluation dashboard"
                          fill
                          className="object-contain bg-black"
                          sizes="(min-width: 1024px) 900px, 100vw"
                          priority
                        />
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 [font-family:var(--font-mono)]">
                      Pitcher Report Dashboard — combines movement profiles,
                      Stuff+ grades, and pitch-cluster characteristics into a
                      single pitcher evaluation interface.
                    </p>

                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      The project was developed independently while working
                      directly with Baltimore Orioles Assistant General Manager
                      Sig Mejdal on methods for evaluating NCAA Division I
                      pitchers.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Key Work" />
                    <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
                      {[
                        "Large-Scale Data Pipeline: Built a repeatable workflow for more than 2 million TrackMan pitches, including ingestion, cleaning, validation, transformation, and database storage.",
                        "Data Quality: Resolved missing identifiers, inconsistent values, team mappings, and other issues required to create trustworthy model-ready data.",
                        "Feature Engineering: Created pitcher- and pitch-level features including rolling velocity measures, pitcher characteristics, count/context variables, and pitch-level run values.",
                        "Pitch Classification: Tested clustering methodologies using pitch velocity and movement characteristics and compared results against manual classifications and TrackMan's automated tagging.",
                        "Model Development: Developed Stuff+ and Location+ modeling workflows designed to evaluate pitch quality using physical pitch characteristics and game context.",
                        "Dashboard: Built an interactive pitcher-report interface that combines Stuff+ grades, movement profiles, pitch-cluster characteristics, and other evaluation metrics in one place.",
                      ].map((x) => (
                        <li key={x} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                          <span className="text-zinc-300">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Modeling Approach" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      The project was built iteratively rather than around a
                      single model. Pitch classifications were tested across
                      pitchers and compared against existing labels, while
                      Stuff+ and Location+ models were developed from
                      model-ready TrackMan features and pitch-level run value
                      outcomes. The objective was to create a system that could
                      be evaluated, adjusted, and expanded as additional NCAA
                      data became available.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Evaluating Pitch Classification" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      As part of the modeling workflow, I tested pitch-clustering
                      methods using velocity and movement characteristics and
                      evaluated how the resulting classifications compared with
                      both manually assigned pitch labels and TrackMan's
                      automated tagging. Rather than treating clustering output
                      as automatically correct, the comparison was used to
                      identify where classifications aligned, where methods
                      disagreed, and where the clustering methodology required
                      further refinement.
                    </p>

                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                      <div className="relative aspect-[16/9]">
                        <Image
                          src="/images/projects/Stuff+/Screenshot 2026-09-17 132335.png"
                          alt="Pitch classification comparison"
                          fill
                          className="object-contain bg-black"
                          sizes="(min-width: 1024px) 900px, 100vw"
                        />
                      </div>
                    </div>

                    <p className="text-xs text-zinc-500 [font-family:var(--font-mono)]">
                      Comparison of manual pitch classifications, Trackman's
                      automated tagging feature and my model-based clustering
                    </p>
                  </div>
                </>
              ) : null}

              {isFarmerBoys ? (
                <>
                  <div className="space-y-4">
                    <SectionTitle title="Key Work" />
                    <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
                      {[
                        "Model Library: Evaluated a broad set of statistical and machine-learning models, including ETS, ETS Damped, OLS variants, LightGBM, XGBoost, Random Forest, and Extra Trees.",
                        "Ensemble Optimization: Tested tens of thousands of weight combinations across finalist models to identify the strongest blended forecasts.",
                        "Rolling Validation: Used 40 rolling 13-week backtest windows instead of relying on a single holdout period, producing 520 out-of-sample predictions across a full fiscal year.",
                        "Feature Engineering: Built lag, rolling-average, momentum, trend, year-over-year, seasonal, and holiday features.",
                        "Separate Transaction Pipeline: Built a dedicated transaction model with a richer feature set because transaction behavior followed different patterns than sales.",
                        "Hybrid Transaction Forecast: Combined 80% from an independent transaction ensemble with 20% from a sales-derived estimate using projected average ticket to stabilize noisy transaction forecasts.",
                        "Seasonal Decomposition: Used OLS to separate recurring seasonal effects, long-term trend, and underlying baseline performance.",
                        "Self-Service Delivery: Helped deliver a Streamlit application so Farmer Boys could upload updated weekly data and automatically regenerate forecasts, decomposition outputs, charts, and downloadable Excel reports.",
                      ].map((x) => (
                        <li key={x} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                          <span className="text-zinc-300">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <p className="text-sm font-medium text-zinc-50">Results</p>
                      <dl className="mt-4 grid gap-3 text-sm">
                        {[
                          ["Sales", "MAPE 1.29% · R² 0.81"],
                          ["Transactions", "MAPE 1.44% · R² ~0.81"],
                          ["Validation", "40 rolling backtests · 520 out-of-sample predictions"],
                          ["Delivery", "Self-service Streamlit forecasting workflow"],
                        ].map(([k, v]) => (
                          <div key={k} className="flex items-start justify-between gap-6">
                            <dt className="text-zinc-400">{k}</dt>
                            <dd className="text-right font-medium text-zinc-50">
                              {v}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <p className="mt-4 text-xs leading-6 text-zinc-400">
                        The ensemble outperformed individual component models
                        for both sales and transactions; see the ensemble table
                        visuals below.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <SectionTitle title="Visuals" />
                    {[
                      {
                        title: "Dashboard",
                        src: "/images/projects/FB/FB_Dashboard.jpeg",
                        alt: "Farmer Boys Streamlit dashboard",
                      },
                      {
                        title: "Actual Sales vs Seasonality",
                        src: "/images/projects/FB/Actual Sales vs Seasonality.jpeg",
                        alt: "Actual sales vs seasonality",
                      },
                      {
                        title: "Sales Forecast vs Weighted Benchmark",
                        src: "/images/projects/FB/Sales Forecast vs Weighted Benchmark.jpeg",
                        alt: "Sales forecast vs weighted benchmark",
                      },
                      {
                        title: "Sales Forecast Table Results",
                        src: "/images/projects/FB/Sales Ensemble Table result.png",
                        alt: "Sales ensemble table",
                      },
                      {
                        title: "Transactions Forecast Table Results",
                        src: "/images/projects/FB/Transaction Ensemble Table.png",
                        alt: "Transaction ensemble table",
                      },
                    ].map((img) => (
                      <div
                        key={img.src}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      >
                        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
                          <p className="text-sm font-medium text-zinc-50">
                            {img.title}
                          </p>
                          <p className="text-xs text-zinc-500">{img.src}</p>
                        </div>
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain bg-black"
                            sizes="(min-width: 1024px) 900px, 100vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {isScouts ? (
                <>
                  <div className="space-y-4">
                    <SectionTitle title="Key Work" />
                    <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
                      {[
                        "Data Ingestion: Allows users to upload and combine multiple TrackMan CSV exports into one cleaned, analysis-ready dataset.",
                        "Batted-Ball Classification: Automatically categorizes balls in play into infield, outfield, or neither using distance, launch angle, and tagged hit type.",
                        "Manual Overrides: Allows users to correct classifications when automated rules do not accurately reflect a specific play.",
                        "Spray Charts: Converts batted-ball events into interactive infield and outfield spray visualizations.",
                        "Clustering / Epicenters: Uses cluster-based landing-zone targets to summarize where hitters most frequently make contact.",
                        "Defensive Positioning: Translates spray patterns into practical recommendations for depth, angle, and lateral positioning.",
                        "Scouting Reports: Generates hitter-specific reports for selected opponents.",
                        "Print-Ready Output: Produces clean scouting packets that can be distributed to coaches and players for game preparation.",
                      ].map((x) => (
                        <li key={x} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                          <span className="text-zinc-300">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <SectionTitle title="Reports" />
                    {[
                      {
                        title: "Outfield Report",
                        src: "/images/projects/scOUTs/Outfield Reports.png",
                        alt: "Outfield reports",
                      },
                      {
                        title: "Infield Report",
                        src: "/images/projects/scOUTs/Infield Reports.png",
                        alt: "Infield reports",
                      },
                    ].map((img) => (
                      <div
                        key={img.src}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                      >
                        <div className="border-b border-white/10 px-5 py-4">
                          <p className="text-sm font-medium text-zinc-50">
                            {img.title}
                          </p>
                        </div>
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-contain bg-black"
                            sizes="(min-width: 1024px) 900px, 100vw"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : null}

              {isDeviations ? (
                <>
                  <div className="space-y-4">
                    <SectionTitle title="Key Work" />
                    <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
                      {[
                        "Custom Date-Range Comparison: Lets users compare any two periods for an MLB pitcher.",
                        "Pitch-Level Statcast Processing: Pulls and processes pitch-by-pitch Statcast data for the selected ranges.",
                        "Change Detection: Compares release velocity, movement, release side, release height, arm angle, spin characteristics, and other pitch traits.",
                        "Z-Score Ranking: Standardizes changes and ranks the most unusual deviations so the most meaningful differences surface first.",
                        "Pitch Usage: Compares arsenal usage across ranges and shows percentage-point changes by pitch type.",
                        "Movement Visualization: Displays pitch-shape clusters for each range to make arsenal changes visually clear.",
                        "Full-Stack Delivery: Uses a Python/FastAPI backend with a Next.js/React frontend.",
                      ].map((x) => (
                        <li key={x} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                          <span className="text-zinc-300">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <SectionTitle title="Example Analyses" />

                    <div className="space-y-4">
                      <p className="text-sm font-medium text-zinc-50">
                        Cade Cavalli
                      </p>
                      <p className="text-sm leading-7 text-zinc-400">
                        This example compares a broader 2025 vs. 2026 period and
                        highlights substantial changes in release
                        characteristics and arsenal usage. The metrics table
                        demonstrates how the application ranks changes by
                        z-score and interpretation level.
                      </p>

                      {[ 
                        {
                          title: "2025 vs 2026 comparison",
                          src: "/images/projects/DEVIATIONS/Cade Cavalli 2025 v 2026.jpeg",
                          alt: "Cade Cavalli 2025 vs 2026 comparison",
                        },
                        {
                          title: "Ranked metrics (z-scores)",
                          src: "/images/projects/DEVIATIONS/Cade Cavalli Metrics.jpeg",
                          alt: "Cade Cavalli metrics ranked by z-score",
                        },
                      ].map((img) => (
                        <div
                          key={img.src}
                          className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                        >
                          <div className="border-b border-white/10 px-5 py-4">
                            <p className="text-sm font-medium text-zinc-50">
                              {img.title}
                            </p>
                          </div>
                          <div className="relative aspect-[16/9]">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-contain bg-black"
                              sizes="(min-width: 1024px) 900px, 100vw"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <p className="text-sm font-medium text-zinc-50">
                        Freddy Peralta
                      </p>
                      <p className="text-sm leading-7 text-zinc-400">
                        This example compares two shorter stretches and
                        surfaces more subtle changes in pitch velocity,
                        movement, and usage.
                      </p>

                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        <div className="border-b border-white/10 px-5 py-4">
                          <p className="text-sm font-medium text-zinc-50">
                            Comparison output
                          </p>
                        </div>
                        <div className="relative aspect-[16/9]">
                          <Image
                            src="/images/projects/DEVIATIONS/Freddy Peralta with Rays.jpeg"
                            alt="Freddy Peralta comparison"
                            fill
                            className="object-contain bg-black"
                            sizes="(min-width: 1024px) 900px, 100vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </>
              ) : null}

              {!isAllStar && !isFarmerBoys && !isScouts && !isDeviations && !isNCAA ? (
                <>
                  <div className="space-y-4">
                    <SectionTitle title="Overview" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.sections.overview}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Problem / Question" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.sections.problem}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Data" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.sections.data}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Approach" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.sections.approach}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Methods & Technology" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.sections.methods}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Results" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.sections.results}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Baseball / Business Application" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.sections.application}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Visuals" />
                    <p className="text-sm leading-7 text-zinc-400 sm:text-base">
                      {project.sections.visuals}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title="Key Takeaways" />
                    <ul className="space-y-2 text-sm text-zinc-300 sm:text-base">
                      {project.sections.takeaways.map((x) => (
                        <li key={x} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-white/40" />
                          <span className="text-zinc-300">{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : null}
            </div>

            <aside className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="relative aspect-square">
                  <Image
                    src={
                      isScouts
                        ? "/images/projects/scOUTs/scOUTs cover.png"
                        : project.image.src
                    }
                    alt={project.image.alt}
                    fill
                    className={
                      isFarmerBoys
                        ? "object-contain object-center bg-black"
                        : isScouts
                          ? "object-contain object-center bg-black"
                        : "object-cover"
                    }
                    sizes="(min-width: 1024px) 400px, 100vw"
                    priority
                  />
                </div>
                {hasLinks ? (
                  <div className="space-y-3 p-5">
                    <p className="text-sm font-medium text-zinc-50">Links</p>
                    <div className="space-y-2 text-sm">
                      {isAllStar && project.links?.reportPdf ? (
                        <a
                          href={project.links.reportPdf}
                          className="inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-50 transition hover:border-white/25 hover:bg-white/10"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Full Project Report
                        </a>
                      ) : null}
                      {isFarmerBoys && project.links?.reportPdf ? (
                        <a
                          href={project.links.reportPdf}
                          className="inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-50 transition hover:border-white/25 hover:bg-white/10"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Full Client Report
                        </a>
                      ) : null}
                      {project.links?.github ? (
                        <a
                          href={project.links.github}
                          className="block text-zinc-300 transition hover:text-zinc-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      ) : null}
                      {project.links?.external ? (
                        <a
                          href={project.links.external}
                          className="block text-zinc-300 transition hover:text-zinc-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          External
                        </a>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
