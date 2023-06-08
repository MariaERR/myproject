var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'C:\\Users\\048532\\Documents\\Tuto1\\apickli-tutorial\\reports\\cucumber_report.json',
        output: 'C:\\Users\\048532\\Documents\\Tuto1\\apickli-tutorial\\reports\\cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        },
        failedSummaryReport: true,
    };

    reporter.generate(options);