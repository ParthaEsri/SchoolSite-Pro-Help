window.SCHOOL_SITE_RELEASE = {
  "version": "1.9.7",
  "releaseDate": "September 16, 2026",
  "downloadUrl": "https://github.com/ParthaEsri/SchoolSite-Pro-Help/releases/download/1.9.8/SchoolSite.Pro.1.9.7.zip",
  "githubUrl": "https://github.com/dbutz/SchoolSite-Pro-Docs",
  "productName": "SchoolSite Pro",
  "requirements": "ArcGIS Pro 3.3.0+"
};

window.SCHOOL_SITE_RELEASE_NOTES = [
  {
    "version": "1.9.7",
    "date": "September 2026",
    "description": "FY26 Q4 Update 10 - Patch.",
    "features": [
      "Quick patch to fix an issue when calculating mobility that broke at 1.9.6."
    ]
  },
  {
    "version": "1.9.6",
    "date": "September 2026",
    "description": "FY26 Q4 Update 9.",
    "features": [
      "New: Utilization Report. This is now an automated report and is used to set up boundary comparison web apps during a rezoning project.",
      "Export SYF reports during Data Setup.",
      "Added a CAPACITY field to the automated attendance matrix Excel file.",
      "Additional residential forecasting charts are available with an optional checkbox during Report Setup.",
      "Additional student types that can be added to the automated attendance matrix are only available if they exist in imported student data, just like Create Plan.",
      "Improved Address Directory creation performance. It is now roughly twice as fast.",
      "Updated the Project Summary Report based on feedback from Cameron and the standardization team.",
      "Reassigning study areas by closest school, capacity, or maximum limit now allows one or more schools to be excluded from the process.",
      "SYF calculations are available only when importing Assessor data with polygon geometry.",
      "Added a warning when calculating a forecast if Projected Housing Units have no corresponding SYF values.",
      "Fixed an issue with Esri travel modes that could break walk-zone creation.",
      "The Tapestry Segmentation report was deprecated and a new version was added.",
      "When assigning study areas in a plan based on a forecast, the forecast year can no longer be changed in the stats window. Saving that change would lock in assignments and remove the Undo option.",
      "Additional minor bug fixes and UI improvements."
    ]
  },
  {
    "version": "1.9.5",
    "date": "July 2026",
    "description": "FY26 Q4 Update 8.",
    "features": [
      "Users can choose a school to remove, and its study areas are automatically assigned to Unassigned.",
      "Forecast report exports now include the tabular data and chart in the same file.",
      "Improved forecast calculation performance.",
      "Improved performance when calculating year 12 of the projected housing units table.",
      "Additional minor bug fixes and UI improvements."
    ]
  },
  {
    "version": "1.9.4",
    "date": "June 2026",
    "description": "FY26 Q3 Update 7. Introducing new reporting features for residential forecasts.",
    "features": [
      "SYF Automation uses parcel data to automatically generate student yield factors for new housing units.",
      "The Statistics Window can sort by any column and scale or zoom for improved readability.",
      "Added data validation to check consistency between student types across historical student data.",
      "A plan can be locked to prevent further study-area reassignments.",
      "School layers in a plan map now have Map Tips enabled by default.",
      "The study-area numbering tool was recreated from ArcMap.",
      "Forecasts can be summarized on any available study-area field, including CITY, ZIP, or other grouping fields.",
      "Plans with Enrollment now use all student types in the Current tab, matching the Estimated Enrollment tab methodology.",
      "Additional minor bug fixes and UI improvements."
    ]
  },
  {
    "version": "1.9.3",
    "date": "January 2026",
    "description": "FY26 Q2 Update 6. Introducing new reporting features for residential forecasts.",
    "features": [
      "Show the codes chosen for unit types 1-6 on the projected units, SYF, and MSYF pages.",
      "The Forecast Report dock pane can summarize selected study-area features.",
      "Demographic Reports can be created for all polygons in a feature class.",
      "Fixed a plan-based-on-forecast stats window issue where year 0 did not include other STUTYPES included in the forecast (SSP-230).",
      "Fixed forecast reports for grade ranges -1-6 and -1-12, which previously could not parse the two dash characters (SSP-231).",
      "Additional minor bug fixes and UI improvements."
    ]
  },
  {
    "version": "1.9.2",
    "date": "January 2026",
    "description": "FY26 Q2 Update 5. Introducing a new Walk Zone tool.",
    "features": [
      "Generate walk-zone polygons around school points at any distance or time, such as 1, 3, or 5 miles and 5, 10, or 15 minutes.",
      "Fixed a street and address directory issue when schools have STRT_GRD of -2 (SSP-212).",
      "Added the option to open the Address Directory from Pro after exporting.",
      "Fixed SSP-215, which prevented a plan-based-on-forecast stats window from updating after viewing another student attribute and then selecting grade distribution and a future forecast year."
    ]
  },
  {
    "version": "1.9.1",
    "date": "December 2025",
    "description": "FY26 Q1 Update 4.",
    "features": [
      "Fixed Rate of Change enrollment forecasts that produced no results for grades 10, 11, and 12.",
      "Enabled the Currently selected study areas on map option in a factor dock pane when features are selected.",
      "Fixed an issue when closing a forecast factor that left the table open.",
      "Updated data-validation messaging to clarify students enrolled outside the grades served by the district."
    ]
  },
  {
    "version": "1.9.0",
    "date": "December 2025",
    "description": "FY26 Q1 Update 3. Introducing Sync Plans and more.",
    "features": [
      "Added an option to sync changes between multiple residence and forecasted-student plans.",
      "Plan syncing pushes boundary reassignments, Reassign Study Area changes, new or existing schools, and capacity updates.",
      "The Statistics Window can be summarized by Student Attribute in a forecasted-data plan.",
      "Added SHIFT to add study areas and CTRL to remove study areas during reassignment selection.",
      "Fixed unexpected clearing of feature selections.",
      "Updated the Statistics Window title to include the plan name when multiple maps are open.",
      "Updated the Rate of Change enrollment forecast methodology so K uses the same Direct Rate of Change formula as PK."
    ]
  },
  {
    "version": "1.8.9",
    "date": "November 2025",
    "description": "FY26 Q1 Update 2. Introducing Rate of Change enrollment forecasts and the study-area ID tool for forecasts.",
    "features": [
      "Added the Rate of Change enrollment forecast method alongside Transfer Pattern.",
      "Rate of Change applies to schools with boundaries; schools without boundaries continue to use Transfer Pattern.",
      "Added a forecast Study Area ID tool that shows applied factors and forecast results in one click.",
      "Plan overlays can now contain more than one overlay and are removed only when Do not overlay another plan is selected.",
      "Added tooltips and explanation labels for Data Enrichment and Enrollment Forecast tools.",
      "Added help information, UI updates, and fixes for copying and renaming plans and forecasts.",
      "Updated Data Enrichment tooltips, screenshots, and UI labels.",
      "Added a SchoolSite ribbon Help button linking to the web help documents."
    ]
  },
  {
    "version": "1.8.8",
    "date": "October 2025",
    "description": "FY26 Q1 Update 1. Introducing the Automated Attendance Matrix feature.",
    "features": [
      "Fixed lowercase grade-range input such as k-6.",
      "Added an option to include SE students in the automated attendance matrix.",
      "Enforced short integer input values to prevent values too large for the destination table.",
      "Changed a data validation from error to warning when a school serves a grade with no enrolled students.",
      "Added a warning for overlapping school coverage such as K-6 elementary and 6-8 middle schools sharing grade 6."
    ]
  },
  {
    "version": "1.8.7",
    "date": "October 2025",
    "description": "FY26 Q1 release. Introducing the Automated Attendance Matrix feature.",
    "features": [
      "Create an attendance matrix using GE students by defining grade ranges for each grade level in the study-area data.",
      "The Data Enrichment tool now enriches current study areas and plans with forecasted student counts.",
      "Imported historical student data now includes school name and code of residence and school name of enrollment.",
      "Added validation to check that students are in grades served by district attendance-boundary schools.",
      "Minor UI updates and tooltip improvements."
    ]
  },
  {
    "version": "1.8.6",
    "date": "Earlier release",
    "description": "Introducing Program Re-assignment and expanded data validation.",
    "features": [
      "Import, add, delete, and reassign programs such as special education, music, and dual language.",
      "The Statistics Window shows modified capacity after program seats are reserved.",
      "Added validation for gaps in grade-range coverage, students enrolled outside a school's grades, and schools serving grades with no enrolled students.",
      "Several improvements and bug fixes for Plans with Enrollment, plus minor UI and tooltip updates."
    ]
  },
  {
    "version": "1.8.5",
    "date": "Earlier release",
    "description": "Pre-Fall revisions.",
    "features": [
      "Bug fixes for Plans with Enrollment.",
      "Student enrichment now adds school-of-enrollment and school-of-residence fields to imported data.",
      "Added help information and a new background on load.",
      "Added Copy for plans and forecasts.",
      "Capacity changes can be saved back to imported schools for future plans.",
      "Updated forecast rendering, bypass warning behavior, and new-school target assignment."
    ]
  },
  {
    "version": "1.8.4",
    "date": "March 2025",
    "description": "Pre-Fall upgrades.",
    "features": [
      "Updates and bug fixes for Plans with Enrollment.",
      "Added read-only mode for forecasts to lock in factors.",
      "Forecast appearance is labeled to describe current settings.",
      "Updated help icons and tooltip information.",
      "Improved Address Directory compatibility across Student Information Systems.",
      "Reset Project can reset only Address Directory information instead of all data."
    ]
  },
  {
    "version": "1.8.3",
    "date": "April 2025",
    "description": "Plans with Enrollment. Internal-only release for testing.",
    "features": [
      "First release that creates plans showing residence and enrollment counts.",
      "Minor UI updates and improvements.",
      "Fixed a hang when closing SchoolSite Pro from the start page.",
      "Added buttons to show plan and forecast comments.",
      "Updated help icons for a more consistent appearance.",
      "Excel reports prompt users to open them after export."
    ]
  },
  {
    "version": "1.8.2",
    "date": "March 2025",
    "description": "Address Directory updates.",
    "features": [
      "Updated Address Directory output to include MID_, prefix direction, prefix type, and suffix direction."
    ]
  },
  {
    "version": "1.8.1",
    "date": "February 2025",
    "description": "Street and Address Directory release.",
    "features": [
      "Limited special characters in plan and forecast names to prevent tool issues.",
      "Updated tooltips and help links.",
      "Updated Street and Address Directory tools based on beta feedback from 1.8.0."
    ]
  },
  {
    "version": "1.8.0",
    "date": "February 2025",
    "description": "Internal-only release.",
    "features": [
      "Beta release of Street and Address Directory tools for internal testing.",
      "MGT branding updates.",
      "Added a Help button and contextual help icons.",
      "Various Start Page UI, alignment, and layout improvements.",
      "Updated enrollment forecast Excel formatting."
    ]
  },
  {
    "version": "1.7.9",
    "date": "August 2024",
    "description": "August release.",
    "features": [
      "Fixed a bug introduced with ArcGIS Pro 3.3 when using the Plan Impact Summary report."
    ]
  },
  {
    "version": "1.7.8",
    "date": "August 2024",
    "description": "August release.",
    "features": [
      "Fixed a bug when copying a forecast.",
      "Updated enrollment forecast and Excel export formatting for consistency with residence forecasts and template guidelines."
    ]
  },
  {
    "version": "1.7.7",
    "date": "July 2024",
    "description": "ArcGIS Pro 3.3+ only.",
    "features": [
      "Fixed ArcGIS Pro 3.3 limited-field-name issues that caused report and table Excel exports and historical-student imports to fail.",
      "Added street-data import in preparation for the Street Directory tool."
    ]
  },
  {
    "version": "1.7.6",
    "date": "July 2024",
    "description": "ArcGIS Pro 3.3+ only.",
    "features": [
      "Minor UI updates.",
      "Released Data Enrichment tools for tract data, estimated students, and forecasted study-area data.",
      "Fixed a Reset Project issue that caused missing TYPE2 units.",
      "Added school capacity to forecast reports for attendance-area reporting and Excel output."
    ]
  },
  {
    "version": "1.7.5",
    "date": "November 2023",
    "description": "Bug-fix release.",
    "features": [
      "Fixed a problem when importing historical students."
    ]
  },
  {
    "version": "1.7.4",
    "date": "November 2023",
    "description": "Bug-fix release.",
    "features": [
      "Fixed assignment of study areas to the target school in copied or renamed plans."
    ]
  },
  {
    "version": "1.7.3",
    "date": "November 2023",
    "description": "Bug-fix release.",
    "features": [
      "Fixed plan labeling, forecast symbolization, selected-study-area data in boundary planning, grade-range changes in the Statistics Window, and first-open forecast error messages."
    ]
  },
  {
    "version": "1.7.2",
    "date": "October 2023",
    "description": "Student Yield Factor and enrollment forecast updates.",
    "features": [
      "Expanded Student Yield Factors from PK, K-6, 7-8, and 9-12 to individual grades PK through 12.",
      "Added alphabetical enrollment forecast sorting.",
      "Fixed bugs in Remove Unassigned Schools and Plan Summary."
    ]
  },
  {
    "version": "1.7.1",
    "date": "August 2023",
    "description": "Planning, validation, and reporting updates.",
    "features": [
      "Added Reset Geodatabase to remove imported data and maps and start over in the same project.",
      "Replaced predefined plan-statistics and forecast-report grade ranges with a flexible grade-range textbox.",
      "Added warnings for layers with definition expressions during Data Setup.",
      "Changed references from Maturation to Buildout and added Buildout as a forecast appearance option.",
      "Fixed historical-student validation, forecast recalculation, and mobility-report export issues."
    ]
  },
  {
    "version": "1.7.0",
    "date": "February 2023",
    "description": "Updated start page and planning workflow improvements.",
    "features": [
      "Updated the start page to improve access to previous projects.",
      "Fixed issues with plan exports, license-expiration warnings, enrollment forecasts, reassignment by current boundaries, rounding, and Plan Summary reports.",
      "Fixed missing grade ranges in Forecast Report setup."
    ]
  },
  {
    "version": "1.6.9",
    "date": "December 2022",
    "description": "Forecast bug-fix release.",
    "features": [
      "Fixed bugs when making a forecast."
    ]
  },
  {
    "version": "1.6.8",
    "date": "December 2022",
    "description": "Forecast reporting and enrollment forecast updates.",
    "features": [
      "Fixed forecast report exports to text and Excel formats.",
      "Improved rounding in the Plan Statistics Window.",
      "Updated enrollment forecast refresh messaging after residential forecast changes.",
      "Added a warning for significant year-to-year enrollment gaps.",
      "Improved elementary sorting so PK and K are grouped together.",
      "Improved handling of custom grade ranges in plan statistics and Forecast Report setup."
    ]
  },
  {
    "version": "1.6.7",
    "date": "December 2022",
    "description": "Forecast report ordering and summary updates.",
    "features": [
      "Schools are ordered by grade and then name.",
      "Reworded messages for schools excluded from reports.",
      "Added a total enrollment summary line to the top of the report."
    ]
  },
  {
    "version": "1.6.6",
    "date": "November 2022",
    "description": "Report formatting and student-data updates.",
    "features": [
      "Improved report formatting on screen and in Excel.",
      "Fixed staffing forecast calculations for students transferring out of PK in boundary schools.",
      "Fixed the Project Summary report DEVELOPER field lookup.",
      "Fixed development summary exports when study areas had no early-year development.",
      "Updated Student Report summaries by STUTYPE and GRD."
    ]
  },
  {
    "version": "1.6.5",
    "date": "October 2022",
    "description": "Built for ArcGIS Pro 3.0. First release out of beta.",
    "features": [
      "Built for ArcGIS Pro 3.0.",
      "First release out of beta."
    ]
  }
];

window.SCHOOL_SITE_TOOLS = [
  { "name": "Data Setup", "category": "Data Setup", "desc": "Set up your SchoolSite project with the necessary feature classes: Study Areas, Schools, and Students.", "details": "Scans each dataset to confirm it conforms to the expected schema and reports Warnings (items you might want to correct) and Errors (items you must correct before continuing). Requires a map to be open." },
  { "name": "Reset Project Data", "category": "Data Setup", "desc": "Completely start your SchoolSite Pro project over by deleting the SchoolSite geodatabase.", "details": "This deletes all plans, forecasts, and imported data for the project, so use it only when you intend to rebuild from scratch." },
  { "name": "SYF Export", "category": "Data Setup", "desc": "Export calculated Student Yield Factors to Excel directly from Data Setup.", "details": "Available after assessor data is imported and validated; no forecast is required. Choose elementary, middle, high, intermediate, or district-wide reporting across all Study Areas." },
  { "name": "Create", "category": "Create & Manage", "desc": "Create a new plan, forecast, or street/address directory using SchoolSite Pro.", "details": "Creating a new SchoolSite item requires at least Schools, Study Areas, and Students feature classes to already be imported into the project via Data Setup." },
  { "name": "Open", "category": "Create & Manage", "desc": "Open an existing SchoolSite plan, forecast, or street/address directory in the project.", "details": "Available whenever one or more SchoolSite items already exist in the current project." },
  { "name": "Delete", "category": "Create & Manage", "desc": "Delete an existing SchoolSite plan, forecast, or street/address directory in the project.", "details": "Permanently removes the selected item; this cannot be undone once confirmed." },
  { "name": "Copy", "category": "Create & Manage", "desc": "Copy an existing SchoolSite plan, forecast, or street/address directory in the project.", "details": "A quick way to branch off a scenario variation without rebuilding a plan or forecast from scratch." },
  { "name": "Export Directories", "category": "Create & Manage", "desc": "Export a SchoolSite street or address directory to Microsoft Excel.", "details": "Requires a generated street or address directory. Street output lists district streets and assigned schools; address output lists address points or parcels and assigned schools." },
  { "name": "Address Directory", "category": "Create & Manage", "desc": "Create an address directory of district address points or parcels and school assignments.", "details": "Requires Schools, Study Areas with school assignments, and either Address Points or Parcel Polygons. Use Export Directories to write the completed address directory to Excel." },
  { "name": "Street Directory", "category": "Create & Manage", "desc": "Create a street directory listing district streets and corresponding schools of assignment.", "details": "Requires Schools, Study Areas, and a Streets network with address ranges and street names. Use Export Directories to write the completed street directory to Excel." },
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
  { "name": "Plan Impact Summary", "category": "Assign & Boundaries", "desc": "Produce a summary of Study Areas and students impacted by a new boundary configuration.", "details": "Creates impacted Study Areas and impacted students outputs with counts by the grade ranges defined in the Plan Statistics Window. Review the generated datasets and export the summary when needed." },
  { "name": "Plan Overlay", "category": "Appearance", "desc": "Overlay another plan's attendance area on top of your current plan for comparison.", "details": "Choose which plan's boundaries to display alongside the one you're currently editing." },
  { "name": "Label Areas", "category": "Appearance", "desc": "Display each attendance area's name on the map.", "details": "Toggle labeling on or off for the plan's attendance areas." },
  { "name": "Include Numbers", "category": "Appearance", "desc": "Display each attendance area's numbers, like capacity and percent capacity.", "details": "Requires Label Areas to be enabled first." },
  { "name": "Symbology Presets", "category": "Appearance", "desc": "Choose a preset icon or attendance-area symbology style for your plan.", "details": "Includes separate preset combo boxes for plan and attendance-area symbology." },
  { "name": "Export Plan", "category": "Share", "desc": "Export your attendance areas to a standalone feature layer.", "details": "Produces a shareable layer representing the plan's current boundary configuration." },
  { "name": "Export Statistics", "category": "Share", "desc": "Export the currently selected SchoolSite plan statistics tab to Excel.", "details": "The Statistics Window must be open. Select the schools, grades, grade ranges, and statistic type before exporting; forecast-based statistics require a forecast." },
  { "name": "Export Plan as Study Areas", "category": "Share", "desc": "Export your current boundaries in Study Area format.", "details": "Useful for feeding a finalized plan's boundaries back into future Data Setup imports." },
  { "name": "Show Plan Comments", "category": "Share", "desc": "Show comments recorded against the current plan.", "details": "Comments are a lightweight way to track planning notes alongside a plan." },
  { "name": "Publish", "category": "Share", "desc": "Publish your SchoolSite plan to ArcGIS Online.", "details": "Requires ArcGIS Online sharing to be configured for the organization." },
  { "name": "Export Event Log", "category": "Share", "desc": "Export the project event log to an Excel file in the project home directory.", "details": "Use the export for analysis or to email activity history to technical support when troubleshooting an issue. No forecast is required." },
  { "name": "Forecast Reports", "category": "Reports", "desc": "Create and export forecast reports by geography and selected grade ranges.", "details": "Open Forecasting > Forecast Reports, choose Study Areas, attendance areas, district/subdistrict, or other supported geographies, then select grade ranges. Export to Excel or text; some attendance-area reports include school capacity charts." },
  { "name": "Refresh Forecast", "category": "Forecasting", "desc": "Reapply a forecast after one or more factors have been modified.", "details": "Enabled whenever a factor has changed and the forecast is out of sync with it; disabled once the forecast is up to date." },
  { "name": "Lock Factors", "category": "Forecasting", "desc": "Lock in the current factors and make this forecast read-only.", "details": "Once locked, the forecast report is considered final and no further changes to the factors are possible." },
  { "name": "Enrollment Forecast", "category": "Forecasting", "desc": "Estimate future school enrollment and export the enrollment forecast report to XLSX.", "details": "Requires at least two years of historical student data imported through Data Setup. Configure schools, grades, forecast years, and the Transfer Pattern or Rate of Change method before generating the report." },
  { "name": "PK Factors", "category": "Forecasting", "desc": "Modify your district's pre-kindergarten birth factors.", "details": "PK factors play an important role in the forecast model, determining the number of incoming pre-kindergarten students." },
  { "name": "K Factors", "category": "Forecasting", "desc": "Modify your district's kindergarten birth factors.", "details": "Kindergarten factors, alongside PK factors, drive the projected number of incoming kindergarten students each year." },
  { "name": "Distributed Enrollment", "category": "Forecasting", "desc": "Distribute the forecasted number of students at maturity across grade levels using weighted factors.", "details": "Elementary grades K-6 distribute evenly at 0.14285 and intermediate grades 7-8 at 0.5 (fixed). High school grades 9-12 can be weighted, but must total 1.00 â€” by default each is 0.25." },
  { "name": "Mobility Factors", "category": "Forecasting", "desc": "Calculate mobility values by school and grade from historical student movement.", "details": "Open Forecasting > Factors > Mobility Factors, select a grade, and export the mobility summary to Excel. The output includes raw student counts and percentages used to assess calculation confidence." },
  { "name": "Student Yield Factors", "category": "Forecasting", "desc": "Calculate and export Student Yield Factor reports for forecast housing assumptions.", "details": "Open an existing or newly created forecast, choose Forecasting > Factors > Student Yield Factor, and export by elementary, middle, high, intermediate, or district-wide geography. Data Setup also provides SYF Export before a forecast exists." },
  { "name": "Projected Housing Units", "category": "Forecasting", "desc": "Track projected housing developments, phases, unit types, and occupancy years.", "details": "Supports up to ten phases per tract and Student Yield Factors for forecast calculations. The workflow includes Development Summary and Projects Summary exports to Excel." },
  { "name": "Development Summary", "category": "Forecasting", "desc": "Create and export a summary of projected residential development to Excel.", "details": "Open Forecasting > Factors > Projected Housing Units. Requires tract or project data; the summary organizes housing development by year, type, and projected units." },
  { "name": "Projects Summary", "category": "Forecasting", "desc": "Create and export a summary of projected housing projects to Excel.", "details": "Open Forecasting > Factors > Projected Housing Units, review project phases and units, then choose Projects Summary to export the selected projects." },
  { "name": "Student Counts", "category": "Forecasting", "desc": "Review and, if needed, manually adjust the number of current students by grade level for each Study Area.", "details": "The table is automatically filled from the geocoded student dataset specified in the projection wizard; manual edits are rare but useful when students were entered late and missed geocoding." },
  { "name": "Build-out Yield Factors", "category": "Forecasting", "desc": "Estimate how many students will be present once all development in a Study Area is finished.", "details": "Maturation Student Yield Factors are calculated regardless of construction year and applied to year 12 in the projected housing table, using geocoded student and tax-assessor housing data." },
  { "name": "Forecast Appearance", "category": "Appearance", "desc": "Change the map display appearance of an open forecast.", "details": "Controls symbology used to visualize forecast results on the map." },
  { "name": "Show Forecast Comments", "category": "Share", "desc": "Show comments recorded against the current forecast.", "details": "Mirrors Show Plan Comments, but scoped to a forecast." },
  { "name": "Identify Forecast", "category": "Forecasting", "desc": "Identify the forecast Study Areas that you select on the map.", "details": "A redistricting forecast must be open and active for this tool to work." },
  { "name": "Student Reports", "category": "Reports", "desc": "Generate student reports by grade and other selected attributes for the selected area.", "details": "Select an area on the map, choose grade and other attributes, and add fields from the Options menu before running the report. Export the result when an Excel output is needed." },
  { "name": "Demographic Reports", "category": "Esri Services", "desc": "Generate community and demographic reports for a selected study area using Esri Business Analyst Online data.", "details": "Choose a report type, define the study area by drawing a polygon, selecting polygon features, creating an area around a point, or using All Polygons. Generate PDF or Excel reports, review the cost estimate, and save each batch report to a selected folder when needed." },
  { "name": "Walk Zone Analysis", "category": "Esri Services", "desc": "Create service-area zones around selected schools based on walking or driving travel time or distance.", "details": "Select a school layer and school(s), choose a travel mode such as Walk Time, Walk Distance, Drive Time, or Drive Distance, enter comma-separated break values, and run the ArcGIS Online network analysis. The resulting WalkZones feature class is added to the active map." },
  { "name": "Program Placement Analysis", "category": "Esri Services", "desc": "Identify the best school locations to serve student demand while considering capacity and the selected number of facilities.", "details": "Open the Location Allocation tool, choose the student and school layers, select candidate schools, enter a capacity for each school, and choose the number of optimal locations. Review the ArcGIS Online credit estimate and confirm the run to create Output Facilities, Output Demand Points, and Output Allocation Lines." },
  { "name": "Data Enrichment", "category": "Esri Services", "desc": "Enrich existing tract and Study Area datasets with additional data based on a forecast.", "details": "Tract enrichment adds Year1â€“Year10 forecasted student-count fields; Study Area enrichment creates enriched Study Area and aggregated attendance-boundary feature classes for the grade ranges defined in the forecast." },
  { "name": "Export Event Log", "category": "Share", "desc": "Export the event log to an Excel file in this Project's home directory for further analysis or to email to tech support.", "details": "Duplicate entry point available from both the Analysis Tools group and the Share group." },
  { "name": "Geocode Students", "category": "Analysis Tools", "desc": "Upload student address information and map them.", "details": "Currently in beta; requires the beta tools condition to be enabled." },
  { "name": "Review / Rematch", "category": "Analysis Tools", "desc": "Review and correct your geocoded points to check for accuracy.", "details": "Currently in beta; requires the beta tools condition to be enabled." },
  { "name": "Import Programs", "category": "School Programs", "desc": "Browse for an Excel spreadsheet and import program data into a new table.", "details": "The fastest way to bring an existing program roster into a plan in bulk." },
  { "name": "Add Programs", "category": "School Programs", "desc": "Open a panel to enter program details including name, capacity, and current location.", "details": "Once added, the tool automatically updates school capacities based on the new program." },
  { "name": "Delete Programs", "category": "School Programs", "desc": "Delete a program from a school.", "details": "After deletion, school capacity is updated accordingly." },
  { "name": "Reassign Program", "category": "School Programs", "desc": "Edit a program, including moving it to another school.", "details": "Opens an edit panel scoped to the selected program." },
  { "name": "Program Summary Report", "category": "Reports", "desc": "Generate and export a summary of programs, schools, and capacity changes.", "details": "Review all programs, programs moved from their original location, original school capacities, and capacity changes caused by program placement. Export the selected summary to Excel." },
  { "name": "Automated Attendance Matrix", "category": "Reports", "desc": "Generate and export an attendance matrix showing resident versus enrolled schools.", "details": "Configure grade ranges for each school type before generating the matrix. Requires relevant school and student data; the Excel output includes the configured grade bands and CAPACITY where supported." },
  { "name": "Utilization Report", "category": "Reports", "desc": "Generate a standardized utilization or UTA table and export it to Excel.", "details": "Uses attendance matrix data, configured grade bands, school capacity, and approved transfer and adjustment rules. Complete Data Setup and select the grade levels to include." },
  { "name": "Project Summary Report", "category": "Reports", "desc": "Generate a district-level project summary.", "details": "Rolls up plan, forecast and program information into a single summary for the project." },
  { "name": "Plan Statistics Report", "category": "Reports", "desc": "Export the selected Plan Statistics Window tab to Excel.", "details": "Open the Statistics Window, configure schools, grades, grade ranges, and statistic type, then export the current tab. Forecast-based statistics require a forecast." },
  { "name": "Plan Summary Report", "category": "Reports", "desc": "Summarize forecasted resident students grouped into proposed attendance areas.", "details": "Requires an active plan based on a forecast. The report combines forecasted resident students with proposed boundary changes and can be exported to Excel." },
  { "name": "Export Student Report", "category": "Reports", "desc": "Export the student summary for the active plan or forecast to Excel.", "details": "Summarizes the student data used in the current plan or forecast and writes the Excel file to the project home directory." }

];
