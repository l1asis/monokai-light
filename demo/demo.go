package main

import (
	"fmt"
	"time"
)

const BandName = "Skillet"

type Track struct{ Title string; Duration int; Genre string }

func (t Track) Play() string {
	mins, secs := t.Duration/60, t.Duration%60
	return fmt.Sprintf("%s [%d:%02d %s]", t.Title, mins, secs, t.Genre)
}

func main() {
	tracks := []Track{
		{Title: "Hero", Duration: 187, Genre: "Hard Rock"},
		{Title: "Awake and Alive", Duration: 212, Genre: "Symphonic Metal"},
		{Title: "Whispers in the Dark", Duration: 204, Genre: "Alternative Metal"},
	}

	ch := make(chan string, len(tracks))
	for i, t := range tracks {
		go func(idx int, tr Track) {
			time.Sleep(time.Duration(idx*50) * time.Millisecond)
			ch <- fmt.Sprintf("[%s] Playing: %s\n", BandName, tr.Play())
		}(i, t)
	}

	for range tracks {
		fmt.Print(<-ch)
	}
}
