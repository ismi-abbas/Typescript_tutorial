let statusLogs = [
  {
    status: 'ELGRECM',
    statusDateTime: '20220408-160930',
    tranType: 'ELGCHK',
  },
  {
    status: 'ELGPASS',
    statusDateTime: '20220408-160946',
    tranType: 'ELGCHK',
  },
  {
    status: ' ',
    statusDateTime: '20220408-161008',
    tranType: 'UPDATEDATA',
  },
  {
    status: 'SUBPASS',
    statusDateTime: '20220408-161359',
    tranType: 'SUBMITAPP',
  },
  {
    status: 'WAPPROVE',
    statusDateTime: '20220411-172600',
    tranType: 'MGR_LO_REV',
  },
  {
    status: 'WAPPROVE',
    statusDateTime: '20220411-172600',
    tranType: 'MGR_LO_REV',
  },
  {
    status: 'WACCEPT',
    statusDateTime: '20220411-174201',
    tranType: 'LO_ACCEPT',
  },
  {
    status: '8o5',
    statusDateTime: '20220415-105700',
    tranType: 'DOCUMENTATION',
  },
  {
    status: 'EXLAW',
    statusDateTime: '20220415-105800',
    tranType: 'DOCUMENTATION',
  },
  {
    status: 'EXLAW',
    statusDateTime: '20220415-105901',
    tranType: 'DOCUMENTATION',
  },
  {
    status: 'EXLAW',
    statusDateTime: '20220415-105901',
    tranType: 'DOCUMENTATION',
  },
  {
    status: '8o10',
    statusDateTime: '20220415-110001',
    tranType: 'DISBURSEMENT',
  },
  {
    status: '12o2',
    statusDateTime: '20220415-110300',
    tranType: 'DISBURSEMENT',
  },
  {
    status: '12o2',
    statusDateTime: '20220415-110300',
    tranType: 'DISBURSEMENT',
  },
  {
    status: 'DISBCOMP',
    statusDateTime: '20220415-110700',
    tranType: 'DISBURSEMENT',
  },
];

async function updateApplicationTimelineFromWoloc(statusLogs: Array<any>) {
  for (let value of statusLogs) {
    let woloc_status: string = value.status;
    let statusDateTime: Date = value.statusDateTime;
    const wolocIndependentStatus: Array<string> = [
      'DISBCOMP',
      '12o2',
      '8o10',
      'EXLAW',
      '8o5',
      'WACCEPT',
      'WAPPROVE',
    ];

    if (wolocIndependentStatus.includes(woloc_status)) {
      console.log('woloc_status: ', woloc_status);
      console.log('statusDateTime: ', statusDateTime);
    } else {
      console.log('No status inserted');
    }
  }
}

updateApplicationTimelineFromWoloc(statusLogs);
