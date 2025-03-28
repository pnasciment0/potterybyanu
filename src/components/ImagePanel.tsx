// components/ImagePanel.tsx
export default function ImagePanel() {
    return (
        <div className="flex space-x-0.5">
            <img 
                src="/images/image1.jpg" 
                alt="Image 1" 
                className="max-h-[475px] w-full object-cover"
            />
            <img 
                src="/images/image2.jpg" 
                alt="Image 2" 
                className="max-h-[475px] w-full object-cover" 
            />
            <img 
                src="/images/image3.jpg" 
                alt="Image 3" 
                className="max-h-[475px] w-full object-cover"
            />
        </div>
    );
  }
  