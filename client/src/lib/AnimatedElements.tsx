type FlyingPaperProps = {
  position: string;
  size: string;
  rotation: string;
  delay?: string;
};

export function FlyingPaper({ position, size, rotation, delay = "" }: FlyingPaperProps) {
  return (
    <div className={`absolute ${position} flying-paper ${delay}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`${size} transform ${rotation} text-white`}>
        <path 
          fill="currentColor" 
          d="M21,5c0-2.2-1.8-4-4-4c-1.2,0-2.3,0.5-3,1.4c-0.7-0.9-1.8-1.4-3-1.4c-2.2,0-4,1.8-4,4c0,0.2,0,0.4,0.1,0.6
          c-0.1,0-0.1,0-0.2,0c-2.2,0-4,1.8-4,4c0,1.2,0.5,2.3,1.4,3c-0.9,0.7-1.4,1.8-1.4,3c0,2.2,1.8,4,4,4c0.2,0,0.4,0,0.6-0.1
          c0,0.1,0,0.1,0,0.2c0,2.2,1.8,4,4,4c1.2,0,2.3-0.5,3-1.4c0.7,0.9,1.8,1.4,3,1.4c2.2,0,4-1.8,4-4c0-0.2,0-0.4-0.1-0.6
          c0.1,0,0.1,0,0.2,0c2.2,0,4-1.8,4-4c0-1.2-0.5-2.3-1.4-3c0.9-0.7,1.4-1.8,1.4-3C21,9.8,21,9.6,20.9,9.4C21,9.4,21,9.4,21,9.4
          c2.2,0,4-1.8,4-4c0-1.2-0.5-2.3-1.4-3C20.5,2.3,20.7,3.4,21,5z"
        />
      </svg>
    </div>
  );
}
