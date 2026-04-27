import React from 'react';

interface DataPoint {
  label: string;
  value: number;
}

interface DataVisualizerProps {
  data: DataPoint[];
  title?: string;
  type: 'bar' | 'pipeline';
  className?: string;
}

const DataVisualizer: React.FC<DataVisualizerProps> = ({ 
  data, 
  title, 
  type,
  className = '' 
}) => {
  // Find the maximum value for proper scaling
  const maxValue = Math.max(...data.map(item => item.value));
  
  if (type === 'bar') {
    return (
      <div className={`${className}`}>
        {title && <h3 className="text-xl font-semibold mb-4 text-blue-light">{title}</h3>}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-white">{item.label}</span>
                <span className="text-mint">{item.value}%</span>
              </div>
              <div className="h-2 bg-navy-dark rounded-full overflow-hidden">
                <div 
                  className="skill-bar-fill"
                  style={{ 
                    width: `${item.value}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (type === 'pipeline') {
    return (
      <div className={`${className}`}>
        {title && <h3 className="text-xl font-semibold mb-6 text-blue-light">{title}</h3>}
        <div className="relative">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center mb-8 relative"
            >
              {/* Pipeline node */}
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center z-10
                ${index === 0 ? 'bg-blue-light' : index === data.length - 1 ? 'bg-mint' : 'bg-navy'}
              `}>
                <span className="text-white font-medium">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className="ml-4 bg-navy p-4 rounded-lg flex-1">
                <h4 className="font-medium text-white">{item.label}</h4>
                <div className="mt-2 h-1 data-flow-line w-full"></div>
              </div>
              
              {/* Connector line */}
              {index < data.length - 1 && (
                <div className="absolute top-12 left-6 w-0.5 h-8 bg-gray-700 z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return null;
};

export default DataVisualizer;