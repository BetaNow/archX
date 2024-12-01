export default {
    navigation: {
        home: 'Accueil',
        news: 'Actualités',
        openSource: 'Open Source',
    },
    home: {
        title: 'ArchX - Cryptographie et informatique',
        welcome: 'Bienvenue sur archX !',
        intro: 'Je suis un étudiant français de 20 ans passionné par la cybersécurité, la cryptographie et bien d\'autres domaines. Je suis actuellement en troisième année de licence en informatique.',
        about: 'J\'ai commencé la programmation avec Python et C, et je suis particulièrement intéressé par l\'implémentation d\'algorithmes cryptographiques. J\'aime la sécurité et je regarde actuellement des projets open source dans ce domaine (comme openSSL) pour commencer à y contribuer. J\'ai également été diagnostiqué Asperger il y a quelques années maintenant.',
        purpose: 'Le but de ce blog est de regrouper les ressources que je trouve. C\'est comme un résumé de mon expérience, ce qui m\'a aidé et ce que je veux partager. Vous pouvez également trouver des articles et des write-up que j\'ai écrits ainsi qu\'une bibliothèque que je maintiens avec beaucoup de livres et d\'articles intéressants.',
        contact: 'Contactez-moi ici :'
    },
    news: {
        title: 'Actualités',
        description: 'Voici toutes les sources que j\'utilise pour rester informé sur différents sujets.',
        viewMode: {
            all: 'Tout afficher',
            category: 'Par catégorie'
        },
        categories: {
            cryptography: {
                title: 'Cryptographie',
                items: {
                    schneierOnSecurity: {
                        description: 'Bruce Schneier est un technologue d\'intérêt public, travaillant à l\'intersection de la sécurité, de la technologie et des personnes. Il écrit sur les questions de sécurité sur son blog depuis 2004 et sur sa newsletter depuis 1998.',
                        link: 'https://www.schneier.com/news/',
                        title: 'Schneier on Security: News'
                    },
                    cryptoGram: {
                        description: 'Une newsletter mensuelle gratuite résumant ses articles.',
                        link: 'https://www.schneier.com/crypto-gram/',
                        title: 'Schneier on Security: Crypto-Gram Newsletter'
                    },
                    ePrintArchive: {
                        description: 'Un hub majeur pour les articles de cryptographie dans la communauté. Vous pouvez rechercher des articles par tags et date de publication.',
                        link: 'https://eprint.iacr.org/',
                        title: 'ePrint Archive'
                    },
                    cryptome: {
                        description: 'Cryptome publie des documents interdits par les gouvernements. Vous pouvez également vous abonner à une liste de diffusion.',
                        link: 'https://cryptome.org/',
                        title: 'Cryptome'
                    },
                    arcsi: {
                        description: 'Actualités en cryptographie.',
                        link: 'https://www.arcsi.fr/actualites.php',
                        title: 'ARCSI 🇫🇷'
                    }
                },
            },
            quantumComputing: {
                title: 'Informatique Quantique',
                items: {
                    olivierEzratty: {
                        description: 'Podcast, vidéos et livres sur l\'actualité française de l\'informatique quantique. Olivier Ezratty est un consultant et auteur qui donne des mises à jour fréquentes sur l\'informatique quantique.',
                        link: 'https://www.oezratty.net/wordpress/',
                        title: 'Opinions Libres: Blog d\'Olivier Ezratty 🇫🇷'
                    },
                    pqcChallenge: {
                        description: 'Obtenez toutes les mises à jour sur les nouveaux algorithmes post-quantiques. Ce concours a été créé pour sélectionner de nouveaux cryptosystèmes qui ne seront pas cassés par les ordinateurs quantiques.',
                        link: 'https://csrc.nist.gov/projects/post-quantum-cryptography',
                        title: 'PQC Challenge du NIST'
                    },
                    redditQuantumComputing: {
                        description: 'Bien sûr, Reddit a sa propre communauté pour l\'informatique quantique. Ici, vous pouvez trouver beaucoup de ressources intéressantes, poser des questions et discuter.',
                        link: 'https://www.reddit.com/r/QuantumComputing/',
                        title: 'r/QuantumComputing'
                    }
                },
            },
            ai: {
                title: 'Intelligence Artificielle',
                items: {
                    huggingfaceBlog: {
                        description: 'Hugging Face est principalement connu pour sa plateforme qui permet aux utilisateurs de partager des modèles d\'apprentissage automatique et des jeux de données et de présenter leur travail. Dans ce blog, vous pouvez lire les dernières nouvelles de l\'entreprise, les nouvelles versions de modèles et même des tutoriels.',
                        link: 'https://huggingface.co/blog',
                        title: 'Blog de Hugging Face'
                    },
                    nvidiaNews: {
                        description: 'Dernières actualités de Nvidia. Ce lien fournit également des mises à jour pour le HPC et pas uniquement l\'IA.',
                        link: 'https://nvidianews.nvidia.com/news/latest',
                        title: 'Actualités Nvidia'
                    },
                    openAINews: {
                        description: 'Le blog OpenAI est structuré en plusieurs catégories : Produit, Recherche, Sécurité & alignement, Histoires, Entreprise et Plus. C\'est excellent car vous avez des nouvelles liées à OpenAI mais aussi des actualités globales sur l\'IA.',
                        link: 'https://openai.com/news/',
                        title: 'Actualités OpenAI'
                    }
                },
            },
            cyberSecurity: {
                title: 'Cybersécurité',
                items: {
                    theHackerNews: {
                        description: 'Un site web très célèbre qui relaie les nouvelles de fuites de données, cyberattaques, vulnérabilités et webinaires sur le hacking. Avec THN, vous êtes rapidement informé de toute nouvelle attaque et faille de sécurité.',
                        link: 'https://thehackernews.com/',
                        title: 'The Hacker News'
                    },
                    simpleAnalytics: {
                        description: 'Simple Analytics est une alternative européenne à Google Analytics. Dans ce blog, vous pouvez comprendre pourquoi nous devrions arrêter d\'utiliser Google Analytics et comment SA peut faire la même chose tout en respectant votre vie privée. Une newsletter est également disponible.',
                        link: 'https://www.simpleanalytics.com/blog',
                        title: 'Blog Simple Analytics'
                    },
                    reversingLabs: {
                        description: 'ReversingLabs est une entreprise de cybersécurité qui fournit des logiciels et analyses de sécurité. Leur blog...',
                        link: 'https://www.reversinglabs.com/blog',
                        title: 'ReversingLabs'
                    },
                    polySecure: {
                        description: 'Podcast francophone sur la cybersécurité. Pour les professionnels et les passionnés.',
                        link: 'https://polysecure.ca/',
                        title: 'PolySécure Podcast'
                    }
                },
            },
        },
    },
    openSource: {
        title: 'Open Source',
        description: 'Chaque jour, je découvre des projets open source qui attirent mon attention. Ces projets sont respectueux de la vie privée, novateurs ou propices aux contributions. Ici, vous pouvez en trouver un grand nombre classés par catégories',
        viewMode: {
            all: 'Tout afficher',
            category: 'Par catégorie'
        },
        categories: {
            cryptography: {
                title: 'Cryptographie',
                items: {
                    openssl: {
                        title: 'OpenSSL',
                        link: 'https://github.com/openssl/openssl',
                        description: 'OpenSSL est une boîte à outils Open Source robuste de qualité commerciale pour les protocoles TLS (anciennement SSL), DTLS et QUIC (actuellement côté client uniquement). La documentation n\'est pas la meilleure mais vous pouvez utiliser la bibliothèque OpenSSL pour inclure des en-têtes comme BigNum, AES, RSA et expérimenter avec.'
                    },
                    pycryptodome: {
                        title: 'Pycryptodome',
                        link: 'https://github.com/Legrandin/pycryptodome',
                        description: 'Une bibliothèque cryptographique autonome pour Python. Je pense que ce dépôt open source est le meilleur pour les débutants pour faire leur première contribution. Les problèmes sont faciles à comprendre, le projet n\'est pas grand comparé à OpenSSL et vous pouvez avoir une bonne vue d\'ensemble du projet.'
                    },
                    mbedtls: {
                        title: 'MbedTLS',
                        link: 'https://github.com/Mbed-TLS/mbedtls',
                        description: 'Une bibliothèque TLS open source, portable, facile à utiliser, lisible et flexible, et une implémentation de référence de l\'API PSA Cryptography. La documentation est bien meilleure que celle d\'OpenSSL, vous pouvez donc plus facilement comprendre la bibliothèque et coder avec.'
                    },
                    zamaai: {
                        title: 'Zama-AI',
                        link: 'https://github.com/zama-ai',
                        description: 'Est une entreprise de cryptographie open source qui développe des solutions FHE (Fully Homomorphic Encryption) de pointe pour la blockchain et l\'IA. Le projet est intéressant car il vous initie au FHE et dispose d\'un programme de primes, donc si vous êtes bon et motivé, vous pouvez même gagner un peu d\'argent.'
                    },
                    cryptocoding: {
                        title: 'Cryptocoding',
                        link: 'https://github.com/veorq/cryptocoding',
                        description: 'Est un dépôt maintenu par Jean-Philippe Aumasson, un excellent cryptographe. Il répertorie les \'règles de codage\' pour les implémentations d\'opérations cryptographiques, et plus généralement pour les opérations impliquant des valeurs secrètes ou sensibles. Cette page est une très bonne ressource si vous voulez développer votre propre implémentation. Bien sûr, ces recommandations ne suffisent pas pour une implémentation bien sécurisée, mais en tant que débutant, c\'est un bon entraînement.'
                    },
                    cs2p: {
                        title: 'CS2P',
                        link: 'https://github.com/C2SP/C2SP',
                        description: 'Le Community Cryptography Specification Project est un projet qui facilite la maintenance des spécifications cryptographiques en utilisant des méthodologies de développement logiciel. En d\'autres termes, C2SP applique les processus réussis du développement et de la maintenance de logiciels open source aux documents de spécification.'
                    }
                }
            },
            cybersecurity: {
                title: 'Cybersécurité',
                items: {
                    gun: {
                        title: 'GUN',
                        link: 'https://github.com/amark/gun',
                        description: 'Est un protocole peer2peer qui partage des données entre plusieurs machines en direct. Avec le chiffrement, la sérialisation des données et plus encore, vous pouvez facilement créer une application basée sur ce protocole comme alternative à Youtube, Zoom ou Facebook. Le protocole est implémenté en JS et vous pouvez l\'intégrer facilement dans votre HTML avec les en-têtes CDN ou directement dans votre code JS.'
                    },
                    pirogueToolSuite: {
                        title: 'PiRogueToolSuite',
                        link: 'https://github.com/PiRogueToolSuite',
                        description: 'Est une solution open-source d\'analyse forensique numérique consensuelle et de réponse aux incidents. Le projet consiste en une suite d\'outils open-source qui fournit une plateforme complète d\'analyse forensique et de trafic réseau pour les appareils mobiles, tant pour Android que pour iOS. Vous avez deux outils principaux : PiRogue, un RaspberryPI analysant le trafic réseau en temps réel et Colander, une plateforme de gestion des connaissances et de réponse aux incidents.'
                    },
                    cyberDefenseMatrix: {
                        title: 'The Cyber Defense Matrix',
                        link: 'https://cyberdefensematrix.com/',
                        description: 'Un cadre créé par @sounilyu pour vous aider à naviguer expertement dans le paysage de la cybersécurité. Fondamentalement, cet outil vous aide à visualiser quels aspects de la sécurité vous devez prioriser pour votre structure ou produit. Il a plusieurs cas d\'utilisation et la première dimension de la matrice est basée sur le cadre de cybersécurité du NIST. Lisez le site web pour en savoir plus.'
                    }
                }
            },
            ai: {
                title: 'Intelligence Artificielle',
                items: {
                    ollama: {
                        title: 'Ollama',
                        link: 'https://github.com/ollama/ollama',
                        description: 'Est un exécuteur de LLM permettant d\'interagir localement avec des modèles comme Llama, Mistral et plus encore. Vous pouvez interagir avec le modèle via un chat et l\'utiliser pour tous vos besoins. Vous n\'avez même pas besoin d\'un GPU, la configuration minimale requise est un CPU récent pour des performances décentes (comme la 10e génération pour Intel).'
                    },
                    openWebUI: {
                        title: 'Open WebUI',
                        link: 'https://docs.openwebui.com/',
                        description: 'Est une interface Web auto-hébergée extensible, riche en fonctionnalités et conviviale, conçue pour fonctionner entièrement hors ligne. Elle prend en charge divers exécuteurs de LLM, y compris Ollama et les API compatibles OpenAI.'
                    },
                    mlpack: {
                        title: 'MLpack',
                        link: 'https://github.com/mlpack/mlpack',
                        description: 'Une bibliothèque C++ rapide, header-only pour le Machine Learning. Elle vise à implémenter un large éventail de méthodes et fonctions d\'apprentissage automatique comme un \'couteau suisse\'.'
                    },
                    abTrap: {
                        title: 'AB-TRAP',
                        link: 'https://github.com/c2dc/AB-TRAP',
                        description: 'Est un guide étape par étape pour construire un modèle ML pour IDS/IPS.'
                    },
                    realCyberSecurityDatasets: {
                        title: 'Real-CyberSecurity-Datasets',
                        link: 'https://github.com/gfek/Real-CyberSecurity-Datasets',
                        description: 'Jeux de données publics pour vous aider à résoudre divers problèmes de cybersécurité en utilisant le Machine Learning ou d\'autres moyens.'
                    }
                }
            },
            programming: {
                title: 'Programmation',
                subtitles: {
                    web: 'Programmation Web',
                    hpc: 'Calcul Haute Performance'
                },
                items: {
                    tauri: {
                        title: 'Tauri',
                        link: 'https://tauri.app/',
                        description: 'Est un framework pour créer des binaires légers et rapides pour les applications de bureau multi-plateformes. Les développeurs peuvent intégrer n\'importe quel framework front-end qui compile en HTML, JS et CSS pour construire leur interface utilisateur. Le backend de l\'application est un binaire basé sur Rust avec une API avec laquelle le front-end peut interagir. Tauri est une alternative à Electron et a l\'avantage de ne pas être basé sur Chromium.'
                    },
                    bendLanguage: {
                        title: 'Bend language',
                        link: 'https://github.com/HigherOrderCO/Bend',
                        description: 'Un langage de programmation massivement parallèle de haut niveau prometteur. Bend a la particularité de paralléliser automatiquement chaque opération mathématique vous permettant d\'exploiter 100% de votre GPU sans avoir à gérer la création de threads, les verrous, les mutex ou les atomiques. Bend est multi-plateforme, disponible sur WSL2 et peut supporter 10000 threads simultanés. Seuls les GPU Nvidia sont supportés pour le moment.'
                    },
                    algorithmica: {
                        title: 'Algorithmica',
                        link: 'https://en.algorithmica.org/hpc/',
                        description: 'Est un livre web en accès libre dédié à l\'art et à la science de l\'informatique par Sergey Slotin. Son public cible va des ingénieurs de performance et des chercheurs en algorithmes pratiques aux étudiants de premier cycle en informatique.'
                    }
                }
            }
        }
    }
}