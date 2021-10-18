# Chromatify Back End
chromatify.surge.sh

# Description
Chromatify is a simplified Spotify search app utilizing OAuth to access Spotify's API to display results.

# Brief Example
When the backend server is running successfully at http://localhost:9000/chromatifyyou will see the site's data displayed as a JSON object. This confirms the server and database are connected.

# List of Features / User Stories

### MVP (Bronze)
ASU I want to be able to add entries to a database and store them for later use.
I want this database to connect to a functional front end to display the tracks  I have added.
ASU I want to be able to create, edit, and delete my entries from a front end UI.

### Silver
ASU I want to be able to create a user and have my created entries to be unique to my account. I want to be able to "favorite" entries from Spotify's API and have that action write data from the API to the Chromatify database.
I want to join these queries to have my created tracks display alongside Spotify's search results.

### Gold
ASU I want to be able to drag and drop search results into a "tresselboard" workspace so I can work with my songs in a way that is tactile and intuitive.
I want this drag and drop functionality to also interact with the database, creating associations where necessary.
ASU I want to be able to add tags to my tracks for further sorting that adds these as rows to the database.
Using these tags along with a data visualization tool, I want to be able to see my songs represented in a colorful UI.

# Future Planning
I set out building Chromatify with the dream of making a playlist visualization tool to help me see and interact with my DJ set lists in an entirely new way. The current state of the app is just the first stepping stone to a truly innovative and creative way to work with your playlists.

Imagine being able to tag your songs like you would in any DJ software, or import existing tags and sort by what ever you wanted, while also visualizing them in chronological order. Drag and drop functionality would make this smooth and intuitive.

The ultimate goal of Chromatify is to give DJs and playlist curators another dimension with which to see their finished creation. Just as a finished mix gives you a full wave form after the fact, Chromatify would give you many other visualization options before committing to mixing.

# Unsolved Problems
I need to do more research to properly implement and favorites feature.

Spotify's API is more complicated than expected and in-app details pages were planned, but postponed.

# List of Technologies Used
JavaScript, MongoDB, Express

# Installation Instructions / Getting Started
On your local machine:

1. Fork and clone this repo.
2. Navigate to the local repo and type:
  nodemon server.js
3. Head to http://localhost:9000/chromatify to confirm the server is running.
