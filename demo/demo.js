const BAND_NAME = "Skillet";

class AudioPlaylist {
  constructor(album, tracks) {
    this.album = album;
    this.tracks = tracks;
    this.currentTrackIndex = 0;
  }

  getCurrentTrack() {
    return this.tracks[this.currentTrackIndex];
  }

  next() {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    return this.getCurrentTrack();
  }

  displayPlaylist() {
    console.log(`Album: ${this.album} by ${BAND_NAME}`);
    this.tracks.forEach(({ title, duration, genre }, idx) => {
      const mins = Math.floor(duration / 60), secs = duration % 60;
      console.log(`  ${idx + 1}. ${title} [${mins}:${String(secs).padStart(2, "0")}] (${genre})`);
    });
  }
}

const playlist = new AudioPlaylist("Awake", [
  { title: "Hero", duration: 187, genre: "Hard Rock" },
  { title: "Monster", duration: 177, genre: "Alternative Metal" },
  { title: "Awake and Alive", duration: 212, genre: "Symphonic Metal" },
  { title: "One Day Too Late", duration: 220, genre: "Alternative Rock / Christian Rock" },
]);

playlist.displayPlaylist();
console.log(`\nNow playing: ${playlist.getCurrentTrack().title}`);
console.log(`Next: ${playlist.next().title}`);
