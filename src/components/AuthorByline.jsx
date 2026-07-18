import { AUTHOR } from '@/lib/author';

/**
 * Minimal circular author byline with gold outline.
 * size: 'sm' (cards) | 'md' (article header / journal)
 */
export default function AuthorByline({
  publishedAt,
  readingTimeMins,
  size = 'md',
  className = '',
}) {
  const dim = size === 'sm' ? 'w-7 h-7' : 'w-11 h-11';
  const text = size === 'sm' ? 'text-[8px]' : 'text-[10px]';

  const meta = [AUTHOR.name];
  if (publishedAt) meta.push(publishedAt);
  if (readingTimeMins != null) meta.push(`${readingTimeMins} min${size === 'sm' ? '' : ' read'}`);

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={AUTHOR.photoUrl}
        alt={AUTHOR.photoAlt}
        width={size === 'sm' ? 28 : 44}
        height={size === 'sm' ? 28 : 44}
        className={`${dim} rounded-full object-cover object-center border-2 border-[var(--hw-gold)] flex-shrink-0`}
      />
      <div className={`font-mono ${text} tracking-[0.15em] uppercase text-[var(--hw-ink3)]`}>
        {meta.join(' · ')}
      </div>
    </div>
  );
}
