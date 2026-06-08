type ShareButtonsProps = {
  title: string;
  url: string;
};

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const links = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      name: "Twitter / X",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    },
    {
      name: "LinkedIn",
      href: `https://linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 border-t border-black/10 pt-8">
      <span className="text-sm font-semibold text-[#0A0A0A]">Compartir este artículo:</span>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black/70 transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
