import { ArrowRight, BookOpen, CircleCheck, Images } from "lucide-react";

    <div className="container mx-auto px-4 max-w-6xl">
      <nav className="flex gap-1 pt-6 border-b border-[#d0d0d0]" aria-label="Summer Program sections" role="tablist">
        <button role="tab" aria-selected="true" aria-controls="tabpanel-about" id="tab-about" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-t-lg border border-b-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b355f] bg-white text-[#3b355f] border-[#d0d0d0]">
          <BookOpen size={16} />
          About the Program
        </button>
        <button role="tab" aria-selected="false" aria-controls="tabpanel-gallery" id="tab-gallery" className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-t-lg border border-b-0 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b355f] bg-transparent text-[#767676] border-transparent hover:text-[#3b355f] hover:bg-white/60">
          <Images size={16} />
          Gallery
        </button>
      </nav>
      <div id="tabpanel-about" role="tabpanel" aria-labelledby="tab-about">
        <div className="py-12">
          <div className="bg-[#0057a8] text-white rounded-xl p-6 mb-10 flex flex-col md:flex-row items-start md:items-center gap-4">
            <CircleCheck size={32} className="flex-shrink-0 text-blue-200" />
            <div>
              <p className="font-bold text-base md:text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                The 2026 Summer Program Was a Success!
              </p>
              <p className="text-blue-100 text-sm mt-1 leading-relaxed">
                From July 19 to August 1, 2026, participants from across the globe gathered for two transformative weeks of learning, dialogue, and peacebuilding. We are grateful to every student, facilitator, and partner who made it possible.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">About the Program</p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#3b355f] mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Program Overview
              </h2>
              <p className="text-sm text-[#333333] leading-relaxed mb-4">
                The UNESCO Center for Peace Summer Program is an immersive two-week experience designed for students and young leaders committed to making a difference in the world. Participants engaged in workshops, seminars, field visits, and a Model UN simulation, gaining practical skills in diplomacy, peacebuilding, and intercultural communication.
              </p>
              <p className="text-sm text-[#333333] leading-relaxed mb-4">
                The program brought together participants from diverse backgrounds and countries, creating a dynamic learning environment that reflects the global community we seek to build. Through collaboration, dialogue, and shared experience, participants left with lifelong connections and a deeper commitment to peace and human rights.
              </p>
              <p className="text-sm text-[#333333] leading-relaxed">
                {"The Summer Program is a flagship initiative of the UNESCO Center for Peace, aligned with UNESCO's global mandate to build the defenses of peace in the minds of people."}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-lg border-l-4 border-[#3b355f] p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#3b355f] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Science & Technology for Peace"}
                </h3>
                <p className="text-xs text-[#333333] leading-relaxed">
                  Discover how science and technology can be harnessed as tools for peacebuilding, from environmental sustainability to health equity and digital inclusion.
                </p>
              </div>
              <div className="bg-white rounded-lg border-l-4 border-[#3b355f] p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#3b355f] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Human Rights & International Law"}
                </h3>
                <p className="text-xs text-[#333333] leading-relaxed">
                  Explore the foundations of international human rights law, the role of the UN system, and practical tools for advocacy and accountability.
                </p>
              </div>
              <div className="bg-white rounded-lg border-l-4 border-[#3b355f] p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#3b355f] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Cultural Identity & Heritage"}
                </h3>
                <p className="text-xs text-[#333333] leading-relaxed">
                  Engage with UNESCO World Heritage concepts, cultural diversity, and the role of cultural preservation in building peaceful societies.
                </p>
              </div>
              <div className="bg-white rounded-lg border-l-4 border-[#3b355f] p-5 shadow-sm">
                <h3 className="text-sm font-bold text-[#3b355f] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {"Arts & Creative Expression"}
                </h3>
                <p className="text-xs text-[#333333] leading-relaxed">
                  Use creative arts, music, visual art, storytelling, and performance as vehicles for social change, healing, and cross-cultural connection.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-[#efefef] border border-[#d0d0d0] rounded-xl p-8 text-center">
            <p className="text-xs uppercase tracking-widest text-[#767676] font-semibold mb-2">Looking Ahead</p>
            <h3 className="text-xl font-bold text-[#3b355f] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Stay Tuned for Summer Program 2027
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed max-w-xl mx-auto mb-6">
              Registration for the next cohort will open in early 2027. Sign up to be notified when applications go live and be the first to secure your spot.
            </p>
            <a href="mailto:info@ucp-usa.org" className="inline-flex items-center gap-2 bg-[#3b355f] hover:bg-[#2e2a4a] text-white font-bold text-sm px-7 py-3 rounded transition-colors">
              Get Notified{" "}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
      <div id="tabpanel-gallery" role="tabpanel" aria-labelledby="tab-gallery" hidden />
    </div>
