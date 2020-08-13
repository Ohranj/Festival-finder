# News Finder

### Allows users to search via mapbox map for trending news articles from countries around the world. And save them to their account for future reference

##### Used the MERN stack to create:

<!-- prettier-ignore -->
* Backend
    - Express,
    - Mongo,
    - Passport with Google strategy
* Frontend
    - React,
    - Redux

Next:
Allow user to delete from profile page so will need to store all in redux and when add new article that should also go into redux hold them and make user confirm they want to delete or reverse when make a change
Change to redux thunk to allow inital libraryReducer state to be the stored articles pulled from mongodb or empty array.

Add button to translate?
Add an everything page allowing users to search by a topic. These topics can be set in redux state and shown in profile and a new page
