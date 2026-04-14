use std::time::Duration;

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum Genre { Rock, Metal, Alternative }

#[derive(Debug)]
struct AudioTrack<'a> { title: &'a str, duration: Duration, genre: Genre }

impl<'a> AudioTrack<'a> {
    fn new(title: &'a str, seconds: u64, genre: Genre) -> Self {
        Self { title, duration: Duration::from_secs(seconds), genre }
    }

    fn lyric(&self) -> Option<&'static str> {
        match self.title {
            "Hero" => Some("I need a hero to save me now!"),
            "Awake and Alive" => Some("I'm awake, I'm alive!"),
            "Whispers in the Dark" => Some("Can anybody hear me?"),
            _ => None,
        }
    }
}

fn main() {
    let set = [
        AudioTrack::new("Hero", 187, Genre::Rock),
        AudioTrack::new("Awake and Alive", 212, Genre::Alternative),
        AudioTrack::new("Whispers in the Dark", 204, Genre::Metal),
    ];

    for track in set {
        if let Some(lyric) = track.lyric() {
            println!("Playing: {} [{:?}, {}s] - {}", track.title, track.genre, track.duration.as_secs(), lyric);
        }
    }
}
