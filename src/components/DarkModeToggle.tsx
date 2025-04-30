
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  const { toast } = useToast();

  const handleToggle = () => {
    toggleDarkMode();
    toast({
      title: isDarkMode ? "Light mode activated" : "Dark mode activated",
      description: isDarkMode ? "Switched to light mode theme" : "Switched to dark mode theme",
      duration: 2000,
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <div className="bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 shadow-lg flex items-center gap-2">
        <Sun size={18} className={`transition-opacity ${isDarkMode ? 'opacity-50' : 'text-srilanka-orange'}`} />
        <Switch 
          checked={isDarkMode} 
          onCheckedChange={handleToggle} 
          className="data-[state=checked]:bg-srilanka-blue data-[state=unchecked]:bg-srilanka-orange"
        />
        <Moon size={18} className={`transition-opacity ${isDarkMode ? 'text-srilanka-blue' : 'opacity-50'}`} />
      </div>
    </div>
  );
};

export default DarkModeToggle;
