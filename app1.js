//Ex 1:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
  class Song {

         private artist: string;
         private title: string;

         constructor(artist: string, title: string) {
             this.artist = artist;
             this.title = title;
         }

         play() {
          console.log('Playing ' + this.title + ' by ' + this.artist);
         }
         
     }
     
     let s = new Song("basu" , "Mr.")
     s.play();
     
     */
//Ex 2:
/*

  class Song {
   constructor(private artist: string, private title: string) {  }
   play() {
       console.log('Playing: ' + this.title + ', by ' + this.artist);
   }
}


   class Jukebox {
   constructor(private songs: Song[]) {
   }

   play() {
       var song = this.getRandomSong();
       song.play();
   }

   private getRandomSong() {
       var songCount = this.songs.length;
       var songIndex = Math.floor(Math.random() * songCount);

       return this.songs[songIndex];
   }
}

let songs = [
   new Song('Arijit Singh', 'Ae Dil Hai Mushkil'),
   new Song('Amit Mishra & Shilpa Rao', 'Bulleya'),
   new Song('Armaan Malik & Neeti Mohan', 'Sau Aasmaan'),
   new Song('Arijit Singh', 'Lo Maan Liya'),
   new Song('Palak Muchhal', 'Kaun Tujhe')
];

let jukebox = new Jukebox(songs);
jukebox.play();



interface Audio {play(): any; }

class Song implements Audio {
   constructor(private artist: string, private title: string) { }

   play(): void {
       console.log('Playing: ' + this.title + ' by ' + this.artist);
   }

   static Comparer(a: Song, b: Song) {
       if (a.title === b.title) { return 0;  }
       return a.title > b.title ? 1 : -1;
   }
}

class Playlist {
   constructor(public songs: Audio[]) { }
   play() {
       var song = this.songs.pop();
       song.play();
   }
   sort() {this.songs.sort(Song.Comparer); }
}

class RepeatingPlaylist extends Playlist {
   private songIndex = 0;
   constructor(songs: Song[]) { super(songs); }
   play() {
       this.songs[this.songIndex].play;
       this.songIndex++;
       if (this.songIndex >= this.songs.length) {
           this.songIndex = 0;
       }
   }
}

var songs = [
   new Song('Arijit Singh', 'Ae Dil Hai Mushkil'),
   new Song('Amit Mishra & Shilpa Rao', 'Bulleya'),
   new Song('Armaan Malik & Neeti Mohan', 'Sau Aasmaan'),
   new Song('Armaan Malik & Neeti Mohan', 'Sau Aasmaan'),
   new Song('Arijit Singh', 'Lo Maan Liya'),
   new Song('Palak Muchhal', 'Kaun Tujhe')
];

var myplist = new Playlist(songs) ;
myplist.play();

*/
//Ex 4
/*
     class Display { name: string = ''; }

    class Television extends Display { }

    class HiFi { }
    
    class Describer{
                
     static getName(name :Object ) : string{
        
            return ;
        }
    }
       
    
    var tv = new Television();
    var radio = new HiFi();

    var tvType = Describer.getName(tv);
    var radioType = Describer.getName(radio);
    console.log(tvType, radioType );
    
    */
var Display = (function () {
    function Display() {
        this.name = '';
    }
    return Display;
}());
var Television = (function (_super) {
    __extends(Television, _super);
    function Television() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Television;
}(Display));
var HiFi = (function () {
    function HiFi() {
    }
    return HiFi;
}());
var Describer = (function () {
    function Describer() {
    }
    Describer.getName = function (instance) {
        return (instance.constructor.name);
    };
    return Describer;
}());
var tv = new Television();
var radio = new HiFi();
var tvType = Describer.getName(tv);
var radioType = Describer.getName(radio);
console.log(tvType, radioType);
