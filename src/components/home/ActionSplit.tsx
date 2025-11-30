import { siteContent } from "../../data/content";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Link } from "react-router-dom";
import { Smartphone } from "lucide-react";

export function ActionSplit() {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Left: Delivery (White) */}
      <div className="w-full md:w-1/2 bg-white p-12 md:p-24 flex flex-col items-center justify-center text-center space-y-8">
        <div className="w-24 h-24 rounded-full bg-[#FFF8E1] flex items-center justify-center text-[#D32F2F] mb-4">
          <Smartphone size={48} />
        </div>
        <h2 className="text-4xl font-black uppercase tracking-tight text-black max-w-md">
          {siteContent.actionSplit.delivery.heading}
        </h2>
        <Button
          asChild
          variant="outline"
          className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white text-lg px-10 py-6 rounded-full font-bold transition-colors"
        >
          <Link to={siteContent.actionSplit.delivery.cta.link}>{siteContent.actionSplit.delivery.cta.label}</Link>
        </Button>
      </div>

      {/* Right: Reservation (Red) */}
      <div id="reservations" className="w-full md:w-1/2 bg-[#D32F2F] p-12 md:p-24 flex flex-col justify-center text-white scroll-mt-20">
        <h2 className="text-4xl font-black uppercase tracking-tight mb-8 text-center md:text-left">
          {siteContent.actionSplit.reservation.heading}
        </h2>
        
        <form className="space-y-4 max-w-md mx-auto md:mx-0 w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider opacity-80">Date</label>
              <Input type="date" className="bg-white/10 border-transparent text-white placeholder:text-white/50 focus:bg-white/20" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider opacity-80">Time</label>
              <Input type="time" className="bg-white/10 border-transparent text-white placeholder:text-white/50 focus:bg-white/20" />
            </div>
          </div>
          
          <div className="space-y-2">
             <label className="text-sm font-bold uppercase tracking-wider opacity-80">Party Size</label>
             <Select>
              <SelectTrigger className="bg-white/10 border-transparent text-white focus:bg-white/20">
                <SelectValue placeholder="2 People" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Person</SelectItem>
                <SelectItem value="2">2 People</SelectItem>
                <SelectItem value="3">3 People</SelectItem>
                <SelectItem value="4">4 People</SelectItem>
                <SelectItem value="5">5 People</SelectItem>
                <SelectItem value="6+">6+ People</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            className="w-full bg-white text-[#D32F2F] hover:bg-[#FFF8E1] font-bold py-6 rounded-full mt-4"
            type="submit"
          >
            {siteContent.actionSplit.reservation.cta.label}
          </Button>
        </form>
      </div>
    </section>
  );
}
