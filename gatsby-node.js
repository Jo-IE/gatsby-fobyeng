if (process.env.NODE_ENV === "development") {
  process.env.GATSBY_WEBPACK_PUBLICPATH = "/"
}
//const path = require("path")
//const { createFilepath } = require("gatsby-source-filesystem")

/*exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const about = path.resolve("./src/pages/about.js")

  return graphql(
    `
      {
        allContentfulAbout {
          edges {
            node {
              childContentfulAboutMissionTextNode {
                mission
              }
              childContentfulAboutAboutUsTextNode {
                aboutUs
              }
              childContentfulAboutOurTeamTextNode {
                ourTeam
              }
              childContentfulAboutMissionbTextNode {
                missionb
              }
              childContentfulAboutMissioncTextNode {
                missionc
              }
              childContentfulAboutMissiondTextNode {
                missiond
              }
              childContentfulAboutMissioneTextNode {
                missione
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    return result
  })
}*/
/*import { graphql } from "gatsby"

module.exports.aboutQuery = graphql(
  `
    {
      allContentfulAbout {
        edges {
          node {
            childContentfulAboutMissionTextNode {
              mission
            }
            childContentfulAboutAboutUsTextNode {
              aboutUs
            }
            childContentfulAboutOurTeamTextNode {
              ourTeam
            }
            childContentfulAboutMissionbTextNode {
              missionb
            }
            childContentfulAboutMissioncTextNode {
              missionc
            }
            childContentfulAboutMissiondTextNode {
              missiond
            }
            childContentfulAboutMissioneTextNode {
              missione
            }
          }
        }
      }
    }
  `
)*/
