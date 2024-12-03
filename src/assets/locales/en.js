export default {
    navigation: {
        home: 'Home',
        news: 'News',
        openSource: 'Open Source',
        forum: 'Forum',
        articles: 'Articles',
        writeUp: 'Write-Up',
        ressource: 'Ressources',
    },
    home: {
        title: 'ArchX - Cryptography and computing',
        welcome: 'Welcome to archX !',
        intro: 'I\'m a 20 year old french student interested in cybersecurity, cryptography and many other stuff. I\'m currently in the third year of a Bachelor in computer science.',
        about: 'I started programmation with python and C and I\'m mostly interested in implementing cryptographic algorithm. I love security and I\'m curently looking at open source project about that (like openSSL) to start contributing. I\'ve also been diagnosed asperger a few years ago now.',
        purpose: 'The purpose of this blog is to group ressources I\'m finding. It is like a summary of my experience, what helped me and thing I want to share. You also can find articles and write-up that I wrote and a library that I\'m maintaining whith a lot of interesting books and papers.',
        contact: 'Contact me here :'
    },
    news: {
        title: 'News',
        description: 'Here are all the sources I use to stay informed about several topics.',
        viewMode: {
            all: 'Show All',
            category: 'By Category'
        },
        categories: {
            cryptography: {
                title: 'Cryptography',
                items: {
                    schneierOnSecurity: {
                        description: 'Bruce Schneier is a public-interest technologist, working at the intersection of security, technology, and people. He\'s been writing about security issues on his blog since 2004 and on his newsletter since 1998.',
                        link: 'https://www.schneier.com/news/',
                        title: 'Schneier on Security: News'
                    },
                    cryptoGram: {
                        description: 'A free monthly newsletter digest from his posts.',
                        link: 'https://www.schneier.com/crypto-gram/',
                        title: 'Schneier on Security: Crypto-Gram Newsletter'
                    },
                    ePrintArchive: {
                        description: 'A major hub for cryptography papers in the community. You can search for papers by tags and release date.',
                        link: 'https://eprint.iacr.org/',
                        title: 'ePrint Archive'
                    },
                    cryptome: {
                        description: 'Cryptome publishes documents prohibited by governments. You can also subscribe to a mailing list.',
                        link: 'https://cryptome.org/',
                        title: 'Cryptome'
                    },
                    arcsi: {
                        description: 'Cryptography news.',
                        link: 'https://www.arcsi.fr/actualites.php',
                        title: 'ARCSI 🇫🇷'
                    }
                },
            },
            quantumComputing: {
                title: 'Quantum Computing',
                items: {
                    olivierEzratty: {
                        description: 'Podcast, videos and books about French quantum computing news. Olivier Ezratty is a consultant and book writer that gives frequent updates about Quantum computing.',
                        link: 'https://www.oezratty.net/wordpress/',
                        title: 'Opinions Libres: Olivier Ezratty\'s blog 🇫🇷'
                    },
                    pqcChallenge: {
                        description: 'Get all the updates about brand new post-quantum algorithms. This contest was created to select new cryptosystems that won\'t be broken by quantum computers.',
                        link: 'https://csrc.nist.gov/projects/post-quantum-cryptography',
                        title: 'PQC Challenge from NIST'
                    },
                    redditQuantumComputing: {
                        description: 'Of course, Reddit has its own community for QC. Here you can find a lot of interesting resources, ask questions and chat.',
                        link: 'https://www.reddit.com/r/QuantumComputing/',
                        title: 'r/QuantumComputing'
                    }
                },
            },
            ai: {
                title: 'Artificial Intelligence',
                items: {
                    huggingfaceBlog: {
                        description: 'Hugging Face is mainly known for its platform that allows users to share machine learning models and datasets and showcase their work. In this blog, you can read about the latest company news, new model releases, and even tutorials.',
                        link: 'https://huggingface.co/blog',
                        title: 'Hugging Face\'s blog'
                    },
                    nvidiaNews: {
                        description: 'Latest news about Nvidia. This link also provides updates for HPC and not only AI.',
                        link: 'https://nvidianews.nvidia.com/news/latest',
                        title: 'Nvidia news'
                    },
                    openAINews: {
                        description: 'The OpenAI blog is structured into several categories: Product, Research, Safety & alignment, Stories, Company and Browse more. This is great because you have OpenAI-related news but also global news about AI.',
                        link: 'https://openai.com/news/',
                        title: 'OpenAI news'
                    }
                },
            },
            cyberSecurity: {
                title: 'Cybersecurity',
                items: {
                    theHackerNews: {
                        description: 'A very famous website that relays news of data breaches, cyberattacks, vulnerabilities and webinars about hacking. With THN, you are quickly notified of any new attacks and security breaches.',
                        link: 'https://thehackernews.com/',
                        title: 'The Hacker News'
                    },
                    simpleAnalytics: {
                        description: 'Simple Analytics is a European-based alternative to Google Analytics. In this blog, you can understand why we should stop using Google Analytics and how SA can do the same thing while respecting your privacy. A newsletter is also available.',
                        link: 'https://www.simpleanalytics.com/blog',
                        title: 'Simple Analytics blog'
                    },
                    reversingLabs: {
                        description: 'ReversingLabs is a cybersecurity company that provides security software and analysis. Their blog...',
                        link: 'https://www.reversinglabs.com/blog',
                        title: 'ReversingLabs'
                    },
                    polySecure: {
                        description: 'French-language podcast about cybersecurity. For professionals and enthusiasts.',
                        link: 'https://polysecure.ca/',
                        title: 'PolySécure Podcast'
                    }
                },
            },
        },
    },
    openSource: {
        title: 'Open Source',
        description: 'Every day, I discover open-source projects that catch my attention. These projects are privacy-friendly, game-changing, or welcoming to contributions. Here, you can find a selection of them listed by category.',
        viewMode: {
            all: 'View All',
            category: 'By Category'
        },
        categories: {
            cryptography: {
                title: 'Cryptography',
                items: {
                    openssl: {
                        title: 'OpenSSL',
                        link: 'https://github.com/openssl/openssl',
                        description: 'OpenSSL is a robust, commercial-grade, open-source toolkit for TLS (formerly SSL), DTLS, and QUIC (currently client-side only) protocols. The documentation isn’t the best, but you can use the OpenSSL library to include headers like BigNum, AES, RSA, and experiment with them.'
                    },
                    pycryptodome: {
                        title: 'Pycryptodome',
                        link: 'https://github.com/Legrandin/pycryptodome',
                        description: 'A self-contained Python cryptographic library. I think this open-source repository is the best for beginners to make their first contribution. The issues are easy to understand, the project is smaller compared to OpenSSL, and you can get a good overview of the project.'
                    },
                    mbedtls: {
                        title: 'MbedTLS',
                        link: 'https://github.com/Mbed-TLS/mbedtls',
                        description: 'An open-source, portable, easy-to-use, readable, and flexible TLS library and reference implementation of the PSA Cryptography API. The documentation is much better than OpenSSL’s, so it’s easier to understand and code with.'
                    },
                    zamaai: {
                        title: 'Zama-AI',
                        link: 'https://github.com/zama-ai',
                        description: 'An open-source cryptography company developing cutting-edge Fully Homomorphic Encryption (FHE) solutions for blockchain and AI. The project is interesting as it introduces you to FHE and has a bounty program, so if you’re skilled and motivated, you can even earn some money.'
                    },
                    cryptocoding: {
                        title: 'Cryptocoding',
                        link: 'https://github.com/veorq/cryptocoding',
                        description: 'A repository maintained by Jean-Philippe Aumasson, an excellent cryptographer. It lists "coding rules" for implementing cryptographic operations and, more generally, for operations involving secret or sensitive values. This page is a great resource if you want to develop your own implementation. Of course, these recommendations alone aren’t enough for a well-secured implementation, but as a beginner, it’s good practice.'
                    },
                    cs2p: {
                        title: 'CS2P',
                        link: 'https://github.com/C2SP/C2SP',
                        description: 'The Community Cryptography Specification Project facilitates maintaining cryptographic specifications using software development methodologies. In other words, CS2SP applies the successful processes of open-source software development and maintenance to specification documents.'
                    }
                }
            },
            cybersecurity: {
                title: 'Cybersecurity',
                items: {
                    gun: {
                        title: 'GUN',
                        link: 'https://github.com/amark/gun',
                        description: 'A peer-to-peer protocol that shares data between multiple machines live. With encryption, data serialization, and more, you can easily build an application based on this protocol as an alternative to YouTube, Zoom, or Facebook. The protocol is implemented in JS and can be integrated easily into your HTML with CDN headers or directly in your JS code.'
                    },
                    pirogueToolSuite: {
                        title: 'PiRogueToolSuite',
                        link: 'https://github.com/PiRogueToolSuite',
                        description: 'An open-source solution for consensual digital forensic analysis and incident response. The project includes a suite of tools providing a comprehensive platform for mobile device forensic and network traffic analysis for both Android and iOS. Its two main tools are PiRogue, a Raspberry Pi analyzing real-time network traffic, and Colander, a knowledge management and incident response platform.'
                    },
                    cyberDefenseMatrix: {
                        title: 'The Cyber Defense Matrix',
                        link: 'https://cyberdefensematrix.com/',
                        description: 'A framework created by @sounilyu to expertly navigate the cybersecurity landscape. Essentially, this tool helps you visualize which aspects of security you should prioritize for your structure or product. It has several use cases, and the first dimension of the matrix is based on the NIST cybersecurity framework. Visit the website to learn more.'
                    }
                }
            },
            ai: {
                title: 'Artificial Intelligence',
                items: {
                    ollama: {
                        title: 'Ollama',
                        link: 'https://github.com/ollama/ollama',
                        description: 'An LLM executor that enables local interaction with models like Llama, Mistral, and more. You can interact with the model via chat and use it for all your needs. You don’t even need a GPU; the minimum requirement is a modern CPU for decent performance (e.g., 10th Gen Intel).'
                    },
                    openWebUI: {
                        title: 'Open WebUI',
                        link: 'https://docs.openwebui.com/',
                        description: 'A self-hosted, feature-rich, and user-friendly web interface designed to work entirely offline. It supports various LLM executors, including Ollama and OpenAI-compatible APIs.'
                    },
                    mlpack: {
                        title: 'MLpack',
                        link: 'https://github.com/mlpack/mlpack',
                        description: 'A fast, header-only C++ library for Machine Learning. It aims to implement a wide range of machine learning methods and functions as a "Swiss Army knife."'
                    },
                    abTrap: {
                        title: 'AB-TRAP',
                        link: 'https://github.com/c2dc/AB-TRAP',
                        description: 'A step-by-step guide to building an ML model for IDS/IPS.'
                    },
                    realCyberSecurityDatasets: {
                        title: 'Real-CyberSecurity-Datasets',
                        link: 'https://github.com/gfek/Real-CyberSecurity-Datasets',
                        description: 'Public datasets to help you solve various cybersecurity problems using Machine Learning or other approaches.'
                    }
                }
            },
            programming: {
                title: 'Programming',
                subtitles: {
                    web: 'Web Programming',
                    hpc: 'High-Performance Computing'
                },
                items: {
                    tauri: {
                        title: 'Tauri',
                        link: 'https://tauri.app/',
                        description: 'A framework for creating lightweight, fast binaries for cross-platform desktop applications. Developers can integrate any front-end framework that compiles to HTML, JS, and CSS to build their UI. The backend of the application is a Rust-based binary with an API the front end can interact with. Tauri is an alternative to Electron with the advantage of not being Chromium-based.'
                    },
                    bendLanguage: {
                        title: 'Bend language',
                        link: 'https://github.com/HigherOrderCO/Bend',
                        description: 'A promising high-level, massively parallel programming language. Bend automatically parallelizes every mathematical operation, letting you utilize 100% of your GPU without managing threads, locks, mutexes, or atomics. Bend is cross-platform, available on WSL2, and supports up to 10,000 concurrent threads. Currently, only Nvidia GPUs are supported.'
                    },
                    algorithmica: {
                        title: 'Algorithmica',
                        link: 'https://en.algorithmica.org/hpc/',
                        description: 'A free-access web book dedicated to the art and science of computing by Sergey Slotin. It targets performance engineers, researchers in practical algorithms, and undergraduate computer science students.'
                    }
                }
            }
        }
    },
    forum: {
        title: 'Forum',
        description: 'Your looking for a place with plenty of passionate like you ? You can find here most of the forum/discord server I\'m using.',
        categories: {
            crypto: {
                title: 'r/crypto',
                link: 'https://www.reddit.com/r/crypto/',
                description: 'Reddit main sub for cryptography. You can ask questions, find recent plublished paper and chat with the community.'
            },
            discord: {
                title: 'Cryptohack\'s discord server',
                link: 'https://discord.com/invite/h9E7cna5pV',
                description: 'A wonderful community of cryptographers, you can ask for help, follow the news, share memes and a lot more!'
            },
            slashdot: {
                title: 'Slashdot',
                link: 'https://slashdot.org/',
                description: 'This is a social news website that originally billed itself as "News for Nerds. Stuff that Matters". It features news stories on science, technology, and politics that are submitted and evaluated by site users and editors like a kind of Reddit.'
            }
        }
    },
    articles: {
        title: 'Articles',
        description: 'The most difficult part of writing an article is often finding the time to write it. And also building up the confidence to post it!',
        categories: {
            crypto: {
                title: 'Modular Arithmetic - Congruence 🇫🇷',
                link: 'https://www.reddit.com/r/crypto/',
                description: 'An introductory course on congruences. Suitable for first-year undergraduate science students (L1).'
            },
            discord: {
                title: 'National Mathematics Olympiad 2021 Technological Track 🇫🇷',
                link: 'https://discord.com/invite/h9E7cna5pV',
                description: 'My solutions for an Olympiad problem set organized by the Ministry of Education.'
            }
        }
    },
    writeUp: {
        title: 'Write-Up',
        description: 'The first three write-ups are mine, the others are some interesting ones I\'ve found.',
        items: {
            rsaBookCtf: {
                title: 'RSA book CTF',
                link: 'https://github.com/Bl4omArchie/Write-Up/blob/main/crypto/RsaBookCTF.md',
                description: 'I participated to the second edition of the bookCTF, there is two simple challenge with RSA'
            },
            davinciUtCtf: {
                title: 'DaVinci CTF and utCTF',
                link: 'https://github.com/Bl4omArchie/Write-Up/blob/main/crypto/dvCTF-utCTF.md',
                description: 'Two write-up that I\'ve made on two CTF at the same time. The first challenge is about RSA and the second one DH'
            },
            frankRsa: {
                title: 'Frank, recovering a full RSA private key',
                link: 'https://ret2school.github.io/post/writeuprsa/',
                description: 'A good challenge that I\'v done with a friend at the Midnight Sun CTF. We get a privet key with hidden part and from the clear part, we need to recover the entire key'
            },
            xoringNetwork: {
                title: 'Xoring Network',
                link: 'https://siben.eu/xoring-networks.html',
                description: 'An hard challenge that I tryied at the 2020 FCSC. This challenge is really hard and the code solution is in C and python'
            },
            babyXoringNetwork: {
                title: 'Baby Xoring Network',
                link: 'https://www.hackademint.org/Baby_Xoring_Networks',
                description: 'Same challenge from the same CTF but less hard and you only need python'
            },
            cryptoCTF2020: {
                title: '2020 CryptoCTF',
                link: 'https://hackmd.io/@jack4818/B1RXIH_ZD',
                description: 'All the write-up from the 2020 CryptoCTF by the Cryptohack team'
            },
            cryptoCTF2021: {
                titles: [
                    {
                        title: '2021 CryptoCTF',
                        link: 'https://hackmd.io/DBUeU7cMQlihBUVSYPhJlQ',
                    },
                    {
                        title: '2021 CryptoCTF',
                        link: 'https://hackmd.io/81k7HZi1QVCcxT0rksbGAA',
                    },
                    {
                        title: '2021 CryptoCTF',
                        link: 'https://hackmd.io/p0CTvBKbSpSfFmLLoNjw0Q#Wolf',
                    },
                    {
                        title: '2021 CryptoCTF unsolved flag',
                        link: 'https://blog.cryptohack.org/cryptoctf2021-hard#tiny-ecc'
                    }
                ],
                description: 'All the write-up from the 2021 CryptoCTF by the Cryptohack team (i was into it ! but they were too fast for me xD )'
            },
            fcsc2021: {
                title: '2021 FCSC',
                link: 'https://bitsdeep.com/write-ups/fcsc-2021-write-ups-for-the-crypto-challenges/',
                description: 'You can find all the write-up about crypto of the 2021 FCSC ctf made by Enoent'
            },
            cakeCTF2021: {
                title: 'CakeCTF 2021 Writeups',
                link: 'https://jsur.in/posts/2021-08-29-cakectf-2021-writeups#party-ticket',
                description: 'Nice write-up about coppersmith'
            }
        }
    },
    resources: {
        title: 'Resources',
        description: 'Welcome to my library, I\'m storing nice reading and papers I had to use for my projects',
        researchTips: {
            title: 'Research tips',
            description: 'Here are some tips to search for a document by yourself:',
            tips: [
                {
                    description: 'Use filetype=pdf in your search. You will find exclusively pdf files and you can find all the books you\'re looking for. Try it with the search bar below. For example: Mathematics of Public Key Cryptography filetype=pdf'
                },
                {
                    description: 'Use different search engines like duckduckgo or yandex'
                },
                {
                    description: 'Find websites with pdf databases',
                    links: [
                        { title: 'ePrint', url: 'https://eprint.iacr.org/complete/' },
                        { title: 'IETF datatracker', url: 'https://datatracker.ietf.org/' },
                        { title: 'pdfdrive.com', url: 'https://www.pdfdrive.com/' }
                    ]
                }
            ]
        },
        table: {
            title: 'Title',
            authors: 'Author(s)',
            date: 'Posted',
            description: 'Description',
        },
        categories: {
            cryptography: {
                color: '#bc5041',
                items: [
                    {
                        title: 'SERIOUS CRYPTOGRAPHY a Practical: Introduction to Modern Encryption',
                        authors: 'Jean-Philippe Aumasson',
                        date: '2018',
                        description: 'Interesting book for beginners in cryptography. Talks about classic, modern and quantum cryptography with examples of application in python or golang. Everything is pretty easy to understand and gives you a really good overview of cryptography.',
                        link: 'https://palaiologos.rocks/library/Serious%20Cryptography%20Jean-Philippe%20Aumasson.pdf'
                    },
                    {
                        title: 'Mathematics of Public Key Cryptography',
                        authors: 'Steven Galbraith',
                        date: '2012',
                        description: 'This book gives a rigorous presentation of most of the mathematics underlying public key cryptography. Our main focus is mathematics. We put mathematical precision and rigour ahead of generality, practical issues in real-world cryptography, or algorithmic optimality.',
                        link: 'https://www.math.auckland.ac.nz/~sgal018/crypto-book/main.pdf'
                    },
                    {
                        title: 'An Introduction to Mathematical Cryptography',
                        authors: 'Hoffstein, Jeffrey, Pipher, Jill, Silverman, J.H',
                        description: 'Detailed introduction to elliptic curves and how they\'re used in cryptography, including the "hot" recent topic of elliptic curve pairing-based cryptography. Detailed introduction to lattices and lattice based cryptography.',
                        link: 'https://link.springer.com/book/10.1007/978-1-4939-1711-2'
                    }
                ]
            },
            quantum: {
                color: '#d2aa85',
                items: [
                    {
                        title: 'Understanding Quantum Technologies',
                        authors: 'Olivier Ezratty',
                        date: 'September 27, 2021',
                        description: 'Olivier Ezratty advises and trains businesses and public services in the development of their innovation strategies around deep techs and, in particular, quantum technologies.',
                        link: 'https://www.oezratty.net/wordpress/2021/understanding-quantum-technologies-2021/'
                    },
                    {
                        title: 'Introductory Quantum Computing',
                        description: 'This online document helps absolute beginners to pursue future directions in coding and Quantum Computing. The lesson starts with fundamentals of qubits, quantum gates and quantum circuits and quantum algorithms.',
                        link: 'https://q4quanta.github.io/qcdocs/'
                    }
                ]
            },
            maths: {
                color: '#9361ef',
                items: [
                    {
                        title: '🇫🇷 Animal crossing est NP difficile',
                        description: 'Of course, saying Animal Crossing is NP-Hard is an abuse of language... However, the game mechanics are complex enough to quickly bring up such problems!',
                        link: 'https://bl4omarchie.github.io/archX/pdf/animal_crossing.pdf'
                    },
                    {
                        title: '🇫🇷 PGCD - PPCM Théorèmes de Bézout et de Gauss',
                        authors: 'Paul Milan',
                        date: 'July 15, 2016',
                        description: 'Course with demonstration of GCD, LCM, Bézout\'s and Gauss\'s theorems. Number theory and modular arithmetic',
                        link: 'https://www.lyceedadultes.fr/sitepedagogique/documents/math/mathTermSspe/02_PGCD_PPCM/02_cours_pgcd_ppcm_bezout_gauss.pdf'
                    }
                ]
            },
            standards: {
                color: '#0e95c1',
                items: [
                    {
                        title: 'Digital Signature Standard - FIPS PUB 186-4',
                        authors: 'NIST',
                        date: 'July 2013',
                        description: 'This Standard specifies a suite of algorithms that can be used to generate a digital signature. Digital signatures are used to detect unauthorized modifications to data and to authenticate the identity of the signatory.',
                        link: 'https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.186-4.pdf'
                    },
                    {
                        title: 'Recommendation for Pair-Wise Key Establishment Using Integer Factorization Cryptography',
                        authors: 'NIST',
                        date: 'March 2019',
                        description: 'This Recommendation specifies key establishment schemes using integer factorization cryptography (in particular, RSA).',
                        link: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-56Br2.pdf'
                    },
                    {
                        title: 'Announcing the ADVANCED ENCRYPTION STANDARD (AES)',
                        authors: 'NIST',
                        date: 'November 26, 2001',
                        description: 'FIPS approved standard for the Advanced Encryption Standard (AES) cryptographic algorithm',
                        link: 'https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf'
                    },
                    {
                        title: 'PKCS #1: RSA Cryptography Specifications Version 2.2 - rfc8017',
                        authors: 'Kathleen M. Moriarty, Burt Kaliski, Jakob Jonsson, Andreas Rusch',
                        date: 'November 2016',
                        description: 'This document provides recommendations for the implementation of public-key cryptography based on the RSA algorithm, covering cryptographic primitives, encryption schemes, signature schemes with appendix, and ASN.1 syntax.',
                        link: 'https://datatracker.ietf.org/doc/pdf/draft-moriarty-pkcs1-01.pdf'
                    }
                ]
            }
        }
    }
}