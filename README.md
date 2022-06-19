# Team Locavore - Amulya Garimella, Jude Ha, Nadine Han

**Locavore (n.)** - a person whose diet consists only or principally of locally grown or produced food.


Based on the theme of **connections**, we created a small business website that consolidates reward programs amongst businesses for customers, encourages participating in small businesses through their rewards programs, and promotes going outside to buy local products. All of this local goodness is packaged in the format of an old-school punch-card system, where businesses update their customers' virtual "punch-cards" every time they make a purchase that's part of a rewards system.


**Stacks:** React.js/CSS (Frontend), Flask/Prisma (Backend), Figma/Adobe Illustrator (UX/UI)


# Running the App
There are two branches in this application: the default/master (FEAT/Skeleton) and the backend (backend-fn). The primary branch to reference is the default/master. After cloning this git repo, run **npm i** (you may need to install additional dependencies, such as react-modal and other ones the terminal mentions if it fails to launch) to install most of the needed dependencies.


Then, to launch the program, type **npm run dev** into your terminal to launch the app. If the server launches successfully, you should be redirected to a localhost that contains the app that we showed in the video demo!


The default/master branch contains the frontend code / what the website looks like to its users. The backend-fn branch contains our backend code, which isn't integrated at the moment due to some framework incompatibilities with the frontend. The backend code includes mutations for registering, logging in, fielding business order submissions, and loading user/business data. It also includes an API recommendation system coded in Flask by our team that takes a users' visited businesses and generates a list of recommended businesses for them to render in the "for me" tab on the customer end.
