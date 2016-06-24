crashReporter.start({
    productName: 'ApplicationName',
    companyName: 'CompanyName',
    submitURL: 'https://server-to-send-crash-reports-to',
    autoSubmit: true,
    extra: {
        additionalInformation: ''
    }
});