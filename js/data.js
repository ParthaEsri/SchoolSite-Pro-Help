window.SCHOOL_SITE_DOCS = [
  {
    "id": "home",
    "section": "Start here",
    "title": "Welcome to SchoolSite Pro",
    "summary": "SchoolSite Pro is the planning tool used to create student forecasts and attendance-area redistricting plans inside ArcGIS Pro.",
    "body": [
      ["Welcome", "SchoolSite Pro is a professional desktop GIS school-planning application. It extends ArcGIS Pro so planners can compare plans with GIS data, create forecasts, modify attendance areas, and perform analysis."],
      ["Get started", "Use the local documentation navigation to learn the interface, installation, licensing, data requirements, redistricting, forecasts, reports, and troubleshooting."],
      ["Main areas", "Get Started · Manage Data · Redistricting · Forecasts · Reports · Esri Business Analyst Services · FAQs · Release Notes"]
    ]
  },
  {
    "id": "get-started",
    "section": "Start here",
    "title": "Get Started",
    "summary": "Installation, system requirements, licensing, and the basic SchoolSite Pro interface.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/images/SchoolSite.png",
      "alt": "SchoolSite Pro ArcGIS Pro interface",
      "caption": "SchoolSite Pro runs as an extension inside ArcGIS Pro."
    },
    "body": [
      ["Overview", "SchoolSite Pro works as a configuration for ArcGIS Pro. ArcGIS Pro must be installed before SchoolSite Pro."],
      ["System requirements", "SchoolSite Pro follows ArcGIS Pro requirements for memory, CPU and graphics. It is intended for Windows 10/11 and is built for the current ArcGIS Pro release; previous minor 3.x releases may also work depending on the build."],
      ["Licensing", "SchoolSite Pro uses a single-user subscription licensing model. A license ID and activation password are required."],
      ["FAQ topics", "What data is needed? Where can data be obtained? How should data be organized? What are study areas?"]
    ]
  },
  {
    "id": "data-management",
    "section": "Manage data",
    "title": "Manage your data",
    "summary": "Prepare, create, import, and validate the district data used by SchoolSite Pro.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/dataManagement/validateData/datasetup.png",
      "alt": "SchoolSite Pro Data Setup panel",
      "caption": "Data Setup validates the datasets used by SchoolSite Pro."
    },
    "body": [
      ["Why data setup matters", "District data is the foundation of SchoolSite Pro. Data Setup checks compatibility before plans, forecasts, and reports are created."],
      ["Create your own data", "Supported documentation covers study areas, students, schools, tracts, assessor data, trustee areas and streets."],
      ["Import and validate", "Data Setup provides checks for redistricting, forecasts and SchoolSite Locator workflows."]
    ]
  },
  {
    "id": "organizing-data",
    "section": "Manage data",
    "title": "Organizing your data",
    "summary": "A practical structure for GIS data, school years, maps, forecasts, and redistricting plans.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/dataManagement/organizingData.PNG",
      "alt": "Recommended SchoolSite Pro data organization",
      "caption": "A school-year folder structure keeps source data and planning outputs organized."
    },
    "body": [
      ["Recommended organization", "Keep map data in Esri geodatabases and organize information by school year so older data can be archived and current data can be maintained consistently."],
      ["School year folders", "A typical structure separates GDB, Map_Docs, Layers and SchoolSite folders. SchoolSite can contain separate redistricting-plan and forecast folders."],
      ["Why it helps", "This makes it easier to copy yearly base datasets forward, maintain map documents, preserve historical plans and forecasts, and support backups on a shared network location."]
    ]
  },
  {
    "id": "study-areas",
    "section": "Manage data",
    "title": "What are Study Areas?",
    "summary": "Study Areas are the geographic building blocks used to collect data and model attendance boundaries.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/dataManagement/studyareas.png",
      "alt": "Study Area polygons in SchoolSite Pro",
      "caption": "Study Areas provide the geographic units used for student and boundary analysis."
    },
    "body": [
      ["Definition", "Study Areas follow logical neighborhood boundaries and are used for gathering student and planning data."],
      ["Attendance areas", "SchoolSite does not require separate datasets for every attendance area. Attendance assignments are stored in the Study Area dataset using unique field coding."],
      ["Format", "Existing Study Areas should use an Esri-supported format such as a geodatabase feature class, shapefile or coverage."]
    ]
  },
  {
    "id": "redistricting",
    "section": "Redistricting",
    "title": "SchoolSite Pro Redistricting Plans",
    "summary": "Create, compare, modify, analyze and share attendance-boundary scenarios.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/images/Assign.png",
      "alt": "SchoolSite Pro redistricting Assign ribbon",
      "caption": "The Assign ribbon contains the core redistricting controls."
    },
    "body": [
      ["Overview", "SchoolSite Pro can report demographic data, modify attendance areas, create updated maps and generate demographic/statistics reports."],
      ["Core functions", "Develop plans using Study Areas; save multiple plans; report students by grade, ethnicity, enrollment and other attributes; update classroom needs as boundaries change; create presentation maps; create plans from forecasts; and connect plans to ArcGIS Online."],
      ["Workflow", "Create a plan → assign Study Areas → inspect Statistics → adjust schools/boundaries → lock and share the finished plan."]
    ]
  },
  {
    "id": "redistricting-tour",
    "section": "Redistricting",
    "title": "A tour of the redistricting ribbon",
    "summary": "Use the Statistics Window and Assign ribbon to inspect and change attendance areas.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/redistricting/viewSchools.png",
      "alt": "SchoolSite Pro redistricting statistics window",
      "caption": "The redistricting tour begins in the Statistics Window."
    },
    "body": [
      ["The basics", "The following is a brief tour of the basics of Redistricting in SchoolSite Pro."],
      ["Choose Schools and Grades to View", "Before attempting to redistrict, it is helpful to view the current resident student population by grade for each school. The Statistics Window presents the data in a tabular format and can either remain floating or be docked like the Contents Pane. From the Redistricting Toolbar, choose Show Statistics in the Assign ribbon. Click Select All under Schools, choose Grade Distribution under Statistics Type, and select the grade ranges to display. The Current Statistics Window shows current statistics based on the boundaries shown."],
      ["Turn on Labels", "In the Contents Pane, right-click the Boundary Plan and choose Label. The map now displays the names of your school attendance areas."],
      ["Modifying Boundaries", "To simulate boundary changes between attendance areas, begin an assigning session from the Assign ribbon. Choose Assign Tools > Assign Study Areas to, select the target school, then use a selection method such as Select by Lasso to select the Study Areas to reassign. The selected Study Areas are highlighted in bright blue. Open the Statistics Window and choose the Proposed tab to see the effect of the reassignment, or the Selected tab to view only the selected Study Areas."],
      ["Commit the Modification", "If the changes are acceptable, click Assign Study Areas in the Assign Tools group. The statistics window and map will update. You can roll back changes before they are saved with Undo. To make the changes permanent, click Save Assignments, then stop the edit session with Stop from the Assign group. After saving or stopping, the edits can no longer be undone. The Current Residence tab reflects the update and the Original Residence tab shows the statistics from when the plan was first created."]
    ]
  },
  {
    "id": "create-plan",
    "section": "Redistricting",
    "title": "Create a new redistricting plan",
    "summary": "Three supported plan types: current residence, resident + current enrollment, and forecast-based planning.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/redistricting/createPlan/planImages/plan.png",
      "alt": "SchoolSite Pro Create Plan dialog",
      "caption": "Choose the plan type and enter a name to create a redistricting plan."
    },
    "body": [
      ["Start", "On the SchoolSite ribbon choose Create → Plan."],
      ["Current residence", "Shows students living in each attendance area. Reassigning a Study Area moves its resident students to the newly assigned school."],
      ["Resident + enrollment", "Shows both resident population and estimated enrollment, using rules based on grade, program, school type and current enrollment."],
      ["Forecast", "Uses projected resident students and is intended for longer-range facility and attendance-area planning."],
      ["Copying plans", "An existing plan can be copied from the ArcGIS Pro Catalog Maps folder and renamed to create a scenario variation."]
    ]
  },
  {
    "id": "plan-residence",
    "section": "Redistricting",
    "title": "Redistrict based on current resident students",
    "summary": "Create a plan using current resident student population by school type.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/redistricting/createPlan/planImages/residencePlan.png",
      "alt": "SchoolSite Pro residence-based plan settings",
      "caption": "A residence-based plan uses current resident students by school type."
    },
    "body": [
      ["Steps", "Choose Create → Plan, select the Residence tab, enter the plan name, choose the elementary/middle/intermediate/high boundary type and optionally include additional student types."],
      ["Processing", "Click Finish. Larger districts may take longer depending on Study Areas, student count, fields and computer performance."]
    ]
  },
  {
    "id": "plan-enrollment",
    "section": "Redistricting",
    "title": "Redistrict based on resident students and current enrollment",
    "summary": "Estimate where students are likely to attend after boundary changes using current enrollment rules.",
    "body": [
      ["Why it exists", "Resident-only plans are useful for long-term facility planning, but do not directly answer where students are likely to enroll after a boundary change."],
      ["Rules", "Students at their resident school move with the new residence boundary. Students already transferring generally continue at their current enrollment school. District-wide schools without attendance boundaries can remain unaffected by Study Area reassignment."],
      ["School changes", "Opening a school assigns resident students in the proposed boundary to the new school; closing a school returns students from the closed school to their school of residence, subject to exceptions."],
      ["Result", "The plan exposes both resident population and estimated enrollment totals, helping compare open-enrollment effects and facility usage."]
    ]
  },
  {
    "id": "plan-forecast",
    "section": "Redistricting",
    "title": "Redistrict based on a forecast",
    "summary": "Create a redistricting plan from an existing forecast.",
    "body": [
      ["Prerequisite", "Create the forecast first."],
      ["Steps", "Choose Create → Plan, select Forecast, enter the plan name, select the school boundary type and choose the existing forecast."],
      ["Use", "Forecast-based plans support long-term facility and attendance-area planning around future resident populations."]
    ]
  },
  {
    "id": "modify-plans",
    "section": "Redistricting",
    "title": "Redistrict by changing boundaries and schools",
    "summary": "Reassign Study Areas, add or close schools, and immediately see facility impacts.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/redistricting/modifyPlans/modifyImages/redistrictTab.png",
      "alt": "SchoolSite Pro redistricting plan tools",
      "caption": "Modify a plan from the redistricting tools and monitor boundary changes."
    },
    "body": [
      ["Boundary changes", "Plans can start from existing boundaries, closest school, capacity or a maximum number of students."],
      ["Study Areas", "Study Areas can be individually or collectively reassigned to balance student population and site capacities."],
      ["Schools", "Add a new school, add an existing school, close a school or reassign schools as part of scenario planning."],
      ["Live impact", "As boundaries change, classroom requirements and grade-level needs are updated so planners can see the facility impact of each scenario."]
    ]
  },
  {
    "id": "share-plan",
    "section": "Redistricting",
    "title": "Share your redistricting plan",
    "summary": "Export plan outputs and prepare results for stakeholders.",
    "body": [
      ["Share workflow", "A completed plan can be exported for mapping, statistics and downstream planning workflows."],
      ["Presentation", "Use the plan and statistics outputs to communicate proposed attendance areas and their student/capacity impacts."],
      ["Online", "SchoolSite Pro also supports connecting plans to ArcGIS Online for stakeholder viewing where enabled by the district workflow."]
    ]
  },
  {
    "id": "statistics",
    "section": "Redistricting",
    "title": "The Statistics Window",
    "summary": "Inspect student counts and attendance-area totals while developing a plan.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/redistricting/statistics/statImages/statsCurrent.png",
      "alt": "SchoolSite Pro Statistics Window",
      "caption": "Configure the Statistics Window to monitor plan totals while editing."
    },
    "body": [
      ["Current residence", "Shows student counts by residence before or during assignment changes."],
      ["Proposed residence", "Shows the effect of proposed Study Area assignments before the changes are committed."],
      ["Plan monitoring", "Use the statistics while assigning Study Areas to compare schools, grade ranges and student attributes."]
    ]
  },
  {
    "id": "stats-tabs",
    "section": "Redistricting",
    "title": "Statistics Window Tabs",
    "summary": "Different tabs expose different views of district student data.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/redistricting/statistics/statImages/statsProposed.png",
      "alt": "Proposed Residence tab in the Statistics Window",
      "caption": "The Proposed Residence tab previews the effect of pending assignments."
    },
    "body": [
      ["Current Residence", "Displays the number of students by residence and updates as assignments are changed."],
      ["Proposed Residence", "Displays the projected resident-enrollment changes before the assignment is committed."],
      ["Use", "Together these views make it easier to understand the immediate effect of a proposed boundary change."]
    ]
  },
  {
    "id": "forecasts",
    "section": "Forecasts",
    "title": "Student Forecasts",
    "summary": "Project resident and enrollment changes using birth rates, mobility, housing and historical transfer patterns.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/images/Forecasting.png",
      "alt": "SchoolSite Pro Forecasting ribbon",
      "caption": "Forecasting tools combine student, housing, and mobility factors."
    },
    "body": [
      ["Purpose", "SchoolSite can predict resident student population and enrollment changes using birth rates, student mobility and future housing information."],
      ["Key functions", "Locate potential school sites, determine capacity needs, analyze future boundaries, create projection scenarios, edit factors in a spreadsheet-like interface and generate 3/5/7/10-year projections."],
      ["Outputs", "Forecasts can be summarized by Study Area, attendance zone, subdistrict or district and by configurable grade ranges. Results can be displayed directly in ArcGIS Pro."],
      ["Methods", "Residential forecasts use factors such as births, mobility, student yield and housing. Enrollment forecasting also uses historical transfer patterns."]
    ]
  },
  {
    "id": "forecast-tour",
    "section": "Forecasts",
    "title": "A tour of the forecast ribbon",
    "summary": "Understand the forecasting ribbon, factor editing, reports and map display.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/forecasts/briefTour/images/tourForecastSetup.PNG",
      "alt": "SchoolSite Pro forecast setup",
      "caption": "The forecast tour introduces setup, reporting, and factor editing."
    },
    "body": [
      ["Forecasting workflow", "Create a forecast, modify factors, generate reports, inspect results and configure map appearance."],
      ["Factors", "Common factors include PK/K birth factors, mobility, Student Yield Factors, projected housing and build-out/maturation."],
      ["Reporting", "Forecast Reports support Study Area, existing attendance-area and district-summary views."]
    ]
  },
  {
    "id": "create-forecast",
    "section": "Forecasts",
    "title": "Create a new forecast",
    "summary": "Create a residential forecast with optional tract and assessor data.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/forecasts/createForecast/forecastImages/createForecast.png",
      "alt": "SchoolSite Pro Create Forecast dialog",
      "caption": "Create a forecast by selecting student types and a base date."
    },
    "body": [
      ["Start", "Choose Create → Forecast."],
      ["Student types", "Select the student types to include, such as Resident, Special Education, Independent Study, Charter and Other."],
      ["Base date", "Select the base forecast date."],
      ["Tract data", "Optional tract data describes planned residential development and phasing. It supports development/project summary reporting and future housing projections."],
      ["Assessor data", "Optional assessor data supports build-out/maturation information, housing-type analysis and existing dwelling-unit estimates."],
      ["Finish", "Click Finish to create the forecast. Forecast time depends on data volume and the fields included in the source datasets."]
    ]
  },
  {
    "id": "modify-factors",
    "section": "Forecasts",
    "title": "Modify forecast factors",
    "summary": "Adjust the variables that drive residential forecasting and housing projections.",
    "image": {
      "src": "https://raw.githubusercontent.com/dbutz/SchoolSite-Pro-Docs/main/forecasts/modifyingFactors/factorImages/pkFactors.png",
      "alt": "SchoolSite Pro forecast factor editor",
      "caption": "Forecast factors can be reviewed and adjusted before refreshing a forecast."
    },
    "body": [
      ["Birth factors", "PK and Kindergarten factors drive incoming student projections."],
      ["Mobility", "Mobility captures students moving into or out of the district from existing homes."],
      ["Student Yield Factors", "SYFs estimate students generated by projected residential units."],
      ["Projected housing", "Track housing developments, unit types, unit counts, phases and occupancy years."],
      ["Build-out", "Maturation/build-out factors estimate enrollment after development is fully occupied."],
      ["Distributed enrollment", "Enrollment distributions help allocate projected high-school students across grades."]
    ]
  },
  {
    "id": "forecast-report",
    "section": "Forecasts",
    "title": "Generate a forecast report",
    "summary": "Configure and export forecast results by geography, grades and projection years.",
    "body": [
      ["Setup", "Forecast Reports provides Setup and View tabs."],
      ["Criteria", "Choose what to display, which district/subdistrict, grades and grade ranges, and the number of projection years."],
      ["Geographies", "Reports can summarize by selected Study Areas, existing attendance areas or district/subdistrict summaries."],
      ["Optional data", "Maturation/build-out and historical student data can be included when available."]
    ]
  },
  {
    "id": "historical",
    "section": "Forecasts",
    "title": "Include historical student data in your report",
    "summary": "Include up to three years of historical data and choose a weighted mobility option.",
    "body": [
      ["Import", "In Data Setup, choose historical student data for one, two or three years ago."],
      ["Weighted mobility", "Options include no weight, weight the most recent year, or weight the least recent year."],
      ["Report", "In Forecast Reports, enable Display historical student data to add historical columns to the output."]
    ]
  },
  {
    "id": "enrollment",
    "section": "Forecasts",
    "title": "About Enrollment Forecasts",
    "summary": "Estimate future school enrollment for short-term staffing and budget planning.",
    "body": [
      ["Purpose", "Enrollment forecasts use current resident/enrollment information and historic mobility to estimate future enrollment at each school."],
      ["Schools with boundaries", "Future enrollment combines projected resident population with historical transfer patterns by grade."],
      ["Schools without boundaries", "Transfers for the lowest grade are estimated from recent history and subsequent grades use a cohort-survival approach."],
      ["Planning horizon", "Short-term enrollment forecasting can support staffing and budget decisions, while longer-range facilities planning is generally better based on resident population."]
    ]
  },

  {
    "id": "reports-overview",
    "section": "Reports",
    "title": "Reporting in SchoolSite Pro",
    "summary": "A map of every report type available across Data Setup, Redistricting, Forecasting and Analysis.",
    "body": [
      ["Where reports live", "Reports are spread across three ribbon locations: the Statistics/Info groups on the Assign contextual tab, the Forecast Reporting group on the Forecasting tab, and the Analysis Tools group on the main SchoolSite tab."],
      ["Report families", "Student & Demographic reports summarize who is where right now. Plan & Forecast reports summarize scenario and projection results. Program & Utilization reports summarize capacity and program placement."],
      ["Export formats", "Most reports can be exported to Microsoft Excel (.xlsx); forecast-oriented reports can also be exported to plain text (.txt) for quick review or import into other systems."]
    ]
  },
  {
    "id": "reports-student-demographic",
    "section": "Reports",
    "title": "Student & Demographic Reports",
    "summary": "Quick reports on selected students, and demographic characteristics of a selected area.",
    "body": [
      ["Student Reports", "Select students to report on based on the area that is selected on the map. Additional fields can be added to the quick report before it is generated."],
      ["Demographic Reports", "Generate a demographic report about the currently selected area. This report pulls current population, household and housing characteristics rather than SchoolSite's own student data."],
      ["Add additional fields", "The Student Reports pane includes an options menu to add extra fields to the quick report, letting planners tailor the output without leaving the workflow."]
    ]
  },
  {
    "id": "reports-plan-forecast",
    "section": "Reports",
    "title": "Plan & Forecast Reports",
    "summary": "Forecast Reports, Plan Summary and Plan Impact Summary outputs used to evaluate scenarios.",
    "body": [
      ["Forecast Reports", "Create a report of an open forecast. Summarize results by Study Area, existing attendance area, or district/subdistrict, and select the grade ranges to report on."],
      ["Plan Summary Report", "Combines forecasted resident student numbers with the proposed boundary changes in a plan to show how future students would be grouped into new proposed attendance areas. Requires a plan that is based on a forecast."],
      ["Plan Impact Summary", "Outputs two feature classes — impacted Study Areas and impacted students — showing a count of students within each grade range defined in the plan's statistics settings, based on the new boundary configuration compared to the original Study Area data."]
    ]
  },
  {
    "id": "reports-program-utilization",
    "section": "Reports",
    "title": "Program & Utilization Reports",
    "summary": "Program Summary Report, Utilization Report and the Automated Attendance Matrix.",
    "body": [
      ["Program Summary Report", "Summarizes school programs, their capacity, and their current location so planners can review program placement across the district at a glance."],
      ["Utilization Report", "Compares school capacity against current or projected enrollment. Completing Data Setup (Students, Schools, Study Areas) is required to enable this report."],
      ["Automated Attendance Matrix", "Builds an attendance matrix that shows how students move between resident and enrolled schools, and exports it directly to Excel. Recent builds add a CAPACITY column to this export."]
    ]
  },
  {
    "id": "reports-export-options",
    "section": "Reports",
    "title": "Exporting reports",
    "summary": "Export destinations and formats supported across SchoolSite Pro reports.",
    "body": [
      ["Forecast exports", "Forecast Reports can be exported to either plain text (.txt) or Microsoft Excel (.xlsx) from the Options menu on the report."],
      ["Student report exports", "Export Student Report writes an Excel file to the current Project's home directory summarizing the student data behind an open plan or forecast."],
      ["Statistics exports", "Export Statistics writes the open Statistics Window table to Excel; the Statistics Window must be open first."],
      ["Event log", "Export Event Log writes the project's event history to Excel in the Project's home directory — useful for troubleshooting or sending to technical support."]
    ]
  },

  {
    "id": "esri-overview",
    "section": "Esri Business Analyst Services",
    "title": "Esri demographic & location analysis services",
    "summary": "SchoolSite Pro's Analysis Tools connect to Esri's demographic, network and location-analysis services.",
    "body": [
      ["Why it matters", "Beyond a district's own student and boundary data, several Analysis Tools bring in Esri's live demographic and geoprocessing services so planners don't need separate GIS specialists to run this analysis."],
      ["What's included", "Demographic Reports pull current population and housing data for a selected area; Walk Zone Analysis builds distance or drive/walk-time service areas around schools; Program Placement (Location Allocation) solves for optimal facility placement; Data Enrichment appends forecast-driven student counts to tract and Study Area datasets."],
      ["Requirements", "These tools generally require an active ArcGIS Online organizational account with the appropriate service credits (for network/travel-time analysis and demographic content) in addition to a SchoolSite Pro license."]
    ]
  },
  {
    "id": "esri-demographic-reports",
    "section": "Esri Business Analyst Services",
    "title": "Demographic Reports",
    "summary": "Generate a demographic report about a selected area using current population and housing data.",
    "body": [
      ["What it does", "Generate a demographic report about the selected area on the map, summarizing population, households and other community characteristics rather than SchoolSite's own student roster."],
      ["When to use it", "Use Demographic Reports alongside Student Reports when a planning conversation needs broader community context — for example when evaluating a proposed boundary against the surrounding neighborhood's makeup."]
    ]
  },
  {
    "id": "esri-walkzone",
    "section": "Esri Business Analyst Services",
    "title": "Walk Zone Analysis",
    "summary": "Generate walk zone polygons around school points at any distance or travel time.",
    "body": [
      ["Purpose", "Generate walk zone polygons around school points at any distance or time (for example 1, 3, or 5 mile distances, or 5, 10, or 15 minute travel times) for use in district analysis."],
      ["What it determines", "Determine walk zone areas that can be accessed within a given distance or travel time from one or more schools that you specify."],
      ["Why it's useful", "Walk zone analysis helps visualize and measure student accessibility to their assigned campus and supports decisions about correct busing policy."]
    ]
  },
  {
    "id": "esri-location-allocation",
    "section": "Esri Business Analyst Services",
    "title": "Program Placement Analysis (Location Allocation)",
    "summary": "Target which facilities are closest to the greatest number of students using Esri's location-allocation solver.",
    "body": [
      ["Purpose", "Location Allocation is a type of geospatial analysis that helps a district determine the optimal placement of programs, teachers, or resources to most effectively meet the needs of the students who need them."],
      ["How it works", "The tool uses straight-line (\"as the crow flies\") Euclidean distances and the Maximize Capacitated Coverage problem type to identify optimal locations for critical resources, minimizing the direct distance from the students who need them."]
    ]
  },
  {
    "id": "esri-data-enrichment",
    "section": "Esri Business Analyst Services",
    "title": "Data Enrichment (Tract & Study Area Enrichment)",
    "summary": "Enrich tract and Study Area datasets with forecast-derived student counts.",
    "body": [
      ["Tract Enrichment", "Adds a series of new fields to the tract feature class to store estimated counts of how many students each housing project will generate, based on PK-12 student yield factors, stored in fields named Year1 through Year10 relative to a selected base date. It also adds fields representing units and students both within the ten-year forecast window and post-forecast."],
      ["Study Area Enrichment", "Creates two new feature classes in the project's home geodatabase: an enriched copy of the Study Area polygons with student counts by the specified grades, and a second, larger set of aggregated attendance-boundary polygons summarizing the same totals per school."],
      ["Current Study Areas vs. a Plan", "Choosing 'Current Study Areas' enriches using today's boundary configuration across up to four grade-range selections plus a district-wide (PK-12) version, merged into one feature class. Choosing a plan instead enriches using that plan's proposed boundary configuration for its defined grade level."]
    ]
  },

  {
    "id": "release-notes",
    "section": "Start here",
    "title": "Release Notes — Build 1.9.7",
    "summary": "Current build changes and recent feature history.",
    "body": [
      ["Build 1.9.7 — September 2026", "New Utilization Report; SYF reports from Data Setup; CAPACITY in automated attendance matrix exports; additional residential forecast charts; student-type availability based on imported data; faster Address Directory creation; updated Project Summary Report; excluded-school options for bulk Study Area reassignment; minor fixes and UI improvements."],
      ["Build 1.9.6 — September 2026", "New Utilization Report; SYF reports from Data Setup; CAPACITY in automated attendance matrix exports; additional residential forecast charts; student-type availability based on imported data; faster Address Directory creation; updated Project Summary Report; excluded-school options for bulk Study Area reassignment; minor fixes and UI improvements."],
      ["Build 1.9.4 — June 2026", "SYF automation, improved Statistics Window sorting/zoom, historical student validation, plan locking, default school Map Tips, rebuilt Study Area numbering, and more flexible forecast summaries."],
      ["Build 1.9.3 — January 2026", "Selected Study Area demographic reporting, broader Demographic Reports, and forecast/statistics fixes."],
      ["Build 1.9.2 — January 2026", "Introduced Walk Zone analysis and several directory/statistics fixes."],
      ["Build 1.9.0 — December 2025", "Introduced plan syncing, Student Attribute statistics, keyboard modifiers for Study Area selection, and enrollment forecast improvements."],
      ["Build 1.8.8/1.8.7", "Introduced automated attendance matrix, expanded student-type handling, data validation and data-enrichment improvements."],
      ["Earlier builds", "The historical release notes remain represented in this local guide so the new site can be published independently of the old documentation site."]
    ]
  },
  {
    "id": "faq-data",
    "section": "FAQ",
    "title": "What kind of data do I need?",
    "summary": "The core GIS and student datasets needed by SchoolSite Pro.",
    "body": [
      ["Core data", "Typical workflows use Study Areas, Schools and Students. Forecasting can additionally use historical students, tracts and assessor/parcel information."],
      ["Quality", "Use consistent field names/types, valid geometry and complete grade/school coding before importing data."]
    ]
  },
  {
    "id": "faq-obtain",
    "section": "FAQ",
    "title": "Where can I obtain data?",
    "summary": "Common public and commercial sources for street and GIS data.",
    "body": [
      ["Local sources", "City and county GIS departments are often useful sources for street data."],
      ["Free sources", "Potential sources include local city/county/state GIS, U.S. Census data and Esri maps/data available with an ArcGIS license."],
      ["Commercial", "Commercial street datasets may be licensed from providers such as TomTom or HERE. Data preparation services may also be available from specialist vendors."]
    ]
  },
  {
    "id": "faq-organize",
    "section": "FAQ",
    "title": "How should I organize my data?",
    "summary": "Use school-year folders, geodatabases and separate planning outputs for maintainability.",
    "body": [
      ["Best practice", "Store long-term map data in geodatabases rather than shapefiles where practical."],
      ["School year", "Create school-year folders and separate GDB, Map_Docs, Layers and SchoolSite content."],
      ["Backups", "A shared network location can support multiple users and normal backup practices."]
    ]
  }
];

window.SCHOOL_SITE_TOOLS = [
  { "name": "Data Setup", "category": "Data Setup", "desc": "Set up your SchoolSite project with the necessary feature classes: Study Areas, Schools, and Students.", "details": "Scans each dataset to confirm it conforms to the expected schema and reports Warnings (items you might want to correct) and Errors (items you must correct before continuing). Requires a map to be open." },
  { "name": "Reset Project Data", "category": "Data Setup", "desc": "Completely start your SchoolSite Pro project over by deleting the SchoolSite geodatabase.", "details": "This deletes all plans, forecasts, and imported data for the project, so use it only when you intend to rebuild from scratch." },
  { "name": "SYF Export", "category": "Data Setup", "desc": "Export Student Yield Factor reports directly from Data Setup.", "details": "Added in build 1.9.6/1.9.7 so SYF calculations can be reviewed as a spreadsheet before they're applied to a forecast." },
  { "name": "Create", "category": "Create & Manage", "desc": "Create a new plan, forecast, or street/address directory using SchoolSite Pro.", "details": "Creating a new SchoolSite item requires at least Schools, Study Areas, and Students feature classes to already be imported into the project via Data Setup." },
  { "name": "Open", "category": "Create & Manage", "desc": "Open an existing SchoolSite plan, forecast, or street/address directory in the project.", "details": "Available whenever one or more SchoolSite items already exist in the current project." },
  { "name": "Delete", "category": "Create & Manage", "desc": "Delete an existing SchoolSite plan, forecast, or street/address directory in the project.", "details": "Permanently removes the selected item; this cannot be undone once confirmed." },
  { "name": "Copy", "category": "Create & Manage", "desc": "Copy an existing SchoolSite plan, forecast, or street/address directory in the project.", "details": "A quick way to branch off a scenario variation without rebuilding a plan or forecast from scratch." },
  { "name": "Export Directories", "category": "Create & Manage", "desc": "Export your SchoolSite street or address directory to Microsoft Excel format.", "details": "Requires that a street or address directory has already been generated in the project." },
  { "name": "Address Directory", "category": "Create & Manage", "desc": "Create a new address directory table using provided spatial data inputs, making address information accessible and organized.", "details": "Requires Schools (point locations for each school) and Study Areas (with each area's own school assignments), plus either Address Points or a Parcel Polygon layer to associate addresses with specific areas." },
  { "name": "Street Directory", "category": "Create & Manage", "desc": "Create a new street directory table using provided spatial data inputs, making street information accessible and organized.", "details": "Requires Schools, Study Areas, and a Streets network with attributes indicating address ranges and street names." },
  { "name": "Start Assignment", "category": "Assign & Boundaries", "desc": "Start assigning Study Areas to different schools while SchoolSite tracks your changes.", "details": "Begins an editing session so that any reassignments can be reviewed and undone before they are saved." },
  { "name": "Target School", "category": "Assign & Boundaries", "desc": "Select the school's attendance area that you would like to assign Study Areas to.", "details": "Only enabled once an assignment session has been started." },
  { "name": "Assign Study Areas", "category": "Assign & Boundaries", "desc": "Assign the selected Study Areas to the target school's attendance area shown in the combo box.", "details": "Requires an active assignment session and at least one Study Area selected on the map." },
  { "name": "Save Assignments", "category": "Assign & Boundaries", "desc": "Commit the changes made to your attendance areas before stopping your assignment session.", "details": "Only enabled once one or more assignment edits have been made during the current session." },
  { "name": "Undo", "category": "Assign & Boundaries", "desc": "Undo your previous assignment.", "details": "Reverses the most recent Study Area reassignment made during the active session." },
  { "name": "Select by Rectangle", "category": "Assign & Boundaries", "desc": "Select Study Areas by clicking them or drawing a box around them.", "details": "One of the four selection tools available during an assignment session." },
  { "name": "Select by Polygon", "category": "Assign & Boundaries", "desc": "Select Study Areas by drawing a polygon around them.", "details": "Useful for irregularly shaped boundary edits that a rectangle can't capture cleanly." },
  { "name": "Select by Lasso", "category": "Assign & Boundaries", "desc": "Select Study Areas by drawing a freehand shape around them.", "details": "Ideal for quickly tracing along an existing boundary line." },
  { "name": "Select by Circle", "category": "Assign & Boundaries", "desc": "Select Study Areas by drawing a circle around them.", "details": "Handy for radius-based selections such as everything within a set distance of a point." },
  { "name": "Reassign Study Areas", "category": "Assign & Boundaries", "desc": "Reassign your Study Areas using different methods, like closest school, maximum capacity, or reverting to the plan's original assignment.", "details": "Build 1.9.6/1.9.7 adds the ability to exclude specific schools from a bulk reassignment run." },
  { "name": "Remove Unassigned Schools", "category": "Assign & Boundaries", "desc": "Remove any schools from this plan that do not have any Study Areas assigned to them.", "details": "Used to close a school once all of its Study Areas have been reassigned elsewhere. Not available during an active assignment session." },
  { "name": "Update Schools", "category": "Assign & Boundaries", "desc": "Add a new school or existing school to your plan.", "details": "Once added, you can assign Study Areas to it to create an attendance boundary for that new school." },
  { "name": "Plans to Sync", "category": "Assign & Boundaries", "desc": "Select plans (resident or forecast plans only, not enrollment) with the same grade type as the current plan to receive synced changes.", "details": "When Sync On Demand is enabled, Study Area school assignment changes made to the current plan are also applied to the selected plans. No changes sync unless plans are selected here." },
  { "name": "Identify", "category": "Assign & Boundaries", "desc": "Identify the Study Areas that you select on the map.", "details": "A redistricting plan must be open and active for this tool to work." },
  { "name": "Lock Assignments", "category": "Assign & Boundaries", "desc": "Lock in the current plan and make it read-only.", "details": "Once locked, the plan's output is considered final and no further assignment changes are possible." },
  { "name": "Number Study Areas", "category": "Assign & Boundaries", "desc": "Click a Study Area polygon to automatically assign the next available Study Area ID.", "details": "Only available when a map with a valid Study Area layer (containing an STDYAREA field) is active." },
  { "name": "Show Statistics", "category": "Assign & Boundaries", "desc": "Display and customize information about the students and attendance areas in a table format.", "details": "Use these statistics to monitor student numbers as Study Areas are assigned to schools." },
  { "name": "Plan Impact Summary", "category": "Assign & Boundaries", "desc": "Produce datasets showing the areas or students impacted by a new boundary configuration.", "details": "Creates two feature classes — impacted Study Areas and impacted students — with student counts by grade range as defined in the plan's Statistics settings." },
  { "name": "Plan Overlay", "category": "Appearance", "desc": "Overlay another plan's attendance area on top of your current plan for comparison.", "details": "Choose which plan's boundaries to display alongside the one you're currently editing." },
  { "name": "Label Areas", "category": "Appearance", "desc": "Display each attendance area's name on the map.", "details": "Toggle labeling on or off for the plan's attendance areas." },
  { "name": "Include Numbers", "category": "Appearance", "desc": "Display each attendance area's numbers, like capacity and percent capacity.", "details": "Requires Label Areas to be enabled first." },
  { "name": "Symbology Presets", "category": "Appearance", "desc": "Choose a preset icon or attendance-area symbology style for your plan.", "details": "Includes separate preset combo boxes for plan and attendance-area symbology." },
  { "name": "Export Plan", "category": "Share", "desc": "Export your attendance areas to a standalone feature layer.", "details": "Produces a shareable layer representing the plan's current boundary configuration." },
  { "name": "Export Statistics", "category": "Share", "desc": "Export your SchoolSite plan's statistics table in Excel format.", "details": "The Statistics Window needs to be open in order to export a statistics table." },
  { "name": "Export Plan as Study Areas", "category": "Share", "desc": "Export your current boundaries in Study Area format.", "details": "Useful for feeding a finalized plan's boundaries back into future Data Setup imports." },
  { "name": "Show Plan Comments", "category": "Share", "desc": "Show comments recorded against the current plan.", "details": "Comments are a lightweight way to track planning notes alongside a plan." },
  { "name": "Publish", "category": "Share", "desc": "Publish your SchoolSite plan to ArcGIS Online.", "details": "Requires ArcGIS Online sharing to be configured for the organization." },
  { "name": "Export Event Log", "category": "Share", "desc": "Export the event log to an Excel file in this Project's home directory.", "details": "Useful for further analysis or for emailing to technical support when troubleshooting an issue." },
  { "name": "Forecast Reports", "category": "Reports", "desc": "Create a report of an open forecast.", "details": "Summarize based on Study Areas, existing attendance areas, or district/subdistrict, and select the grade ranges you want to report on." },
  { "name": "Refresh Forecast", "category": "Forecasting", "desc": "Reapply a forecast after one or more factors have been modified.", "details": "Enabled whenever a factor has changed and the forecast is out of sync with it; disabled once the forecast is up to date." },
  { "name": "Lock Factors", "category": "Forecasting", "desc": "Lock in the current factors and make this forecast read-only.", "details": "Once locked, the forecast report is considered final and no further changes to the factors are possible." },
  { "name": "Enrollment Forecast", "category": "Forecasting", "desc": "Estimate future school enrollment to help evaluate staffing and facility needs.", "details": "Requires at least two years of historical student data, imported through Data Setup, before it can be generated. Supports both the Transfer Pattern (cohort-survival) method and the Rate of Change method." },
  { "name": "PK Factors", "category": "Forecasting", "desc": "Modify your district's pre-kindergarten birth factors.", "details": "PK factors play an important role in the forecast model, determining the number of incoming pre-kindergarten students." },
  { "name": "K Factors", "category": "Forecasting", "desc": "Modify your district's kindergarten birth factors.", "details": "Kindergarten factors, alongside PK factors, drive the projected number of incoming kindergarten students each year." },
  { "name": "Distributed Enrollment", "category": "Forecasting", "desc": "Distribute the forecasted number of students at maturity across grade levels using weighted factors.", "details": "Elementary grades K-6 distribute evenly at 0.14285 and intermediate grades 7-8 at 0.5 (fixed). High school grades 9-12 can be weighted, but must total 1.00 — by default each is 0.25." },
  { "name": "Mobility Factors", "category": "Forecasting", "desc": "Model the net effect of student migration into and out of the district from existing homes.", "details": "Accounts for housing resales, renter migration, private school transitions, and high school drop-outs. With at least four consecutive years of geocoded student data, factors can be calculated down to the Study Area level." },
  { "name": "Student Yield Factors", "category": "Forecasting", "desc": "Estimate the number of students generated by new housing units built within the last five years.", "details": "For example, 50 students living in 100 units built in a five-year window yields an SYF of 0.5; applying that SYF to 200 new units generates 100 forecasted students." },
  { "name": "Projected Housing Units", "category": "Forecasting", "desc": "Track housing developments, unit types, unit counts, phases and occupancy years.", "details": "Supports up to ten phases of development per tract, used with Student Yield Factors to estimate students added from new construction." },
  { "name": "Student Counts", "category": "Forecasting", "desc": "Review and, if needed, manually adjust the number of current students by grade level for each Study Area.", "details": "The table is automatically filled from the geocoded student dataset specified in the projection wizard; manual edits are rare but useful when students were entered late and missed geocoding." },
  { "name": "Build-out Yield Factors", "category": "Forecasting", "desc": "Estimate how many students will be present once all development in a Study Area is finished.", "details": "Maturation Student Yield Factors are calculated regardless of construction year and applied to year 12 in the projected housing table, using geocoded student and tax-assessor housing data." },
  { "name": "Forecast Appearance", "category": "Appearance", "desc": "Change the map display appearance of an open forecast.", "details": "Controls symbology used to visualize forecast results on the map." },
  { "name": "Show Forecast Comments", "category": "Share", "desc": "Show comments recorded against the current forecast.", "details": "Mirrors Show Plan Comments, but scoped to a forecast." },
  { "name": "Identify Forecast", "category": "Forecasting", "desc": "Identify the forecast Study Areas that you select on the map.", "details": "A redistricting forecast must be open and active for this tool to work." },
  { "name": "Student Reports", "category": "Reports", "desc": "Select students to report on based on the area that is selected.", "details": "Additional fields can be added to the quick report from the Options menu without leaving the workflow." },
  { "name": "Demographic Reports", "category": "Esri Services", "desc": "Generate a demographic report about the selected area.", "details": "Pulls current population, household and housing data for the selected area using Esri demographic services." },
  { "name": "Walk Zone Analysis", "category": "Esri Services", "desc": "Generate walk zone polygons around school points at any distance (e.g. 1, 3, 5 mile distances).", "details": "Determine areas accessible within a given distance or travel time from one or more schools, helping visualize student accessibility and inform busing policy." },
  { "name": "Program Placement Analysis", "category": "Esri Services", "desc": "Target which facilities are closest to the greatest number of students.", "details": "Uses Euclidean ('as the crow flies') distance and the Maximize Capacitated Coverage problem type to identify optimal placement for critical resources." },
  { "name": "Data Enrichment", "category": "Esri Services", "desc": "Enrich existing tract and Study Area datasets with additional data based on a forecast.", "details": "Tract enrichment adds Year1–Year10 forecasted student-count fields; Study Area enrichment creates enriched Study Area and aggregated attendance-boundary feature classes for the grade ranges defined in the forecast." },
  { "name": "Export Event Log", "category": "Share", "desc": "Export the event log to an Excel file in this Project's home directory for further analysis or to email to tech support.", "details": "Duplicate entry point available from both the Analysis Tools group and the Share group." },
  { "name": "Geocode Students", "category": "Analysis Tools", "desc": "Upload student address information and map them.", "details": "Currently in beta; requires the beta tools condition to be enabled." },
  { "name": "Review / Rematch", "category": "Analysis Tools", "desc": "Review and correct your geocoded points to check for accuracy.", "details": "Currently in beta; requires the beta tools condition to be enabled." },
  { "name": "Import Programs", "category": "School Programs", "desc": "Browse for an Excel spreadsheet and import program data into a new table.", "details": "The fastest way to bring an existing program roster into a plan in bulk." },
  { "name": "Add Programs", "category": "School Programs", "desc": "Open a panel to enter program details including name, capacity, and current location.", "details": "Once added, the tool automatically updates school capacities based on the new program." },
  { "name": "Delete Programs", "category": "School Programs", "desc": "Delete a program from a school.", "details": "After deletion, school capacity is updated accordingly." },
  { "name": "Reassign Program", "category": "School Programs", "desc": "Edit a program, including moving it to another school.", "details": "Opens an edit panel scoped to the selected program." },
  { "name": "Program Summary Report", "category": "Reports", "desc": "Generate the program summary report.", "details": "Summarizes programs, capacity, and current school placement across the district." },
  { "name": "Automated Attendance Matrix", "category": "Reports", "desc": "Generate the attendance matrix.", "details": "Builds a matrix of resident vs. enrolled school relationships and exports it to Excel; recent builds add a CAPACITY column." },
  { "name": "Utilization Report", "category": "Reports", "desc": "Generate the school utilization report.", "details": "Compares school capacity with current or projected enrollment. Completing Data Setup (Students, Schools, Study Areas) is required to enable this report." },
  { "name": "Project Summary Report", "category": "Reports", "desc": "Generate a district-level project summary.", "details": "Rolls up plan, forecast and program information into a single summary for the project." },
  { "name": "Plan Summary Report", "category": "Reports", "desc": "Summarize forecasted resident students grouped into the plan's proposed attendance areas.", "details": "Combines forecasted resident student numbers with a plan's proposed boundary changes. You must be using a plan based on a forecast to create this report." },
  { "name": "Export Student Report", "category": "Reports", "desc": "Export the student summary report to an Excel file stored in this Project's home directory.", "details": "Summarizes the student data used in the currently open plan or forecast." }
];