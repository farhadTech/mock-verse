import { useMemo } from "react";
import { dailyQuotes } from "../../data/quotes";

const DailyQuote = () => {
  const quote = useMemo(() => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    // Create a deterministic number based on today's date.
    // Therefore everyone sees the same quote for that day.
    const dateNumber = year * 10000 + (month + 1) * 100 + day;

    const index = dateNumber % dailyQuotes.length;

    return dailyQuotes[index];
  }, []);

  return (
    <div className="relative mt-16 overflow-hidden border-y border-slate-200/70 bg-white/40 py-4 backdrop-blur-sm">
      <div className="flex w-max animate-[quoteSlide_22s_linear_infinite] items-center whitespace-nowrap">
        <QuoteContent quote={quote.quote} author={quote.author} />
        <QuoteContent quote={quote.quote} author={quote.author} />
        <QuoteContent quote={quote.quote} author={quote.author} />
      </div>
    </div>
  );
};

interface QuoteContentProps {
  quote: string;
  author: string;
}

const QuoteContent = ({ quote, author }: QuoteContentProps) => {
  return (
    <div className="flex items-center px-10">
      <span className="mr-5 text-lg font-medium text-purple-600">
        “
      </span>

      <span className="text-sm font-medium text-slate-600 sm:text-base">
        {quote}
      </span>

      <span className="mx-4 text-orange-500">•</span>

      <span className="text-sm font-semibold text-slate-900">
        {author}
      </span>

      <span className="mx-10 text-purple-400">✦</span>
    </div>
  );
};

export default DailyQuote;
