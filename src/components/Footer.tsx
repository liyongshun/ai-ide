import Link from "next/link";
import { NAVIGATION } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {NAVIGATION.footer.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <div className="text-xl font-bold text-white mr-2">AI IDE</div>
            <span className="mx-2 h-4 w-px bg-gray-700" aria-hidden="true" />
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} 保留所有权利
            </p>
          </div>
          <p className="mt-2 text-xs text-gray-500 text-center md:text-left">
            专业开发者的智能编程助手
          </p>
        </div>
      </div>
    </footer>
  );
} 