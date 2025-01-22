import { Navbar } from '../../components/navbar/Navbar';

export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center p-24">
      <span className="text-lg">Hola Mundo</span>
      <span className="text-8xl">{children}</span>
    </div>
    </>
  );
}