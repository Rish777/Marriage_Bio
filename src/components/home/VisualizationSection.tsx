import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const VisualizationSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !inView) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = 300;
      }
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Define data pipeline elements
    const nodes = [
      { x: canvas.width * 0.1, y: canvas.height / 2, radius: 30, color: '#3B82F6', text: 'Source' },
      { x: canvas.width * 0.3, y: canvas.height / 2, radius: 40, color: '#60A5FA', text: 'Extract' },
      { x: canvas.width * 0.5, y: canvas.height / 2, radius: 40, color: '#14B8A6', text: 'Transform' },
      { x: canvas.width * 0.7, y: canvas.height / 2, radius: 40, color: '#10B981', text: 'Load' },
      { x: canvas.width * 0.9, y: canvas.height / 2, radius: 30, color: '#ef920fff', text: 'Target' }
    ];
    
    // Data particles
    const particles: {x: number; y: number; speed: number; size: number; color: string; alpha: number}[] = [];
    
    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: nodes[0].x,
        y: nodes[0].y + (Math.random() * 40 - 20),
        speed: 1 + Math.random() * 2,
        size: 2 + Math.random() * 3,
        color: '#38BDF8',
        alpha: 0.5 + Math.random() * 0.5
      });
    }
    
    // Animation variables
    let animationFrameId: number;
    
    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length; i++) {
        ctx.lineTo(nodes[i].x, nodes[i].y);
      }
      ctx.strokeStyle = '#4B5563';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Add text
        ctx.font = '14px Inter, sans-serif';
        ctx.fillStyle = '#F8FAFC';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.text, node.x, node.y);
      });
      
      // Draw and update particles
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.round(particle.alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
        
        // Update position
        particle.x += particle.speed;
        
        // Reset particles that go off screen
        if (particle.x > canvas.width + particle.size) {
          particle.x = nodes[0].x;
          particle.y = nodes[0].y + (Math.random() * 40 - 20);
          particle.alpha = 0.5 + Math.random() * 0.5;
        }
        
        // Adjust y position to curve around nodes
        const nextNodeIndex = nodes.findIndex(node => particle.x < node.x);
        if (nextNodeIndex > 0) {
          const prevNode = nodes[nextNodeIndex - 1];
          const nextNode = nodes[nextNodeIndex];
          const t = (particle.x - prevNode.x) / (nextNode.x - prevNode.x);
          
          // Slight vertical oscillation for organic movement
          const oscillation = Math.sin(particle.x / 20) * 10;
          particle.y = prevNode.y + t * (nextNode.y - prevNode.y) + oscillation;
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, [inView]);

  return (
    <section id="visualization" className="section bg-background-primary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="section-title inline-block">ETL Data Flow</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A visual representation of the Extract, Transform, Load process that forms the 
            foundation of data integration pipelines.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-background-secondary rounded-lg p-6 shadow-lg"
        >
          <div className="relative">
            <canvas ref={canvasRef} className="w-full h-[300px]"></canvas>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background-accent p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2 text-primary-400">Extract</h3>
              <p className="text-text-secondary text-sm">
                The process of retrieving data from various source systems like databases, 
                APIs, files, and legacy applications, making it available for transformation.
              </p>
            </div>
            <div className="bg-background-accent p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2 text-accent-400">Transform</h3>
              <p className="text-text-secondary text-sm">
                Data cleansing, enrichment, and restructuring to match target schemas and 
                business rules, ensuring data quality and consistency.
              </p>
            </div>
            <div className="bg-background-accent p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2 text-success-500">Load</h3>
              <p className="text-text-secondary text-sm">
                Loading transformed data into target systems like data warehouses, 
                lakes, and operational databases for analysis and reporting.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualizationSection;