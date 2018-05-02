# AMC Showtime App

This app is a website that you can use to look up showtimes, theaters, and movies at AMC locations near you.

## Instructions:

  * To search for a movie by name, enter a movie name in search
  * To search for theaters in your area, enter a zipcode
  * To search for showtimes for a movie at theatres in your area, enter a name and zipcode in the search
  * To login or register, click on login button
  * To edit your username and password or delete your account, click on account
  * Click on a movie or theater name to see more details about it


## Technologies used:

  * HTML, CSS, LESS, and JavaScript for the front end
  * MongoDB and Mongoose for the back end
  * Node.js and Express for the server
  * Bcrypt for password encryption


## The approach taken:

Our website was based around the AMC theater API so we started working on the site by grabbing the example data from their developer portal and figuring out what functionality we could build around it. Next we built out a basic website with authentication and then started building our movie specific routes using the example data for testing. We weren't given access to the actual API endpoints until the day before our presentation of the project so we had to set up the site using the example data and plan out our API calls so that we could switch them over quickly when we got access. Once we had access API endpoints, we were able to successfully transition our site off of the example data and onto the production endpoint calls in about an hour.


## Unsolved problems:

  * The AMC API isn't completely functional so we had to use some work arounds to get the data we needed. With the current work around, we had to give up some of the data that we were previously planning to show to the user. Given more time, we could improve the work around so that we can get all of the data that we wanted.

  * The API loads a "page" of data at a time and we currently only use the first "page" of data on each of our API calls. However, a "page" is generally less than a day for showtimes so it would be nice to extend to grabbing two pages or maybe more.


## User stories:

  * User can get info about new movies
  * User can create lists of movies they wish to watch or movies that they have watched
  * User can find theaters around user’s location and search showtimes
  * Users can look up movies that are showing in theaters by name















