const chingis = {
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
            name: "Chingis Khan",
            title:"c.1162 - 1227",
            reign: "Reigned 1206 - 1227",
            'data-blurb': "Born Temujin, founding father of the Mongol Empire. Known for uniting Mongolia as well as adopting the Uyghur script as the Mongol Empire's writing system",
            'data-wiki': "https://en.wikipedia.org/wiki/Genghis_Khan"
        },
        HTMLclass: "khagan",
        connectors: {
            type: "bCurve",
            style: {
                stroke: "pink",
                'stroke-width': 20,
            }
        },
        image: "assets/img/chingis.jpg",
        children: [
            {
                text: { 
                    name: "Börte Üjin",
                    title:"c.1161 - 1230",
                    'data-blurb': "Grand Empress of the Mongol Empire. Betrothed to Temujin (Chingis) at a young age, and was kidnapped by Merkits early in their lives. Her sons would go on to become the conquerors of all corners of Central Asia.",
                    'data-wiki': "https://en.wikipedia.org/wiki/B%C3%B6rte"
                },
                image: "assets/img/borte.jpg",
                children: [
                    {
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
                    {
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
                    {
                        text: { 
                            name: "Ögedei",
                            title:"c.1186 - 1241",
                            reign: "Reigned 1229 - 1241",
                            'data-blurb': "The consensus successor of Chingis Khan who was responsible for the conquests across Asia and into Europe. Also began the bureaucratization of Mongol administration necessary to rule over the diverse peoples of the empire.",
                            'data-wiki': "https://en.wikipedia.org/wiki/%C3%96gedei_Khan",
                        },
                        HTMLclass: "khagan",
                        image: "assets/img/ogedei.jpg",
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
                                    name: "Töregene",
                                    title:"c.1185 – 1265",
                                    'data-blurb': "Regent of the Mongol Empire after Ogedei's death. Used her influence in this position to sway favor toward's her son Guyuk as the empire's next leader.",
                                    'data-wiki': "https://en.wikipedia.org/wiki/T%C3%B6regene_Khatun",
                                    'data-title': "wife"
                                },
                                image: "assets/img/toregene.jpg",
                                children: [
                                    {
                                        text: { 
                                            name: "Güyük",
                                            title:"c.1206 - 1248",
                                            reign: "Reigned 1246 - 1248",
                                            'data-blurb': "Relationship with his cousins in the Golden Horde highlighted the increasing tensions between Jochiids and the rest of the family. Died en route westwards to meet Batu, presumably to arrest his cousin.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/G%C3%BCy%C3%BCk_Khan",
                                            'data-title': "khagan"
                                        },
                                        HTMLclass: "khagan",
                                        image: "assets/img/guyuk.jpg",
                                        connectors: {
                                            type: "bCurve",
                                            style: {
                                                stroke: "pink",
                                                'stroke-width': 20,
                                            },
                                        },
                                        children: [
                                            {
                                                text: { 
                                                    name: "Oghul Qaimish",
                                                    title:"c.??? - 1251",
                                                    'data-blurb': "Served as regent after the death of Guyuk, and heavily opposed the recognition of any Khan not Ogedeiid. Her efforts were in vain, as the Toluiids and the Golden Horde held their qirultai without her. Was executed during Mongke's reign.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Oghul_Qaimish",
                                                    'data-title': "wife"
                                                },
                                                image: "assets/img/defaultw.png",
                                            }
                                        ],
                                    },
                                    {
                                        text: { 
                                            name: "Godan",
                                            title:"c.1206 - 1251",
                                            'data-blurb': "Administrator over much of China who was one of the first Mongol converts to Buddhism. Had a strong relationship with Sakya Pandita, whose son Phagpa would later become an important figure in Mongol courts.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/Godan_Khan",
                                            'data-title': "chingis"
                                        },
                                        image: "assets/img/default.jpg",
                                    },
                                    {
                                        text: { 
                                            name: "Qashi",
                                            title:"c.??? - ???",
                                            'data-blurb': "Father of Qaidu. Not much is known about this man besides his position in the royal bloodline.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/House_of_%C3%96gedei",
                                            'data-title': "chingis"
                                        },
                                        image: "assets/img/default.jpg",
                                        children: [
                                            {
                                                text: { 
                                                    name: "Qaidu",
                                                    title:"c.1235 - 1301",
                                                    'data-blurb': "Known for his disapproval of Kubali's rule, leading to continuous war with Kublai and his successors for 30 years. Seized much power in the Chagatayid Khanate and represented the Mongol viewpoint that the empire had lost its core identity.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Kaidu",
                                                    'data-title': "chingis"
                                                },
                                                image: "assets/img/qaidu.png",
                                                children: [
                                                    {
                                                        text: {
                                                            name: "Khutulun",
                                                            title:"c.1260 - 1306",
                                                            'data-blurb': "Favorite daughter of Qaidu as well as a fearsome warrior and one of his most trusted advisors. ",
                                                            'data-wiki': "https://en.wikipedia.org/wiki/Khutulun",
                                                            'data-title': "chingis"
                                                        },
                                                        image: "assets/img/khutulun.png",
                                                    }
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: { 
                            name: "Tolui",
                            title:"c.1191 - 1231",
                            'data-blurb': "Looked after the empire following Chingis' death until Ogodei could be confirmed. His descendants, the Toluiids, would go on to shape to the Mongol Empire.",
                            'data-wiki': "https://en.wikipedia.org/wiki/Tolui",
                            'data-title': "chingis"
                        },
                        image: "assets/img/tolui.jpg",
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
                                    name: "Sorghaghtani Beki",
                                    title:"c.1204 – 1252",
                                    'data-blurb': "A Nestorian Christian known to be one of the most powerful and competent people in the Mongol Empire, as well as raising her sons to be the influencial leaders they would go to be.",
                                    'data-wiki': "https://en.wikipedia.org/wiki/Sorghaghtani_Beki",
                                    'data-title': "wife"
                                },
                                image: "assets/img/sorghaghtani.png",
                                children: [
                                    {
                                        text: { 
                                            name: "Möngke",
                                            title:"c.1209 - 1259",
                                            reign: "Reigned 1251 - 1259",
                                            'data-blurb': "Ascended to the throne after vying support from his uncles Batu and Berke, despite opposition from Guyuk's widow Oghul Qaimish. After multiple qirultais, his khanship was confirmed and Oghul Qaimish was thrown into a river for witchcraft.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/M%C3%B6ngke_Khan",
                                            'data-title': "khagan"
                                        },
                                        HTMLclass: "khagan",
                                        image: "assets/img/mongke.jpg",
                                    },
                                    {
                                        text: { 
                                            name: "Kublai",
                                            title:"c.1215 - 1294",
                                            reign: "Reigned 1260 - 1294",
                                            'data-blurb': "Founder of the Yuan Dynasty. Notably had a conflict with his younger brother Ariq Boke in the Toluid Civil War which marked the beginning of the empire's fragmentation and decline. Kublai's title may have been the Great Khan however his influence was largely only in Mongolia and China.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/Kublai_Khan",
                                            'data-title': "khagan"
                                        },
                                        HTMLclass: "yuan",
                                        image: "assets/img/kublai.jpg",
                                        connectors: {
                                            type: "bCurve",
                                            style: {
                                                stroke: "pink",
                                                'stroke-width': 20,
                                            },
                                        },
                                        children: [
                                            {
                                                text: { 
                                                    name: "Chabi",
                                                    title:"c.1225 - 1281",
                                                    'data-blurb': "Favorite wife of Kublai and painted a picture of the role of women in Mongol culture, being Kublai's closest advisor, confidant, and ally in the royal court. Chabi had immense influence within the dynasty and had a large part as a patron of the arts as well as policymaker.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Chabi",
                                                    'data-title': "wife"
                                                },
                                                image: "assets/img/chabi.jpg",
                                                children: [
                                                    {
                                                        text: { 
                                                            name: "Jingim",
                                                            title:"c.1243 - 1286",
                                                            'data-blurb': "Crown prince of the Yuan dynasty, however died before he could ascend to the throne. Believed to have died from alcoholism.",
                                                            'data-wiki': "https://en.wikipedia.org/wiki/Zhenjin",
                                                            'data-title': "chingis"
                                                        },
                                                        image: "assets/img/jingim.png",
                                                        connectors: {
                                                            type: "bCurve",
                                                            style: {
                                                                stroke: "pink",
                                                                'stroke-width': 20,
                                                            },
                                                        },
                                                        children: [
                                                            {
                                                                text: { 
                                                                name: "Kökejin",
                                                                title:"c.??? - ???",
                                                                'data-blurb': "Wife of Jingim from the Khuyngirad tribe. Not to be confused with the Bayaut princess Kököchin in the Ilkhanate.",
                                                                'data-wiki': "https://books.google.com/books?id=OBEIq8kTQBcC&pg=PA148&lpg=PA148&dq=kokejin+khatun&source=bl&ots=gZMFJN1AEI&sig=ACfU3U2jPyICJF7zE_bPeu_A34DQD-JzeQ&hl=en&sa=X&ved=2ahUKEwif74P5s5XmAhXbJDQIHQgWDZ8Q6AEwDnoECBQQAg#v=onepage&q=kokejin%20khatun&f=false",
                                                                'data-title': "wife",
                                                                },
                                                                image: "assets/img/kokechin.jpg",
                                                                children: [
                                                                    {
                                                                        text: {
                                                                            name: "Darmabala",
                                                                            title: "c.1264 - 1293",
                                                                            'data-blurb': "One of Jingim and Kokejin's sons.",
                                                                            'data-wiki': "https://en.wikipedia.org/wiki/K%C3%BCl%C3%BCg_Khan",
                                                                            'data-title': "chingis",
                                                                        },
                                                                        image: "assets/img/default.jpg",
                                                                        children: [
                                                                            {
                                                                                text: {
                                                                                    name: "Külüg",
                                                                                    title:"c.1281 - 1311",
                                                                                    'data-blurb': "Emperor of the Yuan dynasty who focused largely on building Buddhist temples and filling the royal court with many princes and riches.",
                                                                                    'data-wiki': "https://en.wikipedia.org/wiki/K%C3%BCl%C3%BCg_Khan",
                                                                                    'data-title': "khagan",
                                                                                },
                                                                                HTMLclass: "yuan",
                                                                                image: "assets/img/kulug.jpg",
                                                                            }
                                                                        ],
                                                                    },
                                                                    {
                                                                        text: {
                                                                            name: "Temür",
                                                                            title:"c.1265 - 1307",
                                                                            'data-blurb': "Son of the crown prince, the throne went to him after Jingim's untimely death.",
                                                                            'data-wiki': "https://en.wikipedia.org/wiki/Tem%C3%BCr_Khan",
                                                                            'data-title': "khagan",
                                                                        },
                                                                        HTMLclass: "yuan",
                                                                        image: "assets/img/temur.jpg",
                                                                    }
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        text: { 
                                                            name: "Toghon",
                                                            title:"c.??? - 1301",
                                                            'data-blurb': "One of Kublai's sons. Notable for leading the Yuan armies in Vietnam.",
                                                            'data-wiki': "https://en.wikipedia.org/wiki/Toghon_(son_of_Kublai)",
                                                            'data-title': "chingis"
                                                        },
                                                        image: "assets/img/default.jpg",
                                                    }
                                                ],
                                            }
                                        ],
                                    },
                                    {
                                        text: { 
                                            name: "Hulegu",
                                            title:"c.1218 - 1265",
                                            reign: "Reigned 1256 - 1265",
                                            'data-blurb': "Founder of the Ilkhanate and responsible for many of the Mongol conquests in Western Asia. Known for his defeat of the caliphate and shrinkening of Islam in the area.",
                                            'data-wiki': "https://en.wikipedia.org/wiki/Hulagu_Khan",
                                        },
                                        HTMLclass: "ilkhan",
                                        image: "assets/img/hulegu.jpg",
                                        children: [
                                            {
                                                text: { 
                                                    name: "Abaqa",
                                                    title:"c.1234 - 1282",
                                                    reign: "Reigned 1265 - 1282",
                                                    'data-blurb': "Heir of the Ilkhanate after his father Hulegu whose reign was mostly comprised of the civil war with the Golden Horde. Also made attempts to invade Syria.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Abaqa_Khan",
                                                },
                                                HTMLclass: "ilkhan",
                                                image: "assets/img/abaqa.png",
                                                children: [
                                                    {
                                                        text: { 
                                                            name: "Arghun",
                                                            title:"c.1258 - 1291",
                                                            reign: "Reigned 1284 - 1291",
                                                            'data-blurb': "During his rule of the Ilkhanate, sent embassies to Europe to try and form a Franco-Mongol alliance against the Muslims.",
                                                            'data-wiki': "https://en.wikipedia.org/wiki/Arghun",
                                                        },
                                                        HTMLclass: "ilkhan",
                                                        image: "assets/img/arghun.png",
                                                        children: [
                                                            {
                                                                text: { 
                                                                    name: "Ghazan",
                                                                    title:"c.1271 - 1304",
                                                                    reign: "Reigned 1295 - 1304",
                                                                    'data-blurb': "One of the most prominent of the Ilkhans, converted the empire to Islam and is known for going to war with the Mamluks in Syria, as well as his cousins the Chagataiids.",
                                                                    'data-wiki': "https://en.wikipedia.org/wiki/Ghazan",
                                                                },
                                                                HTMLclass: "ilkhan",
                                                                image: "assets/img/ghazan.png",
                                                            }
                                                        ],
                                                    },
                                                    {
                                                        text: { 
                                                            name: "Gaykhatu",
                                                            title:"c.??? - 1295",
                                                            reign: "Reigned 1291 - 1295",
                                                            'data-blurb': "Enthroned to due the absence of his cousin Baidu at the qirultai. Also introduced paper money to the Ilkhanate.",
                                                            'data-wiki': "https://en.wikipedia.org/wiki/Gaykhatu",
                                                        },
                                                        HTMLclass: "ilkhan",
                                                        image: "assets/img/gaykhatu.png",
                                                    },
                                                ],
                                            },
                                            {
                                                text: { 
                                                    name: "Tekunder",
                                                    title:"c.1240 - 1284",
                                                    reign: "Reigned 1282 - 1284",
                                                    'data-blurb': "Turned the Ilkhanate into a sultanate, thus declaring himself the sultan. A convert to Islam, he attempted to make peace with the Mamluks. This angered his nephew Arghun who raised an army and overthrew him.",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Tekuder",
                                                },
                                                HTMLclass: "ilkhan",
                                                image: "assets/img/tekunder.png",
                                            },
                                            {
                                                text: { 
                                                    name: "Taraqai",
                                                    title:"c.??? - 1295",
                                                    'data-blurb': "One of Hulegu's sons. The father of Baidu",
                                                    'data-wiki': "https://en.wikipedia.org/wiki/Ilkhanate",
                                                },
                                                image: "assets/img/default.jpg",
                                                children: [
                                                    {
                                                        text: { 
                                                            name: "Baidu",
                                                            title:"c.??? - 1295",
                                                            reign: "Reigned 1295 - 1295",
                                                            'data-blurb': "Easy-going ruler of the Ilkhan put in power by the Mongol commander Ta'achar who had arranged the death of many Ilkhan Khans before him. Largely a puppet ruler, was eventually ousted from power by his cousin Ghazan.",
                                                            'data-wiki': "https://en.wikipedia.org/wiki/Baydu",
                                                        },
                                                        HTMLclass: "ilkhan",
                                                        image: "assets/img/baidu.png",
                                                    }
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        text: { 
                                            name: "Ariq Böke",
                                            title:"c.1219 - 1266",
                                            reign: "Reigned 1259 - 1264",
                                            'data-wiki': "",
                                            'data-title': "khagan",
                                            'data-blurb': "Brother of Kublai, who after the death of Mongke, also laid claim to the throne. This led to a conflict between him and Kublai known as the Toluid civil war, which Ariq Boke would go on to lose. Ariq Boke was supported by the traditionalists in the empire, while Kublai was supported by the others.",
                                        },
                                        HTMLclass: "khagan",
                                        image: "assets/img/ariq.jpg",
                                    },
                                ]
                            },
                        ],
                    },
                ]
            },
        ],
    },
};
var my_chart = new Treant(chingis, $);

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
