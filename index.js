var mohamed = -1;
var Owners = ["( الحسن البصري )", "( عمر بن عبد العزيز )", "( الإمام الشافعي )", "( عمر بن الخطاب )", "( عبدالله بن عمر )"]
var Quotes = [" العاقل إذا أخطأ يتأسف - والأحمق إذا أخطأ يتفلسف",
    "ما ندمت علي سكوتي مره - لكنني ندمت علي الكلام مراراً",
    "أحب الناس الي الله أنفعهم للناس",
    " أصلحوا آخرتكم تصلح لكم دنياكم ",
    " الصبر كنز من كنوز الجنة ، وإنما يدرك الإنسان الخير كله بصبر ساعة"
]

function randomNum() {
    do { var num = Math.floor(Math.random() * Owners.length) }
    while (num == mohamed) 
    mohamed = num; 
    document.getElementById("Quote-text").innerHTML = Quotes[num];
    document.getElementById("Quote-owner").innerHTML = Owners[num];

}
