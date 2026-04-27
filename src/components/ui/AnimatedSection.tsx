import React, { ReactNode } from 'react';
import useInView from '../../hooks/useInView';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'scale-in' | 'rotate-in';
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-in-up',
  className = '',
  delay = 0
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ 
    threshold: 0.2,
    triggerOnce: true
  });

  const getTransform = () => {
    if (!isInView) {
      switch (animation) {
        case 'fade-in-up':
          return 'translate(0, 30px)';
        case 'fade-in-left':
          return 'translate(-30px, 0)';
        case 'fade-in-right':
          return 'translate(30px, 0)';
        case 'scale-in':
          return 'scale(0.9)';
        case 'rotate-in':
          return 'rotate(-10deg)';
        default:
          return 'translate(0, 0)';
      }
    }
    return 'translate(0, 0) scale(1) rotate(0)';
  };

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.8s cubic-bezier(0.26, 0.54, 0.32, 1) ${delay}s, 
                    transform 1s cubic-bezier(0.26, 0.54, 0.32, 1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;