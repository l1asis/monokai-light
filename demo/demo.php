<?php
namespace App\Audio;

class SkilletPlaylist {
    private string $albumName;
    private array $tracks = [];

    public function __construct(string $album) {
        $this->albumName = $album;
    }

    public function addTrack(string $title, int $duration, string $genre): void {
        $this->tracks[] = compact('title', 'duration', 'genre');
    }

    public function listTracks(): void {
        echo "Album: {$this->albumName}\n";
        array_walk($this->tracks, function($t) {
            $mins = (int)($t['duration'] / 60);
            $secs = $t['duration'] % 60;
            printf("  %s [%d:%02d] (%s)\n", $t['title'], $mins, $secs, $t['genre']);
        });
    }
}

$playlist = new SkilletPlaylist("Awake");
$playlist->addTrack("Hero", 187, "Hard Rock");
$playlist->addTrack("Monster", 177, "Alternative Metal");
$playlist->addTrack("Awake and Alive", 212, "Symphonic Metal");
$playlist->addTrack("One Day Too Late", 220, "Alternative Rock / Christian Rock");

$playlist->listTracks();
?>
