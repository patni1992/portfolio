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
          link: "#",
          title: "Demo",
          icon: "fas fa-2x fa-desktop"
        }
      ],
      frontImg: "images/imagesly1.jpg",
      images: ["images/imagesly1.jpg", "images/imagesly3.jpg", "images/imagesly4.jpg", "images/imagesly6.jpg","images/imagesly5.jpg"],
      
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
      images: ["images/kanban.jpg", "images/kanban2.jpg", "images/kanban3.jpg"]
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
