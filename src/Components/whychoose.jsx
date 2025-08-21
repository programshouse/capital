

import React, { useEffect, useMemo, useRef, useState } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { root: null, rootMargin, threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect()
  }, [ref, rootMargin]);

  return isIntersecting;
}

function useCountUp(targetValue, durationMs, start) {
  const [currentValue, setCurrentValue] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let animationFrameId = 0;

    if (start) {
      setCurrentValue(0);
      startTimeRef.current = null;

      const step = (timestamp) => {
        if (startTimeRef.current === null) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrentValue(Math.floor(eased * targetValue));
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    } else {
      setCurrentValue(0); // reset when leaving
      startTimeRef.current = null;
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [start, targetValue, durationMs]);

  return useMemo(() => currentValue.toLocaleString(), [currentValue]);
}

export default function WhyChoose() {
  const sectionRef = useRef(null);
  const inView = useOnScreen(sectionRef, "-100px");

  const clients = useCountUp(9999, 1500, inView);
  const projects = useCountUp(9999, 1500, inView);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-cover bg-center py-16 relative"
      style={{ backgroundImage: "url('/assets/carousel-2.jpg')" }}
    >
      {/* Overlay shading */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative mx-auto w-[95%] max-w-7xl flex flex-col md:flex-row">
        {/* Right side text & stats */}
        <div className="w-full md:w-3/5 flex flex-col gap-6 text-right bg-black/70 p-6 rounded shadow-lg md:ml-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white text-start ">
            WHY YOU SHOULD CHOOSE OUR WELDING SERVICES
          </h2>
          <p className="mt-5 max-w-full md:max-w-xl text-neutral-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue,
            iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor,
            malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.
          </p>

          {/* Stats next to each other or stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded border-2 border-yellow-600 p-6 text-center bg-black/60">
              <div className="text-4xl md:text-5xl font-extrabold text-white">{clients}</div>
              <div className="mt-2 tracking-widest text-sm text-neutral-300">
                SATISFIED CLIENTS
              </div>
            </div>
            <div className="rounded border-2 border-yellow-600 p-6 text-center bg-black/60">
              <div className="text-4xl md:text-5xl font-extrabold text-white">{projects}</div>
              <div className="mt-2 tracking-widest text-sm text-neutral-300">
                COMPLETE PROJECTS
              </div>
            </div>
          </div>

          {/* Progress bars */}
          <div className="rounded border-2 border-yellow-600 p-6 flex flex-col gap-4 bg-black/60">
            <Progress label="EXPERIENCE" value={90} active={inView} />
            <Progress label="WORK DONE" value={95} active={inView} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Progress({ label, value, active }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm text-neutral-200">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded bg-neutral-800">
        <div
          className="h-full bg-yellow-500 transition-[width] duration-1000 ease-out"
          style={{ width: active ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

