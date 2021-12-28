# Rick and Morty Characters

![home]()



## This web app was built with the following technologies:

`Backend` 
```
    PostgreSQL, Sequelize and Express.js
```

`Frontend` 
```
    ReactJS, Redux, Sass
```
## Context:

Your friend Dani has never watched Rick and Morty because he says it is a mainstream animated serie so he doesn't expect it to be good enough to pay a subscription service. However, you're an enthusiast of the serie and want him to try it, at least first season.

One day you were talking with him and he said "most series I like are good because they have many characters and those characters are funny, smart, interesting". You realize Rick and Morty has a lot of good characters and you want to show him all of them and their characteristics. So, you decide to do it in your own way...

### Task:

For all the tasks use the public API: [https://rickandmortyapi.com/](https://rickandmortyapi.com/)

Create a web page that lets your friend navigate throught all the characters. It should allow Dani to navigate to the characters by their locations and episodes, but also list all of them in another view. Here are some specifications:

- Locations and episodes views should have at least 1 front-end filter and 1 backend filter.
- All characters view must have a name, status and gender filters
- Pagination is necessary!

### Performance challenge:

After your friend uses the website he tells you that he's getting some connectivity problems because his ISP has bad internet speed rates. In order to help him you decide to use local-storage to save the information of characters already visited by him so the internet browser can access to the info immediately without making repetitive requests to the backend*.
