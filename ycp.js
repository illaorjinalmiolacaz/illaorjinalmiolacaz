/******************************************************
* #### jQuery-Youtube-Channels-Playlist ####
* Coded by Ican Bachors 2014.
* http://ibacor.com/labs/jquery-youtube-channels-playlist/
* Updates will be posted to this site.
******************************************************/

var channels_name='IndoPopChannel', //example
channels_title='jQuery plugin by @bachors',
apikey='YOUR GOOGLE API KEY';

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$.C({q:\'D://r.E.s/t/F/12?G=H&13=\'+I+\'&J=\'+K,14:15,L:\'M\'}).N(4(a){6 b=a.7[0].H.16.17,O=a.7[0].18,P=\'\';m(b,K,P,19,O,I)});4 m(f,g,h,j,k,l){$.C({q:\'D://r.E.s/t/F/1a?G=9&1b=\'+f+\'&J=\'+g+\'&1c=\'+h,L:\'M\'}).N(4(c){6 d=\'\';d+=\'<3 2="1-8-1d"><5 2="1-1e-n">\'+j+\'</5><Q><5 2="1-8-o">o <a 1f="1g://r.t.s/1h/\'+l+\'" 1i="1j">\'+l+\'</a></5><1k>\';d+=\'<i 2="p p-R-1l S" n="1m T"></i> \';d+=\'<i 2="p p-R-1n U" n="1o T"></i></3><3 2="1-8-1p">\';$.V(c.7,4(i,a){6 b=c.7[i].9.1q.1r;1s(b,i);d+=\'<3 2="1-u" v-w="\'+b+\'"><3 2="1t"><1u 1v="\'+c.7[i].9.1w.1x.q+\'"><5 2="1-8-1y\'+i+\'"></5></3>\';d+=c.7[i].9.n+\'<Q>\';d+=\'<5 2="1-8-o">o \'+c.7[i].9.1z+\'</5></3>\'});d+=\'</3>\';$(\'.1A\').W(d);X(c.x==Y){6 e=$(".1-u").Z("v-w");10(e,k,l)}X(c.x!=Y){$(\'.S\').y(4(){6 a=c.x;m(f,g,a,j,k,l);z A})}$(\'.U\').y(4(){6 a=c.1B;m(f,g,a,j,k,l);z A});$(".1-u").V(4(){$(B).y(4(){6 a=$(B).Z("v-w");$("W, 1C").1D({1E:0},1F);$(\'3\').1G(\'1-8-11\');$(B).1H(\'1-8-11\');10(a,k,l);z A})})})}',62,106,'|ibacordotcom|class|div|function|span|var|items|vid|snippet|||||||||||||youtube_video_list|title|by|fa|url|www|com|youtube|play|data|vvv|prevPageToken|click|return|false|this|ajax|https|googleapis|v3|part|contentDetails|channels_name|key|apikey|dataType|json|done|chid|nekpag|br|fast|ibacordotcom_vid_prev|videos|ibacordotcom_vid_next|each|html|if|null|attr|youtube_det|active|channels|forUsername|crossDomain|true|relatedPlaylists|uploads|id|channels_title|playlistItems|playlistId|pageToken|top|nav|href|http|user|target|_BLANK|hr|backward|Previous|forward|Next|bottom|resourceId|videoId|getwaktu|ibacordotcom_youtube_thumb|img|src|thumbnails|default|tm|channelTitle|ibacordotcom_youtube_channels|nextPageToken|body|animate|scrollTop|500|removeClass|addClass'.split('|'),0,{}))
function youtube_det(vvv,chid,channels_name) {
	$.ajax({
		url: 'http://gdata.youtube.com/feeds/api/videos/' + vvv + '?v=2&alt=jsonc',
		dataType: 'json'
	}).done(function (data) {
		var html = '';
		html += '<iframe src="http://www.youtube.com/embed/' +vvv+ '" allowfullscreen="" frameborder="0" class="ibacordotcom-vid-iframe"></iframe>';
		html += '<div class="ibacordotcom-vid-box"><h1>' + data.data.title + '</h1>';
		html += '<div class="ibacordotcom-vid-box-user"><a href="http://www.youtube.com/channel/' + chid + '" target="_BLANK"><span id="ibacordotcom-user-img"></span> <span class="ibacordotcom-uploader">' + data.data.uploader + '</span></a><i class="fa pull-right fa-2x"> ' + data.data.viewCount.toLocaleString() + 'x</i></div><hr>Share <input type="text" value="http://youtu.be/' + vvv + '" class="ibacordotcom-input" onclick="this.focus();this.select()" readonly="readonly"><i class="fa fa-thumbs-up pull-right"> <span>' + data.data.likeCount.toLocaleString() + '</span></i></div>';
		html += '<div class="ibacordotcom-vid-box"><i class="fa fa-clock-o"> <span>' + _timeSince(new Date(data.data.uploaded).getTime()) + '</span></i><a href="http://www.youtube.com/' + data.data.category + '" target="_BLANK"><i class="fa fa-tags pull-right"> <span>' + data.data.category + '</span></i></a><hr>' + urlify(data.data.description).replace(/\n/g, '<br>') + '<br></div>';
		gplus (channels_name)
		$('.ibacordotcom_vid_play').html(html);
	});
}
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('6 B(c,i){$.m({f:\'C://D.E.n/F/G/H/\'+c+\'?v=2&o=I\',p:\'J\'}).q(6(a){8 b=a.K.L,h=3.4(b/j),k=b-h*j,r=h+\':\'+k;$(\'.t-M-N\'+i).9(r)})}6 O(b){8 c=/(u?:\\/\\/[^\\s]+)/g;5 b.P(c,6(a){5\'<a Q="\'+a+\'" R="S" T="U">\'+a+\'</a>\'})}6 V(c){8 d=\'u://W.X.n/Y/Z/10/\',w=\'/11/12\',l=\'x(y(z(f)))\';$.m({f:d+\'+\'+c+w+\'?13=14&l=\'+l+\'&15=1\',16:17,p:\'18\'}).q(6(a){8 b=a.x,i=0,9=\'\';19(i=0;i<b.1a;i+=1){9+=\'<A 1b="\'+b[i].y.z.f+\'" o="" />\'}$(\'#t-1c-A\').9(9)})}6 1d(a){8 s=3.4((1e 1f()-a)/1g),i=3.4(s/1h);e(i>1){5 i+" 1i 7"}i=3.4(s/1j);e(i>1){5 i+" 1k 7"}i=3.4(s/1l);e(i>1){5 i+" 1m 7"}i=3.4(s/1n);e(i>1){5 i+" 1o 7"}i=3.4(s/j);e(i>1){5 i+" h 7"}5 3.4(s)+" k 7"}',62,87,'|||Math|floor|return|function|ago|var|html|||||if|url||minutes||60|seconds|fields|ajax|com|alt|dataType|done|waktu||ibacordotcom|https||apiend|items|actor|image|img|getwaktu|http|gdata|youtube|feeds|api|videos|jsonc|json|data|duration|vid|tm|urlify|replace|href|rel|nofollow|target|_BLANK|gplus|www|googleapis|plus|v1|people|activities|public|key|AIzaSyCj2GrDSBy6ISeGg3aWUM4mn3izlA1wgt0|maxResults|crossDomain|true|jsonp|for|length|src|user|_timeSince|new|Date|1000|31536000|years|2592000|months|86400|days|3600|hours'.split('|'),0,{}))