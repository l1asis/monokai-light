#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BAND_NAME "Skillet"

typedef struct { char *title; int duration_sec; float rating; } Song;

static char *dup_str(const char *s) {
    size_t n = strlen(s) + 1;
    char *copy = malloc(n);
    if (copy) memcpy(copy, s, n);
    return copy;
}

static Song *create_song(const char *title, int duration_sec, float rating) {
    Song *s = malloc(sizeof(*s));
    if (!s) return NULL;
    s->title = dup_str(title);
    if (!s->title) { free(s); return NULL; }
    s->duration_sec = duration_sec;
    s->rating = rating;
    return s;
}

int main(void) {
    Song *opener = create_song("Monster", 177, 4.8f);
    if (!opener) return 1;
    printf("Now Playing: %s by %s\n", opener->title, BAND_NAME);
    printf("Duration: %02d:%02d | Rating: %.1f/5\n",
           opener->duration_sec / 60, opener->duration_sec % 60, opener->rating);
    free(opener->title);
    free(opener);
    return 0;
}
