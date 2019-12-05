const chagatai = {
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
                name: "Chagatai",
                title:"c.1183 - 1242",
                reign: "Reigned 1226 - 1242",
                'data-blurb': "Founder of what would become the Chagatai Khanate. Was never in the successsion discussion as he was known across the empire as being a hot-headed drunk.",
                'data-wiki': "https://en.wikipedia.org/wiki/Chagatai_Khan",
                'data-title': "chingis"
            },
            HTMLclass: "chagatai",
            image: "assets/img/chagatai.jpg",
            children: [
                {
                    text: { 
                        name: "Mutukan",
                        title:"c.??? - 1221",
                        'data-blurb': "Eldest son of Chagatai, killed during the siege of Bamiyan.",
                        'data-wiki': "https://en.wikipedia.org/wiki/Mutukan",
                        'data-title': "chingis"
                    },
                    image: "assets/img/default.jpg",
                    children: [
                        {
                            text: { 
                                name: "Büri",
                                title:"c.??? - 1252",
                                'data-blurb': "Raised by Chagatai after the death of Mutukan. Potentially killed by Batu and Mongke for siding with Oghul Qaimish after Guyuk's death.",
                                'data-wiki': "https://en.wikipedia.org/wiki/B%C3%BCri",
                                'data-title': "chingis"
                            },
                            image: "assets/img/default.jpg",
                            children: [
                                {
                                    text: { 
                                        name: "Qadaqchi",
                                        title:"c. ??? - ???",
                                        'data-blurb': "Son of Buri, grandson of of Mutukan, and great-grandson of Chagatai.",
                                        'data-wiki': "https://en.wikipedia.org/wiki/Chagatai_Khanate#Lineage",
                                        'data-title': "chingis"
                                    },
                                    image: "assets/img/default.jpg",
                                    children: [
                                        {
                                            text: { 
                                                name: "Buqa Temür",
                                                title:"c. ??? - 1282",
                                                reign: "Reigned 1272 - 1282",
                                                'data-blurb': "Possibly killed Negubei, thus Qaidu gave him the position of Khan for the Chagatai Khanate. Seen as a helpless Khan who could never impose much authority.",
                                                'data-wiki': "https://en.wikipedia.org/wiki/Buqa_Tem%C3%BCr",
                                                'data-title': "chingis"
                                            },
                                            HTMLclass: "chagatai",
                                            image: "assets/img/default.jpg",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            text: { 
                                name: "Qara Hülegü",
                                title:"c.??? - 1252",
                                reign: "Reigned 1242 - 1246, 1252",
                                'data-blurb': "Appointed heir of the Chagatai Khanate appointed by Chagatai and Ogodei. Deposed in 1246 by Guyuk but Mongke reinstated him in 1252 for aid against the Ogedeiids.",
                                'data-wiki': "https://en.wikipedia.org/wiki/Qara_H%C3%BCleg%C3%BC",
                                'data-title': "chingis"
                            },
                            HTMLclass: "chagatai",
                            image: "assets/img/default.jpg",
                            children: [
                                {
                                    text: { 
                                        name: "Mubarak Shah",
                                        title:"c. ??? - 1276",
                                        reign: "Reigned 1252 - 1260, 1266",
                                        'data-blurb': "Successor of his father Yesu Mongke, as well as the first Chagatai Khan to convert to Islam. Was deposed by Ariq Boke in favor of Algu, then regained the throne after Algu's death in 1266. Once again lost to throne due to Kublai's support of Baraq.",
                                        'data-wiki': "https://en.wikipedia.org/wiki/Mubarak_Shah_(Chagatai_Khan)",
                                        'data-title': "chingis"
                                    },
                                    HTMLclass: "chagatai",
                                    image: "assets/img/default.jpg",
                                },
                            ],
                        },
                        {
                            text: { 
                                name: "Yesüntoa",
                                title:"c.??? - ???",
                                'data-blurb': "The father of Baraq and grandson of Chagatai. Never held the position of Khan however much of his immediate family were Khans of Chagatai Khanate.",
                                'data-wiki': "https://en.wikipedia.org/wiki/Yes%C3%BCnto%27a",
                                'data-title': "chingis"
                            },
                            image: "assets/img/default.jpg",
                            children: [
                                {
                                    text: { 
                                        name: "Baraq",
                                        title:"c.??? - 1271",
                                        reign: "Reigned 1266 - 1271",
                                        'data-blurb': "Gained support of Mubarak Shah's army and staged a coup. Had the support of Kublai and gained control of the Chagatai Khanate, however was defeated by Qaidu, which led the Chagatai Khanate to become a puppet state for years to come.",
                                        'data-wiki': "https://en.wikipedia.org/wiki/Ghiyas-ud-din_Baraq",
                                        'data-title': "chingis"
                                    },
                                    HTMLclass: "chagatai",
                                    image: "assets/img/default.jpg",
                                    children: [
                                        {
                                            text: { 
                                                name: "Du'a",
                                                title:"c. ??? - 1307",
                                                reign: "Reigned 1282 - 1307",
                                                'data-blurb': "Longest reigning Khan of the Chagatai Khanate. Appointed by Qaidu to gain the Chagataid support against Kublai. Later gave support to Kublai.",
                                                'data-wiki': "https://en.wikipedia.org/wiki/Duwa",
                                                'data-title': "chingis"
                                            },
                                            HTMLclass: "chagatai",
                                            image: "assets/img/default.jpg",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: { 
                        name: "Yesü Möngke",
                        title:"c.??? - 1252",
                        reign: "Reigned 1246 - 1252",
                        'data-blurb': "Another son of Chagatai appointed to the head of the khanate by Guyuk. Was later deposed by Mongke and sent to the Blue horde where he was potentially executed.",
                        'data-wiki': "https://en.wikipedia.org/wiki/Yes%C3%BC_M%C3%B6ngke",
                        'data-title': "chingis"
                    },
                    HTMLclass: "chagatai",
                    image: "assets/img/default.jpg",
                },
                {
                    text: { 
                        name: "Baidar",
                        title:"c.??? - ???",
                        'data-blurb': "Participated in many of the Mongol conquests in Europe alongside his cousins, specifically against the Russians, Germans, Poles, and more.",
                        'data-wiki': "https://en.wikipedia.org/wiki/Baidar",
                        'data-title': "chingis"
                    },
                    image: "assets/img/baidur.png",
                    children: [
                        {
                            text: { 
                                name: "Alghu",
                                title:"c. ??? - 1265",
                                reign: "Reigned 1260 - 1265",
                                'data-blurb': "Appointed head of the Ilkhanate by Ariq Boke, however during the Toluid Civil War eventually withdrew support for Ariq Boke. Pledged allegiance to Kublai and waged war against Kaidu.",
                                'data-wiki': "https://en.wikipedia.org/wiki/Mubarak_Shah_(Chagatai_Khan)",
                                'data-title': "chingis"
                            },
                            HTMLclass: "chagatai",
                            image: "assets/img/default.jpg",
                        }
                    ]
                },
                {
                    text: { 
                        name: "Sarban",
                        title:"c.??? - ???",
                        'data-blurb': "One of Chagatai's sons. Not much is known about him.",
                        'data-wiki': "https://en.wikipedia.org/wiki/Chagatai_Khanate#Lineage",
                        'data-title': "chingis"
                    },
                    image: "assets/img/default.jpg",
                    children: [
                        {
                            text: { 
                                name: "Negübei",
                                title:"c. ??? - 1272",
                                reign: "Reigned 1271 - 1272",
                                'data-blurb': "Appointed to the head of the khanate by Qaidu, however turned on the latter. Qaidu sent an army against Negubei, forcing him to flee and his eventual death.",
                                'data-wiki': "https://en.wikipedia.org/wiki/Neg%C3%BCbei",
                                'data-title': "chingis"
                            },
                            HTMLclass: "chagatai",
                            image: "assets/img/default.jpg",
                        }
                    ]
                },
            ]
        },
};
var my_chart = new Treant(chagatai, $);
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
