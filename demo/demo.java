package com.music.skillet;

import java.util.List;

record Track(String title, int durationSec, String genre) {}

class SkilletAlbum {
    private final String name;
    private final List<Track> tracks;

    public SkilletAlbum(String name, List<Track> tracks) {
        this.name = name;
        this.tracks = tracks;
    }

    public void displayPlaylist() {
        System.out.println("Album: " + name);
        tracks.stream()
            .forEach(t -> {
                int mins = t.durationSec() / 60;
                int secs = t.durationSec() % 60;
                System.out.printf("  %s [%d:%02d] (%s)%n", t.title(), mins, secs, t.genre());
            });
    }

    public static void main(String[] args) {
        List<Track> tracks = List.of(
            new Track("Hero", 187, "Hard Rock"),
            new Track("Monster", 177, "Alternative Metal"),
            new Track("Awake and Alive", 212, "Symphonic Metal"),
            new Track("One Day Too Late", 220, "Alternative Rock / Christian Rock")
        );
        new SkilletAlbum("Awake", tracks).displayPlaylist();
    }
}
