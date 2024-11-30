export default {
    navigation: {
        home: 'Accueil',
        openSource: 'Open Source'
    },
    home: {
        title: 'ArchX - Cryptographie et informatique',
        welcome: 'Bienvenue sur archX !',
        intro: 'Je suis un étudiant français de 20 ans passionné par la cybersécurité, la cryptographie et bien d\'autres domaines. Je suis actuellement en troisième année de licence en informatique.',
        about: 'J\'ai commencé la programmation avec Python et C et je m\'intéresse principalement à l\'implémentation d\'algorithmes cryptographiques. J\'aime la sécurité et je regarde actuellement des projets open source à ce sujet (comme openSSL) pour commencer à contribuer. J\'ai également été diagnostiqué asperger il y a quelques années.',
        purpose: 'Le but de ce blog est de regrouper les ressources que je trouve. C\'est comme un résumé de mon expérience, de ce qui m\'a aidé et des choses que je veux partager. Vous pouvez également trouver des articles et des write-up que j\'ai écrits ainsi qu\'une bibliothèque que je maintiens avec beaucoup de livres et d\'articles intéressants.',
        contact: 'Contactez-moi ici :'
    },
    openSource: {
        title: 'Open Source',
        description: 'Chaque jour, je découvre des projets open source qui attirent mon attention. Ces projets sont respectueux de la vie privée, innovants ou ouverts aux contributions. Vous trouverez ici une sélection d\'entre eux, classés par catégories.',
        viewMode: {
            all: 'Show All',
            category: 'By Category'
        },
        categories: {
            cryptography: {
                title: 'Cryptography',
                items: {
                    openssl: {
                        title: 'OpenSSL',
                        link: 'https://github.com/openssl/openssl',
                        description: 'A robust, commercial-grade, full-featured Open Source Toolkit for the TLS (formerly SSL), DTLS and QUIC (currently client side only) protocols. The documentation isn\'t the best but you can use openSSL\'s library to include header like BigNum, AES, RSA and have fun with it.'
                    },
                    pycryptodome: {
                        title: 'Pycryptodome',
                        link: 'https://github.com/Legrandin/pycryptodome',
                        description: 'A self-contained cryptographic library for Python. I think this open source repository is the best for beginners to make their first contribution. Issues are easy to understand, the project isn\'t big compare to openSSL and you can have a good overview of the whole project.'
                    },
                    mbedtls: {
                        title: 'MbedTLS',
                        link: 'https://github.com/Mbed-TLS/mbedtls',
                        description: 'An open source, portable, easy to use, readable and flexible TLS library, and reference implementation of the PSA Cryptography API. The documentation is way better than OpenSSL so you can more easily understand the library and code with it.'
                    },
                    zamaai: {
                        title: 'Zama-AI',
                        link: 'https://github.com/zama-ai',
                        description: 'An open source cryptography company building state-of-the-art FHE (Fully Homomorphic Encryption) solutions for blockchain and AI. The project is interesting because it introduces you to FHE and have a bounty program so if your are good and motivated you even can make a bit of money.'
                    },
                    cryptocoding: {
                        title: 'Cryptocoding',
                        link: 'https://github.com/veorq/cryptocoding',
                        description: 'A repository maintained by Jean-Philippe Aumasson, a great cryptographer. It lists "coding rules" for implementations of cryptographic operations, and more generally for operations involving secret or sensitive values. This page is a very good ressource if you want to develop your own implementation. Of course those recommendations aren\'t enought for a well secured implementation but as a beginner it is a good training.'
                    },
                    cs2p: {
                        title: 'CS2P',
                        link: 'https://github.com/C2SP/C2SP',
                        description: 'The Community Cryptography Specification Project is a project that facilitates the maintenance of cryptography specifications using software development methodologies. In other words, C2SP applies the successful processes of open source software development and maintenance to specification documents.'
                    }
                }
            },
            cybersecurity: {
                title: 'Cybersecurity',
                items: {
                    gun: {
                        title: 'GUN',
                        link: 'https://github.com/amark/gun',
                        description: 'A peer2peer protocol that share data between several machines in live. With encryption, serializaion of the data and more you can easily build an application based on this protocol like alternative to Youtube, Zoom or Facebook. The protocol is implemented in JS and you can integrate it easily in your HTML with CDNs headers or directly in your JS code.'
                    },
                    pirogueToolSuite: {
                        title: 'PiRogueToolSuite',
                        link: 'https://github.com/PiRogueToolSuite',
                        description: 'An open-source consensual digital forensic analysis and incident response solution. The project consists of an open-source tool suite that provides a comprehensive mobile device forensics and network traffic analysis platform targeting mobile devices, both for Android and iOS. You have two main tools: PiRogue, a RaspberryPI analyzing network traffic in real time and Colander, an incident response and knowledge management platform.'
                    },
                    cyberDefenseMatrix: {
                        title: 'The Cyber Defense Matrix',
                        link: 'https://cyberdefensematrix.com/',
                        description: 'A framework created by @sounilyu to help you expertly navigate the cybersecurity landscape. Basically, this tool help you to visual what aspect of security you need to priorize for your structure or product. It has several use cases and the first dimension of the matrix is based on the NIST Cybersecurity Framework. Read the website to learn more.'
                    }
                }
            },
            ai: {
                title: 'Artificial Intelligence',
                items: {
                    ollama: {
                        title: 'Ollama',
                        link: 'https://github.com/ollama/ollama',
                        description: 'A LLM runners allowing you to interact locally with models like Lalla3, Mistral and more. You can interact with the model through a chat and you can use it for any of your needs. You don\'t even need a GPU, the minimal requirement is a recent CPU for decent performance (like 10th gen for Intel).'
                    },
                    openWebUI: {
                        title: 'Open WebUI',
                        link: 'https://docs.openwebui.com/',
                        description: 'An extensible, feature-rich, and user-friendly self-hosted WebUI designed to operate entirely offline. It supports various LLM runners, including Ollama and OpenAI-compatible APIs.'
                    },
                    mlpack: {
                        title: 'MLpack',
                        link: 'https://github.com/mlpack/mlpack',
                        description: 'A fast, header-only C++ Machine Learning library. It aims to implement a wide array of machine learning methods and functions as a "swiss army knife".'
                    },
                    abTrap: {
                        title: 'AB-TRAP',
                        link: 'https://github.com/c2dc/AB-TRAP',
                        description: 'A step-by-step guide for building a ML model for IDS/IPS.'
                    },
                    realCyberSecurityDatasets: {
                        title: 'Real-CyberSecurity-Datasets',
                        link: 'https://github.com/gfek/Real-CyberSecurity-Datasets',
                        description: 'Public datasets to help you tackle various cyber security problems using Machine Learning or other means.'
                    }
                }
            },
            programming: {
                title: 'Programming',
                subtitles: {
                    web: 'Web Programming',
                    hpc: 'High Performance Computing'
                },
                items: {
                    tauri: {
                        title: 'Tauri',
                        link: 'https://tauri.app/',
                        description: 'A framework for building tiny and fast binaries for cross-platform desktop application. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface. The backend of the application is a rust-sourced binary with an API that the front-end can interact with. Tauri is an alternative to Electron and have the benefit to not be based on Chromium.'
                    },
                    bendLanguage: {
                        title: 'Bend language',
                        link: 'https://github.com/HigherOrderCO/Bend',
                        description: 'A promising high-level, massively parallel programming language. Bend have the particularity to parallelize automatically every single mathematical operation allowing you to exploit 100% of your GPU without having to handle thread creation, locks, mutexes, or atomics. Bend is cross-platform, available on WSL2 and can support 10000 concurrent thread. Only Nvidia\'s GPU are supported for the moment.'
                    },
                    algorithmica: {
                        title: 'Algorithmica',
                        link: 'https://en.algorithmica.org/hpc/',
                        description: 'An open-access web book dedicated to the art and science of computing by Sergey Slotin. Its intended audience is everyone from performance engineers and practical algorithm researchers to undergraduate computer science students.'
                    }
                }
            }
        }
    }
}