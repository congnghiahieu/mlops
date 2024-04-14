import React from 'react'
import placeholderImage from 'src/assets/images/placeholder.png';
import logo from 'src/assets/images/logo.png';

export default function Home() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [flyer, setFlyer] = React.useState(false);
    const [flyerTwo, setFlyerTwo] = React.useState(false);

    return (<>
        <div className="text-black bg-black">
            <header class="fixed top-0 w-full clearNav z-50 backdrop-blur-2xl">
                <div class="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
                    <div className="flex flex-row items-center justify-between p-3 md:p-1">
                        <a
                            href="/"
                            class="flex text-3xl text-white font-medium mb-4 md:mb-0"
                        >
                            <img src={logo} width={150} alt="logo" />
                        </a>
                        <button
                            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
                            type="button"
                            aria-label="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-menu"
                            >
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "md:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <div class="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
                            <a class="mr-11 pr-2 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
                                Features
                            </a>
                            <div className="relative">
                                <button
                                    type="button"
                                    className="
                   group rounded-md text-gray-300 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                                    onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
                                >
                                    <span className="tr04">Templates</span>
                                    <svg
                                        className={
                                            flyer === true
                                                ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                                                : "ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                        }
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                <div
                                    onMouseLeave={() => setFlyer(false)}
                                    className={
                                        flyer
                                            ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                            : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                    }
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-black px-2 py-6 sm:gap-8 ">
                                            <a
                                                href="/"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                                            >
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-white">
                                                        NINE4 TEMPLATE #1
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        First Template
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="/"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                                            >
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-white">
                                                        NINE4 TEMPLATE #2
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Second Template
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                href="/"
                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-800 tr04"
                                            >
                                                <div className="ml-4">
                                                    <p className="text-base font-medium text-white">
                                                        NINE4 TEMPLATE #3
                                                    </p>
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        Third Template
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
                                Pricing
                            </a>
                            <a class="mr-5 cursor-pointer text-gray-300 hover:text-white font-semibold tr04">
                                Careers
                            </a>
                        </div>
                        <a
                            href="/login"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="px-3 py-1 border rounded-md text-white hover:border-blue-400 hover:text-blue-400"
                        >
                            login
                        </a>
                    </div>
                </div>
            </header>

            <section class="text-gray-600 body-font">
                <div class="max-w-5xl pt-52 pb-24 mx-auto">
                    <h1 class="text-center text-7xl lh-6 ld-04 font-bold text-white mb-6">
                        Build your own Model<br /> fast and easy
                    </h1>
                    <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
                        Pixel Brain is a free to use template website for websites made
                        <br />
                        with Next.js and styled with Tailwind CSS
                    </h2>
                    <div className="text-center">
                        <a
                            className="inline-flex items-center py-3 font-semibold tracking-tighter text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
                            href="/login"
                        >
                            <div className="flex text-lg">
                                <span className="justify-center capitalize tracking-wide">GET STARTED</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto">
                    <img
                        className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
                        alt="Placeholder Image"
                        src={placeholderImage}
                    ></img>
                </div>
                <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
                    Clean and tidy code.
                </h2>
                <br></br>
                <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
                    Here is our collection of free to use templates made with Next.js &
                    styled with Tailwind CSS.
                </p>
                <div className="pt-12 pb-24 max-w-4xl mx-auto fsac4 md:px-1 px-3">
                    <div class="ktq4">
                        <h3 class="pt-3 font-semibold text-lg text-white">
                            Lorem ipsum dolor sit amet
                        </h3>
                        <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                            porttitor.
                        </p>
                    </div>
                    <div class="ktq4">
                        <h3 class="pt-3 font-semibold text-lg text-white">
                            Lorem ipsum dolor sit amet
                        </h3>
                        <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                            porttitor.
                        </p>
                    </div>
                    <div class="ktq4">
                        <h3 class="pt-3 font-semibold text-lg text-white">
                            Lorem ipsum dolor sit amet
                        </h3>
                        <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                            porttitor.
                        </p>
                    </div>
                    <div class="ktq4">
                        <h3 class="pt-3 font-semibold text-lg text-white">
                            Lorem ipsum dolor sit amet
                        </h3>
                        <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            tincidunt a libero in finibus. Maecenas a nisl vitae ante rutrum
                            porttitor.
                        </p>
                    </div>
                </div>
                <div className="pt-32 pb-32 max-w-6xl mx-auto fsac4 md:px-1 px-3">
                    <div class="ktq4">
                        <h3 class="pt-3 font-semibold text-lg text-white">
                            Lorem ipsum dolor sit amet
                        </h3>
                        <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
                            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
                            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
                            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
                            odio.
                        </p>
                    </div>
                    <div class="ktq4">
                        <h3 class="pt-3 font-semibold text-lg text-white">
                            Lorem ipsum dolor sit amet
                        </h3>
                        <p class="pt-2 value-text text-md text-gray-200 fkrr1">
                            Fusce pharetra ligula mauris, quis faucibus lectus elementum vel.
                            Nullam vehicula, libero at euismod tristique, neque ligula faucibus
                            urna, quis ultricies massa enim in nunc. Vivamus ultricies, quam ut
                            rutrum blandit, turpis massa ornare velit, in sodales tellus ex nec
                            odio.
                        </p>
                    </div>
                </div>
                <section class="relative pb-24">
                    <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
                        <div class="py-24 md:py-36">
                            <h1 class="mb-5 text-6xl font-bold text-white">
                                Subscribe to our newsletter
                            </h1>
                            <h1 class="mb-9 text-2xl font-semibold text-gray-200">
                                Enter your email address and get our newsletters straight away.
                            </h1>
                            <input
                                type="email"
                                placeholder="jack@example.com"
                                name="email"
                                autocomplete="email"
                                class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-700 bg-black"
                            />{" "}
                            <a
                                class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-black transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-white"
                                href="/"
                            >
                                <span class="justify-center">Subscribe</span>
                            </a>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </>
    );
}
