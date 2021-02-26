# Music Player

Music Player using ReactJs. On going project.<br>
**Note**: All pictures are taken from [unsplash](www.unsplash.com), which are free to use.<br>

## Usage

### Adding New Songs 
Navigate to the root folder of the project. The folder structure is as follows 

- root/
  - public/
  - src/

Create a nee folder for songs in *public/*
```
cd pubic/
mkdir songs/
cd songs/
```
copy or move the music files in *public/songs/* you wanna add to the player.

### Modifiy the songs files
Navigate to the root folder. Then as follows
```
cd src/
```
Open *songs.js* using any text editor
```
const songs = [
  {
    title: " Life Of The Party",
    artist: "The Weeknd  ",
    src: "./songs/The Weeknd - Life Of The Party.mp3",
  },
  ...
```

replace the current json object with your new song json object 

```
const songs = [
  {
    title: "New Song 1",
    artist: "Artist 1",
    src: "./songs/abc.mp3",
  },
  ...
```

save and to start the npm server
```
cd root/        # change back to root (optional)
npm install     # install all required modules
npm start       # starts the npm dev server 
```





