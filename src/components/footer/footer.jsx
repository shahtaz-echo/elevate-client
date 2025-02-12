import { Facebook, Github, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="wrapper mt-8">
      <div className="card flbx">
        <div>
          <h2 className="dark:text-lime-500">#Elevate</h2>
          <p className="max-w-2xl mt-2 text-sm dark:text-white/60">
            Elevate is a self learning platform to help you learn by yourself
            with the help of trained AI model suggestion to make module plan,
            track your learning progress and quiz you, help you prepare notes
            and documentation
          </p>
        </div>
        <div>
          <div className="flx gap-5 text-sm">
            <Link
              href="/privacy-policy"
              className="dark:hover:text-lime-500 tr"
            >
              Privacy Policy
            </Link>
            <Link
              href="/career/contribute"
              className="dark:hover:text-lime-500 tr"
            >
              Contribute
            </Link>
            <Link href="/support" className="dark:hover:text-lime-500 tr">
              Support
            </Link>
          </div>

          <Link
            href="/support"
            className="dark:text-white/60 text-black/60 mt-6 block flx gap-2 justify-end text-[13px]"
          >
            <Mail className="h-3.5 w-3.5" />
            support@elevate.com
          </Link>
          <div className="flx justify-end mt-4 gap-4">
            <Facebook className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
            <Github className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
