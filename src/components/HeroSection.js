import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Lottie from 'lottie-react';
import phoneAnimation from '../../public/phone.json';
import phoneBackAnimation from '../../public/background/phone_back2.json';
import fullBackgroundAnimation from '../../public/background/bg4.json';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import '../styles/home.module.css'

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const appStoreRef = useRef(null);
    const playStoreRef = useRef(null);
    const phoneRef = useRef(null);
    const phoneBackRef = useRef(null);

    useEffect(() => {



        // Title animation
        gsap.fromTo(titleRef.current, { autoAlpha: 0, scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1, ease: "back.out(1.7)" });
        gsap.fromTo(titleRef.current,
            { y: 50, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top bottom", // Animation will start when the top of the element hits the bottom of the viewport
                    end: "bottom top", // Animation will end when the bottom of the element exits the top of the viewport
                    // scrub: true, // Smooth out the animation over 1 second after scroll
                    toggleActions: "play reverse play reverse",
                }
            }
        );

        gsap.fromTo(subtitleRef.current, { autoAlpha: 0, scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1, ease: "back.out(1.7)", delay: 0.3 });
        gsap.fromTo(subtitleRef.current,
            { y: 100, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: subtitleRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            }
        );

        // App store badge animation
        gsap.fromTo(appStoreRef.current, { autoAlpha: 0, x: -50}, { duration: 1, x: 0, autoAlpha: 1, delay: 0.6 });
        gsap.fromTo(appStoreRef.current,
            { x: 0, autoAlpha: 1 }, // Starting properties
            {
                duration: 1, // Define how long the animation should take
                x: -50, // Ending properties: move left by 50 pixels
                autoAlpha: 0, // Stay fully visible
                ease: "power1.out", // Smooth easing
                scrollTrigger: {
                    trigger: appStoreRef.current, // Element that triggers the animation
                    start: "top bottom", // Start when the top of the element hits the bottom of the viewport
                    end: "bottom center", // End when the bottom of the element is in the center of the viewport
                    toggleActions: "play none play none", // Play without reversing
                    scrub:true,
                    onEnter: () => console.log("Entering viewport"), // Debug: Log when element enters viewport
                    onLeave: () => console.log("Leaving viewport"), // Debug: Log when element leaves viewport
                }
            }
        );

        // Play store badge animation
        gsap.fromTo(playStoreRef.current, { autoAlpha: 0, x:50, y:-10 }, { duration: 1, x: 0, autoAlpha: 1, delay: 0.6 });
        gsap.fromTo(playStoreRef.current,
            { x: 0, autoAlpha: 1 }, // Starting properties
            {
                duration: 1, // Define how long the animation should take
                x: 50, // Ending properties: move left by 50 pixels
                autoAlpha: 0, // Stay fully visible
                ease: "power1.out", // Smooth easing
                scrollTrigger: {
                    trigger: playStoreRef.current, // Element that triggers the animation
                    start: "top bottom", // Start when the top of the element hits the bottom of the viewport
                    end: "bottom center", // End when the bottom of the element is in the center of the viewport
                    toggleActions: "play none none none", // Play without reversing
                    scrub: true,
                    onEnter: () => console.log("Entering viewport"), // Debug: Log when element enters viewport
                    onLeave: () => console.log("Leaving viewport"), // Debug: Log when element leaves viewport
                }
            }
        );
        // Phone animation
        gsap.fromTo(phoneRef.current, { autoAlpha: 0, scale: 0.5 }, { duration: 1.5, scale: 1, autoAlpha: 1, ease: "elastic.out(1, 0.3)"});

            gsap.fromTo(phoneRef.current,
                { autoAlpha: 0 },
                {
                    autoAlpha: 1,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: phoneRef.current,
                        start: "top bottom", // Animation will start when the top of the phone hits the bottom of the viewport
                        end: "bottom top", // Animation will end when the bottom of the phone exits the top of the viewport
                        toggleActions: "play none none none", // Only play the animation when the start point is reached
                    }
                }
            );

        // Phone background animation
        gsap.fromTo(phoneBackRef.current, { autoAlpha: 0, scale: 0.5 }, { duration: 1.5, scale: 1, autoAlpha: 1, ease: "elastic.out(1, 0.3)", delay: 1.2 });
        gsap.fromTo(phoneBackRef.current,
            { x: 0, autoAlpha: 1 },
            {
                x: 50, // Move to the right
                autoAlpha: 0,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: phoneBackRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                }
            }
        );
    }, []);


    return (
        <div className="relative py-12 px-20 overflow-hidden bg-[#EFB495] mx-10 my-8 rounded-[2rem]">
            {/* Full Lottie background animation */}
            <div className="absolute inset-0 z-0">
                {/* <Lottie animationData={fullBackgroundAnimation} style={{ width: '100%', height: '100%' }} /> */}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                {/* Title and subtitle on the left */}
                <div className="flex-1 mb-6 md:mb-0 p-8">
                    {/* Updated Subtitle */}
                    <p ref={subtitleRef} className="text-[2em] font-semibold text-white mb-2">Ahead app</p>
                    {/* Updated Main title */}
                    <h1 ref={titleRef} className="text-[5em] md:text-[7em] font-extrabold leading-tighter text-white mb-8">
                        Master your life by mastering emotions
                    </h1>
                    <div className="flex">
                        <div id="apple" ref={appStoreRef}>
                            <Image src="/apple.svg" alt="App Store" width={120} height={40} />
                        </div>
                        <div ref={playStoreRef}>
                            <Image src="/google-play-badge.png" alt="Play Store" width={150} height={45} />
                        </div>
                    </div>
                </div>

                {/* Phone and phone background Lottie animation container */}
                <div className="flex-1 relative">
                    {/* Phone background Lottie animation */}
                    <div ref={phoneBackRef} className="absolute inset-0 z-0">
                        <Lottie animationData={phoneBackAnimation} style={{ width: '100%', height: '100%' }} />
                    </div>
                    {/* Phone Lottie animation */}
                    <div ref={phoneRef} className="relative z-10">
                        <Lottie animationData={phoneAnimation} style={{ width: '100%', height: 'auto' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
