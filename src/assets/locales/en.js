export default {
    navigation: {
        home: 'Home',
        news: 'News',
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
}