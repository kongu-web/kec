import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const dots = [];
    const dotCount = 200;

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dots and connections
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

        ctx.beginPath();
        ctx.arc(a.x, a.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#999";
        ctx.fill();

        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(150,150,150,${0.3 * (1 - dist / 120)})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // SVG path for gear shape matching your reference image
  const createGearPath = (centerX, centerY, outerRadius, innerRadius, teeth) => {
    const toothAngle = (2 * Math.PI) / teeth;
    const toothDepth = outerRadius * 0.2;
    const toothWidth = toothAngle * 0.6;
    
    let path = '';
    
    for (let i = 0; i < teeth; i++) {
      const angle = i * toothAngle;
      const nextAngle = (i + 1) * toothAngle;
      
      // Calculate tooth positions
      const toothStartAngle = angle - toothWidth / 2;
      const toothEndAngle = angle + toothWidth / 2;
      
      // Inner arc to tooth start
      const arcStartX = centerX + Math.cos(toothStartAngle) * outerRadius;
      const arcStartY = centerY + Math.sin(toothStartAngle) * outerRadius;
      
      // Tooth outer corners
      const toothOuterStartX = centerX + Math.cos(toothStartAngle) * (outerRadius + toothDepth);
      const toothOuterStartY = centerY + Math.sin(toothStartAngle) * (outerRadius + toothDepth);
      const toothOuterEndX = centerX + Math.cos(toothEndAngle) * (outerRadius + toothDepth);
      const toothOuterEndY = centerY + Math.sin(toothEndAngle) * (outerRadius + toothDepth);
      
      // Tooth inner end
      const arcEndX = centerX + Math.cos(toothEndAngle) * outerRadius;
      const arcEndY = centerY + Math.sin(toothEndAngle) * outerRadius;
      
      if (i === 0) {
        path += `M ${arcStartX} ${arcStartY}`;
      }
      
      // Draw tooth
      path += ` L ${toothOuterStartX} ${toothOuterStartY}`;
      path += ` L ${toothOuterEndX} ${toothOuterEndY}`;
      path += ` L ${arcEndX} ${arcEndY}`;
      
      // Arc to next tooth
      if (i < teeth - 1) {
        const nextToothStartAngle = nextAngle - toothWidth / 2;
        const nextArcStartX = centerX + Math.cos(nextToothStartAngle) * outerRadius;
        const nextArcStartY = centerY + Math.sin(nextToothStartAngle) * outerRadius;
        
        const arcRadius = outerRadius;
        const largeArcFlag = (nextToothStartAngle - toothEndAngle) > Math.PI ? 1 : 0;
        
        path += ` A ${arcRadius} ${arcRadius} 0 ${largeArcFlag} 1 ${nextArcStartX} ${nextArcStartY}`;
      }
    }
    
    // Close the path
    const firstToothStartAngle = -toothWidth / 2;
    const firstArcStartX = centerX + Math.cos(firstToothStartAngle) * outerRadius;
    const firstArcStartY = centerY + Math.sin(firstToothStartAngle) * outerRadius;
    
    const finalArcRadius = outerRadius;
    const finalAngle = (teeth - 1) * toothAngle + toothWidth / 2;
    const remainingAngle = 2 * Math.PI - finalAngle - toothWidth / 2;
    const largeArcFlag = remainingAngle > Math.PI ? 1 : 0;
    
    path += ` A ${finalArcRadius} ${finalArcRadius} 0 ${largeArcFlag} 1 ${firstArcStartX} ${firstArcStartY}`;
    path += ' Z';
    
    return path;
  };

  // Component for a three-gear cluster arranged like the reference image
  const GearCluster = ({ x, y, scale = 1, rotationSpeed = 1 }) => (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      {/* Large Main Gear - Left side */}
      <g transform="translate(-40, 0)">
        <g style={{ transformOrigin: '0 0', animation: `spin ${20 / rotationSpeed}s linear infinite` }}>
          <path
            d={createGearPath(0, 0, 55, 22, 12)}
            fill="none"
            stroke="#3b3b3b"
            strokeWidth="1"
            filter="url(#gearShadow)"
          />
          <circle cx="0" cy="0" r="22" fill="white" stroke="#ddd" strokeWidth="1"/>
        </g>
      </g>

      {/* Medium Gear - Upper Right */}
      <g transform="translate(60, -25)">
        <g style={{ transformOrigin: '0 0', animation: `spin-reverse ${15 / rotationSpeed}s linear infinite` }}>
          <path
            d={createGearPath(0, 0, 40, 16, 10)}
             fill="none"
            stroke="#3b3b3b"
            strokeWidth="1"
            filter="url(#gearShadow)"
          />
          <circle cx="0" cy="0" r="16" fill="white" stroke="#ddd" strokeWidth="1"/>
        </g>
      </g>

      {/* Small Gear - Lower Right */}
      <g transform="translate(38, 53)">
        <g style={{ transformOrigin: '0 0', animation: `spin ${12 / rotationSpeed}s linear infinite` }}>
          <path
            d={createGearPath(0, 0, 28, 11, 8)}
            fill="none"
            stroke="#3b3b3b"
            strokeWidth="1"
            filter="url(#gearShadow)"
          />
          <circle cx="0" cy="0" r="11" fill="white" stroke="#ddd" strokeWidth="1"/>
        </g>
      </g>
    </g>
  );

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
      {/* Connected dots canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      />

      {/* SVG Gear Clusters */}
      <svg 
        width="100%" 
        height="100%" 
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="gearShadow">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Main Gear Clusters */}
        <GearCluster x={200} y={150} scale={1.2} rotationSpeed={1} />
        {/* <GearCluster x={800} y={200} scale={0.9} rotationSpeed={1.3} /> */}
        {/* <GearCluster x={500} y={450} scale={1.1} rotationSpeed={0.8} /> */}
        <GearCluster x={1100} y={350} scale={0.8} rotationSpeed={1.5} />
        {/* <GearCluster x={300} y={600} scale={0.7} rotationSpeed={1.2} /> */}
        {/* <GearCluster x={950} y={650} scale={1.0} rotationSpeed={0.9} /> */}
        
        {/* Additional smaller clusters for more coverage */}
        {/* <GearCluster x={50} y={400} scale={0.6} rotationSpeed={1.8} /> */}
        <GearCluster x={650} y={100} scale={0.5} rotationSpeed={2.0} />
        {/* <GearCluster x={1200} y={100} scale={0.6} rotationSpeed={1.6} /> */}
        <GearCluster x={400} y={800} scale={0.5} rotationSpeed={2.2} />
        <GearCluster x={1300} y={700} scale={0.7} rotationSpeed={1.4} />
        <GearCluster x={100} y={750} scale={0.6} rotationSpeed={1.7} />
      </svg>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;