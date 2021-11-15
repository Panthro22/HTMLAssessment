const check = document.getElementsByName();

const name = new URLSearchParams(window.location.search)
const fname = name.get('fname');
const lname = name.get('lname');
const favSport = name.get('sport');
const playedName = name.get('played');
const coachedName = name.get('coached');
const betOnName = name.get('bet on');
const favLevel = name.get("fav_level")
fname.innerHTML = fname;

