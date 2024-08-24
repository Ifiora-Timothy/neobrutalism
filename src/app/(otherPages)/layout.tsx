import Navbar from "@/components/Navbar";

export default function OtherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-8">{children}</div>;
}
