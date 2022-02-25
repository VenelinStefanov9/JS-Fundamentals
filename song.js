function solve(arr) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numSong = arr.shift();
  let typeSong = arr.pop();

  for (let i = 0; i < numSong; i++) {
    let [type, name, time] = arr[i].split("_");

    let song = new Song(type, name, time);

    songs.push(song);
  }
  if (typeSong === "all") {
    songs.forEach((a) => console.log(a.name));
  } else {
    let filtered = songs.filter((a) => a.type === typeSong);
    filtered.forEach((a) => console.log(a.name));
  }
}
