
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your Sri Lanka travel assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const chatbotResponses: Record<string, string> = {
    default: "I'm your Sri Lanka travel assistant. Feel free to ask about places to visit, history, or travel tips!",
    greeting: "Hello! How can I assist with your Sri Lanka travel plans today?",
    history: "Sri Lanka has a rich history dating back over 3,000 years. The island was known as Ceylon during colonial times and gained independence in 1948.",
    weather: "Sri Lanka has a tropical climate. The best time to visit is between December and March for the west coast, and between April and September for the east coast.",
    currency: "The currency of Sri Lanka is the Sri Lankan Rupee (LKR). Most hotels and larger establishments accept credit cards, but it's good to have cash for smaller vendors.",
    language: "The official languages of Sri Lanka are Sinhala and Tamil. English is widely spoken in tourist areas.",
    food: "Sri Lankan cuisine is known for its complex flavors and spices. Must-try dishes include rice and curry, hoppers, kottu roti, and fresh seafood.",
    transport: "You can travel around Sri Lanka by train, bus, tuk-tuk, or hire a private driver. The train journeys through the hill country are particularly scenic.",
    beaches: "Sri Lanka has beautiful beaches all around its coastline. Unawatuna, Mirissa, Tangalle, and Trincomalee are some popular beach destinations.",
    unesco: "Sri Lanka has 8 UNESCO World Heritage Sites including the ancient cities of Polonnaruwa and Anuradhapura, the Golden Temple of Dambulla, and the Old Town of Galle.",
    safety: "Sri Lanka is generally safe for tourists. As with any destination, it's advisable to take normal precautions and respect local customs and traditions.",
    visa: "Most visitors to Sri Lanka need to obtain an Electronic Travel Authorization (ETA) before arrival. This can be done online through the official Sri Lanka ETA website.",
    accommodation: "Sri Lanka offers a range of accommodation from luxury hotels and resorts to boutique villas and budget hostels. Booking in advance is recommended during peak season.",
    elephants: "Sri Lanka is one of the best places to see elephants in the wild. You can visit national parks like Udawalawe and Minneriya for elephant safaris.",
    tea: "Sri Lanka is famous for its Ceylon tea. The central highlands, particularly around Nuwara Eliya, are home to many tea plantations that you can visit.",
    sigiriya: "Sigiriya (Lion Rock) is an ancient rock fortress with spectacular views. It features beautiful frescoes and is one of Sri Lanka's most iconic landmarks.",
    kandy: "Kandy is a cultural hub in the central highlands, home to the Temple of the Tooth Relic and the beautiful Kandy Lake.",
    galle: "Galle Fort is a UNESCO World Heritage site built by the Portuguese and later fortified by the Dutch. It's known for its colonial architecture and charming streets.",
    ella: "Ella is a picturesque hill town famous for the Nine Arch Bridge, Ella Rock, and Little Adam's Peak. The train journey from Kandy to Ella is considered one of the most beautiful in the world.",
    yala: "Yala National Park is famous for having one of the highest densities of leopards in the world. It's also home to elephants, sloth bears, and many bird species.",
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);
    
    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = generateResponse(message);
      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (userMessage: string): string => {
    const lowercased = userMessage.toLowerCase();
    
    if (lowercased.includes('hello') || lowercased.includes('hi')) {
      return chatbotResponses.greeting;
    } else if (lowercased.includes('history')) {
      return chatbotResponses.history;
    } else if (lowercased.includes('weather') || lowercased.includes('climate') || lowercased.includes('season')) {
      return chatbotResponses.weather;
    } else if (lowercased.includes('currency') || lowercased.includes('money')) {
      return chatbotResponses.currency;
    } else if (lowercased.includes('language') || lowercased.includes('speak')) {
      return chatbotResponses.language;
    } else if (lowercased.includes('food') || lowercased.includes('eat') || lowercased.includes('cuisine')) {
      return chatbotResponses.food;
    } else if (lowercased.includes('transport') || lowercased.includes('travel') || lowercased.includes('get around')) {
      return chatbotResponses.transport;
    } else if (lowercased.includes('beach')) {
      return chatbotResponses.beaches;
    } else if (lowercased.includes('unesco') || lowercased.includes('heritage')) {
      return chatbotResponses.unesco;
    } else if (lowercased.includes('safe') || lowercased.includes('safety')) {
      return chatbotResponses.safety;
    } else if (lowercased.includes('visa') || lowercased.includes('passport')) {
      return chatbotResponses.visa;
    } else if (lowercased.includes('hotel') || lowercased.includes('stay') || lowercased.includes('accommodation')) {
      return chatbotResponses.accommodation;
    } else if (lowercased.includes('elephant')) {
      return chatbotResponses.elephants;
    } else if (lowercased.includes('tea')) {
      return chatbotResponses.tea;
    } else if (lowercased.includes('sigiriya') || lowercased.includes('lion rock')) {
      return chatbotResponses.sigiriya;
    } else if (lowercased.includes('kandy')) {
      return chatbotResponses.kandy;
    } else if (lowercased.includes('galle') || lowercased.includes('fort')) {
      return chatbotResponses.galle;
    } else if (lowercased.includes('ella')) {
      return chatbotResponses.ella;
    } else if (lowercased.includes('yala') || lowercased.includes('safari') || lowercased.includes('leopard')) {
      return chatbotResponses.yala;
    }
    
    return chatbotResponses.default;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className="fixed z-50 bottom-6 right-6 rounded-full w-14 h-14 shadow-lg bg-srilanka-green hover:bg-srilanka-green/90 text-white"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed z-40 bottom-24 right-6 w-80 sm:w-96 shadow-xl animate-fade-in">
          <div className="bg-srilanka-green text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Sri Lanka Travel Assistant</h3>
            <Button variant="ghost" size="sm" className="text-white hover:bg-srilanka-green/80 p-1" onClick={toggleChat}>
              <X size={18} />
            </Button>
          </div>
          
          <ScrollArea className="h-80 p-4 bg-card">
            <div className="flex flex-col gap-3">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.sender === 'user' 
                        ? 'bg-srilanka-blue text-white' 
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-muted text-foreground">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <div className="p-3 border-t flex">
            <Input
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1 focus-visible:ring-srilanka-green"
            />
            <Button 
              onClick={handleSendMessage} 
              className="ml-2 bg-srilanka-green hover:bg-srilanka-green/90"
              disabled={!message.trim()}
            >
              <Send size={16} />
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
