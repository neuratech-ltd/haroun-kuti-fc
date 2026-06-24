import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const FooterLink = ({
  href = "#",
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-sm text-white hover:text-green-300 transition-colors duration-150"
  >
    {children}
  </a>
);

const SocialButton = ({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) => (
  <Button
    variant="outline"
    size="icon"
    aria-label={label}
    className="w-9 h-9 rounded-full border-green-600 text-green-300 hover:bg-green-700 hover:text-white hover:border-green-500 bg-transparent"
  >
    {icon}
  </Button>
);

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white rounded-t-[3rem]">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-800 border-2 border-green-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-xs tracking-wide">
                  HKFC
                </span>
              </div>
              <div>
                <p className="font-black text-white text-lg leading-tight">
                  Harun Kuti FC
                </p>
                <p className="text-white text-xs">Est. 2010</p>
              </div>
            </div>
            <p className="text-white-200 text-sm leading-relaxed mb-5">
              A community football club dedicated to training young players,
              building skills, and competing in tournaments across the region.
            </p>
            {/* Social icons */}
            <div className="flex gap-2">
              <SocialButton
                label="Facebook"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                }
              />
              <SocialButton
                label="Instagram"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                }
              />
              <SocialButton
                label="YouTube"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="#1a3d08"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                "Home",
                "About us",
                "Programs",
                "News & updates",
                "Contact us",
              ].map((link) => (
                <li key={link} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white-500 shrink-0" />
                  <FooterLink>{link}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our programs
            </h3>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Junior Academy", badge: "Ages 6–12" },
                { label: "Youth Training", badge: "Ages 13–17" },
                { label: "Senior Squad", badge: "18+" },
                { label: "Weekend Coaching", badge: null },
                { label: "Tournament Teams", badge: null },
              ].map(({ label, badge }) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white-500 shrink-0" />
                  <FooterLink>{label}</FooterLink>
                  {badge && (
                    <Badge
                      variant="outline"
                      className="text-[10px] px-1.5 py-0 border-white-600 text-white ml-1"
                    >
                      {badge}
                    </Badge>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Newsletter + Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Stay updated
            </h3>
            <p className="text-green-200 text-sm mb-3">
              Get match results, training schedules and club news.
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white border-green-700 text-white placeholder:text-green-500 text-sm h-9 focus-visible:ring-green-500"
              />
              <Button className="bg-green-500 hover:bg-green-400 text-green-950 font-semibold text-sm h-9 px-4 shrink-0">
                Join
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="tel:+8801700000000"
                className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.76a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.76 16.92z" />
                </svg>
                +880 1700-000000
              </a>
              <a
                href="mailto:info@greenfieldsfc.com"
                className="flex items-center gap-2 text-sm text-green-200 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@greenfieldsfc.com
              </a>
              <div className="flex items-center gap-2 text-sm text-green-200">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Greenfields Village, Dhaka
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-green-800" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-400 text-xs">
            © {new Date().getFullYear()} Greenfields FC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-xs text-green-400 hover:text-green-200 transition-colors"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-xs text-green-400 hover:text-green-200 transition-colors"
            >
              Terms of use
            </a>
            <a
              href="#"
              className="text-xs text-green-400 hover:text-green-200 transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
