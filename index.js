var mohamed = -1; // 2
var Owners = ["الإمام الشافعي", "عمر بن الخطاب", "عبدالله بن عمر"]
var Quotes = [" العاقل إذا أخطأ يتأسف - والأحمق إذا أخطأ يتفلسف",
    "ما ندمت علي سكوتي مره - لكنني ندمت علي الكلام مراراً",
    "أحب الناس الي الله أنفعهم للناس"]

function randomNum() {
    do { var num = Math.floor(Math.random() * Owners.length) }
    while (num == mohamed) // 2 == -1 // 3
    mohamed = num; 
    document.getElementById("Quote-text").innerHTML = Quotes[num];
    document.getElementById("Quote-owner").innerHTML = Owners[num];

}
