let songs = ["Holding Back The Years", "If You Don't Know Me By Now", "In The Air Tonight"]

function addSong(name) {
    songs.push(name)
    songs.shift()
}

console.log(songs[0])
console.log(songs[1])
console.log(songs[2])
console.log(songs)