// Question 40: Album: Create objects for music albums.
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
console.log(make_album('Artist One', 'The First Album'));
console.log(make_album('Artist Two', 'The Second Album'));
console.log(make_album('Artist Three', 'The Third Album', 20));
