#!/usr/bin/env python3

import asyncio
from typing import Dict

SHOW_NEXT_DELAY = 0x1F4 / 100  # 5.0 seconds


class Song:
    def __init__(
        self, title: str, artist: str, duration: int, **meta: str | int
    ) -> None:
        self.title, self.artist, self.duration = title, artist, duration
        self.meta: Dict[str, str | int] = meta

    def __str__(self) -> str:
        return (
            f"{self.title} by {self.artist} [{self.duration:.1f}s] "
            + f"({', '.join(f'{k}: {v}' for k, v in self.meta.items())})"
        )


async def main():
    songs = [
        Song("Moonlit", "Falling Up", 212, album="Dawn Escapes", year=2005),
        Song("Hero", "Skillet", 187, album="Awake", year=2009),
    ]

    for song in songs:
        print(song)
        await asyncio.sleep(SHOW_NEXT_DELAY)


if __name__ == "__main__":
    asyncio.run(main())
