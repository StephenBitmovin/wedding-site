const csvtojson = require('csvtojson')
const fs = require('fs')
const csv = './guest-list.csv'

csvtojson().fromFile(csv)
  .then(json => {
    
    const list = json.reduce((curr, next) => {      
      if (curr.hasOwnProperty(next.Party)){
        curr[next.Party].push({
          name: `${next['First Name']} ${next['Last Name']}`,
          party: next.Party
        })
      } else {
        curr[next.Party] = [{
          name: `${next['First Name']} ${next['Last Name']}`,
          party: next.Party
        }]
      }
      return curr
    },{})

    fs.writeFileSync('./guest-list.js', `const guestList = ${JSON.stringify(list)} \nexport default guestList`)

  })

