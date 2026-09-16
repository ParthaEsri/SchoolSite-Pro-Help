window.SCHOOL_SITE_DOCS = [
  {
    "id": "home",
    "section": "Start here",
    "title": "Welcome to SchoolSite Pro",
    "summary": "SchoolSite Pro is the planning tool used to create student forecasts and attendance-area redistricting plans inside ArcGIS Pro.",
    "body": [
      [
        "Welcome",
        "SchoolSite Pro is a professional desktop GIS school-planning application. It extends ArcGIS Pro so planners can compare plans with GIS data, create forecasts, modify attendance areas, and perform analysis."
      ],
      [
        "Get started",
        "Use the local documentation navigation to learn the interface, installation, licensing, data requirements, redistricting, forecasts, reports, and troubleshooting."
      ],
      [
        "Main areas",
        "Get Started · Manage Data · Redistricting · Forecasts · FAQs · Release Notes"
      ]
    ]
  },
  {
    "id": "get-started",
    "section": "Start here",
    "title": "Get Started",
    "summary": "Installation, system requirements, licensing, and the basic SchoolSite Pro interface.",
    "body": [
      [
        "Overview",
        "SchoolSite Pro works as a configuration for ArcGIS Pro. ArcGIS Pro must be installed before SchoolSite Pro."
      ],
      [
        "System requirements",
        "SchoolSite Pro follows ArcGIS Pro requirements for memory, CPU and graphics. It is intended for Windows 10/11 and is built for the current ArcGIS Pro release; previous minor 3.x releases may also work depending on the build."
      ],
      [
        "Licensing",
        "SchoolSite Pro uses a single-user subscription licensing model. A license ID and activation password are required."
      ],
      [
        "FAQ topics",
        "What data is needed? Where can data be obtained? How should data be organized? What are study areas?"
      ]
    ]
  },
  {
    "id": "data-management",
    "section": "Manage data",
    "title": "Manage your data",
    "summary": "Prepare, create, import, and validate the district data used by SchoolSite Pro.",
    "body": [
      [
        "Why data setup matters",
        "District data is the foundation of SchoolSite Pro. Data Setup checks compatibility before plans, forecasts, and reports are created."
      ],
      [
        "Create your own data",
        "Supported documentation covers study areas, students, schools, tracts, assessor data, trustee areas and streets."
      ],
      [
        "Import and validate",
        "Data Setup provides checks for redistricting, forecasts and SchoolSite Locator workflows."
      ]
    ]
  },
  {
    "id": "organizing-data",
    "section": "Manage data",
    "title": "Organizing your data",
    "summary": "A practical structure for GIS data, school years, maps, forecasts, and redistricting plans.",
    "body": [
      [
        "Recommended organization",
        "Keep map data in Esri geodatabases and organize information by school year so older data can be archived and current data can be maintained consistently."
      ],
      [
        "School year folders",
        "A typical structure separates GDB, Map_Docs, Layers and SchoolSite folders. SchoolSite can contain separate redistricting-plan and forecast folders."
      ],
      [
        "Why it helps",
        "This makes it easier to copy yearly base datasets forward, maintain map documents, preserve historical plans and forecasts, and support backups on a shared network location."
      ]
    ]
  },
  {
    "id": "study-areas",
    "section": "Manage data",
    "title": "What are Study Areas?",
    "summary": "Study Areas are the geographic building blocks used to collect data and model attendance boundaries.",
    "body": [
      [
        "Definition",
        "Study Areas follow logical neighborhood boundaries and are used for gathering student and planning data."
      ],
      [
        "Attendance areas",
        "SchoolSite does not require separate datasets for every attendance area. Attendance assignments are stored in the Study Area dataset using unique field coding."
      ],
      [
        "Format",
        "Existing Study Areas should use an Esri-supported format such as a geodatabase feature class, shapefile or coverage."
      ]
    ]
  },
  {
    "id": "redistricting",
    "section": "Redistricting",
    "title": "SchoolSite Pro Redistricting Plans",
    "summary": "Create, compare, modify, analyze and share attendance-boundary scenarios.",
    "body": [
      [
        "Overview",
        "SchoolSite Pro can report demographic data, modify attendance areas, create updated maps and generate demographic/statistics reports."
      ],
      [
        "Core functions",
        "Develop plans using Study Areas; save multiple plans; report students by grade, ethnicity, enrollment and other attributes; update classroom needs as boundaries change; create presentation maps; create plans from forecasts; and connect plans to ArcGIS Online."
      ],
      [
        "Workflow",
        "Create a plan → assign Study Areas → inspect Statistics → adjust schools/boundaries → lock and share the finished plan."
      ]
    ]
  },
  {
    "id": "redistricting-tour",
    "section": "Redistricting",
    "title": "A tour of the redistricting ribbon",
    "summary": "Use the Statistics Window and Assign ribbon to inspect and change attendance areas.",
    "body": [
      [
        "Statistics",
        "The Statistics Window can be floating or docked. Use Show Statistics from the Assign ribbon."
      ],
      [
        "Typical workflow",
        "Select schools, choose Grade Distribution, select the required grade ranges, then inspect current and proposed residence values while working on a plan."
      ],
      [
        "Assignment",
        "Use selection tools and assignment commands to move Study Areas to a target school and monitor the resulting student and capacity totals."
      ]
    ]
  },
  {
    "id": "create-plan",
    "section": "Redistricting",
    "title": "Create a new redistricting plan",
    "summary": "Three supported plan types: current residence, resident + current enrollment, and forecast-based planning.",
    "body": [
      [
        "Start",
        "On the SchoolSite ribbon choose Create → Plan."
      ],
      [
        "Current residence",
        "Shows students living in each attendance area. Reassigning a Study Area moves its resident students to the newly assigned school."
      ],
      [
        "Resident + enrollment",
        "Shows both resident population and estimated enrollment, using rules based on grade, program, school type and current enrollment."
      ],
      [
        "Forecast",
        "Uses projected resident students and is intended for longer-range facility and attendance-area planning."
      ],
      [
        "Copying plans",
        "An existing plan can be copied from the ArcGIS Pro Catalog Maps folder and renamed to create a scenario variation."
      ]
    ]
  },
  {
    "id": "plan-residence",
    "section": "Redistricting",
    "title": "Redistrict based on current resident students",
    "summary": "Create a plan using current resident student population by school type.",
    "body": [
      [
        "Steps",
        "Choose Create → Plan, select the Residence tab, enter the plan name, choose the elementary/middle/intermediate/high boundary type and optionally include additional student types."
      ],
      [
        "Processing",
        "Click Finish. Larger districts may take longer depending on Study Areas, student count, fields and computer performance."
      ]
    ]
  },
  {
    "id": "plan-enrollment",
    "section": "Redistricting",
    "title": "Redistrict based on resident students and current enrollment",
    "summary": "Estimate where students are likely to attend after boundary changes using current enrollment rules.",
    "body": [
      [
        "Why it exists",
        "Resident-only plans are useful for long-term facility planning, but do not directly answer where students are likely to enroll after a boundary change."
      ],
      [
        "Rules",
        "Students at their resident school move with the new residence boundary. Students already transferring generally continue at their current enrollment school. District-wide schools without attendance boundaries can remain unaffected by Study Area reassignment."
      ],
      [
        "School changes",
        "Opening a school assigns resident students in the proposed boundary to the new school; closing a school returns students from the closed school to their school of residence, subject to exceptions."
      ],
      [
        "Result",
        "The plan exposes both resident population and estimated enrollment totals, helping compare open-enrollment effects and facility usage."
      ]
    ]
  },
  {
    "id": "plan-forecast",
    "section": "Redistricting",
    "title": "Redistrict based on a forecast",
    "summary": "Create a redistricting plan from an existing forecast.",
    "body": [
      [
        "Prerequisite",
        "Create the forecast first."
      ],
      [
        "Steps",
        "Choose Create → Plan, select Forecast, enter the plan name, select the school boundary type and choose the existing forecast."
      ],
      [
        "Use",
        "Forecast-based plans support long-term facility and attendance-area planning around future resident populations."
      ]
    ]
  },
  {
    "id": "modify-plans",
    "section": "Redistricting",
    "title": "Redistrict by changing boundaries and schools",
    "summary": "Reassign Study Areas, add or close schools, and immediately see facility impacts.",
    "body": [
      [
        "Boundary changes",
        "Plans can start from existing boundaries, closest school, capacity or a maximum number of students."
      ],
      [
        "Study Areas",
        "Study Areas can be individually or collectively reassigned to balance student population and site capacities."
      ],
      [
        "Schools",
        "Add a new school, add an existing school, close a school or reassign schools as part of scenario planning."
      ],
      [
        "Live impact",
        "As boundaries change, classroom requirements and grade-level needs are updated so planners can see the facility impact of each scenario."
      ]
    ]
  },
  {
    "id": "share-plan",
    "section": "Redistricting",
    "title": "Share your redistricting plan",
    "summary": "Export plan outputs and prepare results for stakeholders.",
    "body": [
      [
        "Share workflow",
        "A completed plan can be exported for mapping, statistics and downstream planning workflows."
      ],
      [
        "Presentation",
        "Use the plan and statistics outputs to communicate proposed attendance areas and their student/capacity impacts."
      ],
      [
        "Online",
        "SchoolSite Pro also supports connecting plans to ArcGIS Online for stakeholder viewing where enabled by the district workflow."
      ]
    ]
  },
  {
    "id": "statistics",
    "section": "Redistricting",
    "title": "The Statistics Window",
    "summary": "Inspect student counts and attendance-area totals while developing a plan.",
    "body": [
      [
        "Current residence",
        "Shows student counts by residence before or during assignment changes."
      ],
      [
        "Proposed residence",
        "Shows the effect of proposed Study Area assignments before the changes are committed."
      ],
      [
        "Plan monitoring",
        "Use the statistics while assigning Study Areas to compare schools, grade ranges and student attributes."
      ]
    ]
  },
  {
    "id": "stats-tabs",
    "section": "Redistricting",
    "title": "Statistics Window Tabs",
    "summary": "Different tabs expose different views of district student data.",
    "body": [
      [
        "Current Residence",
        "Displays the number of students by residence and updates as assignments are changed."
      ],
      [
        "Proposed Residence",
        "Displays the projected resident-enrollment changes before the assignment is committed."
      ],
      [
        "Use",
        "Together these views make it easier to understand the immediate effect of a proposed boundary change."
      ]
    ]
  },
  {
    "id": "forecasts",
    "section": "Forecasts",
    "title": "Student Forecasts",
    "summary": "Project resident and enrollment changes using birth rates, mobility, housing and historical transfer patterns.",
    "body": [
      [
        "Purpose",
        "SchoolSite can predict resident student population and enrollment changes using birth rates, student mobility and future housing information."
      ],
      [
        "Key functions",
        "Locate potential school sites, determine capacity needs, analyze future boundaries, create projection scenarios, edit factors in a spreadsheet-like interface and generate 3/5/7/10-year projections."
      ],
      [
        "Outputs",
        "Forecasts can be summarized by Study Area, attendance zone, subdistrict or district and by configurable grade ranges. Results can be displayed directly in ArcGIS Pro."
      ],
      [
        "Methods",
        "Residential forecasts use factors such as births, mobility, student yield and housing. Enrollment forecasting also uses historical transfer patterns."
      ]
    ]
  },
  {
    "id": "forecast-tour",
    "section": "Forecasts",
    "title": "A tour of the forecast ribbon",
    "summary": "Understand the forecasting ribbon, factor editing, reports and map display.",
    "body": [
      [
        "Forecasting workflow",
        "Create a forecast, modify factors, generate reports, inspect results and configure map appearance."
      ],
      [
        "Factors",
        "Common factors include PK/K birth factors, mobility, Student Yield Factors, projected housing and build-out/maturation."
      ],
      [
        "Reporting",
        "Forecast Reports support Study Area, existing attendance-area and district-summary views."
      ]
    ]
  },
  {
    "id": "create-forecast",
    "section": "Forecasts",
    "title": "Create a new forecast",
    "summary": "Create a residential forecast with optional tract and assessor data.",
    "body": [
      [
        "Start",
        "Choose Create → Forecast."
      ],
      [
        "Student types",
        "Select the student types to include, such as Resident, Special Education, Independent Study, Charter and Other."
      ],
      [
        "Base date",
        "Select the base forecast date."
      ],
      [
        "Tract data",
        "Optional tract data describes planned residential development and phasing. It supports development/project summary reporting and future housing projections."
      ],
      [
        "Assessor data",
        "Optional assessor data supports build-out/maturation information, housing-type analysis and existing dwelling-unit estimates."
      ],
      [
        "Finish",
        "Click Finish to create the forecast. Forecast time depends on data volume and the fields included in the source datasets."
      ]
    ]
  },
  {
    "id": "modify-factors",
    "section": "Forecasts",
    "title": "Modify forecast factors",
    "summary": "Adjust the variables that drive residential forecasting and housing projections.",
    "body": [
      [
        "Birth factors",
        "PK and Kindergarten factors drive incoming student projections."
      ],
      [
        "Mobility",
        "Mobility captures students moving into or out of the district from existing homes."
      ],
      [
        "Student Yield Factors",
        "SYFs estimate students generated by projected residential units."
      ],
      [
        "Projected housing",
        "Track housing developments, unit types, unit counts, phases and occupancy years."
      ],
      [
        "Build-out",
        "Maturation/build-out factors estimate enrollment after development is fully occupied."
      ],
      [
        "Distributed enrollment",
        "Enrollment distributions help allocate projected high-school students across grades."
      ]
    ]
  },
  {
    "id": "forecast-report",
    "section": "Forecasts",
    "title": "Generate a forecast report",
    "summary": "Configure and export forecast results by geography, grades and projection years.",
    "body": [
      [
        "Setup",
        "Forecast Reports provides Setup and View tabs."
      ],
      [
        "Criteria",
        "Choose what to display, which district/subdistrict, grades and grade ranges, and the number of projection years."
      ],
      [
        "Geographies",
        "Reports can summarize by selected Study Areas, existing attendance areas or district/subdistrict summaries."
      ],
      [
        "Optional data",
        "Maturation/build-out and historical student data can be included when available."
      ]
    ]
  },
  {
    "id": "historical",
    "section": "Forecasts",
    "title": "Include historical student data in your report",
    "summary": "Include up to three years of historical data and choose a weighted mobility option.",
    "body": [
      [
        "Import",
        "In Data Setup, choose historical student data for one, two or three years ago."
      ],
      [
        "Weighted mobility",
        "Options include no weight, weight the most recent year, or weight the least recent year."
      ],
      [
        "Report",
        "In Forecast Reports, enable Display historical student data to add historical columns to the output."
      ]
    ]
  },
  {
    "id": "enrollment",
    "section": "Forecasts",
    "title": "About Enrollment Forecasts",
    "summary": "Estimate future school enrollment for short-term staffing and budget planning.",
    "body": [
      [
        "Purpose",
        "Enrollment forecasts use current resident/enrollment information and historic mobility to estimate future enrollment at each school."
      ],
      [
        "Schools with boundaries",
        "Future enrollment combines projected resident population with historical transfer patterns by grade."
      ],
      [
        "Schools without boundaries",
        "Transfers for the lowest grade are estimated from recent history and subsequent grades use a cohort-survival approach."
      ],
      [
        "Planning horizon",
        "Short-term enrollment forecasting can support staffing and budget decisions, while longer-range facilities planning is generally better based on resident population."
      ]
    ]
  },
  {
    "id": "release-notes",
    "section": "Start here",
    "title": "Release Notes — Build 1.9.7",
    "summary": "Current build changes and recent feature history.",
    "body": [
      [
        "Build 1.9.7 — September 2026",
        "New Utilization Report; SYF reports from Data Setup; CAPACITY in automated attendance matrix exports; additional residential forecast charts; student-type availability based on imported data; faster Address Directory creation; updated Project Summary Report; excluded-school options for bulk Study Area reassignment; minor fixes and UI improvements."
      ],
      [
        "Build 1.9.6 — September 2026",
        "New Utilization Report; SYF reports from Data Setup; CAPACITY in automated attendance matrix exports; additional residential forecast charts; student-type availability based on imported data; faster Address Directory creation; updated Project Summary Report; excluded-school options for bulk Study Area reassignment; minor fixes and UI improvements."
      ],
      [
        "Build 1.9.4 — June 2026",
        "SYF automation, improved Statistics Window sorting/zoom, historical student validation, plan locking, default school Map Tips, rebuilt Study Area numbering, and more flexible forecast summaries."
      ],
      [
        "Build 1.9.3 — January 2026",
        "Selected Study Area demographic reporting, broader Demographic Reports, and forecast/statistics fixes."
      ],
      [
        "Build 1.9.2 — January 2026",
        "Introduced Walk Zone analysis and several directory/statistics fixes."
      ],
      [
        "Build 1.9.0 — December 2025",
        "Introduced plan syncing, Student Attribute statistics, keyboard modifiers for Study Area selection, and enrollment forecast improvements."
      ],
      [
        "Build 1.8.8/1.8.7",
        "Introduced automated attendance matrix, expanded student-type handling, data validation and data-enrichment improvements."
      ],
      [
        "Earlier builds",
        "The historical release notes remain represented in this local guide so the new site can be published independently of the old documentation site."
      ]
    ]
  },
  {
    "id": "faq-data",
    "section": "FAQ",
    "title": "What kind of data do I need?",
    "summary": "The core GIS and student datasets needed by SchoolSite Pro.",
    "body": [
      [
        "Core data",
        "Typical workflows use Study Areas, Schools and Students. Forecasting can additionally use historical students, tracts and assessor/parcel information."
      ],
      [
        "Quality",
        "Use consistent field names/types, valid geometry and complete grade/school coding before importing data."
      ]
    ]
  },
  {
    "id": "faq-obtain",
    "section": "FAQ",
    "title": "Where can I obtain data?",
    "summary": "Common public and commercial sources for street and GIS data.",
    "body": [
      [
        "Local sources",
        "City and county GIS departments are often useful sources for street data."
      ],
      [
        "Free sources",
        "Potential sources include local city/county/state GIS, U.S. Census data and Esri maps/data available with an ArcGIS license."
      ],
      [
        "Commercial",
        "Commercial street datasets may be licensed from providers such as TomTom or HERE. Data preparation services may also be available from specialist vendors."
      ]
    ]
  },
  {
    "id": "faq-organize",
    "section": "FAQ",
    "title": "How should I organize my data?",
    "summary": "Use school-year folders, geodatabases and separate planning outputs for maintainability.",
    "body": [
      [
        "Best practice",
        "Store long-term map data in geodatabases rather than shapefiles where practical."
      ],
      [
        "School year",
        "Create school-year folders and separate GDB, Map_Docs, Layers and SchoolSite content."
      ],
      [
        "Backups",
        "A shared network location can support multiple users and normal backup practices."
      ]
    ]
  }
];
window.SCHOOL_SITE_TOOLS = [
  {
    "name": "Data Setup",
    "desc": "Import study areas, schools, and students; validate compatibility before downstream workflows."
  },
  {
    "name": "Reset Project Data",
    "desc": "Reset imported SchoolSite project data and start again."
  },
  {
    "name": "SYF Export",
    "desc": "Export Student Yield Factor reports directly from Data Setup."
  },
  {
    "name": "Create",
    "desc": "Start a Plan, Forecast, Street Directory, Address Directory, Attendance Matrix or Utilization Report."
  },
  {
    "name": "Open",
    "desc": "Open an existing plan, forecast or directory."
  },
  {
    "name": "Delete",
    "desc": "Remove an existing plan, forecast or directory."
  },
  {
    "name": "Copy",
    "desc": "Duplicate an existing plan or forecast to create a scenario."
  },
  {
    "name": "Export Directories",
    "desc": "Export street or address directories to Excel."
  },
  {
    "name": "Address Directory",
    "desc": "Build an address-level directory connecting addresses to attendance boundaries."
  },
  {
    "name": "Street Directory",
    "desc": "Build a street-level directory from street and school/study-area data."
  },
  {
    "name": "Start Assignment",
    "desc": "Begin an assignment editing session."
  },
  {
    "name": "Target School",
    "desc": "Choose the school that receives selected Study Areas."
  },
  {
    "name": "Assign Study Areas",
    "desc": "Commit the current map selection to the target school."
  },
  {
    "name": "Save Assignments",
    "desc": "Save assignment changes to the plan."
  },
  {
    "name": "Undo",
    "desc": "Reverse the most recent assignment."
  },
  {
    "name": "Select by Rectangle",
    "desc": "Select Study Areas with a rectangle."
  },
  {
    "name": "Select by Polygon",
    "desc": "Select Study Areas with a polygon."
  },
  {
    "name": "Select by Lasso",
    "desc": "Freehand selection of Study Areas."
  },
  {
    "name": "Select by Circle",
    "desc": "Select Study Areas with a circle."
  },
  {
    "name": "Reassign Study Areas",
    "desc": "Bulk reassign by closest school, capacity or maximum limit, with school exclusions."
  },
  {
    "name": "Remove Unassigned Schools",
    "desc": "Clean up schools left without Study Areas."
  },
  {
    "name": "Update Schools",
    "desc": "Add or update schools in a plan."
  },
  {
    "name": "Plans to Sync",
    "desc": "Select other plans to receive supported assignment and school changes."
  },
  {
    "name": "Identify",
    "desc": "Inspect Study Area assignment and grade information."
  },
  {
    "name": "Lock Assignments",
    "desc": "Make a finished plan read-only."
  },
  {
    "name": "Number Study Areas",
    "desc": "Assign the next available Study Area ID."
  },
  {
    "name": "Show Statistics",
    "desc": "Open the Statistics Window."
  },
  {
    "name": "Plan Impact Summary",
    "desc": "Generate impacted Study Area and student outputs."
  },
  {
    "name": "Plan Overlay",
    "desc": "Overlay another plan for comparison."
  },
  {
    "name": "Label Areas",
    "desc": "Show attendance-area names on the map."
  },
  {
    "name": "Include Numbers",
    "desc": "Show capacity and percent-capacity values with labels."
  },
  {
    "name": "Symbology Presets",
    "desc": "Choose preset map styles."
  },
  {
    "name": "Export Plan",
    "desc": "Export plan attendance areas to a standalone layer."
  },
  {
    "name": "Export Statistics",
    "desc": "Export Statistics Window data to Excel."
  },
  {
    "name": "Export Plan as Study Areas",
    "desc": "Convert proposed boundaries into Study Area format."
  },
  {
    "name": "Show Plan Comments",
    "desc": "Review plan comments."
  },
  {
    "name": "Publish",
    "desc": "Publish plan information to ArcGIS Online where enabled."
  },
  {
    "name": "Forecast Reports",
    "desc": "Configure and export forecast summaries."
  },
  {
    "name": "Refresh Forecast",
    "desc": "Reapply a forecast after factors change."
  },
  {
    "name": "Lock Factors",
    "desc": "Freeze a completed forecast."
  },
  {
    "name": "Enrollment Forecast",
    "desc": "Create a staffing-focused enrollment projection."
  },
  {
    "name": "PK Factors",
    "desc": "Set pre-kindergarten birth factors."
  },
  {
    "name": "K Factors",
    "desc": "Set kindergarten birth factors."
  },
  {
    "name": "Distributed Enrollment",
    "desc": "Distribute projected students across grades."
  },
  {
    "name": "Mobility Factors",
    "desc": "Model movement into and out of the district."
  },
  {
    "name": "Student Yield Factors",
    "desc": "Estimate students generated by new housing."
  },
  {
    "name": "Projected Housing Units",
    "desc": "Track housing phases, units and occupancy years."
  },
  {
    "name": "Student Counts",
    "desc": "Inspect current student counts by Study Area and grade."
  },
  {
    "name": "Build-out Yield Factors",
    "desc": "Estimate enrollment at full development."
  },
  {
    "name": "Forecast Appearance",
    "desc": "Change forecast map display."
  },
  {
    "name": "Show Forecast Comments",
    "desc": "Review forecast comments."
  },
  {
    "name": "Identify Forecast",
    "desc": "Inspect factors and forecast results for a Study Area."
  },
  {
    "name": "Student Reports",
    "desc": "Generate student reports for selected areas."
  },
  {
    "name": "Demographic Reports",
    "desc": "Report demographic and housing characteristics."
  },
  {
    "name": "Walk Zone Analysis",
    "desc": "Create distance or travel-time zones around schools."
  },
  {
    "name": "Program Placement Analysis",
    "desc": "Find facilities closest to the largest number of students."
  },
  {
    "name": "Data Enrichment",
    "desc": "Append forecasted student counts to supported datasets."
  },
  {
    "name": "Export Event Log",
    "desc": "Export project events to Excel."
  },
  {
    "name": "Geocode Students",
    "desc": "Upload student address data and map it."
  },
  {
    "name": "Review / Rematch",
    "desc": "Review and correct geocoded student points."
  },
  {
    "name": "Import Programs",
    "desc": "Import program data from Excel."
  },
  {
    "name": "Add Programs",
    "desc": "Add programs with capacity and school information."
  },
  {
    "name": "Delete Programs",
    "desc": "Remove programs and update capacity."
  },
  {
    "name": "Reassign Program",
    "desc": "Move a program to another school."
  },
  {
    "name": "Program Summary Report",
    "desc": "Summarize programs and capacity by school."
  },
  {
    "name": "Automated Attendance Matrix",
    "desc": "Build an attendance matrix and export it to Excel."
  },
  {
    "name": "Utilization Report",
    "desc": "Compare school capacity with current or projected enrollment."
  },
  {
    "name": "Project Summary Report",
    "desc": "Generate a district-level project summary."
  },
  {
    "name": "Plan Summary Report",
    "desc": "Summarize forecasted students within proposed plan boundaries."
  },
  {
    "name": "Export Student Report",
    "desc": "Export the student data behind an open plan or forecast."
  }
];
