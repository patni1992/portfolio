const data = {
  projects: [
    {
      title: "Social media image sharing site",
      description: `A place where users can upload their favorite photos and interact with other people. 
      Application consist of two parts, backend part written with Node.js, Express.js and MongoDB as database. 
      Frontend part is writen with React, Styled componnets and Redux.`,
      features: ["Search images on tags or description", "Endless scroll", "Authentication with jwt-token",
                "interact using comments,", "seperate REST api"
      ],
      tags: ["React", "Redux", "Styled components", "Node.js", "Express.js", "MongoDB"],
      links: [
        {
          link: "https://github.com/patni1992/photo-app-frontend",
          title: "Frontend repo",
          icon: "icon-github"
        },
        {
          link: "https://github.com/patni1992/photo-app-backend",
          title: "Backend repo",
          icon: "icon-github"
        },
        {
          link: "https://photo-app-frontend.netlify.com",
          title: "Frontend demo",
          icon: "icon-display"
        },
        {
          link: "https://photo-app-backend.patriknilsson.me",
          title: "Backend Demo",
          icon: "icon-display"
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
          icon: "icon-github"
        },
        {
          link: "https://react-kanban-board.netlify.com/",
          title: "Demo",
          icon: "icon-display"
        }
      ],
      frontImg: "images/kanban.jpg",
      images: [{src:"images/kanban.jpg", alt:"Kanban board"}, {src:"images/kanban2.jpg",  alt:"Kanban board"}, {src:"images/kanban3.jpg",  alt:"Kanban board"}]
    },
    {
      title: "E-commerce",
      description: `E-commerce built with Django. User can add items to to the shopping cart and create orders.`,
      features: ["Filter products by category", "Shopping cart saved in sessions", "mail confirmation after checkout"],
      tags: ["Django", "Python", "MySQL", "Bootstrap 4"],
      links: [
        {
          link: "https://github.com/patni1992/django-ecommerce",
          title: "Repo",
          icon: "icon-github"
        },
        {
          link: "https://ecommerce.patriknilsson.me/",
          title: "Demo",
          icon: "icon-display"
        }
      ],
      frontImg: "images/ecommerce1.jpg",
      images: [{src:"images/ecommerce1.jpg", alt:"e-commerce"}, {src:"images/ecommerce2.jpg", alt:"e-commerce"}, {src:"images/ecommerce3.jpg", alt:"e-commerce"}, {src:"images/ecommerce4.jpg", alt:"e-commerce"}, {src:"images/ecommerce5.jpg", alt:"e-commerce"}, {src:"images/ecommerce6.jpg", alt:"e-commerce"}]
    }
  ]
};

module.exports = data;
