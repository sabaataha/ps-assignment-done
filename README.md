# Star Wars Favorites

This React application fetches movies from the Star Wars API (SWAPI) and lets users mark their favorite movies. The goal of this task is to debug the application, improve the styling, and potentially add enhancements.

## Table of Contents

- [Star Wars Favorites](#star-wars-favorites)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Installing](#installing)
  - [SWAPI Documentation](#swapi-documentation)
  - [Tasks](#tasks)

## Getting Started

These instructions will help you set up the project locally on your machine.


### Installing

1. Unzip the project.

2. Navigate to the project directory:
   ```bash
   cd star-wars-favorites
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application should now be running on [http://localhost:3000/](http://localhost:3000/).

## SWAPI Documentation

# changed url to https://swapi.tech/api/

- **Base URL:** `https://swapi.dev/api/`
- **Relevant Endpoints:**
  - **Films:** `/films/`
    - **Method:** `GET`
    - **Description:** Fetches all the Star Wars films.

For a more in-depth look at the API, please refer to the [official SWAPI documentation](https://swapi.dev/documentation).

Please notice the the SWAPI API might take some time to respond


## Tasks

1. **Debugging:** 
    - Start the application and identify the 2 errors introduced.
    - Dive into the codebase and pinpoint the source of each error.
    - Rectify each error ensuring the application displays and functions correctly.
    - Offer a concise explanation of the root causes and detail your solutions.

2. **Styling:** 
    - Refactor the application's styling to match the provided [mockup](page_mockup.png)
    - Ensure the design is responsive and maintains consistency across various screen sizes and browsers.

3. **Improvements:** (Optional)
    - After implementation of the basic design, you can go ahead and implement any other enhancements or features you feel would optimize the application.

4. **Upload to github:**
    - Once finished, upload the project to github.
    - Try to clone your code and run it - make sure all works after cloning
    - Make sure the site works as expected

## Explanation 

1. **Debugging:**

  - **Error 1:**
    - **Root Cause:** The Error was due to incorrect property access in the response object from API call. the function 'fetchMovies' was accessing the films data using response.data.results , but the films object was under 'result' in the structure of the API according to SWAPI documentation.
    - **Solution:** returned the correct property 'response.data.result.
    
  - **Error 2:**
    - **Root Cause:** The Error was due to the incorrect attempt of accessing the film 'Attributes' directly in the 'Movie' objects across different parts of the code, but its under 'properties' in the structure of the API according to SWAPI documentation, 
    for example in <MovieList> component in map iteration,the 'movie.episode_id' was given to the key extraction instead of the correct property access 'movie.properties.episode_id'.
    - **Solution:** updated the code across all relevant components to correct access the 'Attributes' of the film object, using 'movie.properties/ (attribute: episode_id,title,...).

2. **Styling:**

  - **Refactoring Styling:**
    - The prominent image corresponds to the selected movie for liking or disliking.
    - Aligned the movie title and episode ID with the selected movie image to improve and enhance the visual presentation.
    - Updated the like and dislike button styles to resemble star icons for liking and disliking movies, as in the mockup,
      assumed that the star button in mockup are like/dislike button ,that gives the user the option to add/remove movie from favourite list.
    - Assumed that the given film order in the mockup is an initial order for the film list,the idea could evolve into a list organized by the count of likes received by each movie from users.
  - **responsive and maintain style:** 
    - Implemented a flexbox layout to ensure responsiveness and maintain consistency across different devices and browsers.
    - Made use of media queries to adjust styling for smaller screens.

3. **Improvements:**

  - **Enhancements:**
    - **Filter Option:** the filter option gives the user to customize their viewing experience based on their preferences,By allowing users to sort movies by different criteria such as release date or alphabetical orders.
    I added the sorting criteria to be according to the episode number (asc,desc,and initial order).
    - the filter feature offers flexibility and control over the content. enhancing the overall satisfaction and interaction with the application.
