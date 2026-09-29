import { Linkedin, Github, Mail, Download } from "lucide-react";

const Banner = () => {
  return (
    <footer className="w-full">
      <hr className="border-t border-border" />
      <div className="flex items-center justify-between px-8 py-8">
        <div>
          <p className="text-foreground text-xs tracking-[0.2em] mb-2">Italo Rojas</p>
          <p className="text-secondary/60 text-xs tracking-[0.15em]">Audio Software · Creative Technology</p>
        </div>
        <p className="text-secondary/60 text-xs tracking-widest">2026</p>
      </div>
    </footer>
  );
};

export default Banner;
