import React from 'react'
import { profile, social } from '../content'

const iconMap = {
  GitHub: (
    <svg 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="currentColor" 
        className="w-4.5 h-4.5 shrink-0"
    >
        <g transform="translate(-140.000000, -7559.000000)">
            <g transform="translate(56.000000, 160.000000)">
                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path>
            </g>
        </g>
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor"className="w-4.5 h-4.5 shrink-0"
    >
        <path
        d="M116.504,500.219V170.654H6.975v329.564H116.504L116.504,500.219z
            M61.751,125.674c38.183,0,61.968-25.328,61.968-56.953c-0.722-32.328-23.785-56.941-61.252-56.941
            C24.994,11.781,0.5,36.394,0.5,68.722c0,31.625,23.772,56.953,60.53,56.953H61.751L61.751,125.674z
            M177.124,500.219c0,0,1.437-298.643,0-329.564H286.67v47.794h-0.727c14.404-22.49,40.354-55.533,99.44-55.533
            c72.085,0,126.116,47.103,126.116,148.333v188.971H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531
            c-30.254,0-48.284,20.38-56.202,40.08c-2.897,7.012-3.602,16.861-3.602,26.711v184.047H177.124L177.124,500.219z"
        />
    </svg>
),
  Instagram: (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5.5 h-5.5 shrink-0">
        <path 
        d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10 7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3-.7.3-1.3.9-1.5 1.6-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5 1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3-.8-.9-1.3-2.1-1.3-3.4V10 6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3.8.9 1.3 2.1 1.3 3.4V10z"
        /> 
    </svg>
  )
};

export default function Footer() {
    const handleCopy = () => {
        navigator.clipboard.writeText(profile.email);
    };

    return (
        <footer>
            <section className="flex justify-center py-18">
                <div id="contact" className="text-center space-y-9 max-w-6xl w-full mx-auto px-4">
                    <div className="space-y-4">
                        <h2 className="bg-gray-200 text-gray-600 inline-block rounded-2xl py-0.5 px-3 text-sm font-medium">Get in touch</h2>
                        <p className="text-sm md:text-base">
                            What's next? Feel free to reach out to me if you're looking for<br className="hidden md:block" />
                            a developer, have a query, or simply want to connect.
                        </p>
                    </div>

                    <div className="flex justify-center gap-3">
                        <p className="text-xl md:text-3xl font-bold">
                            {profile.email}
                        </p>

                        <div className="group relative">
                            <button onClick={handleCopy} aria-label="Copy Email">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 md:w-8 hover:scale-125 duration-200 hover:text-[var(--color-primary)] active:scale-90 cursor-pointer"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                >
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            </button>
                            <span
                                className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 px-3 rounded-lg bg-white text-black py-1 text-sm font-bold shadow-md transition-all duration-300 ease-in-out group-hover:scale-100"
                            >
                                Copy
                            </span>
                        </div>  
                    </div>

                    <div className="text-gray-400">
                        <p className="text-sm">
                            You may also find me on these platforms!
                        </p>
                    
                        <div className="mt-2 flex justify-center gap-1">
                        {social.map(({ name, link }, idx) => (
                            <a
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex justify-center items-center text-[var(--color-primary)] hover:scale-130 duration-400"
                            aria-label={name}
                            >
                            {iconMap[name]}
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-center py-2 text-sm text-gray-400">
                <p>© 2025 Tushar Rai</p>
            </section>
        </footer>
    )
}
