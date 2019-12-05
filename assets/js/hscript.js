const horde = {
    chart: {
        container: "#tree-simple",
        animateOnInit: true,
        connectors: {
            type: "step",
            style: {
                stroke: "black"
            }
        },
        rootOrientation: 'NORTH',
        node: {
            collapsable: true,
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
        }
    },
    
    nodeStructure: {
        text: { 
            name: "Jochi",
            title:"c.1182 - 1227",
            'data-blurb': "Eldest son of Chingis Khan, however lineage came into question as he was conceived near the time when Borte got kidnapped. Descendants would go on to form the Golden Horde.",
            'data-wiki': "https://en.wikipedia.org/wiki/Jochi"
        },
        image: "assets/img/jochi.jpg",
        childrenDropLevel: 1,
        children: [
            {
                text: { 
                    name: "Orda",
                    title:"c.1204 - 1251",
                    'data-blurb': "A prominent military strategist known for founding the White Horde, ruling across the eastern portion of the Golden Horde",
                    'data-wiki': "https://en.wikipedia.org/wiki/Orda_Khan",
                    'data-title': "horde"
                },
                image: "assets/img/default.jpg",
            },
            {
                text: { 
                    name: "Batu",
                    title:"c.1205 - 1255",
                    reign: "Reigned 1227 - 1255",
                    'data-blurb': "Founder of the Golden Horde a.k.a the Kipchak Khanate, which encompassed both the White and Blue Horde. Rulers of the Golden Horde were generally also seen as rulers of the Blue Horde, as it encompassed the western portion of the Golden Horde.",
                    'data-wiki': "https://en.wikipedia.org/wiki/Batu_Khan",
                    'data-title': "horde"
                },

                HTMLclass: "horde",
                image: "assets/img/batu.jpg",
                connectors: {
                    type: "bCurve",
                    style: {
                        stroke: "pink",
                        'stroke-width': 20,
                    }
                },
                children: [
                    {
                        text: { 
                            name: "Boraqchin",
                            title:"c.??? - 1257",
                            'data-blurb': "Senior wife of Batu who served as regent of the Golden Horde on behalf of Ulaqchi, due to his young age during the time of his rule. Was ousted from power by Berke following Ulaqchi's death.",
                            'data-wiki': "https://en.wikipedia.org/wiki/Boraqchin_(Tatar)",
                            'data-title': "wife"
                        },
                        image: "assets/img/boraqchin.png",
                        stackChildren: true,
                        children: [
                            {
                                text: { 
                                    name: "Sartaq",
                                    title:"c.1220 - 1256",
                                    reign: "Reigned 1255 - 1256",
                                    'data-blurb': "Short-ruling Khan of the Golden Horde believed to have been poisoned by his uncle Berke.",
                                    'data-wiki': "https://en.wikipedia.org/wiki/Sartaq_Khan",
                                    'data-title': "horde"
                                },
                                HTMLclass: "horde",
                                image: "assets/img/sartaq.jpg",
                            },
                            {
                                text: { 
                                    name: "Ulaqchi",
                                    title:"c.1247 - 1257",
                                    reign: "Reigned 1257 - 1257",
                                    'data-blurb': "Unknown whether Sartaq's brother or son, ascended the throne at a very young age after Sartaq's death under regency of Boraqchin. Thought to have died shortly after.",
                                    'data-wiki': "https://en.wikipedia.org/wiki/Ulaghchi",
                                    'data-title': "horde"
                                },
                                HTMLclass: "horde",
                                image: "assets/img/default.jpg",
                            },
                            {
                                text: { 
                                    name: "Toqoqan",
                                    title:"c.??? - ???",
                                    'data-blurb': "Great-grandson of Chingis Khan. While never holding power himself, many of his descedents would become Khans of the Golden Horde.",
                                    'data-wiki': "https://en.wikipedia.org/wiki/Toqoqan",
                                    'data-title': "horde"
                                },
                                image: "assets/img/default.jpg",
                                children: [
                                    {
                                        text: { 
                                            name: "Möngke Temür",
                                            title:"c.??? - 1280",
                                            reign: "Reigned 1266 - 1280",
                                            'data-blurb': "Was nominated by Kublai however gave support to Qaidu and the Ogedeiids due to their joint campaign with Baraq to invade the Ilkhanate.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/Mengu-Timur",
                                            'data-title': "horde"
                                        },
                                        HTMLclass: "horde",
                                        image: "assets/img/default.jpg",
                                        children: [
                                            {
                                                text: { 
                                                    name: "Toqta",
                                                    title:"c.1270 - 1312",
                                                    reign: "Reigned 1291 - 1312",
                                                    'data-blurb': "Gained power with the help of Nogai. During his reign he focused on limiting the independence of the Russian princes, many of whom were Nogai's allies. This led to conflict between the two.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Toqta",
                                                    'data-title': "horde"
                                                },
                                                HTMLclass: "horde",
                                                image: "assets/img/default.jpg",
                                            },
                                            {
                                                text: { 
                                                    name: "Toghrilcha",
                                                    title:"c.??? - ???",
                                                    'data-blurb': "His father, brother, and son were both rulers of the Golden Horde, but he himself never held the position.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Mengu-Timur",
                                                    'data-title': "horde"
                                                },
                                                image: "assets/img/default.jpg",
                                                children: [
                                                    {
                                                        text: { 
                                                            name: "Öz Beg",
                                                            title:"c.1282 - 1341",
                                                            reign: "Reigned 1313 - 1341",
                                                            'data-blurb': "Longest reigning khan of the Golden Horde underwhich the empire flourished. A prominent supporter of Islam, he encouraged other Mongol elite to convert as well, however did preserve and be tolerate of non-Muslims in the region. Known for having one of the largest armies in the world at the time, making the Golden Horde a dominant force in both Europe and Asia. ",
                                                            'data-wiki': "https://en.wikipedia.org/wiki/%C3%96z_Beg_Khan",
                                                            'data-title': "horde"
                                                        },
                                                        HTMLclass: "horde",
                                                        image: "assets/img/ozbeg.png",
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        text: { 
                                            name: "Tode Möngke",
                                            title:"c.??? - 1287",
                                            reign: "Reigned 1280 - 1287",
                                            'data-blurb': "Converted to Islam in 1283 and was a devout Muslim. Kept in contact with the Mamluk Sultanate due to their common distaste for the Ilkhanate.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/Tode_Mongke",
                                            'data-title': "horde"
                                        },
                                        HTMLclass: "horde",
                                        image: "assets/img/tode.png",
                                    },
                                    {
                                        text: { 
                                            name: "Tartu",
                                            title:"c.??? - ???",
                                            'data-blurb': "Not much known about this man. He was a son of Toqoqan and grandson of Batu.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/Toqoqan",
                                            'data-title': "horde"
                                        },
                                        image: "assets/img/default.jpg",
                                        children: [
                                            {
                                                text: { 
                                                    name: "Talabuga",
                                                    title:"c.??? - 1291",
                                                    reign: "Reigned 1287 - 1291",
                                                    'data-blurb': "While mainly focused on Europe, was famous for sending the Jochiid armies through the Caucasus mountains to invade the Ilkhanate. Was likely ambushed and killed by Toqta.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Talabuga",
                                                    'data-title': "horde"
                                                },
                                                HTMLclass: "horde",
                                                image: "assets/img/default.jpg",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    }
                ]

            },
            {
                text: { 
                    name: "Berke",
                    title:"c.1208 - 1266",
                    reign: "Reigned 1257 - 1266",
                    'data-blurb': "Known for being the first Khan to embrace Islam, would would lead to conflict with the Ilkhanate's conquests towards the caliphate.",
                    'data-wiki': "https://en.wikipedia.org/wiki/Berke",
                    'data-title': "horde"
                },
                HTMLclass: "horde",
                image: "assets/img/berke.jpg",
            },
        ]
    },
};
var my_chart = new Treant(horde, $);
// $('svg').addClass('dragscroll');

$('.node').on('click', function() {
    console.log($(this).children(".node-name").text())
    console.log($(this).data("blurb"))
    console.log($(this).data("wiki"))

    const name = $(this).children(".node-name").text()
    const blurb = $(this).data("blurb")
    const wiki = $(this).data("wiki")

    $('#info').html(
        `
        <div> <h>${name}</h> <a href=${wiki}>Wikipedia</a></div>
        <p>${blurb}</p>
        
        `
    )
});
