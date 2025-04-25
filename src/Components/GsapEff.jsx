import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";


gsap.registerEffect({
  name: "pulse",
  effect(targets, config) {
    return gsap.fromTo(
      targets,
      { scale: 1 },
      {
        scale: 1.2,
        repeat: 1,
        yoyo: true,
        duration: 0.4,
        ease: "power1.inOut",
        ...config,
      }
    );
  },
});

gsap.registerEffect({
  name: "shake",
  effect(targets, config) {
    return gsap.fromTo(
      targets,
      { x: 0 },
      {
        x: () => (Math.random() > 0.5 ? 10 : -10),
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "power1.inOut",
        ...config,
      }
    );
  },
});

gsap.registerEffect({
  name: "spin",
  effect(targets, config) {
    return gsap.to(targets, {
      rotation: "+=360",
      ease: "power1.inOut",
      duration: 0.8,
      ...config,
    });
  },
});

export default function GsapEffect({ children, effect = "pulse", trigger = "hover" }) {
  const targetRef = useRef(null);

  useLayoutEffect(() => {
    const el = targetRef.current;

    if (!gsap.effects[effect]) return;

    const runEffect = () => {
      gsap.effects[effect](el);
    };

    if (trigger === "hover") {
      el.addEventListener("mouseenter", runEffect);
      return () => el.removeEventListener("mouseenter", runEffect);
    }

    if (trigger === "click") {
      el.addEventListener("click", runEffect);
      return () => el.removeEventListener("click", runEffect);
    }

    if (trigger === "auto") {
      runEffect();
    }
  }, [effect, trigger]);

  return <div ref={targetRef}>{children}</div>;
}
