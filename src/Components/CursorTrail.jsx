import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CursorTrail = () => {
  const svgRef = useRef(null);
  const numPoints = 8;
  const [points] = useState(
    Array.from({ length: numPoints }, () => ({ x: window.innerWidth / 2, y: window.innerHeight / 2 }))
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      points[0] = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      for (let i = 1; i < numPoints; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.25;
        points[i].y += (points[i - 1].y - points[i].y) * 0.25;
      }

      const pathData = generatePath(points);
      svgRef.current.setAttribute('d', pathData);
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [points]);

  const generatePath = (pts) => {
    const path = [`M${pts[0].x},${pts[0].y}`];
    for (let i = 1; i < pts.length - 1; i++) {
      const xc = (pts[i].x + pts[i + 1].x) / 2;
      const yc = (pts[i].y + pts[i + 1].y) / 2;
      path.push(`Q${pts[i].x},${pts[i].y},${xc},${yc}`);
    }
    return path.join(' ');
  };

  return (
    <svg
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '100vw',
        height: '100vh',
      }}
    >
      <path
        ref={svgRef}
        fill="none"
        stroke="purple"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CursorTrail;
