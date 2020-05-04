interface ArticleCardProps {
  type: string;
  title: string;
  description: string;
  imgSrc: string;
  publishDate: string;
  readingTime: string;
}

export function ArticleCard({
  type,
  title,
  description,
  imgSrc,
  publishDate,
  readingTime,
}: ArticleCardProps) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imgSrc} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            <a href="#" className="hover:underline">
              {type}
            </a>
          </p>
          <a href="#" className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              {description}
            </p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex text-sm leading-5 text-gray-500">
            <time dateTime="2020-03-16">{publishDate}</time>
            <span className="mx-1">&middot;</span>
            <span>{readingTime} read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
