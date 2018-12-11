const data = {
  projects: [
    {
      title: "Social media image sharing site",
      description: `A place where users can upload their favorite photos and interacting with other people. 
      Application consist of two parts, backend part written with Node.js, Express.js and MongoDB as database. 
      Frontend part is writen with React, styled componnets and redux.`,
      features: ["Search images on tags or description", "Endless scroll", "Authentication with jwt-token",
                "interact using comments,", "seperate REST api"
      ],
      tags: ["React", "Redux", "Styled components", "Node.js", "Express.js", "MongoDB"],
      links: [
        {
          link: "https://github.com/patni1992/photo-app-frontend",
          title: "Frontend repo",
          icon: "fab fa-2x fa-github"
        },
        {
          link: "https://github.com/patni1992/photo-app-backend",
          title: "Backend repo",
          icon: "fab fa-2x fa-github"
        },
        {
          link: "https://photo-app-frontend.netlify.com",
          title: "Frontend demo",
          icon: "fas fa-2x fa-desktop"
        },
        {
          link: "https://photo-app-backend.patriknilsson.me",
          title: "Backend Demo",
          icon: "fas fa-2x fa-desktop"
        }
      ],
      frontImg: "images/imagesly1.jpg",
      images: [{src: "images/imagesly1.jpg", alt:"Imagesly - social media"}, {src:"images/imagesly3.jpg", alt:"Imagesly - social media"}, {src:"images/imagesly4.jpg", alt:"Imagesly - social media"}, {src:"images/imagesly6.jpg", alt:"Imagesly - social media"},{src:"images/imagesly5.jpg", alt:"Imagesly - social media"}],
      
    }, {
      title: "Kanban board",
      description: `Productivity app, trello clone created with React & redux. Create cards and lists. Cutomize colors and use markdown to enter decriptions`,
      features: ["Draggable cards and lists", "Syncing with localstorage", "Customaizble colors", "Markdown support"
      ],
      tags: ["React", "Redux", "Sass", "Localstorage"],
      links: [
        {
          link: "https://github.com/patni1992/kanban-board-react",
          title: "Repo",
          icon: "fab fa-2x fa-github"
        },
        {
          link: "https://react-kanban-board.netlify.com/",
          title: "Demo",
          icon: "fas fa-2x fa-desktop"
        }
      ],
      frontImg: "images/kanban.jpg",
      images: [{src:"images/kanban.jpg", alt:"Kanban board"}, {src:"images/kanban2.jpg",  alt:"Kanban board"}, {src:"images/kanban3.jpg",  alt:"Kanban board"}]
    },
    {
      title: "E-commerce",
      description: `Cooming soon`,
      tags: ["Node.js", "Apollo", "MySQL", "GraphQL"],
      frontImg: "images/og_image.png",
      images: []
    }
  ]
};

module.exports = data;
