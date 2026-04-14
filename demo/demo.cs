using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AudioApp;

public record Track(string Title, int DurationSec, string Genre);

public class SkilletAlbum
{
    public string AlbumName { get; init; } = "Awake";
    public int ReleaseYear { get; init; } = 2009;

    private readonly Track[] _tracks =
    {
        new("Hero", 187, "Hard Rock"),
        new("Monster", 177, "Alternative Metal"),
        new("Awake and Alive", 212, "Symphonic Metal"),
        new("One Day Too Late", 220, "Alternative Rock / Christian Rock"),
    };

    public IEnumerable<Track> GetTracks(string? genreFilter = null) =>
        _tracks.Where(t => genreFilter == null || t.Genre.Contains(genreFilter));

    public async Task ListPlaylistAsync()
    {
        Console.WriteLine($"Album: {AlbumName} ({ReleaseYear})");
        foreach (var track in GetTracks())
        {
            await Task.Delay(50); // Simulate async I/O
            var mins = track.DurationSec / 60;
            var secs = track.DurationSec % 60;
            Console.WriteLine($"  {track.Title,-30} {mins}:{secs:D2} [{track.Genre}]");
        }
    }
}
