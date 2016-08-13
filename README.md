# Khan Skills Explorer

This project uses [Node.js](https://nodejs.org) and [npm](https://www.npmjs.com/)
as the package manager.

If you have got that set up, you can get this working from the command line.

## Clone the Project

```
git clone https://github.com/jb-1980/khan_skill_explorer.git
cd khan_skill_explorer
npm install
npm start
```

Now open up [http://localhost:3000](http://localhost:3000) and you can start to
play around with the skills.

I am using this mainly to improve my skills with [React](https://facebook.github.io/react/),
[React Router](https://github.com/reactjs/react-router), and [Redux](http://redux.js.org/)
that I am using on the front end.



## Some Needed Improvements

I would like to use this in planning my lessons and courses. The main idea is to
have each of the missions broken down into a table of the individual exercises,
with columns of their prerequisites, associated videos and articles, as well as
the associated common core standards. It is all available through Khan's API, so
I just need to implement them.

Specifically,
- [ ] I have to fix a bug with oauth authentication with Khan Academy.
- [ ] I have to integrate the common core standards
- [ ] I have to integrate the prerequisites
- [ ] I have to integrate the videos and articles
- [ ] Currently this only works with the webpack-dev-server. I want to get it working with express.
