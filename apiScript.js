/* Here is a lot of functions for this web page to work. Since I have 3 bands, I have 3 main functions (named "load_band"). These functions then call other functions.
	First field is for band info downloaded by the main functions. The main function also calls for "Top 10 tracks!" function (named "tracks_band", showed in 2nd field) 
	and an album function (named "albums_band", showed in 3rd field"). The album functions call for more album functions (if the band has more than 1 album) 
	since there is a specific JSON file for each album. These album functions are called "band_album_x". */
	
	
	// Here are the event listeners which are connected to the band buttons with unique id's.
	
	document.getElementById("bc-btn").addEventListener("click", loadBC);
	document.getElementById("må-btn").addEventListener("click", loadMå);
	document.getElementById("goa-btn").addEventListener("click", loadGoA);
	
	// Functions for the first band button, Blind Channel:

function loadBC() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Blind+Channel&api_key=371f424b6c0bb12311c906a6da34260a%20&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText);  															
			document.getElementById("info").innerHTML = "<span style='font-weight:bold;color:#000000'>" + obj.artist.name + "</span>" + "<hr>" + obj.artist.bio.summary;
						
			// calling for tracks and the first album
			tracksBC();
			albumsBC();
		}												 													
	}			
	
}

	// Function for getting the toptracks info (song name + amount of listeners), limited to 10
	
function tracksBC() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Blind+Channel&limit=10&api_key=371f424b6c0bb12311c906a6da34260a%20&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
			var show = "<table>";
			// heading rows
				show += "<tr>";
					show += "<th id='bc-t'>" + "Song" + "</th>";  
					show += "<th id='bc-t'>" + "Streams" + "</th>";
				show += "</tr>";
				
			// loop for displaying all 10 songs and streams
				for (var i = 0; i < obj.toptracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + obj.toptracks.track[i].name + "</td>";  
						show += "<td id='right'>" + obj.toptracks.track[i].playcount + "</td>";
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("tracks").innerHTML = show;
		}																												
	}	
}
		
	// Functions for the album infos	

function albumsBC() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Blind+Channel&album=Lifestyles+of+the+Sick+%26+Dangerous&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
			var show = "<table>";
			// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/174s/445fe85515ab1be7368b8c1f721ec51c.jpg' </td>"; 
				show += "</tr>";
				
			// loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_1").innerHTML = show;
		}						
	}
																						
	// calling for other albums and their info
	bcAlbum2();
	bcAlbum3();
	bcAlbum4();
}

function bcAlbum2() {
    var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Blind+Channel&album=Violent+Pop&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
			var show = "<table>";
			// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/174s/04f34c5e4b30245d568b6ad09fd46344.jpg' </td>"; 
				show += "</tr>";
				
			// loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_2").innerHTML = show;
		}						
	}
}

function bcAlbum3() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Blind+Channel&album=Blood+Brothers&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
			var show = "<table>";
			// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/174s/5a7bad496124d586ee93256537180660.jpg' </td>"; 
				show += "</tr>";
				
			// loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_3").innerHTML = show;
		}																												
	}
}

function bcAlbum4() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Blind+Channel&album=Revolutions&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
			var show = "<table>";
			// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/174s/d5ae5c899f09b88c580d8d887ad48c24.jpg'' </td>"; 
				//show += "</tr>";
				
			// loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_4").innerHTML = show;
		}																												
	}
}



	// Functions for the second band button, Måneskin:

function loadMå() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Måneskin&api_key=371f424b6c0bb12311c906a6da34260a%20&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var obj = JSON.parse(xmlhttp.responseText);  
			document.getElementById("info").innerHTML = "<span style='font-weight:bold;color:#800000'>" + obj.artist.name + "</span>" + "<hr>" + obj.artist.bio.summary;
						
			// calling for tracks and the first album
			tracksMå();
			albumsMå();
        }
	}		
}

// Function for getting the toptracks info (song name + amount of listeners), limited to 10

function tracksMå() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Måneskin&limit=10&api_key=371f424b6c0bb12311c906a6da34260a%20&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
			var show = "<table>";
			// heading rows
				show += "<tr>";
				    show += "<th id='må-t'>" + "Song" + "</th>";  
				    show += "<th id='må-t'>" + "Streams" + "</th>";
				show += "</tr>";
				
			// loop for displaying all 10 songs
				for (var i = 0; i < obj.toptracks.track.length; i++) {
					show += "<tr>";
						show += "<td>" + obj.toptracks.track[i].name + "</td>";  
						show += "<td id='right'>" + obj.toptracks.track[i].playcount + "</td>";
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("tracks").innerHTML = show;
		}																												
	}
}

	// Functions for the album infos

function albumsMå() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Måneskin&album=RUSH!&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 

				var show = "<table>";
				// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/174s/7b9a7459af674f9f0726df055bccf13d.jpg' </td>"; 
				show += "</tr>";
				
				//loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_1").innerHTML = show;
		}																												
	}
	
	// calling for other albums and their info
	måAlbum2();
	måAlbum3();
	måAlbum4();
}

function måAlbum2() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Måneskin&album=Teatro+d'ira+-+Vol.+I&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 

				var show = "<table>";
				// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/174s/938775f3f9061754f2b64a2e573601ee.jpg' </td>"; 
				show += "</tr>";
				
				//loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_2").innerHTML = show;
		}																												
	}
}

function måAlbum3() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Måneskin&album=Il+ballo+della+vita&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
				var show = "<table>";
			// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/174s/d33c7642ba1cf131fd2660382c786d1f.jpg'</td>"; 
				show += "</tr>";
				
			// loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_3").innerHTML = show;
		}																												
	}
}
	
function måAlbum4() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Måneskin&album=Chosen&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
			var show = "<table>";
			// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/174s/1fe18f6f06775984a4546a7fac8d88bd.png'</td>"; 
				show += "</tr>";
				
			// loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_4").innerHTML = show;
		}																												
	}
}



	// Functions for the third band button, Go_A:

function loadGoA() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Go_A&api_key=371f424b6c0bb12311c906a6da34260a%20&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText);  
			document.getElementById("info").innerHTML = "<span style='font-weight:bold;color:#a6a6a6'>" + obj.artist.name + "</span>" + "<hr>" + obj.artist.bio.summary;
						
			// calling for tracks and the first album
            tracksGoA();	
			albumsGoA();						
		}	
	}
	
}

function tracksGoA() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=Go_A&limit=10&api_key=371f424b6c0bb12311c906a6da34260a%20&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

    xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 
			
			var show = "<table>";
			// heading rows
				show += "<tr>";
				    show += "<th id='goa-t'>" + "Song" + "</th>";  
				    show += "<th id='goa-t'>" + "Streams" + "</th>";
				show += "</tr>";
				
			// loop for displaying all 10 songs
				for (var i = 0; i < obj.toptracks.track.length; i++) {					
					show += "<tr>";
					    show += "<td>" + obj.toptracks.track[i].name + "</td>";  
					    show += "<td id='right'>" + obj.toptracks.track[i].playcount + "</td>";
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("tracks").innerHTML = show;
		}																												
	}	
}

function albumsGoA() {
	var url = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=371f424b6c0bb12311c906a6da34260a&artist=Go_A&album=%23Ідиназвук&format=json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
			var obj = JSON.parse(xmlhttp.responseText); 

			var show = "<table>";
			// heading rows
				show += "<tr>";
					show += "<th width='25%'>" + obj.album.name + "</th>"; 
					show += "<th width='25%'>" + obj.album.playcount + " streams" + "</th>";  
					show += "<th>" + "Song list" + "</th>";
				show += "</tr>";
				show += "<tr>";
					show += "<td rowspan='12'><img src='https://lastfm.freetls.fastly.net/i/u/300x300/0d276722144debdb9ad98ca3b13dfbd5.jpg'</td>"; 
				show += "</tr>";
				
			// loop for displaying the songs of the album
				for (var i = 0; i < obj.album.tracks.track.length; i++) {					
					show += "<tr>";
						show += "<td>" + "" + "</td>";
						show += "<td>" + obj.album.tracks.track[i].name + "</td>";   
					show += "</tr>";
				}
				
			show += "</table>";
			document.getElementById("album_1").innerHTML = show;
			document.getElementById("album_2").innerHTML = "No other albums to show!";
			document.getElementById("album_3").style.display = "none";
			document.getElementById("album_4").style.display = "none";
		} 	
	}
}
