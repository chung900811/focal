const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
	console.log(`p01: ${library.playlists.p01.name} - ${library.playlists.tracks.length} tracks`);
	console.log(`p02: ${library.playlists.p02.name} - ${library.playlists.tracks.length} tracks`);
}


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
	console.log(`t01: ${library.tracks.t01.name} by ${library.tracks.t01.artist} (${library.tracks.t01.album})`)
	console.log(`t02: ${library.tracks.t02.name} by ${library.tracks.t02.artist} (${library.tracks.t02.album})`)
	console.log(`t03: ${library.tracks.t03.name} by ${library.tracks.t03.artist} (${library.tracks.t03.album})`)
}


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
	console.log(`p01: ${library.playlists.p01.name} - ${library.playlists.p01.tracks.length} tracks`);
	console.log(`t01: ${library.tracks.t01.name} by ${library.tracks.t01.artist} (${library.tracks.t01.album})`)
	console.log(`t02: ${library.tracks.t02.name} by ${library.tracks.t02.artist} (${library.tracks.t02.album})`)
	
}


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
	const addTrack = library.playlists[playlistId]
	addTrack.push(trackId);
}


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const newTrack = function(name, artist, album) {
	let getId = generateUid();
	library.id = getId;
	library.id.name = name;
	library.id.artist = artist;
	library.id.album = album;
}
}


// adds a playlist to the library
const addPlaylist = function(name) {
	let getId = generateUid();
	library.playlists.id = getId;
	library.playslists.id.name = name;
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}
