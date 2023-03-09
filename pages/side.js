import React from 'react'

const Sides = [
    {
        "icon":"dash.png",
        "name":"Dashboard",
        "path":"/dashboard",
        "background":"ghostwhite",
        "color":"#1B59F8"
        
    },
    {
        "icon":"profil.png",
        "name":"My Account",
        "path":"/account",
        "background":"ghostwhite",
        "color":"#1B59F8"

    },
    {
        "icon":"profil.png",
        "name":"Agent Management",
        "path":"/agent",
        "background":"ghostwhite",
        "color":"#1B59F8"

    },
    {
        "icon":"analytics.png",
        "name":"Reporting",
        "path":"/reporting",
        "background":"ghostwhite",
        "color":"#1B59F8"

    },
    {
        "icon":"set.png",
        "name":"Settings",
        "path":"/setting",
        "background":"ghostwhite",
        "color":"#1B59F8"

    },
    {
        "icon":"set.png",
        "name":"Commission",
        "path":"/setting",
        "background":"ghostwhite",
        "color":"#1B59F8"

    },
    {
        "icon":"disputes.png",
        "name":"Disputes",
        "path":"/dispute",
        "background":"ghostwhite",
        "color":"#1B59F8"

    }
]
function side() {
    console.log(Sides.path)

  return (
    <div>side</div>
  )
}

export default side