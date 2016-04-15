angular.module('canteen.tripData', [])

.factory('trip', [
  function () {
    return {
      tripName: 'My Excellent Test Adventure',
      members: ['Jak', 'Rob', 'Todd', 'Ryan', 'Romulus'],
      location: 'Blackrock Mountain',
      dates: {
        start: '16-04-14',
        end: '16-04-18',
      },
      tasks:[{
        taskName: 'Water Purification Tablets',
        statusCode: 0,
        assignedTo: ['Jak', 'Ryan'],
        description: 'So we don\'t die',
        bullets: [
          'Get 1 bottle each',
          'Walmart has them',
          'Amazon also has them',
          'If you don\'t like the taste of idodine, then get \
          the pack that has the neutralizer tablets as well'
        ],
        category: 'Pack list'
      },
      {
        taskName: 'Hammock',
        statusCode: 1,
        assignedTo: ['Jak', 'Rob', 'Todd', 'Ryan'],
        description: 'To sleep in',
        bullets: [
          'Make sure it\'s as light as possible',
          'ENO makes great ones',
        ],
        category: 'Pack list'
      },
      {
        taskName: 'Say goodbyes',
        statusCode: 0,
        assignedTo: ['Jak', 'Rob', 'Todd', 'Ryan'],
        description: 'Tell family you love them',
        bullets: [
          'leave information about where we\'re going',
          'give them check-in times',
        ],
        category: 'other'
      },
      {
        taskName: 'kill bear',
        statusCode: 1,
        assignedTo: ['Romulus'],
        description: 'I hear they\'re tasty',
        bullets: [
          'Just let Romulus do his thing',
          'If it comes after you, run',
        ],
        category: 'other'
      }],
    }
  }
]);
