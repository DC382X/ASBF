var r = prompt("Message")
setTimeout(function(){
var e = window.open();
e.document.write('<style>body { background:#fff; font-family:Arial; margin:0; padding:0; }</style><title>Tech</title><h1><center><b><a href="javascript:var z=window.open();z.document.write(&apos;'+r+'&apos;)"> '+r+'</a></b></center></h1>
Base Code: <input value="javascript:var z=window.open();z.document.write(&apos;'+r+'&apos;)" size="152" readonly>
Drag Any To Bookmarks Bar to have for the future.')
},r.length*400)