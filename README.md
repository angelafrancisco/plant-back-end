# MERN Full-Stack App

**Week 8: March-April 2022. Project #3 for General Assembly.**

PlantPet - A full-stack MERN web application for the plant obsessed, plant newbies, and aspiring plant parents. Track individual plant watering, add photos, and personalized plant care!


## Deployed Website

Hosted via Heroku:

https://plantpet-app.herokuapp.com/


## Repositories
- Front-End: https://github.com/angelafrancisco/plant-front-end
- Back-End: https://github.com/angelafrancisco/plant-back-end


## Tech Stack (MERN)

- M: MongoDB/Mongoose
- E: Express
- R: React
- N: Node.js
- HTML/CSS/JavaScript


## User Stories

- Homepage shows app features and links to login or register an account.
    - _(Note: Currently user register/login not in production. Register/Login buttons will take you to the user dashboard.)_
- User can create a new account and login.
- User can add plants to their "My Plants" section, creating a name, adding plant type, image url, room name, window direction, and notes about plant.
- Once a plant is added, user can edit or delete plant.
- User can complete watering tasks in their "My Tasks" section, as they are auto-generated after creating a new plant.


## GA Project Requirements (MVP)

- Working full-stack application, using MERN stack: 
    -- MongoDB, Express, React, Node.js
- MVC file structure: Models, Views, Controllers (Note: React is views)
- At least one model with full CRUD
- At least three react components, besides App.js
- Deployed online and accessible to the public via Heroku
- Two git repositories, one for backend and one for frontend
- A `README.md` file with explanations of the technologies used, the approach taken, unsolved problems, user stories, and notes
- Links to hosted and working apps

## Project Stretch Goals

- Wireframing (created via Figma)
- Custom CSS
- Favicon/Logo
- Plant modals (add new plant / edit plant)
- Form dropdown menu
- React routing:
    - Homepage: `'/'`
    - Login: `'/login'`
    - Register: `'/register'`
    - User Dashboard: `'/dashboard'`


## Future Goals
These are additions I wasn't able to get to within project timeframe, but want to implement in the future:

- Responsive Design
- API: It was difficult to find a public plant API that worked for my project. Hoping to expand on this later on.
- Model: Plant
    - `petFriendly: { type: Boolean }` (possibly based on toxicity level)
    - `maintenance: { type: "High" | "Medium" | "Low" }` (possibly based on hardiness)
    - `waterSched: { type: Number }` (possibly based on drought/humidity resistance)
- Finish second CRUD for:
    - Create new user
    - User login/logout (username and password authentication on FE)
    - Update/Delete user account
- Search functionality for user added plants
- Upcoming Tasks React component
- User image upload via Cloudinary
- Sort plants and tasks by room name or a-z


## Credits

- Favicon and Logo 
    - [Favicon.io](https://favicon.io/emoji-favicons/potted-plant)
- Icons 
    - [FontAwesome](https://fontawesome.com/icons)
    - [Flaticon](https://www.flaticon.com/) via [Freepik](https://www.freepik.com) 
- Photos 
    - [Rainier Ridao](https://unsplash.com/@rainierridao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
    - [Angèle Kamp](https://unsplash.com/@angelekamp?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/plants?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)