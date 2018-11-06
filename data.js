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
      frontImg: "images/imagesly-4.png",
      images: ["images/imagesly-4.png","images/imagesly-3.png","images/imagesly-5.png", "images/imagesly-2.png"],
      
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
      frontImg: "images/kanban2.png",
      images: ["images/kanban2.png", "images/kanban.png"]
    },
    {
      title: "E-commerce",
      description: `Cooming soon`,
      tags: ["Python", "Django", "Vue", "MySQL", "GraphQL"],
      frontImg: "images/django.jpeg",
      images: []
    }
  ]
};

module.exports = data;
