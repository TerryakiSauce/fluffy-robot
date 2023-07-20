const allData = {
    devItems : [
        {
            id: "B2175DEA-8704-EE11-907C-000D3AB76CC2",
            createdAt: "1664324809000",
            name: "ERI-R100",
            note: "Internal Combustion Engine",
            icon: "sap-icon://in-progress",
            status: "development",
            number: 1
        },
        {
            id: "BFF3EB47-D56F-4C3E-B2CD-F834DDCE398D",
            createdAt: "1686070970810",
            name: "MZO-M500",
            note: "Automatic Transmission",
            icon: "sap-icon://in-progress",
            status: "development",
            number: 2
        },
        {
            id: "7D830B2B-8C04-EE11-907C-000D3AB76CC2",
            createdAt: "1667426712000",
            name: "BIK-C900",
            note: "Leaf Spring Suspension",
            icon: "sap-icon://in-progress",
            status: "development",
            number: 3
        },
        {
            id: "5917B34D-8C04-EE11-907C-000D3AB76CC2",
            createdAt: "1672943804000",
            name: "MZA-R300",
            icon: "sap-icon://in-progress",
            note: "Electric Brakes",
            status: "development",
            number: 4
        },
        {
            id: "5A17B34D-8C04-EE11-907C-000D3AB76CC2",
            createdAt: "1686071115342",
            name: "UPO-M550",
            icon: "sap-icon://in-progress",
            note: "Solid Axle",
            status: "development",
            number: 5
        },
        {
            id: "0674D037-46EA-4DE8-85A8-424587C4F71F",
            createdAt: "1686236641229",
            name: "VCB-C990",
            icon: "sap-icon://in-progress",
            note: "Limited-Slip Differential",
            status: "development",
            number: 6
        },
    ],
    prodItems : [

    ]
};

sap.ui.getCore().attachInit(() => {
    modelDataModel.setData(allData);
});


