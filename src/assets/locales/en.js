export default {
    navigation: {
        home: 'Home',
        openSource: 'Open Source',
    },
    home: {
        title: 'ArchX - Cryptography and computing',
        welcome: 'Welcome to archX !',
        intro: 'I\'m a 20 year old french student interested in cybersecurity, cryptography and many other stuff. I\'m currently in the third year of a Bachelor in computer science.',
        about: 'I started programmation with python and C and I\'m mostly interested in implementing cryptographic algorithm. I love security and I\'m curently looking at open source project about that (like openSSL) to start contributing. I\'ve also been diagnosed asperger a few years ago now.',
        purpose: 'The purpose of this blog is to group ressources I\'m finding. It is like a summary of my experience, what helped me and thing I want to share. You also can find articles and write-up that I wrote and a library that I\'m maintaining whith a lot of interesting books and papers.',
        contact: 'Contact me here :'
    },
    openSource: {
        title: 'Open Source',
        description: 'Each days I\'m discovering open source project that pull my attention. Those projects are privacy friendly, game-changing or friendly to contribution. Here you can find a bunch of them listed by categories',
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
                        description: 'Est un dépôt maintenu par Jean-Philippe Aumasson, un excellent cryptographe. Il répertorie les "règles de codage" pour les implémentations d\'opérations cryptographiques, et plus généralement pour les opérations impliquant des valeurs secrètes ou sensibles. Cette page est une très bonne ressource si vous voulez développer votre propre implémentation. Bien sûr, ces recommandations ne suffisent pas pour une implémentation bien sécurisée, mais en tant que débutant, c\'est un bon entraînement.'
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
                        description: 'Une bibliothèque C++ rapide, header-only pour le Machine Learning. Elle vise à implémenter un large éventail de méthodes et fonctions d\'apprentissage automatique comme un "couteau suisse".'
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