"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { logout } from "@/utils/auth";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropRef = useRef(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/faq", label: "FAQ" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
  ];

  const isActive = (href) => pathname === href;

  useEffect(() => {
    // load user from localStorage on mount
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {}

    const onAuth = (e) => {
      try {
        const u =
          (e && e.detail && e.detail.user) ||
          JSON.parse(localStorage.getItem("user"));
        setUser(u || null);
      } catch (err) {
        setUser(null);
      }
    };

    window.addEventListener("authChanged", onAuth);

    const onClickOutside = (ev) => {
      if (dropRef.current && !dropRef.current.contains(ev.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);

    return () => {
      window.removeEventListener("authChanged", onAuth);
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    setDropdownOpen(false);
    router.push("/login");
  };

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/Biccas.svg"
            alt="Biccas"
            width={120}
            height={40}
            className="h-6 sm:h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  active
                    ? "text-[18px] text-black"
                    : "text-[16px] text-[#A6A6A6] hover:text-[#54BD95]"
                }`}
                style={{ lineHeight: "100%" }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {!user ? (
            <>
              <Link
                href="/login"
                className="text-gray-800 hover:text-[#54BD95] transition-colors hidden sm:block text-sm lg:text-base"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-[#54BD95] text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-[#45a882] transition-colors font-medium text-sm sm:text-base"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setDropdownOpen((s) => !s)}
                className="flex items-center gap-2 border-2 border-[#54BD95] bg-white hover:bg-[#E6F7F2] rounded-lg px-3 py-2 transition-colors shadow-sm"
              >
                <img
                  src={user.avatar || "/assets/Biccas.svg"}
                  alt={user.name || user.email}
                  className="w-8 h-8 rounded-full object-cover border-2 border-[#54BD95]"
                />
                <span className="hidden sm:block text-gray-900 font-medium text-sm">
                  {user.name || user.email}
                </span>
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border-2 border-[#54BD95] rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-[#E6F7F2] transition-colors font-medium"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-800 hover:text-[#54BD95] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden mt-4 pb-4 border-t border-gray-200"
          style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors px-2 py-2 ${
                    active
                      ? "text-[18px] text-black"
                      : "text-[16px] text-[#A6A6A6] hover:text-[#54BD95]"
                  }`}
                  style={{ lineHeight: "100%" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            {!user ? (
              <Link
                href="/login"
                className="text-[16px] text-[#A6A6A6] hover:text-[#54BD95] transition-colors px-2 py-2 sm:hidden font-medium"
                style={{ lineHeight: "100%" }}
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            ) : (
              <>
                <Link
                  href="/profile"
                  className="text-[16px] text-gray-900 hover:text-[#54BD95] transition-colors px-2 py-2 font-medium"
                  style={{ lineHeight: "100%" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="text-left text-[16px] text-red-600 hover:text-red-700 transition-colors px-2 py-2 font-medium"
                  style={{ lineHeight: "100%" }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
